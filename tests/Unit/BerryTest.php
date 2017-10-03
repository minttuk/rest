<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Berry;

//include '../../app/Http/Controllers/BerryController.php'; //tätä ei löydä???
//use App\Https\Controllers\BerryController;

class BerryTest extends TestCase
{
    // to run: vendor/bin/phpunit.bat
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $this->assertTrue(true);
    }

    public function testGetId(){
        $response = $this->call('GET', 'BerryController@getId', ['id' => "Puolukka"]);
        $this->assertEquals(1, $response->id);
        //$this->assertEquals(1, $this->action('GET', 'BerryController@getId', ['name' => "Puolukka"]));
        //$this->assertEquals(1, getId("Puolukka"));

    }
}
