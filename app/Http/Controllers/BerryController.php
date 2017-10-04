<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Berry;


class BerryController extends Controller
{
    public function getAll(){
        return Berry::all();
    }

    public function getBerry($berry){
      if (is_int($berry) || ctype_digit($berry)) {
        return Berry::find($berry);
      }
      else if (is_string($berry)) {
        return Berry::where('name', $berry)->firstOrFail();
      }
    }

    public function add(Request $request){
        $request->validate([
         'name' => 'required|unique:berries|max:100',
        ]);
        $berry = new Berry;
        $berry->name = $request->name;
        $berry->save();
        $arr = array('message' => 'Berry created succesfully!'); //etc
        return json_encode($arr);
    }

    public function delete(Request $request, $id){
        $berry = Finding::findOrFail($id);
        $berry->delete();
        return 204;
    }
}
