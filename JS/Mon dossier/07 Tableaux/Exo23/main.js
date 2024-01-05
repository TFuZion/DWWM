console.log("Choisir un mode de saisie:");
console.log("1 : Saisie fixe");
console.log("2 : Saisie jusqu'à note négative");


let choix = +prompt()
let tableau = []

function choix1(choix) {
  console.log(`Votre choix : ${choix}`);
  
  let nmbNotesChoix1 = +prompt()
  console.log(`Combien de notes ? ${nmbNotesChoix1}`);
  console.log("Début de Saisie !");
  
  for (let i = 0; i < nmbNotesChoix1; i++) {
    let notesChoix1 = +prompt()
    tableau.push(Number(notesChoix1))
    console.log(`Veuillez entrer une note entre 0 et 20 compris : ${notesChoix1}`);
  }

  console.log("Fin de saisie !");
  let max = (Math.max(...tableau));
  let min = (Math.min(...tableau));
  let somme = tableau.reduce((total, element) => total + element, 0);
  let moy = somme / tableau.length;
  console.log(`La note maximal est de ${max}/20`);
  console.log(`La note mininmal est de ${min}/20`);
  console.log(`La moyenne est de ${moy}/20`);
}

function choix2(choix) {
  console.log(`Votre choix : ${choix}`);
}



if (choix === 1) {
  choix1(choix)
} 
if (choix === 2) {
  choix2(choix)
} 





// function ArrayAvg(myArray) {
//   var i = 0, summ = 0, ArrayLen = myArray.length;
//   while (i < ArrayLen) {
//     summ = summ + myArray[i++];
//   }
//   return summ / ArrayLen;
// }
// var myArray = [1, 5, 2, 3, 7];
// var a = ArrayAvg(myArray);
// console.log(a)

// function moyenne(tableau) {
//   let x = 0
//   let somme = 0
//   let tabLen = tableau.lenght
//   while (x < tabLen) {
//     somme = somme + tableau[x++]
//   }
//   return somme / tabLen
// }
// let moy = moyenne.apply(null, tableau)