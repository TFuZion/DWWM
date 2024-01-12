import { Personne } from "./Personne.js";

export class Etudiant extends Personne {
  constructor (nom, prenom, age, nmrEtudiant) {
    super(nom, prenom, age)
    this.nmrEtudiant = nmrEtudiant
  }
  Info() {
    return `Etudiant n°${this.nmrEtudiant} - ${this.nom} ${this.prenom} - ${this.age} ans`
  }
}