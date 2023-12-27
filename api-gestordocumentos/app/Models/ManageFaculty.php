<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ManageFaculty extends Model
{
    use HasFactory;
    protected $table = "manage_faculty";
    protected $primaryKey='Id';
    protected $fillable=['IdUser','IdFaculty','Estado'];
    public $timestamps=false;
}
