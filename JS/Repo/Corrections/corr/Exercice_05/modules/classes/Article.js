export class Article {
    constructor(nom, prix, quantiteEnStock) {
        this.nom = nom
        this.prix = prix
        this.quantiteEnStock= quantiteEnStock
    }

    mettreAJourStock(quantite) {
        this.quantiteEnStock -= quantite;
    }
}