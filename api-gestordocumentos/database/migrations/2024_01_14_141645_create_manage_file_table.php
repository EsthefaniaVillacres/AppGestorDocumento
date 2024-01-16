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
        Schema::create('manage_file', function (Blueprint $table) {
            $table->id('Id');
            $table->unsignedBigInteger('IdStudent');
            $table->unsignedBigInteger('IdTemplateDet');
            $table->unsignedBigInteger('IdUser');
            $table->string('NombreArchivo',300); 
            $table->binary('Archivo'); 
            $table->string('Estado',15)->default('Activo'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('manage_file');
    }
};
