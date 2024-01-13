<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PermissionFolder extends Model
{
    use HasFactory;
    protected $table = "permission_folder";
    protected $primaryKey='Id';
    protected $fillable=['IdPermissionTemplate','IdTemplateDet','Carga','Descarga','Vista','Eliminado','Estado'];
    public $timestamps=false;
}
