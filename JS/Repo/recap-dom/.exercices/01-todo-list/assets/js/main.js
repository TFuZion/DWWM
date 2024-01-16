/*
    Exercice 01

    Réaliser une application de liste de tâches. 

    Il devra être possible pour l'utilisateur d'ajouter des tâches via un input et un bouton d'ajout.

    Le listing des tâches sera affiché plus bas dans la page via une balise <ul> remplie de <li> (une pour chaque tâche)

    Chaque ligne du listing comprendra un bouton permettant de confirmer la fin de la tâche et de la retirer du listing des tâches.

    Le listing des tâches doit être présent dans la mémoire de l'ordinateur et affiché ans l'HTML (les deux variantes devront être avec un contenu identique, on ne doit pas perdre de données)
*/

const myTask = []

document.addEventListener('DOMContentLoaded', () =>{
    const inputAddTask = document.getElementById('inputAddTask')
    const addTask = document.getElementById('addTask')
    const listeTask = document.getElementById('listeTask')

    addTask.addEventListener('click', () => {
        const newLIElement = document.createElement('li')
        myTask.push(inputAddTask.value)
        newLIElement.innerHTML = inputAddTask.value


        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Tâche terminé";


        deleteButton.addEventListener('click', () => {
            newLIElement.remove()
        })
        newLIElement.appendChild(deleteButton);

        
        listeTask.appendChild(newLIElement)
    })
})

