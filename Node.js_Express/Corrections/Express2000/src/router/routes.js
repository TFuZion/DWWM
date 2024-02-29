const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'HomePage', message: 'Bienvenue sur mon site'})
  })

// Texte HTML
router.get('/bienvenue', (req, res) => {
    res.send('<h1>Bienvenue sur votre site Express2000</h1>')
})

// Contenu JSON
router.get('/info', (req, res) => {
    const jsonData = {
        nom: 'John Doe',
        age: 25,
        ville: 'Anytown'
    }
    res.json(jsonData)
})

// Code de statut personnalisé
router.get('/acces-interdit', (req, res) => {
    res.status(403).send('Accès interdit - Code 403')
})

// Redirection vers la page d'accueil
router.get('/redirection-accueil', (req, res) => {
    res.redirect('/')
})

// Routes par défaut
router.get('*', (req, res) => {
    res.status(404).send('Oups, cette page n\'existe pas encore')
})

module.exports = router;