<?php

use App\Http\Controllers\PerfilController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CareerController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FacultyController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TemplateController;
use App\Http\Controllers\ManageFacultyController;
use App\Http\Controllers\ManageCareerController;
use App\Http\Controllers\PermissionFolderController;
use App\Http\Controllers\PermissionTemplateController;
use App\Http\Controllers\StudentCareerController;
use App\Http\Controllers\TemplateCareerController;
use App\Http\Controllers\ManageFileController;
use App\Models\Career;
use App\Models\TemplateCab;
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

Route::get('auth/logout', [AuthController::class, 'logout']);
Route::post('auth/register', [AuthController::class, 'create']);
Route::post('auth/login', [AuthController::class, 'login']);
Route::middleware(['auth:sanctum'])->group(function () {
    //aqui rutas protegidas
    Route::prefix('perfiles')->group(function () {
        Route::get('/', [PerfilController::class, 'get']);
        Route::post('/', [PerfilController::class, 'create']);
    });
    Route::prefix('users')->group(function () {
        Route::get('/', [UserController::class, 'getAll']);
        Route::get('/{idPerfil}', [UserController::class, 'getAllByIdPerfil']);
        Route::get('/one/{id}', [UserController::class, 'getOneById']);
        Route::post('/', [UserController::class, 'create']);
        Route::put('/{id}', [UserController::class, 'update']);
        Route::delete('/{id}', [UserController::class, 'delete']);
    });
    // facultades
    Route::prefix('faculties')->group(function () {
        Route::get('/', [FacultyController::class, 'getAll']);
        Route::get('/user/{id}', [FacultyController::class, 'getAllByUser']);
        Route::get('/{id}', [FacultyController::class, 'getOneById']);
        Route::post('/', [FacultyController::class, 'create']);
        Route::put('/{id}', [FacultyController::class, 'update']);
        Route::delete('/{id}', [FacultyController::class, 'delete']);
    });
    // carreras
    Route::prefix('careers')->group(function () {
        Route::get('/', [CareerController::class, 'getAll']);
        Route::get('/{id}', [CareerController::class, 'getOneById']);
        Route::get('/user/{id}', [CareerController::class, 'getAllByUser']);
        Route::post('/', [CareerController::class, 'create']);
        Route::put('/{id}', [CareerController::class, 'update']);
        Route::delete('/{id}', [CareerController::class, 'delete']);
    });
    // estudiantes
    Route::prefix('students')->group(function () {
        Route::get('/', [StudentController::class, 'getAll']);
        Route::get('/{id}', [StudentController::class, 'getOneById']);
        Route::post('/', [StudentController::class, 'create']);
        Route::put('/{id}', [StudentController::class, 'update']);
        Route::delete('/{id}', [StudentController::class, 'delete']);
    });
    // plantillas
    Route::prefix('templates')->group(function () {
        Route::get('/', [TemplateController::class, 'getAll']);
        Route::get('/{id}', [TemplateController::class, 'getDetByIdTemplateCab']);
        Route::get('/onecab/{id}', [TemplateController::class, 'getOneByIdTemplateCab']);
        Route::get('/onedet/{id}', [TemplateController::class, 'getOneByIdTemplateDet']);
        Route::post('/cab', [TemplateController::class, 'createCab']);
        Route::post('/det', [TemplateController::class, 'createDet']);
        Route::put('/cab/{id}', [TemplateController::class, 'updateCab']);
        Route::put('/det/{id}', [TemplateController::class, 'updateDet']);
        Route::delete('/cab/{id}', [TemplateController::class, 'deleteCab']);
        Route::delete('/det/{id}', [TemplateController::class, 'deleteDet']);
    });
    //facultades, usuarios asignados
    Route::prefix('managefaculty')->group(function () {
        Route::get('/facultyasigned/{id}', [ManageFacultyController::class, 'getFacultyAsignedByUser']);
        Route::get('/facultyunasigned/{id}', [ManageFacultyController::class, 'getFacultyUnasignedByUser']);
        Route::get('/userasigned/{id}', [ManageFacultyController::class, 'getUserAsignedByFaculty']);
        Route::get('/userunasigned/{id}', [ManageFacultyController::class, 'getUserUnasignedByFaculty']);
        Route::post('/', [ManageFacultyController::class, 'create']);
        Route::delete('/{idUser}/{idFaculty}', [ManageFacultyController::class, 'delete']);
    });
    //carreras/ usuarios asignados
    Route::prefix('managecareer')->group(function () {
        Route::get('/careerasigned/{id}', [ManageCareerController::class, 'getCareerAsignedByUser']);
        Route::get('/careerunasigned/{idSecretary}/{idAdmin}', [ManageCareerController::class, 'getCareerUnasignedByUser']);
        Route::get('/userasigned/{id}', [ManageCareerController::class, 'getUserAsignedByCareer']);
        Route::get('/userunasigned/{idCareer}', [ManageCareerController::class, 'getUserUnasignedByCareer']);
        Route::get('/careers/{idSecretary}', [ManageCareerController::class, 'getManageCareerBySecretary']);
        Route::post('/', [ManageCareerController::class, 'create']);
        Route::delete('/{idUser}/{idCareer}', [ManageCareerController::class, 'delete']);
    });
    //templates/ carreras asignados
    Route::prefix('templatecareer')->group(function () {
        Route::get('/templateasigned/{id}', [TemplateCareerController::class, 'getTemplateAsignedByCareer']);
        Route::get('/templateunasigned/{id}', [TemplateCareerController::class, 'getTemplateUnasignedByCareer']);
        Route::post('/', [TemplateCareerController::class, 'create']);
        Route::delete('/{idUser}/{idCareer}', [TemplateCareerController::class, 'delete']);
    });
    //students/ carreras asignados
    Route::prefix('studentcareer')->group(function () {
        Route::get('/careerasigned/{id}', [StudentCareerController::class, 'getCareerAsignedByStudent']);
        Route::get('/careerunasigned/{idStudent}/{idSecretary}', [StudentCareerController::class, 'getCareerUnasignedByStudent']);
        Route::post('/', [StudentCareerController::class, 'create']);
        Route::delete('/{idCareer}/{idStudent}', [StudentCareerController::class, 'delete']);
    });
    // 
    Route::prefix('permissiontemplate')->group(function () {
        Route::get('/template/{idManageCareer}/{idCareer}', [PermissionTemplateController::class, 'getTemplatesByManageCareer']);
        Route::get('/parameters/{idManageCareer}/{idTemplateCab}', [PermissionTemplateController::class, 'getPermissionTemplateByParameters']);
        Route::get('/{id}', [PermissionTemplateController::class, 'getPermissionTemplateById']);
        Route::post('/', [PermissionTemplateController::class, 'create']);
    });
    //
    Route::prefix('permissionfolder')->group(function () {
        Route::get('/folder/{idPermissionTemplate}/{idTemplate}', [PermissionFolderController::class, 'getFoldersByTemplate']);
        Route::get('/parameters/{idPermissionTemplate}/{idTemplateDet}', [PermissionFolderController::class, 'getPermissionFolderByParameters']);
        Route::get('/{id}', [PermissionFolderController::class, 'getPermissionFolderById']);
        Route::post('/', [PermissionFolderController::class, 'create']);
        Route::put('/{id}', [PermissionFolderController::class, 'update']);
    });
    //
    Route::prefix('managefile')->group(function () {
        Route::get('/', [ManageFileController::class, 'index']);
        Route::get('/{id}', [ManageFileController::class, 'show']);
        Route::post('/', [ManageFileController::class, 'store']);
        Route::get('/{id}/download', [ManageFileController::class, 'download']);
        Route::delete('/{id}', [ManageFileController::class, 'destroy']);
        //
        Route::get('/facultades/{idSecretary}', [ManageFileController::class, 'getFacultiesByIdSecretary']);
        Route::get('/carreras/{idSecretary}/{idFaculty}', [ManageFileController::class, 'getCarrersBySecretaryFaculty']);
        Route::get('/estudiantes/{idCareer}', [ManageFileController::class, 'getStudentByCarrers']);
        Route::get('/templates/{idSecretary}/{idCareer}', [ManageFileController::class, 'getTemplatesBySecretaryCareer']);
        Route::get('/folder/{idSecretary}/{idTemplateCab}', [ManageFileController::class, 'getTemplateDetBySecretaryTemplate']);
        Route::get('/file/{idStudent}/{idTemplateDet}', [ManageFileController::class, 'getFilesByStudentFolder']);
    });
});
