/*
    Exercice 04 

    Réaliser une application permettant à un utilisateur de rechercher les informations d'un pokémon. 

    Pour cela, il aura à sa disposition deux <select>: 
      * Le premier select servira à sélectionner la région. De base, il est vide, mais via le code Javascript il sera peuplé d'options permettant de choisir la région voulue. Une fois l'option choisie, on ira peupler le seconde select avec les pokémons disponibles dans cette région
    * Un autre select peremettant de choisir un pokémon parmi une liste peuplée en fonction de sa région d'origine (Kanto, Aloha, Jotho, etc...). Lors de la sélection d'un pokémon dans ce select, on ira rechercher les informations du pokémon pour les afficher dans un élément HTML prévu pour
    

    Une fois les deux requêtes faites, l'utilisateur se verra ainsi présenté dans la div prévue le nom, le noméro dans le pokédex, les types, les noms de capacités, le poids et la taille de ce pokémon. Il y aura également l'image du pokémon, qui est présente en tant qu'URL dans le retour JSON des informations d'un pokémon
*/

const BASE_POKEMON_API_URL = "https://pokeapi.co/api/v2/"
let pokemonSummaries = []
let pokedexRegion = []

const fetchAllPokemonSummaries = async () => {
  try {
    const response = await fetch(BASE_POKEMON_API_URL + "region")
    if (response.status === 200) {
      const data = await response.json()
      pokemonSummaries = data.results
      console.log(pokemonSummaries);
    } else {
      throw new Error('Le serveur ne peut pas traiter la requête')
    }
  } catch (err) {
    throw new Error('Il y a eu un soucis')
  }
  
}

const fetchUrlRegion = async (url) => {
  try {
    const response = await fetch(url)
    if (response.status === 200) {
      const data = await response.json()
      pokedexRegion = data.pokedexes
      console.log(pokedexRegion);
    } else {
      throw new Error('Le serveur ne peut pas traiter la requête')
    } 

  } catch (err) {
    throw new Error('Il y a eu un soucis')
  }

}





document.addEventListener('DOMContentLoaded', async () => {
  const selectGeneration = document.getElementById('generation')
  const selectPokemonName = document.getElementById('pokemon-name')
  
  try {
    await fetchAllPokemonSummaries()
    pokemonSummaries.forEach(infos => {
      const newOption = document.createElement('option')
      newOption.textContent = infos.name
      selectGeneration.appendChild(newOption)
      selectGeneration.addEventListener('change', async () => {
        const url = await fetchUrlRegion(infos.url)
      })
    })
  } catch (err) {
    console.log(err);
  }

})