export class Vehicule {
  constructor (marque, modele, km, annee) {
    this.marque = marque
    this.modele = modele
    this.km = km
    this.annee = annee
  }
  display() {
    return `${this.marque} - ${this.modele} - ${this.km}km - ${this.annee}`
  }
}