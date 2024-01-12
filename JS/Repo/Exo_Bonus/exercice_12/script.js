const result = document.querySelector(".result")

let nb1,
    nb2,
    affichage

nb1 = Number(prompt("Veuillez saisir un chiffre/nombre"))
nb2 = Number(prompt("Veuillez saisir un chiffre/nombre"))

if (nb1%nb2 == 0) {
    affichage = `Le nombre ${nb1} est divisible par ${nb2}`
} else {
    affichage = `Le nombre ${nb1} n'est pas divisible par ${nb2}`
}

// Ternaire
// Sugar syntax
// condtion ? réponse si vrai : réponse si faux

nb1 % nb2 == 0 ? affichage = `Le nombre ${nb1} est divisible par ${nb2}` : affichage = `Le nombre ${nb1} n'est pas divisible par ${nb2}`

result.innerHTML = affichage