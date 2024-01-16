<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\ManageFile;

class ManageFileController extends Controller
{
    public function index()
    {
        $archivos = ManageFile::all();
        return response()->json(['archivos' => $archivos], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'IdStudent' => 'required|int',
            'IdTemplateDet' => 'required|int',
            'IdUser' => 'required|int',
            'NombreArchivo' => 'required',
            'Archivo' => 'required|mimes:pdf,doc,docx',
        ]);

        $archivo = new ManageFile;
        $archivo->NombreArchivo = $request->NombreArchivo;
        $archivo->IdStudent = $request->IdStudent;
        $archivo->IdTemplateDet = $request->IdTemplateDet;
        $archivo->IdUser = $request->IdUser;
        $archivo->Archivo = base64_encode(file_get_contents($request->file('Archivo')->path()));
        $archivo->save();

        return response()->json(['mensaje' => 'Archivo guardado exitosamente'], 201);
    }

    public function show($id)
    {
        $archivo = ManageFile::findOrFail($id);
        return response()->json(['archivo' => $archivo], 200);
    }

    public function download($id)
    {
        $archivo = ManageFile::findOrFail($id);

        $decodedContenido = base64_decode($archivo->Archivo);

        return response($decodedContenido)
            ->header('Content-Type', 'application/octet-stream')
            ->header('Content-Disposition', 'attachment; filename="' . $archivo->NombreArchivo . '"');
    }

    public function destroy($id)
    {
        $archivo = ManageFile::findOrFail($id);
        $archivo->delete();

        return response()->json(['mensaje' => 'Archivo eliminado exitosamente'], 200);
    }
    public function getFacultiesByIdSecretary($idSecretary)
    {
        return DB::table('faculty')
            ->whereIn('Id', function ($query) use ($idSecretary) {
                $query->select('IdFaculty')
                    ->from('career')
                    ->whereIn('Id', function ($subquery) use ($idSecretary) {
                        $subquery->select('IdCareer')
                            ->from('manage_career')
                            ->where('IdUser', $idSecretary);
                    });
            })
            ->get();
    }
    public function getCarrersBySecretaryFaculty($idSecretary, $idFaculty)
    {
        return DB::table('career')
            ->whereIn('Id', function ($query) use ($idSecretary) {
                $query->select('IdCareer')
                    ->from('manage_career')
                    ->where('IdUser', $idSecretary);
            })
            ->where('IdFaculty', $idFaculty)
            ->get();
    }
    public function getStudentByCarrers($idCareer)
    {
        return DB::table('student')
            ->whereIn('Id', function ($query) use ($idCareer) {
                $query->select('IdStudent')
                    ->from('student_career')
                    ->where('IdCareer', $idCareer);
            })
            ->get();
    }
    public function getTemplatesBySecretaryCareer($idSecretary, $idCareer)
    {
        return DB::table('template_cab')
            ->whereIn('Id', function ($query) use ($idCareer) {
                $query->select('IdTemplateCab')
                    ->from('template_career')
                    ->where('IdCareer', $idCareer);
            })
            ->whereIn('Id', function ($query) use ($idSecretary) {
                $query->select('IdTemplateCab')
                    ->from('permission_template')
                    ->whereIn('IdManageCareer', function ($subquery) use ($idSecretary) {
                        $subquery->select('Id')
                            ->from('manage_career')
                            ->where('IdUser', $idSecretary);
                    });
            })
            ->get();
    }
    public function getTemplateDetBySecretaryTemplate($idSecretary, $idTemplateCab)
    {
        return DB::table('template_det as td')
            ->join('permission_folder as pf', 'td.Id', '=', 'pf.IdTemplateDet')
            ->join('permission_template as pt', 'pf.IdPermissionTemplate', '=', 'pt.Id')
            ->join('manage_career as mc', 'pt.IdManageCareer', '=', 'mc.Id')
            ->select('pf.*', 'td.IdTemplateCab', 'td.NombreCarpeta', 'td.Orden', 'td.Estado')
            ->where('td.IdTemplateCab', $idTemplateCab)
            ->where('mc.IdUser', $idSecretary)
            ->get();
    }
    public function getFilesByStudentFolder($idStudent,$idTemplateDet)
    {
        $permisos=ManageFile::where('IdStudent',$idStudent)
        ->where('IdTemplateDet',$idTemplateDet)
        ->get();
        return response()->json($permisos);
    }
}
