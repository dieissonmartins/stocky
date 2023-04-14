<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

//------------------------------------------------------------------\\

Route::post('/login', ['uses' => 'Auth\LoginController@login', 'middleware' => 'Is_Active']);
Route::get('password/find/{token}', 'PasswordResetController@find');

Route::post('token', [AuthController::class, 'token']);

//------------------------------------------------------------------\\

if (AuthController::hasCookieByRoute('_AUTH_TOKEN')) {
    Route::get('/{vue?}', function () {
        return view('layouts.master');
    })->where('vue', '^(?!api|setup|update|password).*$');
}

Auth::routes(['register' => false]);