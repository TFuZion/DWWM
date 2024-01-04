let Hauteur = +prompt ("Saisissez la hauteur du triangle d'étoiles")

for (let x = 1; x <= Hauteur; x++) {
  let espaces = ' '.repeat(Hauteur - x);
  let Etoiles = '*'.repeat(2 * x -1)
  console.log (espaces + Etoiles);
}

