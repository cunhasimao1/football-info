const express = require('express')
const personsController =require('../controllers/persons.controller')

const router = express.Router()

router.get('/:id', personsController.getPerson);

module.exports = router;