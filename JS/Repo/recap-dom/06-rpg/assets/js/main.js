import Character from "./Character.js";

const BASE_URL = 'https://m2i-formation-ff681-default-rtdb.europe-west1.firebasedatabase.app/'
let classesInfos = [];

let actualStats = {
    strength: 20,
    intelligence: 20,
    stamina: 20,
    health: 20
};

const fetchAllCharClasses = async () => {
    const response = await fetch(BASE_URL + 'charClasses.json')
    if (!response.status === 200) throw new Error('Something went wrong...')
    const data = await response.json()
    const resultArray = []
    
    for (const key in data) {
        const newOBJ = {
            id: key,
            name: data[key].name
        }
        resultArray.push(newOBJ)
    }
    return resultArray
    
}

const fetchCharClassName = async (classId) => {
    const response = await fetch(BASE_URL + 'charClasses/' + classId + '.json')
    if (!response.status === 200) throw new Error('Something went wrong...')
    const data = await response.json()
console.log(data);
    return data.name
}

const fetchClassesStats = async (classId) => {
    const response = await fetch(BASE_URL + 'charClasses/' + classId + '/stats.json') // https://m2i-formation-ff681-default-rtdb.europe-west1.firebasedatabase.app/charClasses/-NoWoLaxeNix7I3a3kMO.json
    if (!response.status === 200) throw new Error('Something went wrong...')
    return await response.json()
}

const postNewCharacter = async (character) => {
    const response = await fetch(BASE_URL + 'characters.json', {
        method: 'POST',
        body: JSON.stringify(character)
    })
    if (response.status !== 200) return
    const data = await response.json()
    return {
        id: data.name,
        ...character,
        className: await fetchCharClassName(character.className)
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const charClassSelect = document.querySelector('select#char-class')
    const charStatsInputs = document.querySelectorAll('input[id^="char-stats"]')
    const availablePointsSpan = document.querySelector('span#char-stats-points')
    const charAddForm = document.querySelector('form#char-add')

    try {
        classesInfos = await fetchAllCharClasses()
        console.log(classesInfos);
        charClassSelect.innerHTML = '<option value="">Select a class...</option>'
        classesInfos.forEach(c => {
            const newOption = document.createElement('option')
            newOption.value = c.id
            newOption.textContent = c.name
            charClassSelect.appendChild(newOption)
        })
    } catch (err) {
        console.error(err.message)
    }

    charClassSelect.addEventListener('change', async () => {
        const { value } = charClassSelect
        if (!value) return

        if (classesInfos.find(x => x.id === value)) {
            const stats = await fetchClassesStats(value)
            for (const s in stats) {
                const inputElement = document.querySelector(`input[id="char-stats-${s}"]`)
                inputElement.value = 20 + stats[s]
                actualStats[s] = 20 + stats[s]
            }
        }
    })

    charStatsInputs.forEach(input => {
        input.addEventListener('change', () => {
            const changingKey = input.id.split('-')[2]
            if (input.value > actualStats[changingKey]) {
                const difference = +input.value - actualStats[changingKey]
                if (+availablePointsSpan.textContent > 0 && difference < +availablePointsSpan.textContent) {
                    availablePointsSpan.textContent = +availablePointsSpan.textContent - difference
                    actualStats[changingKey] = +input.value
                } else {
                    input.value = actualStats[changingKey]
                }
            }
            else {
                // On descend...
                availablePointsSpan.textContent = +availablePointsSpan.textContent + 1
                actualStats[changingKey] = +input.value
            }
        })

        // Solution alternative pour éviter que l'utilisateur puisse saisir manuellement une valeur et cheese l'attribution des stats
        // input.addEventListener('keydown', () => {
        //     input.value = actualStats[changingKey]
        // })
    })

    charAddForm.addEventListener('submit', async (event) => {
        event.preventDefault()

        const newCharacter = new Character(
            document.querySelector('input#char-name').value,
            document.querySelector('select#char-class').value,
            document.querySelector('input#char-player-name').value,
            actualStats,
            +document.querySelector('input#char-height').value,
            +document.querySelector('input#char-weight').value            
        );

        const charAdded = await postNewCharacter(newCharacter)
        console.log(charAdded);
    })
})

// const obj = {
//     nom: "DUPONT",
//     prenom: "John",
//     age: 27
// } // 0x0215485 => 
// const copyObj = { 
//     ...obj,
//     email: "email@example.com"
// }; // 0x15482645
// copyObj.nom = "SMITH" // 0x15482645.nom
// console.log(copyObj); // 0x0215485
// const { nom, ...leReste } = obj
// console.log(nom);
// console.log(leReste);