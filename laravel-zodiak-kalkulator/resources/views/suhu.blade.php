@extends('tugas')

@section('content')

<h1>Konversi Suhu</h1>

<form action="{{ url('temperatur') }}" method="post">
    @csrf
   <select name="suhu">
    <option value="celcius">Celcius</option>
    <option value="fahrenheit">Fahrenheit</option>
    <option value="reamur">Reamur</option>
    <option value="kelvin">Kelvin</option>
   </select>
</form>

@endsection