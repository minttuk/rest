<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBerriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('berries', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
        });

        DB::table('berries')->insert(
              array('name' => 'Puolukka')
        );

        DB::table('berries')->insert(
              array('name' => 'Mustikka')
        );

        DB::table('berries')->insert(
              array('name' => 'Mansikka')
        );

        DB::table('berries')->insert(
              array('name' => 'Lakka')
        );


        DB::table('findings')->insert(
            array(
                'berry_id' => 1,
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
        Schema::dropIfExists('berries');
    }
}
