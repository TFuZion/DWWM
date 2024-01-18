document.addEventListener("DOMContentLoaded", () => {
  const span1 = document.querySelector("span#span-1");
  const changeSpanBTN = document.querySelector("button#change-span");
  const searchInput = document.querySelector("input#search-input");
  // Pour stocker les futurs intervals / timeout, on va faire des variables qui seront
  let unTimeout = null;
  let unInterval = null;

  // On créé une fonction qui permet le changement de la valeur d'un span
  const changeValue = () => {
    span1.textContent = "Nouvelle valeur";
    console.log("Je change la valeur");
  };

  // Quand on clique sur le bouton...
  changeSpanBTN.addEventListener("click", () => {
    // On va demander d'éxecuter la fonction de changement de valeur, mais de façon différée (au bout de 1000ms => 1 seconde)
    setTimeout(changeValue, 1000);
  });

  // En cas de réalisation d'une série d'instruction différée à la pause / fin de saisie d'un texte, on va devoir n'éxecuter le code différé qu'une fois...
  searchInput.addEventListener("input", () => {
    // Pour cela, on réalise un 'deboucing'. Un deboucing est un procédé permettant de remplacer un timeout par un autre pour chaque input utilisateur. Cela nous amène à n'avoir au bout du compte qu'un seule timeout, qui sera exécuté au bout d'un certain temps.
    if (unTimeout) clearTimeout(unTimeout); // Si on a déjà un timeout, on empêche son exécution puis un relance un nouveau timeout
    unTimeout = setTimeout(() => {
      localStorage.setItem("valeurInput", searchInput.value);
      console.log(searchInput.value);
    }, 1000);
  });

  // Pour notre compteur, il nous faut une variable commune à toutes les itération de notre interval
  let compteur = 0;

  // On va définir un interval (une fonction exécutée tous les XXX millisecondes à partir de XXX milisecondes)
  unInterval = setInterval(() => {
    console.log(++compteur); // On incrémente et affiche le compteur
    // console.log(new Date())
    if (compteur >= 10) clearInterval(unInterval); // Si le compteur a dépassé la valeur 9, alors on supprime son exécution future (on s'arretera donc à la 10e valeur)
  }, 200);
});
