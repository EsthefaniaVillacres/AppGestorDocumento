<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function create(Request $request)
    {
        $reglas = [
            'IdPerfil' => 'required|int',
            'name' => 'required|string|max:100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|min:4'
        ];
        $validador = \Validator::make($request->input(), $reglas);
        if ($validador->fails()) {
            return response()->json([
                'estado' => false,
                'errores' => $validador->errors()->all()
            ], 400);
        }
        $user = User::create([
            'IdPerfil' => $request->IdPerfil,
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
        return response()->json([
            'estado' => true,
            'mensaje' => 'Usuario creado satisfactoriamente',
            'token' => $user->createToken('API TOKEN')->plainTextToken
        ], 200);
    }
    public function login(Request $request)
    {
        $reglas = [
            'email' => 'required|string|email|max:100',
            'password' => 'required|string'
        ];
        $validador = \Validator::make($request->input(), $reglas);
        if ($validador->fails()) {
            return response()->json([
                'estado' => false,
                'errores' => $validador->errors()->all()
            ], 400);
        }
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'estado' => false,
                'errores' => ['Usuario No autorizado']
            ], 401);
        }
        $user = User::where('email', $request->email)->first();
        return response()->json([
            'estado' => true,
            'mensaje' => 'Usuario logiado correctamente',
            'dato' => $user,
            'token' => $user->createToken('API TOKEN')->plainTextToken
        ], 200);
    }

    public function logout()
    {        
        return response()->json([
            'estado' => true,
            'mensaje' => 'Sesión cerrada correctamente',       
        ], 200);
    }
    
}
