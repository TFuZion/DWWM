const result = document.querySelector(".result")

let prixHt,
    tauxTva,
    mtTva,
    prixTtc,
    affichage

prixHt = 100
tauxTva = 20

mtTva = prixHt * tauxTva / 100
prixTtc = prixHt + mtTva

affichage = `
<p>Le prix H.T de l'objet étant de ${prixHt}€, avec un taux de T.V.A applicable de ${tauxTva}%</p>
<ul>
    <li>Le montant de la T.V.A d'élévera à ${mtTva}€</li>
    <li>Le prix T.T.C de l'objet sera de ${prixTtc}€</li>
</ul>
`

result.innerHTML = affichage