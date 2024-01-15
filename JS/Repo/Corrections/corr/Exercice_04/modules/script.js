/*
Créer une classe CompteBancaire : Créez une classe CompteBancaire avec des propriétés telles que le solde et le titulaire du compte.
 Ajoutez des méthodes pour déposer de l'argent,
 retirer de l'argent et afficher le solde.

Créer une classe CompteÉpargne : Créez une classe CompteÉpargne
 qui hérite de la classe CompteBancaire. Ajoutez une propriété de taux
  d'intérêt et une méthode pour calculer les intérêts sur le solde.
*/

import { CompteBancaire } from "./classes/CompteBancaire.js";
import { CompteEpargne } from "./classes/CompteEpargne.js";

let compte1 = new CompteBancaire(1000, "Toto")
compte1.Deposer(500)
compte1.Retirer(200)
console.log(compte1.AfficherSolde());

let compte2 = new CompteEpargne(2000, "Tata", 4)
compte2.CalculerInteret()
console.log(compte2.AfficherSolde());

Depot = () => {
  console.log("test");
}

