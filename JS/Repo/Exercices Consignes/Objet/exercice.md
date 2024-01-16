```javascript

const livre = {
  titre: "Le Seigneur des Anneaux",
  auteur: "J.R.R. Tolkien",
  anneePublication: 1954,
  estDisponible: true,
  emprunter: function() {
    this.estDisponible = false;
    console.log("Le livre a été emprunté.");
  },
  retourner: function() {
    this.estDisponible = true;
    console.log("Le livre a été retourné.");
  }
};
```

Maintenant, voici quelques tâches que vous pouvez effectuer pour manipuler cet objet :

1. Affichez le titre du livre.
2. Vérifiez si le livre est disponible et affichez "Disponible" ou "Non disponible" en fonction de sa disponibilité.
3. Empruntez le livre en appelant la méthode `emprunter()`.
4. Vérifiez à nouveau si le livre est disponible après l'avoir emprunté.
5. Retournez le livre en appelant la méthode `retourner()`.
6. Vérifiez à nouveau si le livre est disponible après l'avoir retourné.