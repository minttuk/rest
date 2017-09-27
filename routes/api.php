<?php

use Illuminate\Http\Request;
use App\Finding;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();

});


Route::get('findings', 'FindingController@getAll');
Route::get('findings/{id}', 'FindingController@getId');
Route::get('findings/{berry}', 'FindingController@getBerry');
Route::post('findings', 'FindingController@add');
Route::delete('findings/{id}', 'FindingController@delete');
