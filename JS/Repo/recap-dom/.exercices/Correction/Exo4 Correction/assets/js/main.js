/*
    Exercice 04 

    Réaliser une application permettant à un utilisateur de rechercher les informations d'un pokémon. 

    Pour cela, il aura à sa disposition deux <select>: 
      * Le premier select servira à sélectionner la région. De base, il est vide, mais via le code Javascript il sera peuplé d'options permettant de choisir la région voulue. Une fois l'option choisie, on ira peupler le seconde select avec les pokémons disponibles dans cette région
    * Un autre select peremettant de choisir un pokémon parmi une liste peuplée en fonction de sa région d'origine (Kanto, Aloha, Jotho, etc...). Lors de la sélection d'un pokémon dans ce select, on ira rechercher les informations du pokémon pour les afficher dans un élément HTML prévu pour
    

    Une fois les deux requêtes faites, l'utilisateur se verra ainsi présenté dans la div prévue le nom, le noméro dans le pokédex, les types, les noms de capacités, le poids et la taille de ce pokémon. Il y aura également l'image du pokémon, qui est présente en tant qu'URL dans le retour JSON des informations d'un pokémon
*/

const BASE_POKEAPI_URL = 'https://pokeapi.co/api/v2/'

let pokedexesAndURLs = [];
let pokemonsAndURLs = [];

const fetchAllPokedexes = async () => {
  const url = BASE_POKEAPI_URL + "pokedex"
  try {
    const response = await fetch(url)
    if (response.status !== 200) return
    const data = await response.json()
    pokedexesAndURLs = data.results
  } catch (err) {
    console.error(err);
  }
}

const fetchAllPokemonNamesAndURLForPokedex = async (url) => {
  try {
    const response = await fetch(url)
    if (response.status !== 200) return
    const data = await response.json()
    pokemonsAndURLs = data.pokemon_entries.map(obj => ({
      name: obj.pokemon_species.name,
      url: obj.pokemon_species.url.replace('pokemon-species', 'pokemon')
    }))
  } catch (err) {
    console.error(err);
  }
}

const fetchAllPokemonDetails = async (url) => {
  try {
    const response = await fetch(url)
    if (response.status !== 200) return
    const data = await response.json()
    return {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      types: data.types.map(objTypes => objTypes.type.name),
      abilities: data.abilities.map(objAbility => objAbility.ability.name),
      sprite: data.sprites.front_default
    }
  } catch (err) {
    console.error(err);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const generationsSelect = document.querySelector('select#generation')
  const pokemonNameSelect = document.querySelector('select#pokemon-name')
  const pokemonDetailsDiv = document.querySelector('div#pokemon-details')

  await fetchAllPokedexes()
  console.log(pokedexesAndURLs);

  generationsSelect.innerHTML = '<option value="">Select a Region...</option>'
  pokedexesAndURLs.forEach(infos => {
    const newOption = document.createElement('option')
    newOption.value = infos.name;
    let futurTextContent = infos.name.split('-') // On passe notre chaine de caractère en un tableau qui est créé via le séparateur '-'

    // Si notre tableau de mots contient le mot-clé 'extended', 'updated' ou 'extended'...
    if (futurTextContent.includes("extended") || futurTextContent.includes('original') || futurTextContent.includes('updated')) {
      futurTextContent = futurTextContent.toReversed() // ON inverse l'ordre des éléments dans le tableau
    }

    // Le premier des mots sera mit avec la première lettre en majuscule
    futurTextContent[0] = futurTextContent[0].substring(0, 1).toUpperCase() + futurTextContent[0].substring(1).toLowerCase()

    // Si on avait plusieurs mots, on les rassemble en mettant le deuxième mot entre parenthèse
    if (futurTextContent.length > 1) {
      futurTextContent = futurTextContent.join(' (') + ')'
    } else futurTextContent = futurTextContent[0] // Sinon on ne prend que le premier mot

    newOption.textContent = futurTextContent;
    generationsSelect.appendChild(newOption)
  })

  generationsSelect.addEventListener('change', async () => {
    // const value = generationsSelect.value
    const { value } = generationsSelect
    if (!value) return

    const foundPokedex = pokedexesAndURLs.find(poke => poke.name === value)
    if (!foundPokedex) return

    await fetchAllPokemonNamesAndURLForPokedex(foundPokedex.url)
    pokemonNameSelect.innerHTML = '<option value="">Select a Pokemon...</option>'
    pokemonsAndURLs.forEach(pokemon => {
      const newOption = document.createElement('option')
      newOption.value = pokemon.name;
      newOption.textContent = pokemon.name.substring(0, 1).toUpperCase() + pokemon.name.substring(1).toLowerCase()
      pokemonNameSelect.appendChild(newOption)
    })
  })

  pokemonNameSelect.addEventListener('change', async () => {
    const { value } = pokemonNameSelect
    if (!value) return

    const foundPokemon = pokemonsAndURLs.find(poke => poke.name === value)
    if (!foundPokemon) return
    
    const pokemonDetails = await fetchAllPokemonDetails(foundPokemon.url)
    pokemonDetailsDiv.innerHTML = `
    <h3>${pokemonDetails.id} - ${pokemonDetails.name}</h3>
    <img alt="${pokemonDetails.name}" src="${pokemonDetails.sprite}" />
    <ul>
      <li><b>Height: </b>${pokemonDetails.height}</li>
      <li><b>Weight: </b>${pokemonDetails.weight}</li>
      <li><b>Types: </b>${pokemonDetails.types.map(t => t.substring(0, 1).toUpperCase() + t.substring(1).toLowerCase()).join(', ')}</li>
      <li><b>Abilities: </b>${pokemonDetails.abilities.map(a => a.substring(0, 1).toUpperCase() + a.substring(1).toLowerCase()).join(', ')}</li>
    </ul>
    `
  })
})