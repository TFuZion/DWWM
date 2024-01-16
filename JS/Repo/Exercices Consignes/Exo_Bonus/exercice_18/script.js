const result = document.querySelector(".result")

let choix,
    boisson,
    affichage

choix = prompt(`**** DISTRIBUTEUR DE BOISSON ****
                1) Eau
                2) Jus d'oranges
                3) Limonade
                4) Café
                5) Thé
                
                Faites votre choix :`)

affichage = `**** DISTRIBUTEUR DE BOISSON ****<br>
1) Eau<br>
2) Jus d'oranges<br>
3) Limonade<br>
4) Café<br>
5) Thé<br>

Faites votre choix : ${choix}<br>`

switch (choix) {
    case "1":
        affichage += "Votre eau est servie"
        break;
    case "2" :
        affichage += "Votre jus d'oranges est servie"
        break;
    case "3" :
        affichage += "Votre Limonade est servie"
        break;
    case "4":
        affichage += "Votre café est servie"
        break;
    case "5" :
        affichage += "Votre thé est servie"
        break;
    default:
        affichage += "Erreur dans le choix"
        break; 
}

result.innerHTML = affichage