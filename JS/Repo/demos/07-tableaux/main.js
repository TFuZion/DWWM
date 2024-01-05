let monTableau = [];

// Ajoute un élément à la fin du tableau
monTableau.push("Arthur");
monTableau.push("Jean");
monTableau.push("Mélanie");

console.log(monTableau);

console.log("monTableau[0]", monTableau[0]); // Arthur


console.log("monTableau.pop()", monTableau.pop());

// Find renvoie le premier élément où la condition est remplie
console.log(monTableau.find(el => el === "Arthur"));

// Supprime le premier élément du tableau
monTableau.shift();

console.log(monTableau);

monTableau[0] = "Jeanne";

console.log(monTableau);

let langages = ["C#", "JavaScript", "Python", "Clojure", "Pascal", "WLanguage", "PHP"];

console.log(langages.filter(l => l.toLowerCase().startsWith("c")));

// JavaScript support les tableaux de types différents
let multiTypes = [12.5, true, "toto", {}];
console.log(multiTypes);

// Copie par référence
let langagesReference = langages;

// Copie par valeur
let langagesValeur = [...langages];
let langagesValeurBis = langages.slice();

langagesReference.push("C++");
langagesValeur.push("Java");

console.log(langagesReference);
console.log(langagesValeur);
console.log(langages);

// Parcourir un tableau

console.log("boucle for");
for(let compteur = 0; compteur < langages.length; compteur++) {
    console.log(langages[compteur]);
}

console.log("boucle for of");
for(langage of langages) {
    console.log(langage);
}

console.log("forEach");
langages.forEach((langage, index) => console.log(index, langage));
// langages.forEach(langage => console.log(index, langage));

// fonction de trie
console.log(langages.sort());
// Permet d'inverser l'ordre d'un tableau
console.log(langages.reverse());

// permet de créer un nouveau tableau à partir d'un tableau initiale
console.log(langages.map(l => l.toUpperCase()));
console.log(langages.map(l => l.length));

// Reducer : permet de retourner une unique valeur
let entiers = [3, 12, 20, 40, 10];

console.log(entiers.reduce((somme, valeur) => somme + valeur));

console.log(entiers.reduce((somme, valeur) => somme + valeur**2));

console.log(langages.reduce((chaine, langage) => `${chaine}+${langage}`));

// Join et Split

let laVerite = "Bonjour je m'appelle Arthur et j'adore le JavaScript";

laVeriteEnTableau = laVerite.split(" ");

console.log(laVeriteEnTableau);

laVerite = laVeriteEnTableau.join("<3");
console.log(laVerite);

// slice : découper un tableau
console.log(langages.slice(2, 4));