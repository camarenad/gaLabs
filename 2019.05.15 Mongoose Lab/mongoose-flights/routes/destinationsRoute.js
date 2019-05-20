var express = require('express');
var router = express.Router();
var destinationsController = require('../controllers/destinationsController');

router.post('/flights/:flightId/destinations', destinationsController.create);
router.delete('/:flightId/:destinationId', destinationsController.delete);

module.exports = router;