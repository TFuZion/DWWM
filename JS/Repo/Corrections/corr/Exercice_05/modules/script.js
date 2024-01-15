/*
Créer une classe Client avec gestion d'articles :
 Créez une classe Client qui peut ajouter des articles à un panier d'achat
 . Créez également une classe Article avec des propriétés telles
  que le nom, le prix, et la quantité en stock. Permettez au client
   de passer une commande et de mettre à jour le stock d'articles.
*/
import { Article } from "./classes/Article.js";
import { Client } from "./classes/Client.js";

let article1 = new Article("Téléphone", 500, 10)
let article2 = new Article("Ordinateur", 1500, 5)

let client = new Client("Toto")
client.ajouterArticle(article1, 5);
client.passerCommande();
