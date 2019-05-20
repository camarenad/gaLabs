var express = require('express');
var router = express.Router();
var flightsController = require('../controllers/flightsController');

router.get('/', flightsController.flights);
router.get('/new', flightsController.new);
router.get('/:flightId', flightsController.show);
// router.get('/deleteDest', flightsController.deleteDestination);
router.post('/', flightsController.create);
router.delete('/:flightId/:ticketId', flightsController.delete);

module.exports = router;