// Opérateurs mathématiques

let result = 1 + 1;
console.log(result); // 2

result = 10 - 1;
console.log(result); // 9

result = 10 / 2;
console.log(result); // 5

result = 5 * 12.5;
console.log(result); // 62.5

result = 15 % 2;
console.log(result); // 1

result = 2 ** 3;
console.log(result); // 8

// opérateurs unaires
result++; // result = result + 1;
console.log(result);

result--; // result = result - 1;

// Opérateurs affectations

let maVariable = 2;
maVariable += 2; // maVariable = maVariable + 2;
maVariable -= 2;
maVariable *= 2;

// opérateurs de comparaison 

// opérateur d'égalité
console.log(1 == 1); // true
console.log("1" == 1); //true

// opérateur égalité stricte
// Compare la valeur et le type !
console.log(1 === 1); // true
console.log("1" === 1); // false

let monNombre = 2;

// Opérateur inégalité
console.log(1 != monNombre); // true
console.log(2 != monNombre); // false;

// Opérateur d'inégalité stricte
// Compare la valeur et le type !
console.log(1 !== monNombre); // true
console.log("2" !== monNombre); // true;

console.log(1 > 4); // false;
console.log(3 >= 3); // true;

// Opérateurs logiques
// && les deux expressions doivent être vraies
console.log((1 > 0.5) && (monNombre % 2 === 0)); // true

// || opérateur OU, l'une, l'autre, ou les deux doivent être vraies
console.log("hello".length > 10 || monNombre**4 < 100); // true

// renvoie l'inverse
console.log(!true); // false