import { Personne } from "./classes/Personne.js";
import { Bibliotheque } from "./classes/Bibliotheque.js";
import { Document } from "./classes/Document.js";
import { Journal } from "./classes/Journal.js";

const result = document.querySelector(".result")

let toto = new Personne("Toto", 30, "toto@email.fr")
let tata = new Personne("Tata", 20, "tata@email.fr")

let m2i = new Bibliotheque("M2I")
let bibliotheque1 = new Bibliotheque("Bibliotheque1")

let lePetitPrince = new Document("Le petit prince")

let journal1 = new Journal("Journal1", "12/01/2024")

console.log("------------");
journal1.Display()

toto.direBonjour()
tata.direBonjour()

toto.direBonjourPersonne(tata)

console.table(m2i.listeAdherent);

m2i.ajouterAdherent(toto)
m2i.ajouterAdherent(tata)
m2i.ajouterDocument(lePetitPrince)

console.table(m2i.listeAdherent);
console.table(m2i.listeDocument);

result.innerHTML += lePetitPrince.Display()