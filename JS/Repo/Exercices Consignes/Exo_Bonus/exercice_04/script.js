const result = document.querySelector(".result")

let mot, motInverse, affichage

mot = prompt("Veuillez saisir un mot :")

motInverse = mot.split("").reverse().join("")

affichage = `
<p>Vous avez saisi : ${mot}</p>
<p>Le mot inversé : ${motInverse}</p>
`

if (mot == motInverse) {
    affichage += `<p>Le mot ${mot} est un palindrome</p>`
} else {
    affichage += `<p>Le mot ${mot} n'est pas un palindrome</p>`
}

result.innerHTML = affichage