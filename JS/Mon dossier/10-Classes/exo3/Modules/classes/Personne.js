export class Personne {
  constructor (nom, prenom, age) {
    this.nom = nom
    this.prenom = prenom
    this.age = age
  }
  Parler() {
    return `Bonjour ${this.nom} ${this.prenom}`
  }
}