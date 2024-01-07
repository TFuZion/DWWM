const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validerAdressesEmail() {
  const adressesEmail = [];
  let adresse = "";

  while (adresse !== "fin") {
    adresse = prompt(
      "Entrez une adresse e-mail (ou tapez 'fin' pour terminer) :"
    );

    if (adresse && adresse !== "fin") {
      adressesEmail.push(adresse);
    }
  }

  const resultatsValidation = adressesEmail.map((email) =>
    regexEmail.test(email)
  );
  return resultatsValidation;
}

const resultats = validerAdressesEmail();

console.log(resultats);
