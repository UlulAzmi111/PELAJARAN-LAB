<?php 

    class Zodiak{

        public static function zodiak($b, $t){
            if ($b < 1 || $b > 12 || $t < 1 || $t > 31) {
                $hasil = "Tanggal atau Bulan Salah";
            } else {
                if ($b == 1) {
                    if ($t > 19 && $t < 31) {
                        $hasil = "Aquarius";
                    }
                    if ($t > 0 && $t < 20) {
                        $hasil = "Taurus";
                    }
                }

                if ($b == 2) {
                    if ($t > 19 && $t < 31) {
                        $hasil = "Gemini";
                    }
                    if ($t > 0 && $t < 20) {
                        $hasil = "Capricorn";
                    }
                }

                if ($b == 3) {
                    if ($t > 19 && $t < 31) {
                        $hasil = "Leo";
                    } 
                    if ($t > 0 && $t < 20) {
                        $hasil = "Libra";
                    }
                }
            }

            return $hasil;
        }
    }

?>