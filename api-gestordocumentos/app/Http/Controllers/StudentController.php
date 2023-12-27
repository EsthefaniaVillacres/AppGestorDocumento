<?php

namespace App\Http\Controllers;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function getAll()
    {
        $estudiantes = Student::all();
        return response()->json($estudiantes);
    }
   
    public function getOneById($id)
    {
        try {
            $estudiante = Student::find($id);
            return response()->json(['estado' => true, 'dato' => $estudiante], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
    public function create(Request $request)
    {
        try {
            $reglas = [
                'Cedula' => 'required|string|max:13|unique:student',
                'Nombre' => 'required|string|max:50',
                'Apellido' => 'required|string|max:50',
                'Telefono' => 'required|string|max:25',
                'Direccion' => 'required|string|max:250',
                'Correo' => 'required|email|string|max:50',

            ];
            $validador = \Validator::make($request->input(), $reglas);
            if ($validador->fails()) {
                return response()->json([
                    'estado' => false,
                    'errores' => $validador->errors()->all()
                ], 400);
            }
            $estudiante = Student::create($request->input());
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
            Student::find($id)->update($request->input());
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
            Student::find($id)->delete();
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro eliminado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }
}
