<?php

use App\Http\Controllers\PerfilController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::middleware(['auth:sanctum'])->group(function(){
    //aqui rutas protegidas
    Route::prefix('perfiles')->group(function(){
        Route::get('/',[PerfilController::class,'get']);
        Route::post('/',[PerfilController::class,'create']);    
    });
    Route::get('auth/logout',[AuthController::class,'logout']);
});
Route::post('auth/register',[AuthController::class,'create']);
Route::post('auth/login',[AuthController::class,'login']);
Route::prefix('users')->group(function(){
    Route::get('/',[UserController::class,'getAll']);
    Route::get('/{idPerfil}',[UserController::class,'getAllByIdPerfil']);
    Route::get('/one/{id}',[UserController::class,'getOneById']);
    Route::post('/',[UserController::class,'create']);
    Route::put('/{id}',[UserController::class,'update']);
    Route::delete('/{id}',[UserController::class,'delete']);
});

