<html>
<head>
    <title>Blog - @yield('title')</title>
</head>
<body>

<header>
    <nav>
        <ul>
            <li><a href="{{route('articles.index')}}">Accueil</a></li>
            @auth
            <li><a href="{{route('articles.create')}}">Créer article</a></li>
            @endauth

            @guest
            <li><a href="{{route('login')}}">Se connecter</a></li>
            <li><a href="{{route('register')}}">S'enregistrer</a></li>
            @endguest

            @auth
            <li>{{auth()->user()->name}}</li>
            <li>
                <form method="POST" action="{{ route('logout') }}">
                @csrf
                    <button>deconnexion</button>
                </form>
            </li>
            @endauth
        </ul>
    </nav>
</header>
@section('header')
@show

<div class="container">
    @yield('content')
</div>
</body>
</html>
