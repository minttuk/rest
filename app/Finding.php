<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Finding extends Model
{
  public function berry() {
    return $this->hasOne('App\Berry', 'id', 'berry_id');
  }
}
