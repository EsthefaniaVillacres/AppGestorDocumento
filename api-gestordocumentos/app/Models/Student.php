<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $table = "student";
    protected $primaryKey='Id';
    protected $fillable=['Cedula','Nombre','Apellido','Telefono','Direccion','Correo','Estado'];
    public $timestamps=false;
}
