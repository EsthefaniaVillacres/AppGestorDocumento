<?php

namespace App\Http\Controllers;

use App\Models\PermissionFolder;
use App\Models\TemplateDet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PermissionFolderController extends Controller
{
    public function getFoldersByTemplate($idPermissionTemplate, $idTemplate)
    {
        return TemplateDet::select('template_det.*', DB::raw('(select count(*) from permission_folder where permission_folder.IdPermissionTemplate = ' . $idPermissionTemplate . ' and permission_folder.IdTemplateDet= template_det.Id) as numReg'))
            ->where('template_det.IdTemplateCab', '=', $idTemplate)
            ->get();
    }

    public function create(Request $request)
    {
        $reglas = [
            'IdPermissionTemplate' => 'required|int',
            'IdTemplateDet' => 'required|int'
        ];
        $validador = \Validator::make($request->input(), $reglas);
        if ($validador->fails()) {
            return response()->json([
                'estado' => false,
                'errores' => $validador->errors()->all()
            ], 400);
        }
        $permiso = new PermissionFolder($request->input());
        $permiso->save();
        return response()->json([
            'estado' => true,
            'mensaje' => 'Registro creado Satisfactoriamente'
        ], 200);
    }
    public function getPermissionFolderByParameters($idPermissionTemplate,$idTemplateDet){
        $permisos=PermissionFolder::where('IdPermissionTemplate',$idPermissionTemplate)
        ->where('IdTemplateDet',$idTemplateDet)
        ->get();
        return response()->json($permisos);
    }
    public function getPermissionFolderById($id){
        return PermissionFolder::find($id);
    }
    public function update(Request $request, $id)
    {
        try {
            PermissionFolder::find($id)->update($request->input());
            return response()->json([
                'estado' => true,
                'mensaje' => 'Registro actualizado satisfactoriamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json(['estado' => false, 'mensajeErrores' => $th->getMessage()], 500);
        }
    }


}
