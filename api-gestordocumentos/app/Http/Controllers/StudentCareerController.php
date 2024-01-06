<?php

namespace App\Http\Controllers;

use App\Models\Career;
use App\Models\StudentCareer;
use Illuminate\Http\Request;

class StudentCareerController extends Controller
{
    public function getCareerAsignedByStudent($idStudent)
    {
        $userAssigned = Career::whereIn('Id', function ($query) use ($idStudent) {
            $query->select('IdCareer')
                ->from('student_career')
                ->where('IdStudent', $idStudent);
        })->get();

        return response()->json($userAssigned);
    }
    public function getCareerUnasignedByStudent($idStudent,$idSecretary)
    {
        $userNotAssigned = Career::whereNotIn('Id', function ($query) use ($idStudent) {
            $query->select('IdCareer')
                ->from('student_career')
                ->where('IdStudent', $idStudent);
        })->whereIn('Id', function ($query) use ($idSecretary) {
            $query->select('IdCareer')
                ->from('manage_career')
                ->where('IdUser', $idSecretary);
        })->get();
        return response()->json($userNotAssigned);
    }
    public function create(Request $request)
    {
        try {
            $reglas = [
                'IdStudent' => 'required|int',
                'IdCareer' => 'required|int'
            ];
            $validador = \Validator::make($request->input(), $reglas);
            if ($validador->fails()) {
                return response()->json([
                    'estado' => false,
                    'errores' => $validador->errors()->all()
                ], 400);
            }
             $register= StudentCareer::create($request->input());
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro creado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }

    public function delete($idCareer, $idStudent)
    {
        try {
            StudentCareer::where('IdCareer', $idCareer)->where('IdStudent', $idStudent)->delete();
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro eliminado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
}
