import { Personne } from "./classes/Personne.js";
import { Etudiant } from "./classes/Etudiant.js";

const message1 = document.getElementById("message1")
const message2 = document.getElementById("message2")
const message3 = document.getElementById("message3")

let juju = new Personne ("Veiller", "Juliette", 21) 
let ben = new Personne ("Hezeque", "Ben", 20) 
let toto = new Etudiant ("Debray", "Thomas", 21, 22011257)

message1.innerHTML = toto.Info()
message2.innerHTML = juju.Parler()
message3.innerHTML = ben.Parler()