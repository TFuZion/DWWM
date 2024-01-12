export class Bibliotheque {
    constructor (nom) {
        this.nom = nom
        this.listeAdherent = []
        this.listeDocument = []
        this.messageBienvenue()
    }

    ajouterAdherent(adherent) {
        this.listeAdherent.push(adherent)
        console.log(`Bienvenue ${adherent.nom} dans la bibliotheque ${this.nom}`);
    }

    ajouterDocument(document) {
        this.listeDocument.push(document)
    }

    messageBienvenue() {
        console.log(`Création de la bibliotheque : ${this.nom}`);
    }
}