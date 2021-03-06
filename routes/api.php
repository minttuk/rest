<?php

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Finding;
use App\Berry;


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
Route::get('findings/{id}', 'FindingController@getFinding');
Route::get('findings/berry/{id}', 'FindingController@getFindings');
Route::post('findings', 'FindingController@add');
//Route::delete('findings/{id}', 'FindingController@delete');

Route::get('berries', 'BerryController@getAll');
Route::get('berries/{berry}', 'BerryController@getBerry');
Route::post('berries', 'BerryController@add');
//Route::delete('berries/{id}', 'BerryController@delete');
