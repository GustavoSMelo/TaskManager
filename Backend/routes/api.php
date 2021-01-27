<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\VerifyEmailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('user')->group(function () {
    
    Route::post('/', [UserController::class, 'store']);

    Route::get('/{id}', [UserController::class, 'show'])->middleware('auth:sanctum');

});

Route::prefix('auth')->group(function () {

    Route::post('/', [LoginController::class, 'store']);

    Route::delete('/', [LoginController::class, 'destroy']);
    
});

Route::get('/verify/email/{email}', [VerifyEmailController::class, 'store']);

Route::middleware('auth:sanctum')->get('/test', function () {
    return response()->json([
        'message' => 'hello world'
    ]);
});
