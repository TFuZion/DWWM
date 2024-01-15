import { Personne } from "./Personne.js";

export class Etudiant extends Personne {
    constructor(nom, prenom, age, numeroEtudiant) {
        super(nom, prenom, age)
        this.numeroEtudiant = numeroEtudiant
    }

    AfficherInfo() {
        return `étudiant : ${super.Display()}, ${this.numeroEtudiant}`
    }
}