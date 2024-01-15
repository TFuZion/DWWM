import CompteBancaire from "./CompteBancaire.js";
import CompteEpargne from "./CompteEpargne.js";

/*
    Exercice 4 :

    Créer une classe **CompteBancaire** : Créez une classe **CompteBancaire** avec des propriétés telles que le **solde** et le **titulaire du compte**. Ajoutez des méthodes pour **déposer de l'argent**, **retirer de l'argent** et **afficher le solde**.

    Créer une classe **CompteÉpargne** : Créez une classe **CompteÉpargne** qui hérite de la classe **CompteBancaire**. Ajoutez une propriété de **taux d'intérêt** et une méthode pour **calculer les intérêts sur le solde**.
*/

// Il nous faut une liste de compte pour manipuler des données. On aura deux comptes classiques et un compte épargne
const mesComptes = [
  new CompteBancaire("John DUPONT", 2_458),
  new CompteBancaire("Martha DUPONT", 200_458),
  new CompteEpargne("John DUPONT", 2_154_820, 14),
];

// Il nous faut une variable pour savoir quel compte est actuellement sélectionné par l'utilisateur
let compteSelectionne = null;

// On sécurise l'exécution des instructions en lien avec le DOM dans une fonction exécutée seulement après le rendu de la page
document.addEventListener("DOMContentLoaded", () => {
  // On stocke toutes les références vers des éléments présent dans la page via des constantes afin d'éviter de les perdre plus tard
  const accountSelect = document.querySelector("select#account");
  const accountDisplay = document.querySelector("div#account-display");
  const montantInput = document.querySelector("input#montant");
  const boutonRetirer = document.querySelector("button#retirer");
  const boutonDeposer = document.querySelector("button#deposer");
  const boutonInterets = document.querySelector("button#interets");

  // Pour chacun des compte de notre listing, on va générer une option dans le select
  mesComptes.forEach((c) => {
    const newOption = document.createElement("option"); // On créé un élément de type option
    newOption.value = c.id; // ON lui donne comme value l'id du compte en court d'itération
    newOption.textContent = `${c.titulaire} - ${c.id}`; // ON lui met en contenu textuel le texte suivant

    accountSelect.appendChild(newOption); // On oublie pas d'ajouter l'option au select sous peine de ne pas le retrouver dans l'affichage final
  });

  // On créé une fonction ayant pour but de vérifier le montant présent dans l'input du montant et de modifier les boutons Retrait / Depot en fonction du montant
  const updateDisplay = () => {
    const montant = +montantInput.value;
    if (montant > 0 && montant <= 2000) {
      boutonDeposer.disabled = false;
      boutonRetirer.disabled = compteSelectionne.solde < montant;
    } else {
      boutonDeposer.disabled = true;
      boutonRetirer.disabled = true;
    }


    boutonInterets.disabled = !(compteSelectionne instanceof CompteEpargne);
  };

  // On se branche sur le changement de compte sélectionné pour exécuter des instructions
  accountSelect.addEventListener("change", (e) => {
    const value = e.target.value; // On récupère l'ID actuellement en valeur de notre select

    compteSelectionne = mesComptes.find((c) => c.id === +value) ?? null; // On cherche un compte avec cet ID

    accountDisplay.textContent = ""; // ON met à jour l'affichage des informations du compte dans tous les cas

    // Si on a trouvé un compte
    if (compteSelectionne) {
      //On met à jour l'affichage de la div en fonction des infos du compte
      accountDisplay.textContent = compteSelectionne.afficher();
    }

    updateDisplay();

    // On remet à 0 le montant présent dans l'input
    montantInput.value = 0;
  });

  montantInput.addEventListener("input", updateDisplay);

  // Pour les boutons de retrait et de dépot, le code est sensiblement le même mais la méthode provoquée dans notre compte ne sera pas la même
  boutonRetirer.addEventListener("click", () => {
    const montant = +montantInput.value;
    compteSelectionne.retirer(montant);
    accountDisplay.textContent = compteSelectionne.afficher();
    updateDisplay();

  });

  boutonDeposer.addEventListener("click", () => {
    const montant = +montantInput.value;
    compteSelectionne.deposer(montant);
    accountDisplay.textContent = compteSelectionne.afficher();
    updateDisplay();

  });

  // Pour le bouton de calcul d'intéret, on va vérifier qu'on est sur un compte épargne. Si oui, on va provoquer sa méthode dédiée au calcul d'intérêts
  boutonInterets.addEventListener("click", () => {
    if (compteSelectionne instanceof CompteEpargne)
      compteSelectionne.calcInterets();
    accountDisplay.textContent = compteSelectionne.afficher();
  });
});
