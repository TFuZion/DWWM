/*
Exercice 1 :
Créer une classe Personne : Créez une classe Personne avec des propriétés
 telles que nom, prénom et âge. Instanciez plusieurs objets de
  cette classe et affichez leurs informations.

Ajouter une méthode parler : Ajoutez une méthode parler à la classe
 Personne qui affiche un message de salutation avec le nom de la
  personne.

Créer une classe Étudiant : Créez une classe Étudiant qui hérite
 de la classe Personne. Ajoutez une propriété supplémentaire,
  comme le numéro d'étudiant, et une méthode pour afficher l'information
   de l'étudiant.
*/
import { Personne } from "./classes/Personne.js";
import { Etudiant } from "./classes/Etudiant.js";

let personne1 = new Personne("Doe", "John", 30)
let etudiant = new Etudiant("Toto", "Tata", 25, 125)

console.log(personne1.Parler());
console.log(etudiant.AfficherInfo());
