export class Monstre {
    constructor(nom, pointsDeVie, degats) {
        this.nom = nom
        this.pointsDeVie = pointsDeVie
        this.degats = degats
    }

    Attaquer(cible) {
        let degats = this.degats
        cible.SubirDegats(degats)
        console.log(`${this.nom} attaque ${cible.nom} pour ${degats}`);
    }

    SubirDegats(degats) {
        this.pointsDeVie -= degats
        if (this.pointsDeVie <= 0) {
            alert(`${this.nom} a été vaincu !`)
        }
    }
}