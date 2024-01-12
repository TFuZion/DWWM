import { Vehicule } from "./classes/Vehicule.js";
import { Voiture } from "./classes/Voiture.js";
import { Moto } from "./classes/Moto.js";

const moto = document.getElementById("moto")
const auto = document.getElementById("auto")

let voiture1 = new Voiture("Reanault", "Kangoo", 240000, 2003, "Climatisé") 
console.log(voiture1.display());
let moto1 = new Moto("BMW", "R1150R Rockster", 65000, 2005)
console.log(moto1.display());

moto.innerHTML = moto1.display()
auto.innerHTML = voiture1.display()
