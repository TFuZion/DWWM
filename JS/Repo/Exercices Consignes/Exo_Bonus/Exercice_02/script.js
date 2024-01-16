const result = document.querySelector(".result")

let nb1, nb2, resultat, affichage

nb1 = Number(prompt("Veuillez saisir le nombre 1 :"))
nb2 = Number(prompt("Veuillez saisir le nombre 2 :"))
resultat = nb1 + nb2

affichage = `<p>Vous avez saisi : ${nb1}</p>`
affichage += `<p>Vous avez saisi : ${nb2}</p>`
affichage += `<p>La somme de ${nb1} + ${nb2} = ${resultat}</p>`

result.innerHTML = affichage