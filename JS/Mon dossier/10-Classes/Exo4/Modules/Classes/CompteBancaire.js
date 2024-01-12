export class CompteBancaire {
  constructor (solde, titulaire) {
    this.solde = solde
    this.titulaire = titulaire
  }
  Sold(){
    console.log(`Votre solde est de : ${this.solde}`);
  }
  Depot(){
    let depot = +prompt ("Combien voulez-vous déposer :")
    this.solde = this.solde + depot
  }
  Retrait(){
    let retrait = +prompt ("Combien voulez-vous retirer :")
    this.solde = this.solde - retrait
  }
}