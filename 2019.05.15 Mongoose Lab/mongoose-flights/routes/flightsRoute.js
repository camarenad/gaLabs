var express = require('express');
var router = express.Router();
var flightsController = require('../controllers/flightsController');

router.get('/', flightsController.flights);
router.get('/new', flightsController.new);
router.get('/:flightId', flightsController.show);
router.post('/', flightsController.create);
// router.delete('/:flightId/:destinationId', flightsController.deleteDestination);
router.delete('/:flightId/:ticketId', flightsController.delete);

module.exports = router;