import Client from "./Client.js";
import Article from "./Article.js";

/**
 * Exercice 5 :
 * Créer une classe Client avec gestion d'articles : Créez une classe Client qui peut ajouter des articles à un panier d'achat. Créez également une classe Article avec des propriétés telles que le nom, le prix, et la quantité en stock. Permettez au client de passer une commande et de mettre à jour le stock d'articles.
 */

const mesProduits = [
    new Article("Fraise", 4.79, 500),
    new Article("Iphone 15", 1_399.89, 50),
    new Article("Playstation 5", 549.89, 100),
    new Article("Dentifrice", 2.19, 400)
];

const unClient = new Client("DUPONT", "John");

let produitSelectionne = null;

document.addEventListener('DOMContentLoaded', () => {
    const productCartTBody = document.querySelector('tbody#product-cart')

    productCartTBody.innerHTML = "";

    mesProduits.forEach(p => {
        const newTRElement = `<tr data-prod-id="${p.id}">
        <td>${p.id}</td>
        <td>${p.nom}</td>
        <td>${p.prix.toFixed(2)}€</td>
        <td>${p.stock}</td>
        <td>
        <button class="prod-sub" id="prod-${p.id}-sub">-</button>
        <span id="prod-${p.id}-qty">0</span>
        <button class="prod-add" id="prod-${p.id}-add">+</button>
        </td>
        </tr>`

        productCartTBody.innerHTML += newTRElement;
    })

    document.querySelectorAll('button.prod-sub').forEach(button => {
        button.addEventListener('click', (e) => {
            const prodId = button.parentElement.parentElement.dataset.prodId

            const produitCherche = mesProduits.find(p => p.id === +prodId)
            if(produitCherche) {
                unClient.removeProduct(produitCherche)
                button.parentElement.querySelector('span').textContent = unClient.cart.find(p => p.product === produitCherche).quantity;
            }
        })
    })

    document.querySelectorAll('button.prod-add').forEach(button => {
        button.addEventListener('click', (e) => {
            const prodId = button.parentElement.parentElement.dataset.prodId

            const produitCherche = mesProduits.find(p => p.id === +prodId)
            if(produitCherche) {
                unClient.addProduct(produitCherche)
                button.parentElement.querySelector('span').textContent = unClient.cart.find(p => p.product === produitCherche).quantity;
            }
        })
    })
})
