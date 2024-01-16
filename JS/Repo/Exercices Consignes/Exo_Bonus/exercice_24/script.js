const result = document.querySelector(".result")

let nbNotes = 0,
    maxNote = 0,
    minNote = 20,
    moyNote = 0,
    ok = false,
    affichage = "<h1>Meilleur note, moins bonne note, moyenne des notes</h1><ul>"



while (!ok) {
    let note = Number(prompt("Veuillez saisir une note"))
    if (note >= 0 && note <= 20) {
        affichage += `<li>En note ${++nbNotes}, vous avez saisi : ${note}/20</li>`
        moyNote += note

        if (note > maxNote) {
            maxNote = note
        } 
        
        if (note < minNote) {
            minNote = note
        }
    } else if (note == 777) {
        ok = true
    } else {
        alert("Merci de saisir une note entre 0 et 20 !")
    }
}

affichage += "</ul><hr>"

moyNote /= nbNotes

affichage += `<p>Sur l'ensemble des ${nbNotes} notes</p>
                <ul>
                    <li class="green">La meilleur note est de ${maxNote}/20</li>
                    <li class="red">La moins bonne note est de ${minNote}/20</li>
                    <li class=""gray">La moyenne des notes est de ${moyNote.toFixed(2)}/20</li>
                </ul>
`

result.innerHTML = affichage