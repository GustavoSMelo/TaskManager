<?php

namespace App\Http\Controllers;

use App\Models\TaskModel;
use App\Models\UserModel;
use Exception;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index(Request $request) {
        try {

            $tasks = TaskModel::where('user_id', $request->user()->currentAccessToken()->tokenable->id)->get();

            $all_tasks = [];

            for ($i = 0; $i < count($tasks); $i++) {
                if($tasks[$i]->week_days === $request->header('day')) {
                    array_push($all_tasks, $tasks[$i]);
                }
            }

            return $all_tasks;

        } catch (Exception $e) {
            return response()->json([
                'error' => 'this user dont have any task registred '
            ]);
        }
    }

    public function store (Request $request) {

        $days_tasks = TaskModel::where('week_days', $request->input('week_days'))->get();

        foreach ($days_tasks as $task) {

            if (floatval($request->input('start_at')) >= floatval($task->start_at)
            && floatval($request->input('start_at')) < floatval($task->end_at)) {

                return response()->json([
                    'error' => 'you already have a task in this period'
                ], 400);
            }

            else if (floatval($request->input('end_at')) > floatval($task->start_at)
            && floatval($request->input('end_at')) <= floatval($task->end_at)) {

                return response()->json([
                    'error' => 'you already have a task in this period'
                ], 400);

            }
        }

        $newTask = new TaskModel();

        $newTask->name = $request->input('name');
        $newTask->description = $request->input('description');
        $newTask->user_id = $request->user()->currentAccessToken()->tokenable->id;
        $newTask->start_at = $request->input('start_at');
        $newTask->end_at = $request->input('end_at');
        $newTask->week_days = $request->input('week_days');

        $newTask->save();

        return response()->json([
            'message' => 'task created with success'
        ]);
    }

    public function show (int $id){

        return TaskModel::where('id', $id)->first();

    }

    public function update (Request $request, int $id) {

        $task = TaskModel::where('id', $id)->first();
        $allDayTask = TaskModel::where('week_days', $request->input('week_days'))->get();

        foreach ($allDayTask as $tasks) {

            if (floatval($request->input('start_at')) >= floatval($tasks->start_at) &&
            floatval($request->input('start_at')) < floatval($tasks->end_at)) {

                return response()->json([
                    'error' => 'Already have a task in this period'
                ], 400);
            }

            else if (floatval($request->input('end_at')) > floatval($tasks->start_at) &&
            floatval($request->input('end_at') <= floatval($tasks->end_at))) {

                return response()->json([
                    'error' => 'Already have a task in this period'
                ], 400);
            }

            else {

                $task->name = $request->input('name');
                $task->description = $request->input('description');
                $task->user_id = $request->user()->currentAccessToken()->tokenable->id;
                $task->start_at = $request->input('start_at');
                $task->end_at = $request->input('end_at');
                $task->week_days = $request->input('week_days');

                $task->save();

                return response()->json([
                    'message' => 'task created with success '
                ]);
            }
        }

    }

    public function destroy (int $id) {

        try {
            $task = TaskModel::where('id', $id)->first();

            $task->delete();

            return response()->json([
                'message' => 'Task deleted with success'
            ]);
        } catch (Exception $err) {

            return response()->json([
                'error' => 'this task does not exists'
            ], 400);

        }

    }
}
