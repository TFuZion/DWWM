const inputSalaire = document.getElementById("inputSalaire"),
    inputAge = document.getElementById("inputAge"),
    inputAnnee = document.getElementById("inputAnnee"),
    seeSalaire = document.getElementById("seeSalaire"),
    seeAge = document.getElementById("seeAge"),
    seeAnnee = document.getElementById("seeAnnee"),
    seeResultat = document.getElementById("seeResultat")

let resultat = 0

function valider() {
  let salaire = +inputSalaire.value
  seeSalaire.innerHTML = `${salaire} €`
  let age = +inputAge.value
  seeAge.innerHTML = `${age} ans`
  let annee = +inputAnnee.value
  seeAnnee.innerHTML = `${annee} ans`


  if (annee >= 1 && annee <= 10) {
    if (age > 50) {
      resultat = (salaire / 2) * annee + salaire * 5
    } if (age > 45 && age < 50) {
      resultat = (salaire / 2) * annee + salaire * 2
    } else {
      resultat = (salaire / 2) * annee
    }
  } 
  else {
    if (age > 50) {
      resultat = (salaire * annee) + (salaire * 5)
    } if (age > 45 && age < 50) {
      resultat = salaire * annee + salaire * 2
    } else {
      resultat = salaire * annee
    }
  }

  seeResultat.innerHTML = `${resultat} €`
}

