<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ZodiakController;
use App\Http\Controllers\KalkulatorController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('zodiak');
});

Route::get('zodiak', [ZodiakController::class, 'tanggal']);
Route::post('zodiac', [ZodiakController::class, 'bulan']);

Route::get('kalkulator', [KalkulatorController::class, 'titik']);
Route::post('calculator', [KalkulatorController::class, 'koma']);

Route::get('suhu', [SuhuController::class, 'panas']);
Route::post('temperatur', [SuhuController::class, 'dingin']);

