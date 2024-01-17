<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Services\DesencriptadorService;
use App\Services\EncriptadorService;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    protected $encriptacionServices;
    protected $desencriptacionServices;
    public function __construct(EncriptadorService $encriptacionServices, DesencriptadorService $desencriptacionServices)
    {

        $this->encriptacionServices = $encriptacionServices;
        $this->desencriptacionServices = $desencriptacionServices;
    }
    public function getAll()
    {
        $estudiantes = Student::all();
        // Desencriptar los campos necesarios
        foreach ($estudiantes as $estudiante) {
            $estudiante->Nombre = $this->desencriptacionServices->desencriptar($estudiante->Nombre);
            $estudiante->Apellido = $this->desencriptacionServices->desencriptar($estudiante->Apellido);
            
        }
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
            // Encriptar datos
            $nombreEncriptado = $this->encriptacionServices->aes($request->input('Nombre'));
            $apellidoEncriptado = $this->encriptacionServices->aes($request->input('Apellido'));

            // Reemplazar los datos originales con los encriptados
            $request->merge([
                'Nombre' => $nombreEncriptado,
                'Apellido' => $apellidoEncriptado,
            ]);
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
