export class Client{
  constructor (nom) {
    this.nom = nom
    this.panier = []
  }
  ajouterFruit(fruit, quantite) {
    if (fruit.stock >= quantite) {
      this.panier.push({fruit, quantite})
    } else {
      console.log("Quantité demandée non disponible en stock.");
    }
  }

  passerLaCommande(){
    this.panier.forEach(item => {
      item.article.MaJ(item.quantite)
    })
    console.log("Commande passée avec succès.");
    this.panier = []; 
  }
}