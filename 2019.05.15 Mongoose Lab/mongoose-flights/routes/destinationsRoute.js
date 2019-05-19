var express = require('express');
var router = express.Router();
var destinationsController = require('../controllers/destinationsController');

router.post('/flights/:flightId/destinations', destinationsController.create);

module.exports = router;