<?php

namespace App\Http\Controllers;

use App\Models\Faculty;
use Illuminate\Http\Request;

class FacultyController extends Controller
{
    public function getAll()
    {
        $facultades = Faculty::all();
        return response()->json($facultades);
    }
   
    public function getOneById($id)
    {
        try {
            $facultad = Faculty::find($id);
            return response()->json(['estado' => true, 'dato' => $facultad], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
    public function create(Request $request)
    {
        try {
            $reglas = [
                'Codigo' => 'required|string|max:15|unique:faculty',
                'Nombre' => 'required|string|max:150'
            ];
            $validador = \Validator::make($request->input(), $reglas);
            if ($validador->fails()) {
                return response()->json([
                    'estado' => false,
                    'errores' => $validador->errors()->all()
                ], 400);
            }
            $facultad = Faculty::create($request->input());
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro creado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
    public function update(Request $request, $id)
    {
        try {
            Faculty::find($id)->update($request->input());
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro actualizado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
    public function delete($id)
    {
        try {
            Faculty::find($id)->delete();
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro eliminado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
}
