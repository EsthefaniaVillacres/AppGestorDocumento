<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TemplateDet extends Model
{
    use HasFactory;
    protected $table = "template_det";
    protected $primaryKey='Id';
    protected $fillable=['IdTemplateCab','Orden','NombreCarpeta','Estado'];
    public $timestamps=false;
}
