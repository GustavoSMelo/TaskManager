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
            return UserModel::find($request->user()->currentAccessToken->tokenable->id);
        } catch (Exception $e) {
            return response()->json([
                'error' => 'this user dont have any task registred'
            ]);
        }
    }

    public function store (Request $request) {

        $days_tasks = TaskModel::where('week_days', $request->input('week_days'));

        foreach ($days_tasks as $task) {
            if($request->input('week_days') >= $task->start_at && $request->input('week_days') <= $task->end_at) {
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

    public function update(){

    }

    public function delete(){
        
    }
}
