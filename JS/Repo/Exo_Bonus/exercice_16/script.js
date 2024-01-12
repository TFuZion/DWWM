const result = document.querySelector(".result")

let affichage,
    salaire,
    age,
    anciennete,
    indemnite

salaire = Number(prompt("Veuillez saisir votre dernier salaire"))
age = Number(prompt("Veuillez saisir votre age"))
anciennete = Number(prompt("Veuillez saisir l'ancienneté"))

if (anciennete >= 1 && anciennete <= 10) {
    indemnite = anciennete * (salaire / 2)
}

if (anciennete > 10) {
    indemnite = 10 * (salaire / 2)
    indemnite += (anciennete - 10) * salaire
}

if (anciennete >= 1 && age > 45) {
    if (age < 50) {
        indemnite += 2 * salaire
    } else {
        indemnite += 5 * salaire
    }
}

affichage = `Le montant de l'indemnité pour salarié de ${age} ans et avec ${anciennete} années
d'ancienneté s'élève à ${indemnite}€`

result.innerHTML = affichage