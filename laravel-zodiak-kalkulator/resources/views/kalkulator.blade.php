@extends('tugas')

@section('content')

<h1>Kalkulator</h1>

<form action="{{ url('calculator') }}" method="post">
    @csrf
    Bilangan 1 :
    <input type="number" name="bil1">
    Bilangan 2 :
    <input type="number" name="bil2">
    <br><br>
    <input type="submit" name="tambah" value="Tambah">
    <input type="submit" name="kurang" value="Kurang">
    <input type="submit" name="kali" value="Kali">
    <input type="submit" name="bagi" value="Bagi">
    <input type="submit" name="modulus" value="Modulus">
</form>

@endsection

@section('menu')
    <a href="/">Home</a>
@endsection