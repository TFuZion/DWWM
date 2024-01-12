const result = document.querySelector(".result")

let age,
    affichage

age = Number(prompt("Veuillez saisir l'age de votre enfant"))

if (age > 0) {
    if (age < 3) {
        affichage = "Votre enfant est trop jeune"
    } else if (age >= 3 && age <= 6) {
        affichage = "Votre enfant est dans la catégorie Baby"
    } else if (age >= 7 && age <= 8) {
        affichage = "Votre enfant est dans la catégorie Poussin"
    } else if (age >= 9 && age <= 10) {
        affichage = "Votre enfant est dans la catégorie Pupille"
    } else if (age >= 11 && age <= 12) {
        affichage = "Votre enfant est dans la catégorie Minime"
    } else if (age >= 13 && age < 18) {
        affichage = "Votre enfant est dans la catégorie Cadet"
    } else {
        affichage = "Ce n'est plus un enfant !"
    }
} else {
    alert("Merci de rentrer un age valide !")
}

result.innerHTML = affichage