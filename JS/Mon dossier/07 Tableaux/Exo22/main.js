let tableau = []
let nmbUser = +prompt ("combien de nombre dans le tableaux? :")
for (let i = 0; i < nmbUser; i++) {
  min = Math.ceil(0);
  max = Math.floor(50);
  let valeur = Math.floor(Math.random() * (max-min +1)) + min;
  tableau.push(Number(valeur));
  if (valeur%2 == 0) {
    console.log(`Le nombre ${valeur} est pair`);
  }
  else {
    console.log(`Le nombre ${valeur} est impair`);
  }
}