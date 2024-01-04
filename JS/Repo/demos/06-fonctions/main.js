function sayHelloWorld() {
    console.log("Hello world!");
}

sayHelloWorld();

function sayHelloToSomeone(name) {
    console.log(`Hello ${name}`);
}

sayHelloToSomeone("David");

function sayHelloFromTo(to, from = "Robot123") {
    console.log(`Hello ${to} from ${from}`);
}

sayHelloFromTo("Toto");

function addTwoNumbers(a, b) {
    return a + b;
}

console.log(addTwoNumbers(1, 2)); // 3
console.log(addTwoNumbers("1", "2")); // "12"

// Expression de fonction
const lengthWord = function (word) {
    return word.length;
}

console.log(lengthWord("toto"));

// Une callback est une fonction passée en paramètre d'une autre fonction
// Elle sera appelée plus tard (d'où le mot callback)
function readUserInput(callback) {
    username = prompt("Saisir votre pseudo");
    callback(username);
}

// On passe une fonction en paramètre sans l'exécuter ! pas de parenthèses
readUserInput(sayHelloToSomeone);

// Fonction fléchées, fonction lambda
const drawTriangle = (height) => {
    for (let ligne = 1; ligne < height + 1; ligne++) {
        console.log(`${" ".repeat(height - ligne)}${"*".repeat(ligne * 2 - 1)}`);
    }
}

drawTriangle(5);
drawTriangle(10);

// Lorsque la fonction fléchée est déclarée sur une seule ligne, le return est implicite
const addTwoNumbersLambda = (a, b) => a + b;

/*
Les deux syntaxes font EXACTEMENT la MEME chose
const addTwoNumbersLambda = (a, b) => {
    return a + b;
}
*/

console.log(addTwoNumbersLambda(12, 15));

// Dans le cas où la fonction fléchée n'a qu'UN SEUL paramètre, on peut omettre les parenthèses
const sayHelloToSomeoneLambda = name => console.log(name);

sayHelloToSomeoneLambda("Michel");

// Récursivité (appeler la fonction à l'intérieur de cette même fonction)
function fibonacci(nombre) {
    if(nombre <= 1) {
        return nombre;
    }
    return fibonacci(nombre -1) + fibonacci(nombre -2);
}

console.log(fibonacci(+prompt("Saisir un nombre pour la suite de fibonacci"))); // 2