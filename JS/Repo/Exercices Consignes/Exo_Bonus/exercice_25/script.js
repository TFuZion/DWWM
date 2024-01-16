const result = document.querySelector(".result")

let etudiants = [
    {
        prenom: "José",
        nom: "Garcia",
        matieres: {
            Français: 16,
            Anglais: 7,
            Humour: 14
        }
    },
    {
        prenom: "Antoine",
        nom: "De Caunes",
        matieres: {
            Français: 15,
            Anglais: 6,
            Humour: 16,
            Informatique: 4,
            Sport: 10
        }
    },
]

let total,
    nbNotes,
    moyenne,
    affichage = "<h1>Notes des étudiants</h1>"

for (let etudiant of etudiants) {
    total = 0
    nbNotes = 0

    affichage += `<p>${etudiant.prenom} ${etudiant.nom}</p><ul>`

    for (let key in etudiant.matieres) {
        affichage += `<li>${key} : ${etudiant.matieres[key]}/20</li>`
        total += etudiant.matieres[key]
        nbNotes++
    }

    moyenne = total/nbNotes
    affichage += `</ul><p>Moyenne générale : ${moyenne.toFixed(2)}/20</p><hr>`
}

result.innerHTML = affichage