const nom = document.getElementById("nom")
const prenom = document.getElementById("prenom")
const bjPrenom = document.getElementById("bjPrenom")

let toto = prompt("Entrer votre Nom :")
let tata = prompt("Entrer votre Prenom :")
let bonjour = `${toto} ${tata}`

console.log(`Vous avez saisi : ${toto}`);
console.log(`Vous avez saisi : ${tata}`);
console.log(`Bonjour ${bonjour}`);

nom.innerHTML = (`Vous avez saisi : ${toto}`)
prenom.innerHTML = (`Vous avez saisi : ${tata}`)
bjPrenom.innerHTML = (`Bonjour ${bonjour}`)