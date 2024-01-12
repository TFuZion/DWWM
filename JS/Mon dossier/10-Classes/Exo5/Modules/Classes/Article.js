import { Client } from "./Client.js";

export class Article extends Client {
  constructor (nom, prix, stock){
    this.nom = nom
    this.prix = prix
    this.stock = stock
  }
  Commande(){
    let commande
  }
  MaJ(){

  }
}