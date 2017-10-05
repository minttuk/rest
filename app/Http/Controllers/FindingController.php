<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Finding;
use App\Berry;

class FindingController extends Controller
{

    public function getAll(){
      $findings = Finding::all();
      if (sizeof($findings) == 0) {
        return response()->json(['Message' => "No findings were found"], 200);
      }
      return $findings;
    }

    public function getFinding($id){
      try {
        $finding = Finding::findOrFail($id);
        return $finding;
      }
      catch(\Exception $e){
          return response()->json(['Message' => $e->getMessage()], 402);
      }
    }

    public function getFindings($berry_id){
        $findings = Finding::where('berry_id', $berry_id)->get();
        if (sizeof($findings) == 0) {
          try {
            $berry = Berry::findOrFail($berry_id);
            return response()->json(['Message' => "No findings for berry."], 200);
          }
          catch (\Exception $e) {
            return response()->json(['Message' => "Berry id does not exist."], 402);
          }
        }
        return $findings;
    }

    public function add(Request $request){
      $request->validate([
       'name' => 'required|exists:berries,name',
       'lat' => 'required|numeric|max:85|min:-85',
       'long' => 'required|numeric|max:180|min:-180',
      ]);
      try{
        $finding = new Finding;
        $finding->berry_id = Berry::where('name', $request->name)->firstOrFail()['id'];
        $finding->lat = $request->lat;
        $finding->long = $request->long;
        $finding->save();
        $arr = array('Message' => 'Finding created succesfully!');
        return json_encode($arr);
      }
      catch(\Exception $e){
        return response()->json(['Message' => $e->getMessage()]);
      }
    }

    // Method disabled in api
    public function delete(Request $request, $id){
      try {
        $finding = Finding::findOrFail($id);
        $finding->delete();
        return response()->json(['Message' => "Data deleted succesfully"], 204);
      }
      catch(\Exception $e){
        return response()->json(['Message' => $e->getMessage()]);
      }
    }

}
