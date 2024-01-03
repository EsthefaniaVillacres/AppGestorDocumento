<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Career;
class CareerController extends Controller
{
     public function getAll()
    {
        $carreras = Career::select('faculty.Nombre as Facultad', 'career.*')
        ->join('faculty','career.IdFaculty','faculty.Id')
        ->get();
        return response()->json($carreras);
    }
    public function getOneById($id)
    {
        try {
            $carrera = Career::select('faculty.Nombre as Facultad', 'career.*')
            ->join('faculty','career.IdFaculty','faculty.Id')
            ->where('career.Id','=',$id)
            ->get();
            return response()->json(['estado' => true, 'dato' => $carrera], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
    public function getAllByUser($id)
    {
        try {
            $facultad = Career::Select('faculty.Nombre as Facultad', 'career.*')
            ->whereIn('IdFaculty', function ($query) use ($id) {
                $query->select('IdFaculty')
                    ->from('manage_faculty')
                    ->where('IdUser', $id);
            }) ->join('faculty','career.IdFaculty','faculty.Id')
            ->get();
            return response()->json($facultad);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
    public function create(Request $request)
    {
        try {
            $reglas = [
                'Codigo' => 'required|string|max:15|unique:career',
                'Nombre' => 'required|string|max:150'
            ];
            $validador = \Validator::make($request->input(), $reglas);
            if ($validador->fails()) {
                return response()->json([
                    'estado' => false,
                    'errores' => $validador->errors()->all()
                ], 400);
            }
            $carrera = Career::create($request->input());
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
            Career::find($id)->update($request->input());
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
            Career::find($id)->delete();
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro eliminado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
}
