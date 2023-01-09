let isi = document.querySelector("#isi");
isi.innerHTML = "<h1>Soto</h1>" + "<p>Deskripsi Soto</p>" + "<img src='../gambar/baksoo.jpg'>";

isi.innerHTML = "<h1>Rawon</h1>";
isi.innerHTML += "<p>Deskripsi Rawon</p>";
isi.innerHTML += "<img src='../gambar/baksoo'>";


for (let i = 0; i < 10; i++) {
    // console.log(i);
    document.querySelector("#content").innerHTML += "<h1>" + i + "</h1>";
}

let table = document.querySelector("#table");

// table.innerHTML = "<table>" 
//                 + "<thead><tr><th>Nomor</th></tr></thead>"
//                 + "<tbody>"
//                 + "<tr><td>1</td></tr>"
//                 + "<tr><td>2</td></tr>"
//                 + "<tr><td>3</td></tr>"
//                 + "<tr><td>4</td></tr>"
//                 + "<tr><td>5</td></tr>"
//                 + "</tbody>"
//                 + "</table>";


table.innerHTML = "<table><thead><tr><th>No</th></tr></thead><tbody>";
// table.innerHTML += "<tr><td>1</td></tr>";
// table.innerHTML += "<tr><td>2</td></tr>";
// table.innerHTML += "<tr><td>3</td></tr>";

for (let i = 0; i < 8; i++) {
    table. innerHTML += "<tr><td>" + i + "</tr></td>";
    
}

table.innerHTML += "</tbody></table>";





