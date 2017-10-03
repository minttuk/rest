<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
//include '../../app/Http/Controllers/BerryController.php'; //tätä ei löydä???

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
        $response = $this->action('Get', 'BerryController@getId', ['name' => "Puolukka"]);
        $this->assertEquals(1, $response);
        //$this->assertEquals(1, getId("Puolukka"));
    }
}
