let user: string = "Toto";

console.log(user);

console.log(user.charAt(3));

class Person {

    private firstName: string;
    private lastName: string;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myPerson: Person = new Person("John", "Carmac");