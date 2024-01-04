let compteur = 0;

// Il est nécessaire de modifier un élément de la condition de la boucle while
// pour éviter les boucles infinies
while (compteur < 5) {
    compteur++;
    console.log(compteur);
}

// Do while permet d'exécuter un traitement avant de tester la condition
// ALT + MAJ + F pour formater le code
do {
    console.log(`Hello world: ${compteur}`);
    compteur++;
} while (compteur < 10);

// Avec la boucle for on sait d'avance combien de fois on doit itérer
for (let cpt = 0; cpt < 3; cpt++) {
    console.log(cpt);
}

// for(compteur; condition; pas)
for (let cpt = 10; cpt > 0; cpt -= 2) {
    console.log(cpt);
}

console.log("Continue et Break");
for(let cpt = 0; cpt < 10; cpt++) {
    // Un nombre est pair si le reste de sa division vaut 0
    if(cpt % 2 === 0) {
        console.log("Le nombre est pair: continue")
        // Passe à l'itération suivante si la valeur de cpt vaut 5
        continue;
    }

    if(cpt === 7) {
        console.log("Le nombre vaut 7: break")
        // Sort de la boucle (casse la boucle)
        break;
    }
    console.log(cpt);
}

// Types de chaînes
// let maChaine1 = "Hello world!" + compteur + "cool";
// let maChaine2 = 'Hello world!2' + compteur + "cool";
// let maChaine3 = `Hello world!3 ${compteur > 10 ? 'toto' : 'tata'}`;
