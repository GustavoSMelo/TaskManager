<?php

namespace App\Http\Controllers;

use App\Models\UserModel;
use Exception;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function store (Request $request) {

        try {

            $user = UserModel::where('email', $request->input('email'))->first();

            if($user !== null || $user !== []){
                if(password_verify($request->input('password'), $user->password) && ($user->email_verified !== null && $user->email_verified !== 0 && $user->email_verified !== false)) {

                    $user->tokens()->delete();

                    $token = $user->createToken('Auth-User', ['user'])->plainTextToken;

                    return response()->json([
                        'token' => $token,
                    ]);

                } else {
                    return response()->json([
                        'error' => 'Please, verify you email or your password'
                    ], 400);
                }
            } else {
                return response()->json([
                        'error' => 'user not found'
                ], 400);
            }
        } catch (Exception $e) {
            return response()->json([
                'error' => 'this user does not exists'
            ], 400);
        }

    }

    public function delete (int $id) {

        try {

            $user = UserModel::find($id)->first();

            $user->tokens()->delete();

            return response()->json([
                'message' => 'good bye, please, return again soon :) '
            ]);
        } catch (Exception $err) {
            return response()->json([
                'error' => 'this user dont have access to do logout'
            ]);
        }

    }
}
