<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\VerifyEmailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\TaskController;

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

    Route::get('/', [UserController::class, 'show'])->middleware(['auth:sanctum', 'verify.token']);

    Route::put('/', [UserController::class, 'update'])->middleware(['auth:sanctum', 'verify.token']);

});

Route::prefix('auth')->group(function () {

    Route::post('/', [LoginController::class, 'store']);

    Route::delete('/', [LoginController::class, 'destroy']);
    
});

Route::get('/verify/email/{email}', [VerifyEmailController::class, 'store']);

Route::middleware(['auth:sanctum', 'verify.token'])->prefix('task')->group(function () {
    Route::post('/', [TaskController::class, 'store']);

    Route::get('/', [TaskController::class, 'index']);

    Route::get('/{id}', [TaskController::class, 'show']);

    Route::put('/{id}', [TaskController::class, 'update']);

    Route::delete('/{id}', [TaskController::class, 'destroy']);
}); 
