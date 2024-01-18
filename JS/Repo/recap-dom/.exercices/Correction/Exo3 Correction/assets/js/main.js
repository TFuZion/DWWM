/*
    Exercice 03

    Vai l'API public de Starwars API, réalisez une application permettant aux utilisateurs de voir les informations de base pour chaqu'un des 6 films de base de la sage Star Wars (les originaux, pas les Disney). 

    Chacun de ces films va servir dans l'affichage à générer un bouton, qui, lorsque cliqué, va effectuer une requête à l'API dans le but de peupler un affichage (via des <li> ou dans une carte à la Bootstrap (vous pouvez en faire le design en CSS pur bien sur).

    Il vous faudra donc:
        * Faire une requête permettant d'avoir tous les titres des films de la saga Star Wars
        * Un bouton avec comme texte le titre du film pour chaque film de la saga 
        * Déclencher une requête spécifique au film au moment du clic sur le bouton de l'un des films de la saga
        * Afficher les informations dans un endroit de la page une fois finie
*/
const BASE_STARWARS_API_URL = "https://swapi.dev/api/"
let moviesSummaries = [];

const fetchAllSWMoviesSummaries = async () => {
    try {
        const response = await fetch(BASE_STARWARS_API_URL + "films")
        if (response.status === 200) {
            const data = await response.json()
            moviesSummaries = data // Object JSON
                .results // Le tableau présent dans l'objet
                .toSorted((a, b) => a.episode_id - b.episode_id) // Le tableau en version triée par episode_id
                .map(film => ({title: film.title, url: film.url })) // Seulement le titre et l'url pour chaque film
        } else {
            throw new Error('Le serveur ne peut pas traiter la requête')
        }
    } catch (err) {
        throw new Error('Il y a eu un soucis')
    }
}

const fetchMovieDetails = async (url) => {
    try {
        const response = await fetch(url)
        if (response.status === 200) {
            const data = await response.json()
            return {
                title: data.title,
                releaseDate: data.release_date,
                producer: data.producer,
                director: data.director
            }
        } else {
            throw new Error('Le serveur ne peut pas traiter la requête')
        }
    } catch (err) {
        throw new Error('Il y a eu un soucis')
    }
}


document.addEventListener('DOMContentLoaded', async () => {
    const divResult = document.querySelector('div#result')
    const movieDetails = document.querySelector('ul#movie-details')

    try {
        await fetchAllSWMoviesSummaries()
        divResult.innerHTML = ""
        moviesSummaries.forEach(infos => {
            const newButton = document.createElement('button')
            newButton.textContent = infos.title
            newButton.addEventListener('click', async () => {
                const details = await fetchMovieDetails(infos.url)
                movieDetails.innerHTML = ""

                // const mesNombres = [1, 2, 3]
                // for (const nomVar in mesNombres) {
                //     // 1, 2, 3
                // }

                // const mesObj = [
                //     {nom: "DUPONT", prenom: "John"},
                //     {nom: "DUPONT", prenom: "Helene"},
                //     {nom: "DUPONT", prenom: "Chloee"}
                // ]

                // for(const nomVar in mesObj) {
                //     // {nom: "DUPONT", prenom: "John"},
                //     // {nom: "DUPONT", prenom: "Helene"},
                //     // {nom: "DUPONT", prenom: "Chloee"}
                // }

                // const unObj =  {
                //     nom: "DUPONT", 
                //     prenom: "John"
                // }

                // let duTexte = "nom"
                // unObj.duTexte

                // unObj[duTexte]

                // for(const key in unObj) {
                //     // nom, prenom
                // }

                for(const key in details) {
                    const newLIElement = document.createElement('li')
                    newLIElement.innerHTML = `<b>${key}</b>: ${details[key]}`;
                    movieDetails.appendChild(newLIElement)
                }
            })
            divResult.appendChild(newButton)
        })
    } catch (err) {
        console.error(err);
        divResult.textContent = err.message
    }
})