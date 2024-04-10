@extends('layouts.layout')

@section('content')
    <h1>Bienvenue sur mon site</h1>

    <?php
    $nav = ['welcome' => 'Accueil', 'apropos' => 'A propos', 'contact' => 'Contact']
    ?>
    <ul>
        @foreach($nav as $key => $value)
            <li><a>{{$value}}</a></li>
        @endforeach
    </ul>
@endsection
