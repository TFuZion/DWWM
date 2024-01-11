// {clé : valeur}
let personne1 = {
    nom: "Toto",
    age: 30,
    email: "toto@email.fr",
    direBonjour() {
        console.log(`Bonjour je suis ${this.nom}`);
    }
}

// Autre syntaxe
let personne2 = new Object()

personne2["nom"] = "Tata"
personne2["age"] = 30

// Déclencher une méthode de notre objet
personne1.direBonjour()

// Afficher la valeur de l'attribut email de notre objet
console.log(personne1.email);

// Vérifier la présence d'une clé dans un objet :
console.log("voiture" in personne1);

// Boucler sur toutes les clés de notre objet
for (let key in personne1) {
    console.log(`${key} : ${personne1[key]}`);
}