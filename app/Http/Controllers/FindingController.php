<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Finding;


class FindingController extends Controller
{
    public function getAll(){
        return Response::json(Finding::all());
    }

    public function getId($id){
        return Finding::find($id);
    }

    public function getBerry($berry){
        return Finding::find($berry);
    }

    public function add(Request $request){
        return Article::create($request->all());
    }

    public function delete(Request $request, $id){
        $finding = Finding::findOrFail($id);
        $finding->delete();
        return 204;
    }

}
