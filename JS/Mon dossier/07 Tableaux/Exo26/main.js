function trouverNumerosTelephones(texte) {
  const regexTelephone = /(\+?\d{2}\s?(\d[\s.-]?){8,9}\b)/g;
  const numerosTrouves = texte.match(regexTelephone);

  if (numerosTrouves) {
    const numerosNormalises = numerosTrouves.map((numero) => {
      // Supprimer les caractères non numériques pour normaliser le numéro
      const numeroNormalise = numero.replace(/\D/g, "");
      // Formater le numéro selon le format demandé "+33 6 07 08 09 10"
      return `+${numeroNormalise.slice(0, 2)} ${numeroNormalise.slice(
        2,
        4
      )} ${numeroNormalise.slice(4, 6)} ${numeroNormalise.slice(
        6,
        8
      )} ${numeroNormalise.slice(8)}`;
    });

    // Remplacer les numéros dans le texte par leur version normalisée
    let texteNormalise = texte;
    numerosTrouves.forEach((numeroTrouve, index) => {
      texteNormalise = texteNormalise.replace(
        numeroTrouve,
        numerosNormalises[index]
      );
    });

    return { numerosTrouves: numerosNormalises, texteNormalise };
  }

  return { numerosTrouves: [], texteNormalise: texte };
}

const texte = `
Le numéro de contact de notre service client est le +33 1 23 45 67 89. N'hésitez pas à nous appeler pour toute assistance.

Vous pouvez également joindre notre équipe de support technique au 01 40 50 60 70 (ou 01.41.51.61.71). Nous sommes disponibles du lundi au vendredi, de 9h à 18h.

Pour des informations générales, vous pouvez composer le 33 6 12 34 56 78. Nous sommes là pour répondre à toutes vos questions.

Si vous préférez, vous pouvez nous laisser un message vocal en appelant le 0 800 123 456. Nous vous rappellerons dès que possible.

N'oubliez pas que nos collègues du département des ventes sont joignables au +33 5 55 55 55 55. Ils seront ravis de vous aider dans vos démarches.

En cas d'urgence, veuillez appeler notre hotline au 33 9 87 65 43 21. Nous sommes disponibles 24 heures sur 24, 7 jours sur 7.
`;

const resultat = trouverNumerosTelephones(texte);
console.log("Numéros trouvés :", resultat.numerosTrouves);
console.log("Texte avec numéros normalisés :\n", resultat.texteNormalise);
