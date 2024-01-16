const result = document.querySelector(".result")


let chaine, affichage

chaine = "sALuT cOMmeNT çA vA ?"

affichage = `
<p>Vous avez saisi : ${chaine}</p>
<p>La chaîne en minuscule : ${chaine.toLowerCase()}</p>
<p>Mise en tableau : ${chaine.toLowerCase().split("")}</p>
`

result.innerHTML = affichage