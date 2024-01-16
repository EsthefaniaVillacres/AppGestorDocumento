<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ManageFile extends Model
{
    use HasFactory;
    protected $table = "manage_file";
    protected $primaryKey='Id';
    protected $fillable=['IdStudent','IdTemplateDet','IdUser','NombreArchivo','Archivo','Estado'];

}
