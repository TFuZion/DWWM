export class Document {
    constructor(titre) {
        this.titre = titre
    }

    Display() {
        console.log(`Titre : ${this.titre}`);
        return `Titre : ${this.titre}`
    }
}