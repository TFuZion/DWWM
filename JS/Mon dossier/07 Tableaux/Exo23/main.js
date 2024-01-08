let tabNotes = [],
    maxNote,
    minNote,
    moyNotes,
    note = 0,
    userInput,
    nbNotes,
    total = 0,
    quitterProgramme = false

function inputPositive () {
    while (note >= 0) {
        note = +prompt("Veuillez saisir une note :")
        while (note > 20) {
            note = +prompt("ERREUR DE SAISIE : Veuillez saisir une note :")
        }
        if (note >= 0 && note <= 20) {
            tabNotes.push(note)
        }
    }
}

function inputFixNumber () {
    nbNotes = +prompt("Veuillez saisir le nombre de notes")
    for(i = 1; i <= nbNotes; i++) {
        note = +prompt("Veuillez saisir une note :")
        while (note < 0 || note > 20) {
            note = +prompt("ERREUR DE SAISIE : Veuillez saisir une note entre 0 et 20 :")
        }
        if (note >= 0 && note <= 20) {
            tabNotes.push(note)
        }
        console.log(tabNotes);
    }
}

function displayNoteMax() {
    maxNote = Math.max(...tabNotes)
    console.log(`Note max : ${maxNote.toFixed(2)}/20`);
}

function displayNoteMin() {
    minNote = Math.min(...tabNotes)
    console.log(`Note min : ${minNote.toFixed(2)}/20`);
}

function displayMoyenne() {
    total = tabNotes.reduce((accumulator, currentValue) => accumulator + currentValue)
    moyNotes = total / tabNotes.length
    console.log(`Moyenne des notes : ${moyNotes.toFixed(2)}/20`);
}

function displayMenu() {
    userInput = prompt(`
    Choisir un mode de saisie:
    1 : Saisie fixe
    2 : Saisie jusqu'à note négative 
    `)

    switch(userInput) {
        case "1":
            inputFixNumber()
            break;
        case "2":
            inputPositive()
    }

    while (quitterProgramme == false) {
        userInput = prompt(`
        1 - Afficher la note max
        2 - Afficher la note min
        3 - Afficher la moyenne des notes
        4 - Quitter le programme
        `)
    
        switch(userInput) {
            case "1" : 
                displayNoteMax()
                break
            case "2" :
                displayNoteMin()
                break
            case "3":
                displayMoyenne()
                break
            case "4":
                quitterProgramme = true
                break
        }
    }
}

displayMenu()



















// let choix = +prompt()
// let tableau = []
// let tableau2 = []


// function max(noteMax) {
//   let noteMax = (Math.max(...tableau));
//   console.log(`La note maximal est de ${noteMax}/20`);
// }
// function min(noteMin) {
//   let noteMinin = (Math.min(...tableau));
//   console.log(`La note mininmal est de ${noteMin}/20`);
// }
// function moy(moyenneNotes) {
//   let somme = tableau.reduce((total, element) => total + element, 0);
//   let moyenneNotes = somme / tableau.length;
//   console.log(`La moyenne est de ${moyenneNotes}/20`);
// }



// function notesChoix1(nmbNotes) {
//   for (let i = 0; i < nmbNotes; i++) {
//     let notes = +prompt()
//     tableau.push(Number(notes))
//     console.log(`Veuillez entrer une note entre 0 et 20 compris : ${notes}`);
//   }
// }





// function choix1(choix) {
//   console.log(`Votre choix : ${choix}`);
//   console.log(`Combien de notes ?`);
//   let nmbNotesChoix1 = +prompt()
//   console.log (`${nmbNotesChoix1}`);
//   console.log("Début de Saisie !");
  
//   for (let i = 0; i < nmbNotesChoix1; i++) {
//     let notesChoix1 = +prompt()
//     tableau.push(Number(notesChoix1))
//     console.log(`Veuillez entrer une note entre 0 et 20 compris : ${notesChoix1}`);
//   }
// }

// function choix2(choix) {
//   console.log(`Votre choix : ${choix}`);
//   let notesChoix2 =+prompt()
//   // while (notesChoix2 > 0){
//   //   tableau2.push(Number(notesChoix2))
//   //   console.log(`Veuillez entrer une note entre 0 et 20 compris : ${notesChoix2}`);
//   // }
  
//   console.log("Fin de saisie !");
//   let max = (Math.max(...tableau));
//   let min = (Math.min(...tableau));
//   let somme = tableau.reduce((total, element) => total + element, 0);
//   let moy = somme / tableau.length;
//   console.log(`La note maximal est de ${max}/20`);
//   console.log(`La note mininmal est de ${min}/20`);
//   console.log(`La moyenne est de ${moy}/20`);
// }



// if (choix === 1) {
  
// } 
// if (choix === 2) {
//   choix2(choix)
// } 





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