const result = document.querySelector(".result")

let affichage = "<h2>Menu et sous menu</h2>"

for (let i = 1; i <= 3; i++) {
    affichage += `<p>Chapitre ${i} :<ul>`
    for (let j = 1; j <= 3; j++) {
        affichage += `<li>Partie ${i}.${j}</li>`
    }
    affichage += "</ul>"
}

result.innerHTML = affichage