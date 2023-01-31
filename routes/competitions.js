const express = require('express')
const competitionsController =require('../controllers/competitions.controller')

const router = express.Router()

router.get('/', competitionsController.getAllCompetitions);
router.get('/:id', competitionsController.getCompetition);
router.get('/:id/standings', competitionsController.getStandings);

module.exports = router;