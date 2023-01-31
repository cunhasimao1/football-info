const express = require('express')
const matchesController =require('../controllers/matches.controller')

const router = express.Router()

router.get('/', matchesController.getAllMatches);
router.get('/:id', matchesController.getMatch);

module.exports = router;