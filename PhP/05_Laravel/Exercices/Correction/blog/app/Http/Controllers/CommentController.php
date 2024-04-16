<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function store(Request $request, $articleId): RedirectResponse {

        $validated = $request->validate([
            'content' => 'required|string|max:255'
        ]);

        Article::findOrFail($articleId)
            ->comments()
            ->create([...$validated, 'article_id' => $articleId, 'user_id' => Auth::id()]);
        return redirect()->back();
    }
}
