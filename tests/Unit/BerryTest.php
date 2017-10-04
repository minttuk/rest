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

    public function testGetBerry(){
        $response = $this->call('GET', 'api/berries/Puolukka');
        $this->assertEquals(1, $response->original->id);
    }
}
