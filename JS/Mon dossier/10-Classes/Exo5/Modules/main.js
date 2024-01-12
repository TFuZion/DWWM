import { CompteBancaire } from "./Classes/CompteBancaire.js";
import { CompteEpargne } from "./Classes/CompteEpargne.js";
let toto = new CompteBancaire (3500, "Debray  Thomas")
let lulu = new CompteEpargne (4000, "Lulu  Vroum", 2 )

lulu.Sold()
lulu.Interet()
lulu.Sold()
toto.Sold()
toto.Depot()
toto.Sold()
toto.Retrait()
toto.Sold()
