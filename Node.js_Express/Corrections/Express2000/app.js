const express = require('express');
const app = express();
const path = require('path');
const connection = require('./config/db')

app.set('view engine', 'pug') // Configuration du moteur de modèle
app.set('views', path.join(__dirname, 'views'));

// Définir le dossier public pour les fichiers statiques
app.use(express.static('public'));

// Importez le routeur
const mainRouter = require("./src/router/routes")

// Utilisez le routeur pour gérer les routes
app.use('/', mainRouter);

const userData = { nom: 'Ula Doe', email: 'ula.doe@example.com' };
connection.query('INSERT INTO Users SET ?', userData, (err, result) => {
  if (err) {
    console.error('Erreur lors de l\'exécution de la requête :', err);
  } else {
    console.log('Utilisateur ajouté avec succès. ID :', result.insertId);
  }
});


// Port d'écoute
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`)
})