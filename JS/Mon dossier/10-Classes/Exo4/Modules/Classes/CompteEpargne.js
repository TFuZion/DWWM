import { CompteBancaire } from "./CompteBancaire.js";

export class CompteEpargne extends CompteBancaire {
  constructor (solde, titulaire, taux) {
    super(solde, titulaire)
    this.taux = taux
  }
  Interet() {
    this.solde = this.solde + (this.solde * this.taux / 100)
  }
}