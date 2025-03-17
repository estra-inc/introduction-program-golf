<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\RakutenGora\RakutenGoraServiceInterface;
use App\Services\RakutenGora\RakutenGoraService;

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
    }
}
