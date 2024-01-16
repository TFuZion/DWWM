const result = document.querySelector(".result")

let nbHabitant = 96809,
    annee = 2015,
    nbAnnee = 0,
    taux = 0.89,
    affichage = "<h1>Accroissement de la population de Tourcoing</h1>"

while (nbHabitant < 120000) {
    nbHabitant += nbHabitant * (taux/100)
    affichage += `<p>En ${++annee}, il y aura ${Math.round(nbHabitant)} habitants</p><hr>`
    nbAnnee++
}

affichage += `<p>Avec un taux d'accroissement de la population de ${taux}%, en ${annee},
il y aura ${Math.round(nbHabitant)} habitants dans la ville de Tourcoing. Il aura fallu ${nbAnnee} années</p>`

result.innerHTML = affichage