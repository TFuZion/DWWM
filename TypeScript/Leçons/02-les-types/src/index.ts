let prenom: string = "Arthur";

// Typage par inférence
// Si je déclare une variable et que je l'affecte directement, elle sera du type de la valeur à droite de l'opérateur '='
let age = 25;

// Impossible d'affecter un autre type à la variable age
// age = true;

let isAdult: boolean = true;

isAdult.valueOf();

let prenoms: string[] = ['Arthur', 'Benoit', 'Akim'];

let oddNumbers: Array<number>;
oddNumbers.push(3);
oddNumbers.push(5);

// La déclaration de variable sans type = any
// any peut être n'importe quelle type de valeur, aucune vérification ne sera faite
// any est à proscrire au maximum pour profiter des fonctionnalités de TypeScript
let x;

// Typage de paramètre de fonction
const helloWorld = (name: string) => console.log(name);

// Typage des retours de fonctions
function howManyLetter(word: string): number {
    return word.length;
}

function coordinates(point: {x: number, y: number}): void {
    console.log(point.x, point.y);
}

coordinates({x: 12, y: 14});

let id: number | string;

id = 12;
id = "xxxx-3fleplf-dzkfkzf";

function showId(id: string | number) {
    if(typeof id === 'string') {
        console.log(id.slice(0, 5));
    } else {
        console.log(`${id}`);
    }
}

showId(id);

showId("totototo-xxx-3333");

// Les types
type User = {
    id: number | string,
    username: string,
    password: string
}

let user01: User = {id: 1, username: "xx01d", password: "secret"};

function login(user: User) {
    //...
}

// Les interfaces
interface Produit {
    id: string,
    titre: string,
    stock: number
}

let product: Produit = {id: "xx", titre:"bananes", stock: 13}

interface LaveLinge extends Produit {
    nombreCycles: number
}

let samsung0PV20: LaveLinge = {id: "xao", titre: "samsung turfo024 250ohm", stock: 10, nombreCycles: 4000};

