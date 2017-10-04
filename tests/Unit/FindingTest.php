<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FindingTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $this->assertTrue(true);
    }


    public function testGetAll(){
        $response = $this->call('GET', 'api/findings');
        $this->assertEquals(1, $response->original[0]->id);
    }

    public function testGetFinding(){
        $response = $this->call('GET', 'api/findings/1');
        $this->assertEquals(1, $response->original->id);
    }

    public function testFindings(){
        $response = $this->call('GET', 'api/findings/berry/1');
        $this->assertEquals(1, $response->original[0]->berry_id);
    }

}
