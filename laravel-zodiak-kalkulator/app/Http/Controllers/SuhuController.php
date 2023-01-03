<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SuhuController extends Controller
{
    public function panas()
    {
        return "Suhu";
    }

    public function dingin(Request $request)
    {
        $suhu1 = $request->suhu1;
        $suhu2 = $request->suhu2;

        if (isset($_POST['suhu'])) {
            # code...
        }
    }
}
