@extends('layout.app')

@section('title', 'Article - ' . substr($article->title, 0, 10))

@section('content')
    @if ($article)
        <h1>{{$article->title}}</h1>
        <p>{{$article->content}}</p>

        <hr>

        <h3>Comments - nombre: {{count($article->comments)}}</h3>

        @auth
        <form action="{{route('comments.store', ['articleId' => $article->id])}}" method="POST">
            @csrf
            <textarea name="content" id="" cols="30" rows="10" placeholder="Write a comment ...">
            </textarea>

            <button type="submit">send</button>
        </form>
        @endauth

    {{--    Affichage des commentaires sous l'article    --}}

        @foreach($article->comments as $comment)
            <div>
                <p>{{$comment->user->name}} - {{$comment->created_at}}</p>
                <p>{{$comment->content}}</p>
            </div>
        @endforeach

    @else
        <p>Article introuvable</p>
    @endif

@endsection
