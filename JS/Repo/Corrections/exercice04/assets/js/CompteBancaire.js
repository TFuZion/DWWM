class CompteBancaire {
    static count = 0;

    constructor(titulaire, solde) {
        this.id = ++CompteBancaire.count;
        this.titulaire = titulaire;
        this.solde = solde;
    }

    deposer(montant) {
        this.solde += montant;
        return this.solde;
    }

    retirer(montant) {
        if (this.solde - montant >= 0) this.solde -= montant;
        return this.solde;
    }

    afficher() {
        return `Le compte bancaire de ${this.titulaire} possède un solde de ${Math.round(this.solde * 100) / 100}`;
    }
}

export default CompteBancaire;