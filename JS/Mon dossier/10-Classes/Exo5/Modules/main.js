// Créer une classe **Client** avec gestion d'articles : Créez une classe **Client** qui peut **ajouter des articles** à un panier d'achat. Créez également une classe **Article** avec des propriétés telles que le **nom**, le **prix**, et la **quantité en stock**. Permettez au client de **passer une commande** et de **mettre à jour le stock d'articles**.

import { Client } from "./Classes/Client.js"
import { Fruit } from "./Classes/Fruit.js"

const accountFruit = document.querySelector("select#fruit")
const inputFruit = document.querySelector("input#nbFruit");
const boutonAjouter = document.querySelector("button#ajouterAuPanier")
const accountDisplay = document.querySelector("div#account-display");

let fruitSelect = null

const mesFruits = [
  new Fruit ("Pomme", 1.20, 35),
  new Fruit ("Banane", 1.50, 50),
  new Fruit ("Fraise", 2,  120),
  new Fruit ("Orange", 0.80,  70),
]


mesFruits.forEach((f) => {
  const newOption = document.createElement("option")
  newOption.value = f.id;
  newOption.textContent = `${f.nom} - ${f.stock}`
  accountFruit.appendChild(newOption)
})

accountFruit.addEventListener("change", (e) =>{
  const value = e.target.value
  fruitSelect = mesFruits.find((f) => f.id === +value) ?? null
})

const updateDisplay = () => {
  const nbFruit = +inputFruit.value;
  if (nbFruit > 0 && nbFruit <= Fruit.stock) {
    boutonAjouter.disabled = false;
  } else {
    boutonAjouter.disabled = true;
  }
};

inputFruit.addEventListener("input", updateDisplay)

boutonAjouter.addEventListener("click", () => {
  const nbFruit = +inputFruit.value;
  fruitSelect.ajouterFruit(nom, nbFruit);
  updateDisplay();

});