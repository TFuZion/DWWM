<h1>CREATE</h1>

<form method="POST" action="/contact">
    @csrf
    <div>
        <label for="name">Nom</label>
        <input id="name" type="text" name="name">
    </div>

    <div>
        <label for="email">Adresse e-mail</label>
        <input id="email" type="email" name="email">
    </div>

    <div>
        <label for="subject">Objet</label>
        <input id="subject" type="text" name="subject">
    </div>

    <div>
        <label for="message">Message</label>
        <textarea id="message" name="message"></textarea>
    </div>

    <div>
        <button type="submit">Envoyer</button>
    </div>
</form>

