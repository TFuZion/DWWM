const result = document.querySelector(".result")

let ab,
    bc,
    ca,
    affichage

ab = Number(prompt("Veuillez saisir la longueur de AB :"))
bc = Number(prompt("Veuillez saisir la longueur de BC :"))
ca = Number(prompt("Veuillez saisir la longueur de CA :"))

if (ab == bc && bc == ca) {
    affichage = "Le triangle est équilatéral"
} else if (ab == bc) {
    affichage = "Le triangle est isocèle en B"
} else if (bc == ca) {
    affichage = "Le triangle est isocèle en C"
} else if (ab == ca) {
    affichage = "Le triangle est isocèle en A"
} else {
    affichage = "Le triangle n'est isocèle ni en A, ni en B, ni en C"
}

result.innerHTML = affichage