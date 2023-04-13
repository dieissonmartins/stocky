<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

//------------------------------------------------------------------\\

Route::post('/login', ['uses' => 'Auth\LoginController@login', 'middleware' => 'Is_Active']);
Route::get('password/find/{token}', 'PasswordResetController@find');

//------------------------------------------------------------------\\

Route::group(['middleware' => ['auth', 'Is_Active']], function () {

    Route::get('/login', function () {
        return redirect('/login');
    });

    Route::get('/{vue?}', function () {
            return view('layouts.master');
    })->where('vue', '^(?!api|setup|update|password).*$');

});

Auth::routes([
    'register' => false,
]);