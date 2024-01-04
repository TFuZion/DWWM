
function compterLettreA(str) {
  let compteur = 0
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) === "a") {
      compteur++;
    }
  }
  console.log(compteur);
}
console.log(compterLettreA("apparaitre"));