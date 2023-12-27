<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TemplateCab extends Model
{
    use HasFactory;
    protected $table = "template_cab";
    protected $primaryKey='Id';
    protected $fillable=['Nombre','Estado'];
    public $timestamps=false;
}
