let taille = +prompt()
let tableau = Array(taille)

function radomNb (min, max){
  return Math.floor(Math.random()*(max - min) + min)
}

for (let i= 0; i < tableau.length; i++) {
  tableau[i] = radomNb(1, 50)
}
for (let valeur of tableau) {
  // Syntaxe ternaire : condition '?' si c'est vrai ':' si c'est faux
  console.log(`Le nombre ${valeur} est ${valeur % 2 == 0 ? "pair" : "impair"}`);
}




// let nmbUser = +prompt ("combien de nombre dans le tableaux? :")
// for (let i = 0; i < nmbUser; i++) {
//   let valeur = Math.floor(Math.random() * (50-1 )) + 1;
//   tableau.push(Number(valeur));
//   if (valeur%2 == 0) {
//     console.log(`Le nombre ${valeur} est pair`);
//   }
//   else {
//     console.log(`Le nombre ${valeur} est impair`);
//   }
// }