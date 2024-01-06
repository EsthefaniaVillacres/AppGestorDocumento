<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ManageCareer extends Model
{
    use HasFactory;
    protected $table = "manage_career";
    protected $primaryKey='Id';
    protected $fillable=['IdUser','IdCareer','Estado'];
    public $timestamps=false;
}
