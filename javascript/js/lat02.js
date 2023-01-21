// document.querySelector("#paragraf").innerHTML = "Saya Belajar Javascript";
// document.querySelector("#content").innerHTML = "<h1>Ganti Isi</h1>";

let tanggal = 5;
let bulan = 2;
let hasil = "salah";

if (tanggal > 0 && tanggal < 32  && bulan > 0 && bulan < 12) 
    hasil = "zodiak belum dibuat";
    if (bulan == 1) {
        if (tanggal > 0 && tanggal < 20) {
            hasil = "capricorn";
        } 
        hasil = "aquarius";
    } if (bulan == 2) {
        if (tanggal > 0 && tanggal < 19) {
            hasil = "aquarius";
        } 
        hasil = "pisces";
    } if (bulan == 3) {
        if (tanggal > 0 && tanggal < 21) {
            hasil = "pisces";
        }
        hasil = "aries";

    } if (bulan == 4) {
        if (tanggal > 0 && tanggal < 20) {
            hasil = "aries";
        }
        hasil = "taurus";

    } if (bulan == 5) {
        if (tanggal > 0 && tanggal < 21) {
            hasil = "taurus";
        }
        hasil = "gemini";

    } if (bulan == 6) {
        if (tanggal > 0 && tanggal < 21) {
            hasil = "gemini";
        }
        hasil = "cancer";

    } if (bulan == 7) {
        if (tanggal > 0 && tanggal < 23) {
            hasil = "cancer";
        } 
        hasil = "leo";

    } if (bulan == 8) {
        if (tanggal > 0 && tanggal < 23) {
            hasil = "cancer";
        } 
        hasil = "leo";

    } if (bulan == 9) {
        if (tanggal > 0 && tanggal < 23) {
            hasil = "cancer";
        } 
        hasil = "leo";

    } if (bulan == 10) {
        if (tanggal > 0 && tanggal < 23) {
            hasil = "cancer";
        } 
        hasil = "leo";

    } if (bulan == 11) {
        if (tanggal > 0 && tanggal < 23) {
            hasil = "cancer";
        } 
        hasil = "leo";

    } if (bulan == 12) {
        if (tanggal > 0 && tanggal < 23) {
            hasil = "cancer";
        } 
        hasil = "leo";
    }
    
    // console.log(hasil);

    document.querySelector("#content").innerHTML = `<h1>${hasil}</h1>`;
    document.querySelector("#content").innerHTML = "<h1>" + hasil + "</h1>";