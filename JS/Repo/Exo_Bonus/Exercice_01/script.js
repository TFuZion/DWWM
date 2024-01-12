// Version 1
// Pour remplacer rapidement des valeurs => ctrl + h
// const prenomHtml = document.querySelector(".prenomHtml")
// const nomHtml = document.querySelector(".nomHtml")
// const result = document.querySelector(".result")

// let prenom = prompt("Veuillez saisir votre prénom")
// let nom = prompt("Veuillez saisir votre nom")
// let affichage = prenom + " " + nom

// prenomHtml.innerHTML = "Vous avez saisi : " + prenom
// nomHtml.innerHTML = "Vous avez saisi : " + nom
// result.innerHTML = "Bonjour " + affichage

// Version 2
const result = document.querySelector(".result")

// Déclaration de plusieurs variables en une fois
let prenom, nom, resultat, affichage

prenom = prompt("Veuillez saisir votre prénom")
nom = prompt("Veuillez saisir votre nom")
resultat = `${prenom} ${nom}`

affichage = `<p>Vous avez saisi : ${prenom}</p>`
affichage += `<p>Vous avez saisi : ${nom}</p>`
affichage += `<p>Bonjour ${resultat}</p>`

result.innerHTML = affichage