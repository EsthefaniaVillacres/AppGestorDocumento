<?php

namespace App\Http\Controllers;

use App\Models\Faculty;
use App\Models\User;
use App\Models\ManageFaculty;
use Illuminate\Http\Request;

class ManageFacultyController extends Controller
{
    public function getFacultyAsignedByUser($idUser)
    {
        $facultiesAssigned = Faculty::whereIn('Id', function ($query) use ($idUser) {
            $query->select('IdFaculty')
                ->from('manage_faculty')
                ->where('IdUser', $idUser);
        })->get();

        return response()->json($facultiesAssigned);
    }
    public function getFacultyUnasignedByUser($idUser)
    {
        $facultiesNotAssigned = Faculty::whereNotIn('Id', function ($query) use ($idUser) {
            $query->select('IdFaculty')
                ->from('manage_faculty')
                ->where('IdUser', $idUser);
        })->get();

        return response()->json($facultiesNotAssigned);
    }
    public function getUserAsignedByFaculty($idFaculty)
    {
        $userAssigned = User::whereIn('Id', function ($query) use ($idFaculty) {
            $query->select('IdUser')
                ->from('manage_faculty')
                ->where('IdFaculty', $idFaculty);
        })->get();

        return response()->json($userAssigned);
    }
    public function getUserUnasignedByFaculty($idFaculty)
    {
        $userNotAssigned = User::whereNotIn('Id', function ($query) use ($idFaculty) {
            $query->select('IdUser')
                ->from('manage_faculty')
                ->where('IdFaculty', $idFaculty);
        })->get();

        return response()->json($userNotAssigned);
    }
    public function create(Request $request)
    {
        try {
            $reglas = [
                'IdUser' => 'required|int',
                'IdFaculty' => 'required|int'
            ];
            $validador = \Validator::make($request->input(), $reglas);
            if ($validador->fails()) {
                return response()->json([
                    'estado' => false,
                    'errores' => $validador->errors()->all()
                ], 400);
            }
            $facultad = ManageFaculty::create($request->input());
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro creado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
    
    public function delete($idUser, $idFaculty)
    {
        try {
            ManageFaculty::where('IdUser',$idUser)->where('IdFaculty',$idFaculty)->delete();
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro eliminado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
}
