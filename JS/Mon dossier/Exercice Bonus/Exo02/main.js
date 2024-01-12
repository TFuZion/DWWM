const saisi1 = document.getElementById("saisi1")
const saisie2 = document.getElementById("saisi2")
const somme1 = document.getElementById("somme1")

let nb1 = +prompt("Entrer votre nombre :")
let nb2 = +prompt("Entrer un autre nombre :")
let somme = nb1 + nb2

console.log(`Vous avez saisi : ${nb1}`);
console.log(`Vous avez saisi : ${nb2}`);
console.log(`La somme de ${nb1} + ${nb2} = ${somme}`);

saisi1.innerHTML = (`Vous avez saisi : ${nb1}`)
saisie2.innerHTML = (`Vous avez saisi : ${nb2}`)
somme1.innerHTML = (`La somme de ${nb1} + ${nb2} = ${somme}`)