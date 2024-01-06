<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentCareer extends Model
{
    use HasFactory;
    protected $table = "student_career";
    protected $primaryKey='Id';
    protected $fillable=['IdCareer','IdStudent','Estado'];
    public $timestamps=false;

}
