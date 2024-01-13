<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PermissionTemplate extends Model
{
    use HasFactory;
    protected $table = "permission_template";
    protected $primaryKey='Id';
    protected $fillable=['IdManageCareer','IdTemplateCab','Estado'];
    public $timestamps=false;
}
