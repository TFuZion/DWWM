const prenom = document.querySelector("#prenom"),
    listePrenom = document.querySelector("#listePrenom")

// const prenom = document.getElementById("prenom")
let tableauPrenom = []

function valider() {
  tableauPrenom.push(prenom.value)
  displayTab()
  prenom.value = ""
}

function supprimer() {
  let prenomFound = tableauPrenom.find((p)=> p == prenom.value)

  if (prenomFound) {
    tableauPrenom = tableauPrenom.filter((prenom)=> prenom != prenomFound)
    displayTab()
  }
}

function displayTab() {
  listePrenom.innerHTML = ""
  tableauPrenom.forEach((prenom)=> {
    listePrenom.innerHTML += `<li>${prenom}</li>`
  })
}
