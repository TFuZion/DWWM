import { Vehicule } from "./Vehicule.js";

export class Moto extends Vehicule {
  constructor(marque, modele, km, annee) {
    super(marque, modele, km, annee)
  }
  display() {
    return `Moto : ${super.display()}`
}
}