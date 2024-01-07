let contacts = [];

function ajouterContact() {
  let nom = prompt("Entrez le nom du contact :");
  if (contacts.includes(nom)) {
    console.log("Ce contact existe déjà !");
  } else {
    contacts.push(nom);
    console.log(`Contact ajouté : ${nom}`);
  }
}

function afficherContacts() {
  console.log("Liste des contacts :");
  contacts.forEach((contact) => console.log(contact));
}

function trierContacts() {
  contacts.sort();
  console.log("Contacts triés par ordre alphabétique !");
}

function melangerContacts() {
  for (let i = contacts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [contacts[i], contacts[j]] = [contacts[j], contacts[i]];
  }
  console.log("Contacts mélangés !");
}

function supprimerContact() {
  let nomSupprimer = prompt("Entrez le nom du contact à supprimer :");
  let index = contacts.indexOf(nomSupprimer);
  if (index !== -1) {
    contacts.splice(index, 1);
    console.log("Contact supprimé : " + nomSupprimer);
  } else {
    console.log("Ce contact n'existe pas !");
  }
}

function rechercherContact() {
  let partieNom = prompt("Entrez une partie du nom du contact à rechercher :");
  let resultats = contacts.filter((contact) =>
    contact.toLowerCase().includes(partieNom.toLowerCase())
  );
  if (resultats.length > 0) {
    console.log("Résultats de la recherche :");
    resultats.forEach((resultat) => console.log(resultat));
  } else {
    console.log("Aucun contact trouvé avec cette partie du nom.");
  }
}

function menu() {
  let choix = prompt(
    "Choisissez une option :\n1. (Re)saisir un contact\n2. Afficher les contacts\n3. Trier les contacts\n4. Mélanger les contacts\n5. Supprimer un contact\n6. Rechercher un contact\n7. Quitter"
  );
  switch (choix) {
    case "1":
      ajouterContact();
      break;
    case "2":
      afficherContacts();
      break;
    case "3":
      trierContacts();
      break;
    case "4":
      melangerContacts();
      break;
    case "5":
      supprimerContact();
      break;
    case "6":
      rechercherContact();
      break;
    case "7":
      return;
    default:
      console.log("Choix invalide !");
  }
  menu();
}

let nombreContacts = parseInt(
  prompt("Combien de contacts souhaitez-vous ajouter ?")
);

for (let i = 0; i < nombreContacts; i++) {
  ajouterContact();
}

menu();
