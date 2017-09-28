<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Berry extends Model
{
    protected $table = 'Berries';
    public $timestamps = false;

    public function findings() {
      return $this->hasMany('App\Finding', 'berry_id', 'id');
    }
}
