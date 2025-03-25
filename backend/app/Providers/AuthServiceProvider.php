<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Guards\CustomSessionGuard;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Auth;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        Auth::extend(
            'custom_session',
            function ($app, $name, $config) {
                return new CustomSessionGuard(
                    $name,
                    Auth::createUserProvider($config['provider']),
                    $app['session.store'],
                    $app['request']
                );
            }
        );
    }
}
