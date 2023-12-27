<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student', function (Blueprint $table) {
            $table->id('Id');
            $table->string('Cedula',13)->unique();
            $table->string('Nombre',50);
            $table->string('Apellido',50);
            $table->string('Telefono',25);
            $table->string('Direccion',250);
            $table->string('Correo',50);
            $table->string('Estado',15)->default('Activo'); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('student');
    }
};
