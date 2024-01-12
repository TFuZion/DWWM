const result = document.querySelector(".result")

let affichage = "<h1>Les tables de multiplication de 1 à 10</h1>"

for (let i = 1; i <= 10; i++) {
    affichage += `<div class="card"><h5>Table de ${i}</h5><ul>`
    for (let j = 1; j <= 10; j++) {
        affichage += `<li>${i} x ${j} = ${i*j}</li>`
    }
    affichage += "</ul></div>"
}

result.innerHTML = affichage