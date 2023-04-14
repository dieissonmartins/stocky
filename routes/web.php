<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

//------------------------------------------------------------------\\

Route::get('password/find/{token}', 'PasswordResetController@find');

#Route::post('/login', ['uses' => 'Auth\LoginController@login', 'middleware' => 'Is_Active']);

Route::post('/token', [AuthController::class, 'token']);
Route::post('/login', [AuthController::class, 'token']);

//------------------------------------------------------------------\\

if (AuthController::hasCookieByRoute('_AUTH_TOKEN')) {
    Route::get('/{vue?}', function () {
        return view('layouts.master');
    })->where('vue', '^(?!api|setup|update|password).*$');
} else {
    Route::get('/', function () {
        return redirect('/login');
    });
}

Auth::routes(['register' => false]);