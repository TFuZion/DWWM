// Pour pouvoir créer des personnes, il nous faut avoir accès aux classes. Pour cela, on va importer nos classes
import Person from "./Person.js";
import Student from "./Student.js";

/* Exercice 3 :

Créer une classe Personne : Créez une classe **Personne** avec des propriétés telles que **nom**, **prénom** et **âge**. Instanciez plusieurs objets de cette classe et affichez leurs **informations**.

Ajouter une méthode **parler** : Ajoutez une méthode **parler** à la classe Personne qui affiche un message de salutation avec le nom de la personne.

Créer une classe **Étudiant** : Créez une classe **Étudiant** qui hérite de la classe **Personne**. Ajoutez une propriété supplémentaire, comme le **numéro d'étudiant**, et une méthode pour **afficher l'information de l'étudiant**.
*/

// On créé un tableau de personnes. Grâce à la flexibilité du JS, on peut stocker ce que l'on veut dedans, des personnes et des étudiants
const mesPersonnes = [
    new Person("DUPONT", "John", 47),
    new Person("DUPONT", "Martha", 42),
    new Student("DUPONT", "Chloée", 21, Math.floor(Math.random() * 1_000))
];
// Il nous faut également garder en mémoire la potentielle personne actuellement sélectionnée par l'utilisateur
let personneSelectionnee = null;



document.addEventListener("DOMContentLoaded", () => {
    // Tout le code demandant d'aller piocher des références au niveau de notre HTML doit se trouver à la suite du chargement du DOM. On peut l'attendre en se branchant sur le bon évènement au niveau du parent 'document'

    // On récupère les références de nos éléments de la page en tant que constante pour éviter d'en perdre la trace via une re-affectation
    const studentSelect = document.querySelector('select#student')
    const printButton = document.querySelector('button#print-button');
    const printResult = document.querySelector('div#print-result');


    // Pour chaque personne, il va falloir ajouter une option dans notre select. Pour cela, on parcourt notre tableau et on génère une option de select pour chaque élément, que l'on ajoute en fin du select
    mesPersonnes.forEach(p => {
        const newOption = document.createElement('option')
        newOption.value = p.id;
        newOption.textContent = `${p.prenom} ${p.nom}`;
        studentSelect.appendChild(newOption);
    });
    
    
    // En cas de changement de valeur de notre select
    studentSelect.addEventListener('change', (toto) => {
        const value = toto.target.value; // On récupère la valeur de notre option

        // On cherche une personne correspondant à notre valeur
        personneSelectionnee = mesPersonnes.find(p => p.id === +value) ?? null;

        // Si l'on a trouvé personne, on va changer le statut du .disabled
        printButton.disabled = !personneSelectionnee;

        // On re-initialise le contenu de l'affichage
        printResult.textContent = "";

        // if (value != "") {
        // if (value) {
        //     printButton.disabled = false;
        // } else {
        //     printButton.disabled = true;
        // }
    });

    // En cas de clic sur le bouton Afficher, on va changer l'affichage du message en bas de page
    printButton.addEventListener('click', () => {
        printResult.textContent = personneSelectionnee.speak();
    });

})