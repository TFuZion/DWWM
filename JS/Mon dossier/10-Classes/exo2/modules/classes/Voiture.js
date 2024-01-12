import { Vehicule } from "./Vehicule.js";

export class Voiture extends Vehicule {
  constructor(marque, modele, km, annee, clim) {
    super(marque, modele, km, annee)
    this.clim = clim
  }
  display() {
    return `Voiture : ${super.display()} - ${this.clim}`
}
}