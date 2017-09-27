<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Finding;


class FindingController extends Controller
{
    public function getAll(){
        return Finding::all();
    }

    public function getId($id){
        return Finding::find($id);
    }

    public function getBerry($berry){
        return Finding::find($berry);
    }

    public function add(Request $request){
        $finding = new Finding;
        $finding->name = $request->name;
        $finding->lat = $request->lat;
        $finding->long = $request->long;
        $finding->save();
        //return Finding::create($request->all());
    }

    public function delete(Request $request, $id){
        $finding = Finding::findOrFail($id);
        $finding->delete();
        return 204;
    }

}
