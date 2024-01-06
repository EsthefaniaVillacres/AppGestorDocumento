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
        Schema::create('template_career', function (Blueprint $table) {
            $table->id('Id');
            $table->unsignedBigInteger('IdCareer');
            $table->unsignedBigInteger('IdTemplateCab');
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
        Schema::dropIfExists('template_career');
    }
};
