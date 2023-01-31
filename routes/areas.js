const express = require('express')
const areasController =require('../controllers/areas.controller')

const router = express.Router()

router.get('/', areasController.getAllAreas);
router.get('/:id', areasController.getArea);

module.exports = router;