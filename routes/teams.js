const express = require('express')
const teamsController =require('../controllers/teams.controller')

const router = express.Router();

router.get('/', teamsController.getAllTeams);
router.get('/:id', teamsController.getTeam);

module.exports = router;