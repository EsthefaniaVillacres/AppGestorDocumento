<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class UserController extends Controller
{
   public function getAll(){
    $usuarios=User::all();
    return response()->json($usuarios);
   }
   public function getAllByIdPerfil($idPerfil){
    $idPerfilConsultar=0;
    if ($idPerfil>0) {
        if ($idPerfil==1) {
            $idPerfilConsultar=2;
        }
        if ($idPerfil==2) {
            $idPerfilConsultar=3;
        }
    }
    $usuarios=User::where('IdPerfil',$idPerfilConsultar)->get();
    return response()->json($usuarios);
   }
   public function getOneById($id){
    try {
        $usuario=User::find($id);
        return response()->json(['estado'=>true,'dato'=>$usuario],200);
    } catch (\Throwable $th) {
        return response()->json(['estado'=>false,'mensajeErrores'=>$th->getMessage()],500);
    }
   }
   public function create(Request $request){
    try {
        $reglas=[
            'IdPerfil'=>'required|int',
            'name'=>'required|string|max:100',
            'email'=>'required|string|email|max:100|unique:users',
            'password'=>'required|string|min:4'
        ];
        $validador=\Validator::make($request->input(),$reglas);
        if($validador->fails()){
            return response()->json([
                'estado'=>false,
                'errores'=>$validador->errors()->all()
            ], 400);
        }
        $user=User::create([
            'IdPerfil'=>$request->IdPerfil,
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password)
        ]);
        return response()->json([
            'estado'=> true,
            'mensaje'=>'Registro creado satisfactoriamente',
            'token'=>$user->createToken('API TOKEN')->plainTextToken
        ],200);
    } catch (\Throwable $th) {
        return response()->json(['estado'=>false,'mensajeErrores'=>$th->getMessage()],500);
    }
   }
   public function update(Request $request,$id){
    try {
        User::find($id)->update($request->input());
        return response()->json([
            'estado'=> true,
            'mensaje'=>'Registro actualizado satisfactoriamente'
        ],200);
    } catch (\Throwable $th) {
        return response()->json(['estado'=>false,'mensajeErrores'=>$th->getMessage()],500);
    }
   }
   public function delete($id){
    try {
        User::find($id)->delete();
        return response()->json([
            'estado'=> true,
            'mensaje'=>'Registro eliminado satisfactoriamente'
        ],200);
    } catch (\Throwable $th) {
        return response()->json(['estado'=>false,'mensajeErrores'=>$th->getMessage()],500);
    }
   }
}