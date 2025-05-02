<?php

namespace App\Providers;

use App\Session\CustomDatabaseSessionHandler;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;
use App\Services\RakutenGora\RakutenGoraService; // 追記
use App\Services\RakutenGora\RakutenGoraServiceInterface; // 追記

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
        Session::extend('database', function (Application $app) {
            $connection = $app->make('db')->connection();
            $table = config('session.table');
            $minutes = config('session.lifetime');

            return new CustomDatabaseSessionHandler(
                $connection,
                $table,
                $minutes,
            );
        });
        $this->app->bind(RakutenGoraServiceInterface::class, RakutenGoraService::class);
    }
}
