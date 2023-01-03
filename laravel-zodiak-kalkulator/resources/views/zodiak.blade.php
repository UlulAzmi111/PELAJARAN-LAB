@extends('tugas')

@section('content')

<h1>Zodiak</h1>
@foreach ($contoh as $c)
    <h2>{{ $c }}</h2>
@endforeach

<form action="{{ url('zodiac') }}" method="post">
    @csrf
    Tanggal :
    <input type="number" name="tanggal">
    Bulan :
    <input type="number" name="bulan">
    <input type="submit" name="simpan" value="Kirim">
</form>

@endsection