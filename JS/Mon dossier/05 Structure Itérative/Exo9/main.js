let N = +prompt("Saisissez un entier:")
let y = 1
do {
  console.log(`Table des ${y} :`);
  let x = 1
  do {
  let result = (y) * (x);
  console.log(`${y} x ${x} = ${result}`);
  x++
  } while (x < 11);
  y++
} while (y < N+1);




/*
let nbUser = prompt('Saisissez un entier supérieur à 0 :')

for ( let table = 1; table <= +nbUser; table++) {
    console.log(`Table des ${table} :`)
    for (let tableCalc = 1; tableCalc < 11; tableCalc++) {
        console.log(`${table} x ${tableCalc} = ${table * tableCalc}`)
    }
}
*/