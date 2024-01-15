export class Personne {
    constructor(nom, prenom, age) {
        this.nom = nom
        this.prenom = prenom
        this.age = age
    }

    Display() {
        return `${this.prenom}, ${this.nom}, ${this.age}`
    }

    Parler(){
        return `Bonjour ${this.nom}`
    }
}