let buah = ["mangga", "jambu", "jeruk", "sawo", "durian", "apel"];
console.log(buah);
document.querySelector("#tampil").innerHTML = buah[4];


buah.forEach(element =>{
    console.log(element);
});


function element(buah) {
    console.log(buah);
}
element(buah);


function kali(a,b) {
    return a * b;
}
function tampil(a) {
    return a;
}

// console.log(kali(2,3));
// console.log(tampil(1));


let kali = (a,b) => {
    return a * b;
}
console.log(kali(1,11));


let tampil = a => {
    console.log(tampil(7)); 
}
tampil("belajar");


