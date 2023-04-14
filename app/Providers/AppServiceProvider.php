<?php

namespace App\Providers;

use Illuminate\Pagination\Paginator;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if (env('APP_ENV') !== 'local') {
            $this->app['request']->server->set('HTTPS', true);
        }

        Schema::defaultStringLength(191);
        Paginator::useBootstrap();

        setlocale(LC_TIME, 'pt-br');

        Schema::defaultStringLength(191);
    }
}
