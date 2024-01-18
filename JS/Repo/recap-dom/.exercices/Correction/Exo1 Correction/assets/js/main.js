/*
    Exercice 01

    Réaliser une application de liste de tâches. 

    Il devra être possible pour l'utilisateur d'ajouter des tâches via un input et un bouton d'ajout.

    Le listing des tâches sera affiché plus bas dans la page via une balise <ul> remplie de <li> (une pour chaque tâche)

    Chaque ligne du listing comprendra un bouton permettant de confirmer la fin de la tâche et de la retirer du listing des tâches.

    Le listing des tâches doit être présent dans la mémoire de l'ordinateur et affiché ans l'HTML (les deux variantes devront être avec un contenu identique, on ne doit pas perdre de données)
*/

// Pour stocker les tâches à venir, il nous faut un tableau de tâches. De base, il est vide
let taskList = [];

// Pour avoir un id de tâche unique, on va faire un compteur
let count = 0;

// Après le chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  // ON récupère toutes les références d'éléments présents dans la page
  const taskContentElement = document.querySelector("textarea#task-content");
  const addTaskButton = document.querySelector("button#task-add");
  const taskDisplayUL = document.querySelector("ul#task-display");

  // On créé un écouteur de clic sur le bouton d'ajout
  addTaskButton.addEventListener("click", () => {
    // A chaque clic, on va récupérer la valeur présente dans la textarea
    const value = taskContentElement.value;

    // ON va créer une tâche
    const newTask = {
      id: ++count,
      text: value,
    };

    // Que l'on va ajouter dans le listing
    taskList.push(newTask);

    // ON créé un <li>
    const newLIElement = document.createElement("li");

    // ON fixe son texte à ce qui est présent dans le textarea
    newLIElement.textContent = value;

    // On créé un bouton de suppréssion
    const deleteBTN = document.createElement("button");

    // Avec le texte suivante
    deleteBTN.textContent = "Terminé !";

    // Quand l'utilisateur appuiera sur ce bouton...
    deleteBTN.addEventListener("click", () => {
      // On supprimera la ligne en court de création
      newLIElement.remove();

      // ON changemera le tableau des tâches pour qu'il ne comptienne que celles n'étant pas celle en court d'ajout
      taskList = taskList.filter((blabla) => blabla.id !== newTask.id);

      // On affichera le tableau
      console.log(taskList);
    });

    // On ajoute à notre <li> le bouton
    newLIElement.appendChild(deleteBTN);

    // ON ajoute à notre <ul> le li en court de création
    taskDisplayUL.appendChild(newLIElement);

    // ON re-initialise la valeur du textarea
    taskContentElement.value = "";

    // ON affiche le tableau
    console.log(taskList);
  });
});
