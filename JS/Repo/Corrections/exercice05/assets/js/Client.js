// Pour stocker des clients, il nous faut une classe de client
class Client {
    // Pour avoir un ID unique pour chaque client, on créé un compteur commun à tous les clients
    static count = 0;

    constructor(nom, prenom) {
        // Lors de la création d'une variable de type Client, on incrémente le compteur commun à tous les clients et on va fixer l'Id du client en court de création à la nouvelle valeur de ce compteur 
        this.id = ++Client.count;
        this.nom = nom;
        this.prenom = prenom;
        this.cart = [];
    }

    removeProduct(product) {
        const prodCherche = this.cart.find(p => p.product.id === product.id) ?? null;

        if (prodCherche) {
            prodCherche.quantity -= 1;
        }
    }

    // Il nous faut une méthode permettant d'ajouter des produits dans le panier du client spécifique
    addProduct(product) {
        // const orderItem = {
        //     product: product,
        //     quantity: quantity
        // };

        if (!this.cart.find(p => p.product.id === product.id)) {
            this.cart.push({
                product,
                quantity: 1
            });
        } else {
            // const prodFound = this.cart.find(p => p.product === product)
            // if (prodFound) prodFound.quantity += quantity;
            
            const found = this.cart.find(p => p.product === product)
            if (found) found.quantity += 1;
        }

    }

    // Mettre à jour, pour chaque produit présent dans le panier, le stock du magasin en se basant sur la quantité de produit présent dans le panier
    updateStock() {
        // for(const { product, quantity } of this.cart) {
        for(const orderItem of this.cart) {
            // const prod =  orderItem.product;
            // const quat = orderItem.quantity;

            const { product, quantity } = orderItem;

            product.stock -= quantity;
        }
    }

    // Permettre de compter le prix total, de le demander à l'utilisateur. En cas de paiement concluant, on met à jour le stock et on remercie le client pour son achat. Sinon, on lui indique qu'il y a eu un soucis quelconque...
    order() {
        // ON déclare une variable qui va servir de base pour le calcul de la somme totale
        let somme = 0;

        // On parcourt chaque élément du panier de la personne
        for (const orderItem of this.cart) {

            // Pour chaque élément du panier, on va ajouter à la somme le prix de ce produit multiplié par la quantité du produit dans le panier de la personne
            somme += orderItem.product.prix * orderItem.quantity;
        }

        // const laSommeReduce = this.cart.reduce((sum, element) => sum + element.product.prix * element.quantity);
        
        
        // On créé un faux paiement avec une simple confirmation
        if (confirm(`Votre somme totale à régler s'élève à ${Math.round(somme * 100) / 100} €`)) {

            // Si l'utilisateur la valide, on met à jour le stock du magasin
            this.updateStock()

            // On vide le panier du client
            this.cart = [];

            // On le remercie de son achat
            return "Merci pour votre achat !";
            
        } 
        // Sinon, on lui indique un soucis fictif. (pas encore implémenté)
        else return "Il y a eu un problème avec votre paiement..."
    }
}

export default Client;