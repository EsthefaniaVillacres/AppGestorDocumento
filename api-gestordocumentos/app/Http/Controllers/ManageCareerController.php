<?php

namespace App\Http\Controllers;
use App\Models\Career;
use App\Models\ManageCareer;
use App\Models\User;
use App\Models\ManageFaculty;

use Illuminate\Http\Request;

class ManageCareerController extends Controller
{
    public function getCareerAsignedByUser($idUser)
    {
        $careersAssigned = Career::whereIn('Id', function ($query) use ($idUser) {
            $query->select('IdCareer')
                ->from('manage_career')
                ->where('IdUser', $idUser);
        })->get();

        return response()->json($careersAssigned);
    }
    public function getCareerUnasignedByUser($idSecretary,$idAdmin)
    {
        $filteredCareers = Career::whereNotIn('Id', function ($query) use ($idSecretary) {
            $query->select('IdCareer')
                ->from('manage_career')
                ->where('IdUser', $idSecretary);
        })->whereIn('IdFaculty', function ($query) use ($idAdmin) {
            $query->select('IdFaculty')
                ->from('manage_faculty')
                ->where('IdUser', $idAdmin);
        })->get();

        return response()->json(['filteredCareers' => $filteredCareers]);
    }
    public function getUserAsignedByCareer($idCareer)
    {
        $userAssigned = User::whereIn('Id', function ($query) use ($idCareer) {
            $query->select('IdUser')
                ->from('manage_career')
                ->where('IdCareer', $idCareer);
        })->get();

        return response()->json($userAssigned);
    }
    public function getUserUnasignedByCareer($idCareer)
    {
        $userNotAssigned = User::whereNotIn('id', function ($query) use ($idCareer) {
            $query->select('IdUser')
                ->from('manage_career')
                ->where('IdCareer', $idCareer);
        })->where('IdPerfil',3)
        ->get();

        return response()->json($userNotAssigned);
    }
    public function create(Request $request)
    {
        try {
            $reglas = [
                'IdUser' => 'required|int',
                'IdCareer' => 'required|int'
            ];
            $validador = \Validator::make($request->input(), $reglas);
            if ($validador->fails()) {
                return response()->json([
                    'estado' => false,
                    'errores' => $validador->errors()->all()
                ], 400);
            }
            $facultad = ManageCareer::create($request->input());
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro creado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
    
    public function delete($idUser, $idCareer)
    {
        try {
            ManageCareer::where('IdUser',$idUser)->where('IdCareer',$idCareer)->delete();
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro eliminado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
}
