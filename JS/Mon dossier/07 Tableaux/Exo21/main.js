let tableau = []

for (let i = 0; i < 10; i++) {
  let valeur = Math.floor(Math.random() * (25-1)) + 1;
  tableau.push(Number(valeur));
  let space = "\t".repeat(i)
  console.log(space, valeur);
}



/*
let tableau = []

for (let i = 0; i < 10; i++) {
  let valeur = +prompt("Saisissez une valeur :");
  tableau.push(Number(valeur));
  let space = "\t".repeat(i)
  console.log(space, valeur);
}
*/




//valeur.forEach((valeur, index) => console.log(` ${valeur}`));
// langages.forEach(langage => console.log(index, langage));