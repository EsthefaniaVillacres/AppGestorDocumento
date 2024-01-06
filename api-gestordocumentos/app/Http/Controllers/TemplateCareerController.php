<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TemplateCab;
use App\Models\TemplateCareer;

class TemplateCareerController extends Controller
{
    public function getTemplateAsignedByCareer($idCareer)
    {
        $userAssigned = TemplateCab::whereIn('Id', function ($query) use ($idCareer) {
            $query->select('IdTemplateCab')
                ->from('template_career')
                ->where('IdCareer', $idCareer);
        })->get();

        return response()->json($userAssigned);
    }
    public function getTemplateUnasignedByCareer($idCareer)
    {
        $userNotAssigned = TemplateCab::whereNotIn('Id', function ($query) use ($idCareer) {
            $query->select('IdTemplateCab')
                ->from('template_career')
                ->where('IdCareer', $idCareer);
        })->get();

        return response()->json($userNotAssigned);
    }
    public function create(Request $request)
    {
        try {
            $reglas = [
                'IdTemplateCab' => 'required|int',
                'IdCareer' => 'required|int'
            ];
            $validador = \Validator::make($request->input(), $reglas);
            if ($validador->fails()) {
                return response()->json([
                    'estado' => false,
                    'errores' => $validador->errors()->all()
                ], 400);
            }
             $register= TemplateCareer::create($request->input());
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro creado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }

    public function delete($idCareer, $idTemplateCab)
    {
        try {
            TemplateCareer::where('IdCareer', $idCareer)->where('IdTemplateCab', $idTemplateCab)->delete();
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro eliminado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
}
