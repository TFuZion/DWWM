console.log("Table des matières :");

let x = 1;
do {
  console.log(`Chapitre ${x}:`)
  let y = 1;
  do {
    console.log(`partie ${x}.${y}`);
    y++;
  } while (y < 4);
  x++;
} while (x < 4) ;

/*
for (let chapter = 1; chapter < 4; chapter++) {
    console.log(`Chapitre ${chapter} :`)
    for (let part = 0.1; part < 0.4; part += 0.1 ) {
        console.log(`-partie ${+chapter + +part}`);
*/