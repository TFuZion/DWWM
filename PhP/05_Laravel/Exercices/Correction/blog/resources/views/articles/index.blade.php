@extends('layout.app')

@section('title', 'Articles')

@section('header')
    @parent

    <p>This is appended to the master sidebar.</p>
@endsection

@section('content')
    @foreach($articles as $article)
        <div>
            <a href="{{route('articles.show', [$article])}}">
                <h3>{{$article->title}}</h3>
                <p>{{substr($article->content, 0, 20)}} {{strlen($article->content) > 20 ? '...' : ''}}</p>
            </a>

        </div>
    @endforeach
@endsection
