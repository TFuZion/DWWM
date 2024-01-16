const result = document.querySelector(".result")

let revenus,
    nbAdulte,
    nbEnfants,
    revenusImposable,
    montantImpot,
    affichage,
    nbParts

revenus = Number(prompt("Veuillez saisir vos revenus"))
nbAdulte = Number(prompt("Veuillez saisir le nombres d'adultes"))
nbEnfants = Number(prompt("Veuillez saisir le nombres d'enfants"))

if (nbEnfants <= 2) {
    nbParts = nbAdulte + (nbEnfants * 0.5)
}else {
    nbParts = nbAdulte + nbEnfants - 1
}

revenusImposable = revenus / nbParts

console.log(revenusImposable);

if (revenusImposable >= 10778 && revenusImposable <= 27478) {
    montantImpot = (revenusImposable - 10777) * 0.11
} else if (revenusImposable >= 27479 && revenusImposable <= 78570) {
    montantImpot = (revenusImposable - 27478) * 0.30 + (27478 - 10777) * 0.11
} else if (revenusImposable >= 78571 && revenusImposable <= 168994) {
    montantImpot = (revenusImposable - 78570) * 0.41 + (78570 - 27478) * 0.30 + (27478 - 10777) * 0.11
} else if (revenusImposable > 168994) {
    montantImpot = (revenusImposable - 168993) * 0.45 + (168994 - 78570) * 0.41 + (78570 - 27478) * 0.30 + (27478 - 10777) * 0.11
}

montantImpot *= nbParts

affichage = `Le montant de l'impôt sur le revenenu pour un foyer composé de ${nbAdulte} adultes et ${nbEnfants} enfants
avec un revenu fiscal de ${revenus}€ s'élève à ${Math.round(montantImpot)}€`

result.innerHTML = affichage