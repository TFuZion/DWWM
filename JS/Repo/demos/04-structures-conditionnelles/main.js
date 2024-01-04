let age = 17;

if (age >= 18) {
    console.log("Vous êtes majeur");
}

if (age > 15 && age < 18) {
    console.log("Vous êtes ados");
} else {
    console.log("Vous êtes un gros bb");
}

if (age > 60) {
    console.log("Bientôt la retraite");
} else if (age > 55) {
    console.log("ça va aller");
} else {
    console.log("Il va falloir travailler encore longtemps");
}

let arbre = "Pommier";

switch (arbre) {
    case "Citronnier":
        console.log("J'adore les citrons");
        break;
    case "Oranger":
        console.log("Bon petit jus d'orange oklm");
        break;
    case "Pommier":
        console.log("Andros la force du fruit");
        break;
    default:
        console.log("L'arbre en question n'a pas été trouvé ...");
        break;
}

let prenom;

if(Math.random() > 0.3) {
    prenom = "Emilie";
} else {
    prenom = "Pascal";
}

// Ternaire
prenom = Math.random() > 0.3 ? "Emilie" : "Pascal";
console.log(prenom);

let maVariableInexistante;

// Vérifie si la valeur est ni null, ni undefined
prenom = maVariableInexistante ?? "Prenom par défaut";
;
console.log(prenom);
