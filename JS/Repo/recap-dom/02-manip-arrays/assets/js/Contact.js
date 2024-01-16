class Contact {
    static count = 0;

    constructor(prenom, nom, email, phone) {
        this.id = ++Contact.count;
        this.prenom = prenom;
        this.nom = nom;
        this.email = email;
        this.phone = phone;
    }
}

export default Contact;