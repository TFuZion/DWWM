// Permet de récupérer une balise depuis ma page HTML
const result = document.querySelector(".result"),
    result2 = document.querySelector(".result2"),
    inputText = document.querySelector(".inputText")

// Permet d'injecter du contenu dans une balise
result.innerHTML = "<h1 class='test'>Appel de fonction au clique d'un bouton</h1>"

function myButtonClick() {
    alert("Vous avez cliqué sur le bouton")
}

function onMouseOver() {
    alert("Vous avez survolé le bouton")
}

function onDblClick() {
    alert("Vous avez cliqué deux fois sur le bouton")
}

function functionArg(arg) {
    switch(arg) {
        case 1 : alert("Vous avez cliqué sur le bouton 1"); break;
        case 2 : alert("Vous avez cliqué sur le bouton 2"); break;
        case 3 : alert("Vous avez cliqué sur le bouton 3"); break;
        case 4 : alert("Vous avez cliqué sur le bouton 4"); break;
    }
}

// Ecoute le clavier de l'utilisateur, si l'utilisateur utilise la touche Enter, cela déclenche un événement
document.addEventListener("keydown", (event) => {
    console.log(event.key);
    if(event.key == "Enter") {
        let message = inputText.value
        alert("Vous avez appuyé sur Enter \nMessage : " + message)
    }
})

document.addEventListener("click", (event) => {
    console.log(event.target);
    let valeur = event.target.dataset.key
    console.log(valeur);
})