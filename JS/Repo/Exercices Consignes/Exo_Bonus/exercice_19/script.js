const result = document.querySelector(".result")

let poids,
    taille,
    affichage

poids = Number(prompt("Veuillez saisir votre poids"))
taille = Number(prompt("Veuillez saisir votre taille"))

switch (true) {
    case (taille >= 145 && taille < 172 && poids >= 43 && poids <= 47 ||
        taille >= 145 && taille < 169 && poids >= 48 && poids <= 53 ||
        taille >= 145 && taille < 166 && poids >= 54 && poids <= 59 ||
        taille >= 145 && taille < 163 && poids >= 60 && poids <= 65):
        affichage = "Prenez la taille 1"
        break;
    case (taille >= 169 && taille < 183 && poids >= 48 && poids <= 53 ||
        taille >= 166 && taille < 178 && poids >= 54 && poids <= 59 ||
        taille >= 163 && taille < 175 && poids >= 60 && poids <= 65 ||
        taille >= 163 && taille < 172 && poids >= 66 && poids <= 71):
        affichage = "Prenez la taille 2"
        break
    case (taille >= 178 && taille < 183 && poids >= 54 && poids <= 59 ||
        taille >= 175 && taille < 183 && poids >= 60 && poids <= 65 ||
        taille >= 172 && taille < 183 && poids >= 66 && poids <= 71 ||
        taille >= 163 && taille < 183 && poids >= 72 && poids <= 77):
        affichage = "Prenez la taille 3"
        break
    default:
        affichage = "Aucune taille ne vous correspond"
        break;
}

result.innerHTML = `<p>Pour ${taille}cm et ${poids}Kg</p>
                    <ul>
                        <li>${affichage}</li>
                    </ul>`