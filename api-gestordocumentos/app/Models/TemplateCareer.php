<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TemplateCareer extends Model
{
    use HasFactory;
    protected $table = "template_career";
    protected $primaryKey='Id';
    protected $fillable=['IdCareer','IdTemplateCab','Estado'];
    public $timestamps=false;
}
