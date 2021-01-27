<?php

namespace App\Http\Controllers;

use App\Models\UserModel;
use Illuminate\Http\Request;

class VerifyEmailController extends Controller
{
    public function store ($email) {

        $user = UserModel::where('email', $email)->first();

        $user->email_verified = true;

        $user->save();

        return response()->json([
            'message' => 'email verified with success '
        ]);

    }
}
