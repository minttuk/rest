<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFindingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('findings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->DOUBLE('lat');
            $table->DOUBLE('long');
            $table->timestamps();
        });

        DB::table('findings')->insert(
            array(
                'name' => 'Puolukoita',
                'lat' => 60.249999,
                'long' => 24.5999976
            )
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('findings');
    }
}
