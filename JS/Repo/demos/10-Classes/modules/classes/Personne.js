export class Personne {
    constructor(nom, age, email) {
        this.nom = nom
        this.age = age
        this.email = email
    }

    Display() {
        console.log(`Nom : ${this.nom} - Age : ${this.age} - Email : ${this.email}`);
    }

    direBonjour() {
        console.log(`Bonjour, je suis : ${this.nom}`);
        // this.age = 31
    }

    direBonjourPersonne(personne) {
        console.log(`Bonjour ${personne.nom}`);
    }
}