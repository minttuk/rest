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

    public function getId($id){
        return Finding::find($id);
    }

    public function getBerry($id){
        //return Finding::find($id);
        return Finding::where('berry_id', $id)->get(); //tämä ei toimi
    }

    public function add(Request $request){
      try{
        $finding = new Finding;
        $finding->berry_id = Berry::where('name', $request->name)->firstOrFail()['id'];
        $finding->lat = $request->lat;
        $finding->long = $request->long;
        $finding->save();
        return 200;
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
