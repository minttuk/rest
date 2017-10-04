<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Finding;
use App\Berry;

class FindingController extends Controller
{

    public function getAll(){
        return Finding::all();
    }

    public function getFinding($id){
        return Finding::find($id);
    }

    public function getFindings($berry_id){
        return Finding::where('berry_id', $berry_id)->get();
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
        $arr = array('message' => 'Finding created succesfully!'); //etc
        return json_encode($arr);
        //return 200;
      }
      catch(\Exception $e){
        return $e->getMessage();
      }
    }

    public function delete(Request $request, $id){
        $finding = Finding::findOrFail($id);
        $finding->delete();
        return 204;
    }

}
