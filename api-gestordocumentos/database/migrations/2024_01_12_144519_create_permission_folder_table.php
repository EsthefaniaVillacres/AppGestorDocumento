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
        Schema::create('permission_folder', function (Blueprint $table) {
            $table->id('Id');
            $table->unsignedBigInteger('IdPermissionTemplate');
            $table->unsignedBigInteger('IdTemplateDet');
            $table->boolean('Carga')->default(false);
            $table->boolean('Descarga')->default(false);
            $table->boolean('Vista')->default(false);
            $table->boolean('Eliminado')->default(false);
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
        Schema::dropIfExists('permission_folder');
    }
};
