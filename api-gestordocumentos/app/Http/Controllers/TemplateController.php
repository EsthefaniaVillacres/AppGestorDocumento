<?php

namespace App\Http\Controllers;

use App\Models\TemplateCab;
use App\Models\TemplateDet;
use Illuminate\Http\Request;

class TemplateController extends Controller
{
    public function getAll()
    {
        $data = TemplateCab::all();
        return response()->json($data);
    }
    public function getDetByIdTemplateCab($idTemplateCab)
    {
        $data = TemplateDet::where('IdTemplateCab', $idTemplateCab)->get();
        return response()->json($data);
    }

    public function getOneByIdTemplateCab($id)
    {
        try {
            $data = TemplateCab::find($id);
            return response()->json(['estado' => true, 'dato' => $data], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
    public function getOneByIdTemplateDet($id)
    {
        try {
            $data = TemplateDet::find($id);
            return response()->json(['estado' => true, 'dato' => $data], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
    public function createCab(Request $request)
    {
        try {
            $reglas = [
                'Nombre' => 'required|string|max:100'
            ];
            $validador = \Validator::make($request->input(), $reglas);
            if ($validador->fails()) {
                return response()->json([
                    'estado' => false,
                    'errores' => $validador->errors()->all()
                ], 400);
            }
            $data = TemplateCab::create($request->input());
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro creado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
    public function createDet(Request $request)
    {
        try {
            $reglas = [
                'IdTemplateCab' => 'required|int',
                'Orden' => 'required|int',
                'NombreCarpeta' => 'required|string|max:50'
            ];
            $validador = \Validator::make($request->input(), $reglas);
            if ($validador->fails()) {
                return response()->json([
                    'estado' => false,
                    'errores' => $validador->errors()->all()
                ], 400);
            }
            $data = TemplateDet::create($request->input());
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro creado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
    public function updateCab(Request $request, $id)
    {
        try {
            TemplateCab::find($id)->update($request->input());
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro actualizado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
    public function updateDet(Request $request, $id)
    {
        try {
            TemplateDet::find($id)->update($request->input());
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro actualizado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
    public function deleteCab($id)
    {
        try {
            TemplateCab::find($id)->delete();
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro eliminado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
    public function deleteDet($id)
    {
        try {
            TemplateDet::find($id)->delete();
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro eliminado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
}
