const bravo = document.getElementById("bravo"),
  essai = document.getElementById("essai"),
  nbCoups = document.getElementById("nbCoups"),
  userNombre = document.getElementById("userNombre")


  document.getElementById("onclick").addEventListener("click", conteurCoups)
let Coups = 0

function conteurCoups() {
  Coups++;
  nbCoups.innerHTML = `Nombre de coups : ${Coups}`
}

  bravo.innerHTML = `J'ai généré un nombre entre 1 et 50 inclus`
  essai.innerHTML = `Essayer de deviner en proposant ci-dessous`
  nbCoups.innerHTML = `Nombre de coups : ${Coups}`

function jouer() {
  let mystere = Math.floor(Math.random() * (50 - 1)) + 1;
  console.log(mystere);
  return mystere
}
let nbMystere = jouer()

function resetInput() {
  document.getElementById("userNombre").value = ("")
}

function valider() {
  let nombre = +userNombre.value
  if (nombre < nbMystere) {
    bravo.innerHTML = `Le nombre mystère est plus grand que ${nombre}`
    essai.innerHTML = `Essayer de deviner en proposant ci-dessous`
    resetInput()
  }
  if (nombre > nbMystere) {
    bravo.innerHTML = `Le nombre mystère est plus petit que ${nombre}`
    essai.innerHTML = `Essayer de deviner en proposant ci-dessous`
    resetInput()
  }
  if (nombre == nbMystere) {
    bravo.innerHTML = `Bravo vous avez gagné !`
    essai.innerHTML = `Le nombre mystère était ${nbMystere}`
    document.getElementById("onclick").removeEventListener("click", conteurCoups)
    resetInput()
  }
}

document.getElementById("rejouer").location.reload()




// document.addEventListener("keydown", (event) => {
//   console.log(event.key);
//   if(event.key == "Enter") {
//       let message = inputText.value
//       alert("Vous avez appuyé sur Enter \nMessage : " + message)
//   }
// })