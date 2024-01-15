import CompteBancaire from "./CompteBancaire.js";

class CompteEpargne extends CompteBancaire {
    constructor(titulaire, solde, tauxInterets) {
        super(titulaire, solde);

        // Si on veut sécuriser la génération des comptes épargnes, on peut vérifier dans le constructeur que les valeurs envoyées à tauxInterets sont bornées correctement
        if (tauxInterets > 0 && tauxInterets <= 100) {
            this.tauxInterets = tauxInterets;
        } else this.tauxInterets = 4;
    }

    calcInterets() {
        // this.solde *= this.tauxInterets + 1.0; 
        this.solde += (this.tauxInterets * this.solde) / 100; 
    }

    afficher() {
        return `Le compte épargne de ${this.titulaire} possède un solde de ${Math.round(this.solde * 100) / 100}`;
    }
}

export default CompteEpargne;