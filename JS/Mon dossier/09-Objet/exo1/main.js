const livre = {
  titre: "Le Seigneur des Anneaux",
  auteur: "J.R.R. Tolkien",
  anneePublication: 1954,
  estDisponible: true,
  emprunter() {
    this.estDisponible = false;
    console.log("Le livre a été emprunté.");
  },
  retourner() {
    this.estDisponible = true;
    console.log("Le livre a été retourné.");
  }
};

console.log(livre.titre);

function Dispo() {
  if (livre.estDisponible == true) {
    console.log("Disponible");
  } if (livre.estDisponible == false) {
    console.log("Non disponible");
  }
}
Dispo()

livre.emprunter()

Dispo()

livre.retourner()

Dispo()