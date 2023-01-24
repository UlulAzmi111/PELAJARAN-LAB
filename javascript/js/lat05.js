

// let a = document.getElementsByName("tgl")[0].value;
// let b = document.querySelector("#tanggal").value;


function coba(a) {
    // let tampil = document.querySelector("#belajar");
    // tampil.innerHTML = a;
    // alert(a);

    console.log(a);
}

klik.addEventListener("click", coba(3));

// function kali(a,b) {
//     return a * b;
// }
// console.log(kali(3, 5));


// let perkalian = (a,b) => a * b;
// console.log(kali(4, 2));


// klik.onclick = function (a) {
//     alert(9);
// }


let zodiak = (bln, tgl) => {
    let hasil = "salah";
    if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
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

        if (bln == 12) {
            hasil = "Sagitarius";
            if (tgl > 21) {
            hasil = "Capricorn";
            }
        }
    }

    return hasil;
 }
 
 console.log(zodiak(bln, tgl));


 

let lulus = (nilai) => {
    let kkm = 80;
    let result = "Nilai Tidak Valid";

    if (nilai >= 0 && nilai <= 100) {
        result = "Tetap Semangat, Anda Belum Lulus !";
        if (nilai == 100) {
            result = "YEAY, Anda Lulus Dengan Nilai Sempurna !!!";
            }

        if (nilai < 100 && nilai >= kkm) {
            result = "Selamat Anda Lulus !";
        } 
    }

    return result;
}

// console.log(lulus(89));



let terbilang = (angka) => {
    var tulisan = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
    var hasil = "Milliaran!";
    var bagi = 0;
    angka = Math.abs(angka);

    if (angka < 12) {
        jawab = " " + tulisan[angka];
    } 
    
    else if (angka < 20) {
        jawab = terbilang(angka - 10 ) + " Belas";
    } 
    
    else if (angka < 100) {
        bagi = Math.floor(angka / 10);
        jawab = terbilang(bagi) + " Puluh" + terbilang(angka % 10);
    } 
    
    else if (angka < 200) {
        jawab = " Seratus" + terbilang(angka - 100);
    }

    else if (angka < 1000) {
        bagi = Math.floor(angka / 100);
        jawab = terbilang(bagi) + " Ratus" + terbilang(angka % 100);
    }

    else if (angka < 2000) {
        jawab = " Seribu" + terbilang(angka - 1000);
    }

    else if (angka < 1000000) {
        bagi = Math.floor(angka / 1000);
        jawab = terbilang(bagi) + " Ribu" + terbilang(angka % 1000);
    }

    else if (angka < 1000000000) {
        bagi = Math.floor(angka / 1000000);
        jawab = terbilang(bagi) + " Juta" + terbilang(angka % 1000000);
    }

    else if (angka < 1000000000000) {
        bagi = Math.floor(angka / 1000000000);
        jawab = terbilang(bagi) + " Milliar" + terbilang(angka % 1000000000);
    }

    else {
        jawab;
    }

    return jawab;
}

// console.log(terbilang(12345));
