const result = document.querySelector(".result")

let cote,
    longueur,
    largeur,
    perimetreCarre,
    aireCarre,
    perimetreRectangle,
    aireRectangle,
    affichage

// Carré

cote = 5
// cote = Number(prompt("Saisir la longueur du carré :"))

perimetreCarre = cote * 4
aireCarre = cote * cote

affichage = `<h1>Calcul de l'aire et du périmètre d'un carré</h1>
<p>Les longueurs des cotés du carré étant de <b>${cote} cm</b></p>
<ul>
    <li>Le périmètre de ce carré est de <b>${perimetreCarre} cm</b></li>
    <li>L'aire de ce carré est de <b>${aireCarre} cm</b></li>
</ul>
<hr>
`

// Rectangle

longueur = 7
largeur = 5

perimetreRectangle = (longueur + largeur) * 2
aireRectangle = longueur * largeur

affichage += `<h1>Calcul de l'aire et du périmètre d'un rectangle</h1>
<p>Les longueurs des cotés du rectangle étant de <b>${longueur} cm</b> pour la longueur, et <b>${largeur} cm</b> pour la largeur</p>
<ul>
    <li>Le périmètre de ce rectangle est de <b>${perimetreRectangle} cm</b></li>
    <li>L'aire de ce rectangle est de <b>${aireRectangle} cm</b></li>
</ul>
<hr>
`

result.innerHTML = affichage