const result = document.querySelector(".result")

let userEmail,
    userMdp,
    affichage

let email = "contact@teamjs.fr";
let mdp = "leLundiAuSoleil";

userEmail = prompt("Saisire votre email")
userMdp = prompt("Saisir votre mot de passe")

// if (userEmail == email && userMdp == mdp) {
//     affichage = "<p>Bienvenue sur votre espace sécurisé</p>"
// } else {
//     affichage = "<p>Mot de passe ou email incorrect !</p>"
// }

if (userEmail == email) {
    if (userMdp == mdp) {
        affichage = "<p>Bienvenue sur votre espace sécurisé</p>"
    } else {
        affichage= "<p>Mot de passe incorrecte</p>"
    }
} else {
    affichage = "<p>Email incorrect</p>"
}

result.innerHTML = affichage