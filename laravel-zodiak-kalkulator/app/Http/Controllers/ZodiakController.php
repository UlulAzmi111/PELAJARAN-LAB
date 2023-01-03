<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ZodiakController extends Controller
{
    public function tanggal()
    {
        $data = ['nama'=>'ulul', 'alamat'=>'darjo', 'sekolah'=>'smk 2'];
        return view('zodiak', ['contoh'=>$data]);
    }

    public function bulan(Request $request)
    {
        $tanggal = $request->tanggal;
        $bulan = $request->bulan;

        if ($tanggal > 0 && $tanggal <= 31 && $bulan > 0 && $bulan <= 12) {
            if ($bulan == 1) {
                if ($tanggal > 0 && $tanggal < 20) {
                    echo "Zodiak Anda Capricorn";
                } else {
                    echo "Zodiak Anda Aquarius";
                }
            }
            if ($bulan == 2) {
                if ($tanggal > 0 && $tanggal < 19) {
                    echo "Zodiak Anda Aquarius";
                } else {
                    echo "Zodiak Anda Pisces";
                }
            }
            if ($bulan == 3) {
                if ($tanggal > 0 && $tanggal <= 20) {
                    echo "Zodiak Anda Pisces";
                } else {
                    echo "Zodiak Anda Aries";
                }
            }
            if ($bulan == 4) {
                if ($tanggal > 0 && $tanggal < 20) {
                    echo "Zodiak Anda Aries";
                } else {
                    echo "Zodiak Anda Taurus";
                }
            }
            if ($bulan == 5) {
                if ($tanggal > 0 && $tanggal <= 20) {
                    echo "Zodiak Anda Taurus";
                } else {
                    echo "Zodiak Anda Gemini";
                }
            }
            if ($bulan == 6) {
                if ($tanggal > 0 && $tanggal <= 20) {
                    echo "Zodiak Anda Gemini";
                } else {
                    echo "Zodiak Anda Cancer";
                }
            }
            if ($bulan == 7) {
                if ($tanggal > 0 && $tanggal < 23) {
                    echo "Zodiak Anda Cancer";
                } else {
                    echo "Zodiak Anda Leo";
                }
            }
            if ($bulan == 8) {
                if ($tanggal > 0 && $tanggal < 23) {
                    echo "Zodiak Anda Leo";
                } else {
                    echo "Zodiak Anda Virgo";
                }
            }
            if ($bulan == 9) {
                if ($tanggal > 0 && $tanggal < 23) {
                    echo "Zodiak Anda Virgo";
                } else {
                    echo "Zodiak Anda Libra";
                }
            }
            if ($bulan == 10) {
                if ($tanggal > 0 && $tanggal < 23) {
                    echo "Zodiak Anda Libra";
                } else {
                    echo "Zodiak Anda Scorpio";
                }
            }
            if ($bulan == 11) {
                if ($tanggal > 0 && $tanggal < 22) {
                    echo "Zodiak Anda Scorpio";
                } else {
                    echo "Zodiak Anda Sagitarius";
                }
            }
            if ($bulan == 12) {
                if ($tanggal > 0 && $tanggal < 23) {
                    echo "Zodiak Anda Sagitarius";
                } else {
                    echo "Zodiak Anda Capricorn";
                }
            }
        } else {
            echo "Tanggal dan Bulan Salah";
        }
    }
}

