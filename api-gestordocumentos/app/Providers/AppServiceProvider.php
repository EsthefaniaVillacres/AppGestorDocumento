<?php

namespace App\Providers;

use App\Services\DesencriptadorService;
use App\Services\EncriptadorService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(EncriptadorService::class,function($app){
            return new EncriptadorService();
        });
        $this->app->singleton(DesencriptadorService::class,function($app){
            return new DesencriptadorService();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
