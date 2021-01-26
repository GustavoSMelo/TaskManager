<?php

namespace App\Http\Controllers;

use App\Mail\WelcomeEmail;
use Illuminate\Support\Facades\Mail;
use stdClass;

class EmailController extends Controller
{

    private string $email;
    private string $name;

    public function __construct(string $email, string $name) {
        $this->email = $email;
        $this->name = $name;
    }

    public function post () {
        $user = new stdClass();

        $user->email = $this->email;
        $user->name = $this->name;

        Mail::send(new WelcomeEmail($user));
    }
}
