const result = document.querySelector(".result")

let userLetter,
    affichage

userLetter = prompt("Veuillez saisir une lettre")
userLetter = userLetter.toLowerCase()

if (userLetter == "a" ||
    userLetter == "e" ||
    userLetter == "i" ||
    userLetter == "o" ||
    userLetter == "u" ||
    userLetter == "y") {
        affichage = `La lettre ${userLetter} est une voyelle`
} else {
    affichage = `La lettre ${userLetter} est une consonne`
}

result.innerHTML = affichage