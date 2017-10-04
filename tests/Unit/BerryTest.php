<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Berry;


class BerryTest extends TestCase
{
    // to run: vendor/bin/phpunit.bat

    public function testGetBerryByName(){
        $response = $this->call('GET', 'api/berries/Puolukka');
        $this->assertEquals(1, $response->original->id);
    }

    public function testGetBerryById(){
        $response = $this->call('GET', 'api/berries/1');
        $this->assertEquals("Puolukka", $response->original->name);
    }

    public function testGetAllBerries(){
        $response = $this->call('GET', 'api/berries');
        $this->assertEquals("Puolukka", $response->original[0]->name);
        //$this->assertEquals(4, count($response->original));
    }
}
