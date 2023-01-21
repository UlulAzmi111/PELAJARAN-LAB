function zodiak(bln, tgl) {
    let bulan = document.getElementById("bulan").value;
    let tanggal = document.getElementById("tanggal").value;
    let hasil = "salah";

    if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
        hasil = "zodiak belum dibuat";
        if (bln == 1) {
            hasil = "Capricorn";
            if (tgl > 19) {
            hasil = "Aquarius";
            }
        }

        if (bln == 2 && tgl < 30) {
            hasil= "Aquarius";
            if (tgl > 18 ) {
            hasil = "Pisces";
            }
        }

        if (bln == 3) {
            hasil= "Pisces";
            if (tgl > 20 ) {
            hasil = "Aries";
            }
        }

        if (bln == 4 && tgl < 31) {
            hasil = "Aries";
            if (tgl > 19) {
            hasil = "Taurus";
            }
        }

        if (bln == 5) {
            hasil = "Taurus";
            if (tgl > 20) {
            hasil = "Gemini";
            }
        }

        if (bln == 6 && tgl < 31) {
            hasil = "Gemini";
            if (tgl > 20) {
            hasil = "Cancer";
            }
        }

        if (bln == 7) {
            hasil = "Cancer";
            if (tgl > 22) {
            hasil = "Leo";
            }
        }

        if (bln == 8) {
            hasil = "Leo";
            if (tgl > 22) {
            hasil = "Virgo";
            }
        }

        if (bln == 9 && tgl < 31) {
            hasil = "Virgo";
            if (tgl > 22) {
            hasil = "Libra";
            }
        }

        if (bln == 10) {
            hasil = "Libra";
            if (tgl > 22) {
            hasil = "Scorpio";
            }
        }

        if (bln == 11 && tgl < 31) {
            hasil = "Scorpio";
            if (tgl > 21) {
            hasil = "Sagitarius";
            }
        }

        // if (bln == 12) {
        //     hasil = "Sagitarius";
        //     if (tgl > 21) {
        //     hasil = "Capricorn";
        //     }
        // }
     }
    console.log(hasil);
    
}

// zodiak(11, 21);



function lulus(nilai) {
    let kkm = 80;
    let hasil = "Nilai Tidak Valid";

    if (nilai >= 0 && nilai <= 100) {
        hasil = "Tetap Semangat, Anda Belum Lulus !";
        if (nilai == 100) {
            hasil = "YEAY, Anda Lulus Dengan Nilai Sempurna !!!";
            }

        if (nilai < 100 && nilai >= kkm) {
            hasil = "Selamat Anda Lulus !";
        } 
    }
    console.log(hasil);
}

lulus(100);



function terbilang(angka) {

    var tulisan = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
    var hasil = "Milliaran!";
    var bagi = 0;
    angka = Math.abs(angka);

    if (angka < 12) {
        hasil = " " + tulisan[angka];
    } 
    
    else if (angka < 20) {
        hasil = terbilang(angka - 10 ) + " Belas";
    } 
    
    else if (angka < 100) {
        bagi = Math.floor(angka / 10);
        hasil = terbilang(bagi) + " Puluh" + terbilang(angka % 10);
    } 
    
    else if (angka < 200) {
        hasil = " Seratus" + terbilang(angka - 100);
    }

    else if (angka < 1000) {
        bagi = Math.floor(angka / 100);
        hasil = terbilang(bagi) + " Ratus" + terbilang(angka % 100);
    }

    else if (angka < 2000) {
        hasil = " Seribu" + terbilang(angka - 1000);
    }

    else if (angka < 1000000) {
        bagi = Math.floor(angka / 1000);
        hasil = terbilang(bagi) + " Ribu" + terbilang(angka % 1000);
    }

    else if (angka < 1000000000) {
        bagi = Math.floor(angka / 1000000);
        hasil = terbilang(bagi) + " Juta" + terbilang(angka % 1000000);
    }

    else if (angka < 1000000000000) {
        bagi = Math.floor(angka / 1000000000);
        hasil = terbilang(bagi) + " Milliar" + terbilang(angka % 1000000000);
    }

    else {
        hasil;
    }

    return hasil;
}

console.log(terbilang(13579))



function prima(bilangan) {
    let hasil = "BUKAN PRIMA";
    let modulus = 0;
    for (let i = 1; i <= bilangan; i++) {
            if (bilangan%i == 0) {
                modulus++;
        }
    }
    if (modulus == 2) {
        hasil = "PRIMA";
    }
    console.log(hasil);
}

prima(67);