const result = document.querySelector(".result")

let cote1,
    cote2,
    sommeCarre,
    hypotenuse,
    affichage

cote1 = 2.6
cote2 = 3.9

sommeCarre = Math.pow(cote1, 2) + Math.pow(cote2, 2)
hypotenuse = Math.sqrt(sommeCarre)

affichage = `
<p>Les longueurs des cotés adjacents à l'angle droit étant de <b>${cote1} cm</b> et de <b>${cote2} cm</b></p>
<p>- La longueur de l'hypoténuse : <b>${hypotenuse.toFixed(2)} cm</b></p>
`

result.innerHTML = affichage