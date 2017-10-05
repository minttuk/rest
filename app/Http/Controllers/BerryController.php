<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Berry;

class BerryController extends Controller
{
    public function getAll(){
        $berries = Berry::all();
        if (sizeof($berries) == 0) {
          return response()->json(['Message' => "No berries were found"], 200);
        }
        return $berries;
    }

    public function getBerry($berry){
      if (is_int($berry) || ctype_digit($berry)) {
        try {
          $berry = Berry::findOrFail($berry);
          return $berry;
        }
        catch(\Exception $e){
            return response()->json(['Message' => $e->getMessage()], 402);
        }
      }
      else if (is_string($berry)) {
        try {
          $berry = Berry::where('name', $berry)->firstOrFail();
          return $berry;
        }
        catch(\Exception $e){
            return response()->json(['Message' => $e->getMessage()], 402);
        }
      }
    }

    public function add(Request $request){
        $request->validate([
         'name' => 'required|unique:berries|max:100',
        ]);
        try{
            $berry = new Berry;
            $berry->name = $request->name;
            $berry->save();
            $arr = array('message' => 'Berry created succesfully!'); //etc
            return json_encode($arr);
        }
        catch(\Exception $e){
            return response()->json(['Message' => $e->getMessage()]);
        }

    }

    //Method disabled in api
    public function delete(Request $request, $id){
      try {
        $berry = Berry::findOrFail($id);
        $berry->delete();
        return response()->json(['Message' => "Data deleted succesfully"], 204);
      }
      catch(\Exception $e){
        return response()->json(['Message' => $e->getMessage()]);
      }
    }
}
