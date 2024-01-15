export class Client {
    constructor(nom) {
        this.nom = nom
        this.panier = []
    }

    ajouterArticle(article, quantite) {
        if (article.quantiteEnStock >= quantite) {
            this.panier.push({ article, quantite });
        } else {
            console.log("Quantité demandée non disponible en stock.");
        }
    }

    passerCommande() {
        this.panier.forEach(item => {
            item.article.mettreAJourStock(item.quantite);
        });
        console.log("Commande passée avec succès.");
        this.panier = []; 
    }
}