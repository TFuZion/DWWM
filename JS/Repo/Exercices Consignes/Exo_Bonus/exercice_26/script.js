const result = document.querySelector(".result")
const tableau = document.querySelector(".tableau")

let annuaire = [
    {
        nom: "Dupont",
        prenom: "Jean",
        age: 15
    },
    {
        nom: "Durant",
        prenom: "Pierre",
        age: 16
    },
    {
        nom: "Martin",
        prenom: "Jean",
        age: 17
    }
]

for (let contact of annuaire) {
    tableau.innerHTML += `
        <tr>
            <td>${contact.prenom}</td>
            <td>${contact.nom}</td>
            <td>${contact.age}</td>
        </tr>
    `
}

result.innerHTML = `
<p>La personne à la 2eme position</p>
<p>${annuaire[1].prenom} ${annuaire[1].nom}</p>
`