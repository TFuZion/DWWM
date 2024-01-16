// Pour pouvoir créer des contacts dans le fichier main.js, il nous faut la référence du code de la classe. Pour cela, on fait un import
import Contact from './Contact.js';

// ON peut créer un tableau de contacts pour les utiliser par la suite
const contacts = [
    new Contact("John", "DUPONT", "j.dupont@email.com", "+33 123 456 789"),
    new Contact("Martha", "DUPONT", "m.dupont@email.com", "+33 123 456 147"),
    new Contact("Chloée", "DUPONT", "c.dupont@email.com", "+33 123 456 254"),
    new Contact("Hélène", "SMITH", "h.smith@email.com", "+33 123 456 159"),
    new Contact("Jacky", "GOMEZ", "j.gomez@email.com", "+33 123 456 368"),
];

document.addEventListener('DOMContentLoaded', () => {
    // Pour récupérer les éléments HTML et les manipuler, il faut aller les pioches via le Javascript
    const ulNomsComplets = document.getElementById('nom-complet-affichage')
    const inputSearch = document.querySelector('input#searchInput')
    const inputSearchDList = document.getElementById('searchInput-list');

    // Cette fonction a pour rôle de trier les éléments de notre <ul> en se basant sur un terme de recherche (le début du nom de famille des personnes)
    const updateListing = (searchInput) => {

        ulNomsComplets.innerHTML = ""; // De base, on ré-initialiser le listing pour éviter les potentiels doublons

        // Si on a pas de terme de recherche
        if (!searchInput) {
            // ON va parcourir le tableau de tous les contacts
            contacts.forEach(c => {
                // Pour chaque contant, on créé un <li>
                const nouveauLI = document.createElement('li')
                // On donne la valeur présente dans le <li>
                nouveauLI.textContent = `${c.prenom} ${c.nom}`
                // On ajoute le <li> à la fin de la balise <ul> (le listing)
                ulNomsComplets.appendChild(nouveauLI)
            })
        } else {
            // Si on a un terme de recherche, on fait la même chose mais on filtre les contacts avant de générer les <li>
            contacts.filter(c => c.nom.toUpperCase().startsWith(searchInput.toUpperCase()))
            .forEach(c => {
                const nouveauLI = document.createElement('li')
                nouveauLI.textContent = `${c.prenom} ${c.nom}`
        
                ulNomsComplets.appendChild(nouveauLI)
            })
        }
    }

    // Cette fonction d'update du listing est lancée dés le début pour avoir la version sans filtrage (avoir l'affichage de tous les contacts)
    updateListing();


    // ON se branche sur le changement de valeur de notre input pour provoquer la mise à jour de l'affichage
    inputSearch.addEventListener('change', () => {
        // const value = event.target.value;
        const value = inputSearch.value;

        updateListing(value);
    })

    const mesNombres = [1, 2, 3, 4, 5, 6]
    // const nombresAuCarre = []

    // for (const n of mesNombres) {
    //     nombresAuCarre.push(n ** 2)
    // }

    const nombresAuCarre = mesNombres.map(n => n ** 2)
    console.log(nombresAuCarre);

    const nombresAlea = [1, 4, 2, 8, 3, 4];
    console.log(nombresAlea.toSorted());
    console.log(nombresAlea);
    
    const laSommeDesNombres = mesNombres.reduce((sum, nombreEnCourtIteration) => sum + nombreEnCourtIteration);

    console.log(laSommeDesNombres);

    // Pour peupler notre datalist, on va récupérer uniquement les noms de familles des personnes
    const nomsDeFamilles = [];

    contacts.forEach(c => {
        if (!nomsDeFamilles.includes(c.nom)) nomsDeFamilles.push(c.nom)
    })

    // Pour chaque noms de familles
    const leTabFinal = nomsDeFamilles
        .toSorted() // Triés par ordre alphabéthique
        .map(c => `<option value="${c}"></option>`) // On génère du code HTML
        .forEach(option => inputSearchDList.innerHTML += option) // que l'on ajoute en fin de la balise <datalist>
});