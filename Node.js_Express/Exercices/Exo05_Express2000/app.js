const express = require('express')

const app = express()
const PORT = 3000


app.use(express.static('public'));

app.get('/bienvenue', (req, res) => {
  res.send('<h1>Bienvenue<h1>')
})

app.get('/info', (req, res) => {
  const jsonData = {
    nom: 'John Doe',
    age: 25,
    ville: 'Anytown'
  }
  res.json(jsonData)
})

app.get('/acces-interdit', (req, res) => {
  res.status(403).send('Accés Interdit')
})

app.get('/redirection-acceuil', (req, res) => {
  res.redirect('/')
})

app.get('*', (req, res) => {
  res.status(404).send('<h3>Cette page n\'existe pas ecnore<h3>')
})
app.listen(PORT, () => {
  console.log('Server Open');
});