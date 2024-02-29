const livreController = require('../../controllers/livreController');
const express = require('express');
const router = express.Router();

router.post('/', livreController.addLivre);
router.get('/', livreController.getAllLivres);
router.put('/:id', livreController.updateLivre);
router.delete('/:id', livreController.deleteLivre)

module.exports = router;