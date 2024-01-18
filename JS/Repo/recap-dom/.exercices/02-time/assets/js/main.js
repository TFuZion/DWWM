/*
Exercice 02

Vous devrez, au moyen des fonctions setInterval() ou setTimeout(), réaliser au choix :

* Un Minuteur
Le minuteur devra être une application permettant à un utilisateur de saisir des minutes, des heures et des secondes. Il pourra ensuite, par l'appui sur un bouton, lancer le minuteur qui affichera, en temps réel, le temps restant au format hh:mm:ss (soit pour 1 minute et 17 secondes => 00:01:17). Vous ferez en sorte de faire sonner et clignoter le minuteur une fois le temps écoulé (Pour cela, n'hésitez pas à lire la documentation sur l'objet Audio).

* Un Chronomètre
Le chronomètre sera une application permettant, via des boutons, de lancer, mettre en pause ou re-initialiser un chronomètre. Le chronomètre disposera d'un compte tour, qui affichera le temps écoulé depuis la dernière mesure (Si l'on mesure le temps à T+ 1min et 17sec puis à T + 2min et 23sec, on aura un tour de 1min 17s et un tour de 1min et 6s). LEs tours seront affichés en dessous du chronomètre et seront également re-initialisés en cas d'appui sur le bouton 'Reset'
*/
document.addEventListener("DOMContentLoaded", () => {
  const tourUL = document.getElementById("tour");
  const timerSec = document.getElementById("timerSec");
  const timerMin = document.getElementById("timerMin");
  const buttonGo = document.getElementById("buttonGo");
  const buttonBreak = document.getElementById("buttonBreak");
  const buttonReset = document.getElementById("buttonReset");
  const buttonTour = document.getElementById("buttonTour");

  let myIntervalSec = null;
  let myIntervalMin = null;
  
  let compteurSec = 0
  let compteurMin = 0
  buttonGo.addEventListener('click', () => {
    myIntervalSec = setInterval(() => {
      ++compteurSec
      if (compteurSec <= 9) timerSec.textContent = `0${compteurSec}`
      else timerSec.textContent = compteurSec
      if (compteurSec >= 59) compteurSec = 0
    }, 1000)
    myIntervalMin = setInterval(() => {
      ++compteurMin
      timerMin.textContent = `0${compteurMin} : `
    }, 60000)

  })

  buttonBreak.addEventListener('click', () => {
    clearInterval(myIntervalSec)
    clearInterval(myIntervalMin)
  })

  buttonReset.addEventListener('click', () => {
    compteurMin = 0
    compteurSec = 0
    timerMin.textContent = "00 :"
    timerSec.textContent = "00"
  })

  buttonTour.addEventListener('click', () => {
    const newLIElement = document.createElement('li')
    if (compteurSec <= 9) newLIElement.textContent = `0${compteurMin} : 0${compteurSec}`
    else newLIElement.textContent = `0${compteurMin} : ${compteurSec}`
    tourUL.appendChild(newLIElement)
  })
});
