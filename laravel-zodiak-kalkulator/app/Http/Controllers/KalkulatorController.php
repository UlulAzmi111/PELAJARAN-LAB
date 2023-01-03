<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class KalkulatorController extends Controller
{
    public function titik()
    {
        return "Kalkulator";
    }

    public function koma(Request $request)
    {
        $bil1 = $request->bil1;
        $bil2 = $request->bil2;

        if (isset($_POST['tambah'])) {
            $tambah = $bil1 + $bil2;
            echo $tambah;
        }
        if (isset($_POST['kurang'])) {
            $kurang = $bil1 + $bil2;
            echo $tambah;
        }
        if (isset($_POST['kali'])) {
            $kali = $bil1 + $bil2;
            echo $tambah;
        }
        if (isset($_POST['bagi'])) {
            $bagi = $bil1 + $bil2;
            echo $tambah;
        }
        if (isset($_POST['modulus'])) {
            $modulus = $bil1 + $bil2;
            echo $tambah;
        }
    }
}
