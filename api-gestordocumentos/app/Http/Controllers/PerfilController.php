<?php

namespace App\Http\Controllers;

use App\Models\Perfil;
use Illuminate\Http\Request;

class PerfilController extends Controller
{
    public function get()
    {
        $perfiles=Perfil::all();
        return response()->json($perfiles);
    }
    public function create(Request $request)
    {
        $reglas =['Nombre'=>'required|string|min:3|max:150'];
        $validador=\Validator::make($request->input(),$reglas);
        if($validador->fails()){
            return response()->json([
                'estado'=>false,
                'errores'=>$validador->errors()->all()
            ],400);
        }
        $perfil=new Perfil($request->input());
        $perfil->save();
        return response()->json([
            'estado'=>true,
            'mensaje'=>'Registro creado Satisfactoriamente'
        ],200);
    }
    
}
