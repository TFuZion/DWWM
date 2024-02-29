const express = require('express')
const app = express()
// const path = require('path')
const bodyParser = require('body-parser')
const livreRoutes = require('./src/router/livreRoutes')
// const connection = require('./config/db')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use('/livres', livreRoutes)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
})