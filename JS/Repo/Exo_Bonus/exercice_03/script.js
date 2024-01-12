const result = document.querySelector(".result")

let diametre, perimetre, aire, affichage

const pi = Math.PI

diametre = 10
perimetre = diametre * pi
aire = pi*Math.pow((diametre/2),2)

affichage = `
    <h3>Utilisation de la constante &#960 (pi)</h3>
    <p>La valeur de &#960 est : ${pi}</p>
    <h3>Calcul du périmètre (d x &#960) et de l'aire (&#960*r²) d'un cercle</h3>
    <p>Diamètre = ${diametre} cm</p>
    <p>Périmètre = ${perimetre} cm</p>
    <p>Aire = ${aire} cm²</p>
    <p>Périmètre(arrondi) = ${Math.round(perimetre)} cm</p>
    <p>Aire(arrondi) = ${Math.round(aire)} cm²</p>
`

result.innerHTML = affichage