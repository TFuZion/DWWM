// Les promesses

// const fonctionClassique = () => {
//     const nombreRandom = Math.random();
//         if (nombreRandom >= 0.5) {
//             return "Bernie"
//         } else {
//             return "Il y a eu un soucis"
//         }
// }

const nomsDeChiens = [
    "Bernie",
    "Caramel",
    "Ryu",
    "Rex",
    "Beethoven"
]

const maPromesse = new Promise((resolve, reject) => {
    // console.log("Je lance mon code qui prend du temps....");
    

    setTimeout(() => {
        const nombreRandom = Math.random();
        if (nombreRandom >= 0.5) {
            resolve("Bernie")
        } else {
            reject("Il y a eu un soucis")
        }
        
    }, 3000)
})

const unePromesseAvecParam = (debutNomChien) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const lesNomsTrouves = nomsDeChiens.filter(nomChien => nomChien.toUpperCase().startsWith(debutNomChien.toUpperCase()))
            res(lesNomsTrouves)
        }, 3000)
    })
}

// const unElementDeLaPage = document.querySelector('unElement')
// unElementDeLaPage.addEventListener('click', (evenement) => {
//     evenement.target
// })

// console.log("Bonjour");
// const unResultat =  maPromesse;
// console.log(unResultat);

// const leResultat = fonctionClassique()
// console.log(leResultat);

// maPromesse
// .then(value => {
//     console.log(value);
// })
// .catch(value => {
//     console.error(value)
// })

// console.log("je m'appelle Antoine");

const maFonctionAsynchrone = async () => {
    // Code de la fonction asynchrone 
}

async function nomDeFonction() {
    // Code de la fonction asynchrone 
}

async function recupInfosFilmsStarWars(url) {
    // Ancienne syntaxe (avanc ES 6)
    // fetch(url)
        // .then(response => {
        //     if (response.status === 200) {
        //         console.log("C'est bon!");
        //         response.json()
        //         .then(data => {
        //             const mesResultats = data.results
        //             mesResultats.forEach(f => {
        //                 console.log(f.title);
        //             })
        //         })
        //     }
        // })

        // Nouvelle syntaxe (depuis ES 6)
        try {
            const response = await fetch(url)
            console.log("C'est bon!");
            const data = await response.json()
            const mesResultats = data.results
            // mesResultats.forEach(f => {
            //     console.log(f.title);
            // })
            return mesResultats.map(film => film.title)

        } catch(err) {
            console.error(err);
        }
}

document.addEventListener('DOMContentLoaded', () => {
    // Utilisation de nos propres promesses

    const resltUL = document.querySelector('ul#resultat')
    const dogNameInput = document.querySelector('input#dog-name')
    const searchDogBTN = document.querySelector('button#search')

    
    searchDogBTN.addEventListener('click', () => {
        const searchValue = dogNameInput.value;
        
        resltUL.textContent = "Chargement..."
        
        unePromesseAvecParam(searchValue)
        .then(value => {
            if (value.length > 0) {
                resltUL.innerHTML = "";
                for (const element of value) {
                    const newLIElement = document.createElement('li')
                    newLIElement.textContent = element
                    resltUL.appendChild(newLIElement)
                }
            } else resltUL.textContent = "Il n'y a pas de chien dont le nom commence par " + searchValue + "..."
        })
        .catch(value => {
            resltUL.textContent = "Il y a eu un soucis..."
        })
    })

    // Requetes API via fetch()
    

    const BASE_STARWARS_API_URL = "https://swapi.dev/api/"

    const url = BASE_STARWARS_API_URL + "films"

    // fetch(url)
    // .then(response => {
    //     if (response.status === 200) {
    //         console.log("C'est bon!");
    //         response.json()
    //         .then(data => {
    //             const mesResultats = data.results
    //             mesResultats.forEach(f => {
    //                 console.log(f.title);
    //             })
    //         })
    //     }
    // })

    let tableauTitresFilms = [];
    recupInfosFilmsStarWars(url).then(titres => {
        tableauTitresFilms = titres;
        console.log(tableauTitresFilms);
    });
})