const touches = [...document.querySelectorAll(".bouton")]
const listeKeycode = touches.map(touche => touche.dataset.key)
const screen = document.querySelector(".screen")

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  calculer(valeur)
})
document.addEventListener("keydown", (e) => {
  const valeur = e.code.toString();
  calculer(valeur)
  console.log(valeur);
})
const calculer = (valeur) => {
  if (listeKeycode.includes(valeur)) {

    switch (valeur) {
      case 'KeyC':
        screen.textContent = "";
        break;
      case 'Enter':
        const solus = eval(screen.textContent)
        screen.textContent = solus;
        break
      default:
        const indexKeycode = listeKeycode.indexOf(valeur);
        const touche = touches[indexKeycode];
        screen.textContent += touche.innerHTML;
    }
  }
}

