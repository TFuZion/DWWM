
const Livre = require('../models/livre')

const livreController = {
  getAllLivres: (req, res) => {
    Livre.getAllLivres((err, result) => {
      if (err) throw err;
      res.json(result)
    });
  },

  addLivre: (req, res) => {
    const livreData = req.body;
    Livre.addLivre(livreData, (err) => {
      if (err) throw err;
      res.json({message: 'Livre ajouté avec succès'});
    });
  },

  updateLivre: (req, res) => {
    const livreId = req.params.id;
    const livreData = req.body;
    Livre.updateLivre(livreId, livreData, (err) => {
      if (err) throw err;
      res.json({message: 'Livre mis à jour avec succès'});
    });
  },

  deleteLivre: (req, res) => {
    const livreId = req.params.id;
    Livre.deleteLivre(livreId, (err) => {
      if (err) throw err;
      res.json({message: 'Livre supprimé avec succès'});
    });
  },
}

module.exports = livreController;