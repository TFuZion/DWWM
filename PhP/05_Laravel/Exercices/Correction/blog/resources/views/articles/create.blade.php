@extends('layout.app')

@section('title', 'Articles')

@section('header')
    <p>Bienvenue sur la création d'article</p>
@endsection

@section('content')
    <form method="POST" action="{{route("articles.store")}}">
        @csrf
        <input type="text" id="title" name="title" placeholder="title">
        <textarea name="content" id="" cols="30" rows="10" placeholder="content"></textarea>
        <button type="submit">save</button>
    </form>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
@endsection
