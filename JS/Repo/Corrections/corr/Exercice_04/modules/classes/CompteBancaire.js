export class CompteBancaire {
    constructor(solde, titulaire) {
        this.solde = solde 
        this.titulaire = titulaire
    }

    Deposer(montant){
        this.solde += montant
    }

    Retirer(montant){
        if (montant <= this.solde) {
            this.solde -= montant
        } else {
            alert("Solde insuffisant")
        }
    }

    AfficherSolde() {
        return `Solde de ${this.titulaire} : ${this.solde} euros`
    }
}