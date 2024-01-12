export class Voiture {
  constructor (marque, modele, vitesse) {
    this.marque = marque
    this.modele = modele
    this.vitesse = vitesse
  }
  acceleration() {
    this.vitesse += 10
    console.log(`La ${this.marque} à accéléré de 10 km/h elle est maintenat à ${this.vitesse} km/h`);
  }

  virage() {
    this.vitesse -= 5
    console.log(`La ${this.marque} à tourner et à donc reduis sa vitesse de 5 km/h elle est maintenat à ${this.vitesse} km/h`);
  }
}