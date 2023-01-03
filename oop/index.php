<form action="" method="post">
    <input type="number" name="bulan" placeholder="Masukkan Bulan">
    <input type="number" name="tanggal" placeholder="Masukkan Tanggal">
    <input type="submit" name="submit" value="kirim">
</form>

<?php 

    require_once "zodiak.php";

    // $rumus = new Rumus;
    // echo $rumus->luaslingkaran(5);
    // echo '<br>';
    // echo $rumus->kelilingLingkaran(5);
    // echo '<br>';
    // echo $rumus->luasPersegiPanjang(5,3);
    // echo '<br>';
    // echo $rumus->kelilingPersegiPanjang(5,3);
    // echo '<br>';
    // echo $rumus->luasSegitiga(5,3);
    // echo '<br>';
    // echo $rumus->kelilingSegitiga(3);

    // $zodiak = new Zodiak;

    // echo $zodiak->zodiak(1,1);


    if (isset($_POST['submit'])) {
        $b = $_POST['bulan'];
        $t = $_POST['tanggal'];
        echo Zodiak::zodiak($b,$t);
    }

        
?>