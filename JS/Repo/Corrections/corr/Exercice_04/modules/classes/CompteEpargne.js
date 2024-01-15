import { CompteBancaire } from "./CompteBancaire.js";

export class CompteEpargne extends CompteBancaire {
    constructor(solde, titulaire, tauxInteret) {
        super(solde, titulaire)
        this.tauxInteret = tauxInteret
    }

    CalculerInteret() {
        let interet = (this.solde * this.tauxInteret) / 100
        this.Deposer(interet)
    }
}