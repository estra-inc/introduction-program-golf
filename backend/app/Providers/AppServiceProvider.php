<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\RakutenGora\RakutenGoraServiceInterface;
use App\Services\RakutenGora\RakutenGoraService;
use Illuminate\Support\Facades\Session;
use Illuminate\Foundation\Application;
use App\Session\CustomDatabaseSessionHandler;
use Laravel\Sanctum\Sanctum;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->app->bind(RakutenGoraServiceInterface::class, RakutenGoraService::class);

        Session::extend('database', function (Application $app) {
            $connection = $app->make('db')->connection();
            $table = config('session.table');
            $minutes = config('session.lifetime');

            return new CustomDatabaseSessionHandler($connection, $table, $minutes);
        });
    }
}
