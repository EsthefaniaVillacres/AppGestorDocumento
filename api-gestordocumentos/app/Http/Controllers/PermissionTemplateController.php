<?php

namespace App\Http\Controllers;

use App\Models\PermissionTemplate;
use App\Models\TemplateCareer;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

class PermissionTemplateController extends Controller
{
    public function getTemplatesByManageCareer($idManageCareer, $idCareer)
    {
        return TemplateCareer::select('template_career.*', 'template_cab.Nombre', DB::raw('(select count(*) from permission_template where permission_template.IdManageCareer = ' . $idManageCareer . ') as numReg'))
            ->join('template_cab', 'template_career.IdTemplateCab', '=', 'template_cab.Id')
            ->where('template_career.IdCareer', '=', $idCareer)
            ->get();
    }

    public function create(Request $request)
    {
        $reglas = [
            'IdManageCareer' => 'required|int',
            'IdTemplateCab' => 'required|int'
        ];
        $validador = \Validator::make($request->input(), $reglas);
        if ($validador->fails()) {
            return response()->json([
                'estado' => false,
                'errores' => $validador->errors()->all()
            ], 400);
        }
        $permiso = new PermissionTemplate($request->input());
        $permiso->save();
        return response()->json([
            'estado' => true,
            'mensaje' => 'Registro creado Satisfactoriamente'
        ], 200);
    }
    public function getPermissionTemplateByParameters($idManageCareer, $idTemplateCab){

        $permisos=PermissionTemplate::where('IdManageCareer',$idManageCareer)
        ->where('IdTemplateCab',$idTemplateCab)
        ->get();
        return response()->json($permisos);
    }
    public function getPermissionTemplateById($id){
        return PermissionTemplate::find($id);
    }
}
