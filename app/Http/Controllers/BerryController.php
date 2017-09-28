<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Berry;


class BerryController extends Controller
{
    public function getAll(){
        return Berry::all();
    }

    public function getId($id){
        return Berry::find($id);
    }

    public function add(Request $request){
        $berry = new Berry;
        $berry->name = $request->name;
        $berry->save();
        //return Finding::create($request->all());
    }

    public function delete(Request $request, $id){
        $berry = Finding::findOrFail($id);
        $berry->delete();
        return 204;
    }
}