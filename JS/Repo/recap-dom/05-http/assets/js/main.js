/*
    Le protocole HTTP sert à faire les requêtes API, mais il est possible de faire les requêtes de plusieurs façons via un changement du verbe:

    * GET => Serveur, donne moi des informations
    * POST => Serveur, voici des infos, fais en ce que tu veux et si possible retourne moi quelque chose
    * DELETE => Serveur, supprime ce qui est présent à cette adresse et si possible informe moi de ce qu'il s'est passé
    * PATCH => Serveur, modifie à cet id les champs que je t'envoie et si possible informe moi des modifications
    * PUT => Serveur, à cet ID, place les informations que je t'envoie, si possible informe moi des changements
*/

const BASE_TEST_API_URL = "https://m2i-formation-ff681-default-rtdb.europe-west1.firebasedatabase.app/";

document.addEventListener("DOMContentLoaded", async () => {
  const usersULDisplay = document.querySelector("ul#users-display");
  const userAddBTN = document.querySelector("button#user-add");

  const response = await fetch(BASE_TEST_API_URL + "users.json");
  if (response.status !== 200) console.error("Problème...");
  const data = await response.json();
  if (!data) console.error("Problème...");

  userAddBTN.addEventListener("click", async () => {
    console.log(123);
    const newContact = {
      name: "John Doe",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
    };

    const response = await fetch(BASE_TEST_API_URL + 'character.json', {
        method: "POST",
        body: JSON.stringify({
            username: "Toto",
            className: "Warrior",
            exp: 254
        })
    });
    if(response.status !== 201) return
    const data = await response.json()
    console.log(data);
  });
});
