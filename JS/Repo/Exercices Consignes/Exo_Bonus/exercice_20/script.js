const result = document.querySelector(".result")

let affichage = "<h1>Compter jusqu'à 10</h1><ul>"

for (let i = 1; i <= 10; i++) {
    affichage += `<li>${i}</li>`
}

affichage += "</ul><p>Super, je sais compter jusqu'à 10</p>"

result.innerHTML = affichage