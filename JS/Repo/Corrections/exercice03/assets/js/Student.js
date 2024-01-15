import Person from "./Person.js";

/*
    Une autre classe servant à encapsuler des champs commun avec Personne va simplement hériter de cette derniere puis ajouter ses champs spécifiques, à savoir:
    - Le numéro de l'étudiant
*/

class Student extends Person {
    constructor(nom, prenom, age, numStudent) {
        super(nom, prenom, age);
        this.numStudent = numStudent;
    }

    speak() {
        return `Hello, my name is ${this.prenom} ${this.nom}, and my student ID is ${this.numStudent}!`;
    }
}

export default Student;