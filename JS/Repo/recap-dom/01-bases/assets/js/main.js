import Product from "./Product.js";

// function maFunc() {
//     const monSpan = document.getElementById('span-a')
//     monSpan.textContent = "Nouvelle valeur du span";
// }

// const maFuncConst = () => {
//     const monSpan = document.getElementById('span-a')
//     monSpan.textContent = "Nouvelle valeur du span";
// }

const direBonjour = (value = 123) => {
  console.log("Bonjour, la valeur du span est " + value);
};

const mesProduits = [
  new Product("Banane", 1.79),
  new Product("Fraise", 4.79, 50),
  new Product("Apple Vision", 3489.89, 10),
];

document.addEventListener("DOMContentLoaded", () => {
  // Pour obtenir un élément de notre page (dans l'HTML) sous forme d'élément Javascript, il nous faut aller le rechercher. Pour rechercher par ID, on utilise .getElementById()
  const monSpan = document.getElementById("span-a");

  // Une fois récupéré, on peut modifier sa valeur textuelle via .textContent
  monSpan.textContent = "Nouvelle valeur du span";

  // On peut passer ses attributs en paramètres de fonction comme s'il s'agissait de variables normales
  direBonjour(monSpan.textContent);
  direBonjour();

  // Pour retirer un élément HTML de notre page, on va utiliser la méthode .remove() disponible dans HTMLElement, qui est le type retour de .getElementById()
  monSpan.remove();

  // On peut également obtenir un élément de notre page via .querySelector()
  const divResult = document.querySelector("div#result");

  // Pour ajouter un élément dans notre page, on peut utiliser .appendChild(). Pour cela, on a besoin d'un parent, qui doit posséder une balise fermante (ici une div fera l'affaire), et la méthode ajoutera l'élément à la fin de ce parent (avant sa balise fermante)
  divResult.appendChild(monSpan);

  // Pour pouvoir, à partir d'une série de données, réaliser un ajout dans le DOM, on peut, un par un parcourir le listing des éléments et agir sur l'élément en court d'itération. Pour cela, on va utiliser une boucle de type for...each. En Javascript, on peut faire cela via la méthode d'Array .forEach()
  mesProduits.forEach((p) => {
    // p aura pour valeur l'élément en court d'itération

    // On stocke la référence de la liste que l'on veut peupler
    const productsList = document.querySelector("ul#products-list");

    // On créé un élément de type <li>
    const newLIElement = document.createElement("li");

    // On fixe le contenu en texte de notre <li>
    // newLIElement.textContent = `${p.id}: ${p.nom} (Stock: ${p.stock}, Prix: ${p.prix}€)`;
    newLIElement.innerHTML = `<b>${p.id}</b>: ${p.nom} (Stock: <b>${p.stock}</b>, Prix: <b>${p.prix}</b>€)`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.addEventListener("click", () => {
      newLIElement.remove();
    });
    newLIElement.appendChild(deleteButton);

    // On ajoute le <li> en fin de notre <ul>
    productsList.appendChild(newLIElement);
  });

  const spanMdP = document.getElementById("mot-de-passe")

//   spanMdP.style = "background-color: yellow";
//   spanMdP.style = "color: white";
//   spanMdP.style.backgroundColor = "red";
//   spanMdP.style['background-color'] = "red";
//   spanMdP.style['color'] = "white";

  const uneFonction = () => {
    spanMdP.classList.toggle('blanc-sur-rouge')
    console.log("On exécute le code de uneFonction()");
}

    spanMdP.addEventListener('mouseenter', uneFonction)
    
    spanMdP.addEventListener('mouseleave', uneFonction)
});
