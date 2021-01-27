<?php

namespace App\Http\Controllers;

use App\Models\PersonalAccessTokensModel;
use App\Models\UserModel;
use Exception;
use Illuminate\Http\Request;
use Laravel\Sanctum\PersonalAccessToken;

class UserController extends Controller
{

    public function store (Request $request) {

        try {
            
            /*$request->validate([
                'name' => 'alpha_num|max:255|min:6',
                'email' => 'alpha_num|max:255|min:6|email',
                'password' => 'alpha_num|max:255|min:6'
            ]);*/
    
            $user = new UserModel();
                
            $password_hash = password_hash($request->input('password'), PASSWORD_DEFAULT);

            $user->name = $request->input('name');
            $user->email = $request->input('email');
            $user->password = $password_hash;
            
            $email = new EmailController($user->email, $user->name);
            $email->post();
            
            $user->save();

            return response()->json([
                'message' => 'user created with success'
            ]);

        } catch (Exception $err) {
            return response()->json([
                'message' => 'some field is missing or is invalid, please try again '.$err 
            ], 400);
        }
    }

    public function show (int $id) {
        
        try {

            $user = UserModel::find($id)->first();

            $token = PersonalAccessTokensModel::where('tokenable_id', $id)->first();

            if ($token) {
                return $user;
            }

        } catch (Exception $err) {
            return response()->json([
                'error' => 'this user not founded'
            ], 401);
        }

    } 

    public function update () {

    }
}
