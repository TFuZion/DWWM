let age = +prompt("Saisissez votre âge")
let salaire = +prompt("Saisissez le salire souhaité")
let expérience = +prompt("Saisissez vos années d'expérience")


if (+ age < 30) {
  if (+ salaire < 40000) {
    if (+ expérience > 5) {
      console.log("votre profil nous intéresse")
    } else {console.log("Vous n'êtes pas assez expérimenté")}
  } else {console.log("vous en demandé trop")}
} else {console.log("Vous êtes trop vieux pour ce poste")}

/*
if (+ age > 30) {
  console.log("Vous êtes trop vieux pour ce poste");
} else if (+ salaire > 40000) {
  console.log("vous en demandé trop");
} else if (+ expérience < 5){
  console.log("Vous n'êtes pas assez expérimenté");
} else {
  console.log("votre profil nous intéresse ")
}
*/