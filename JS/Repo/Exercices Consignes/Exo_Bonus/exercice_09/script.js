const result = document.querySelector(".result")

let capitalInitial,
    tauxInterets,
    duree,
    interets,
    capitalFinal,
    affichage

capitalInitial = Number(prompt("Saisir votre capital :"))
tauxInterets = Number(prompt("Saisir votre taux d'intérêts"))
duree = Number(prompt("Saisir la durée de l'épargne :"))

capitalFinal = Math.round(capitalInitial*Math.pow(1+(tauxInterets/100), duree))
interets = Math.round(capitalFinal - capitalInitial)

affichage = `
<p>Avec un capital initial de ${capitalInitial}€, placé à ${tauxInterets}% pendant ${duree} année(s)</p>
<ul>
    <li>Le montant total des intérêts s'élévera à ${interets}€</li>
    <li>Le capital final à l'issue sera de ${capitalFinal}€</li>
</ul>
`

result.innerHTML = affichage