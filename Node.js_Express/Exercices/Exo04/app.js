const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
})

app.get('/', (req, res) => {
  res.send('Bienvenue sur la page d\'accueil !')
})