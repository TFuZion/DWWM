
/*
    On créé une classe servant à encapsuler trois données : 
    - Le nom d'une personne
    - Le prénom d'une personne
    - L'âge d'une personne
*/


class Person {

    // Un champ statique n'est pas lié à une instance mais à une classe. Chaque objet de cette classe va partager le champ, qui est accessible au sein de la classe non par par 'this.nomChamp' mais via 'NomClasse.nomChamp'
    static count = 0;

    constructor(nom, prenom, age) {
        this.id = ++Person.count;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    speak() {
        return `Hello, my name is ${this.prenom} ${this.nom}!`;
    }
}

export default Person;