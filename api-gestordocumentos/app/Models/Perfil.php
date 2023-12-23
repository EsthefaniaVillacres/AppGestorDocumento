<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Perfil extends Model
{
    use HasFactory;
    protected $table = "perfil";
    protected $primaryKey='Id';
    protected $fillable=['Nombre','Descripcion','Estado'];
    public $timestamps=false;
}
