var express = require('express');
var router = express.Router();
var flightsController = require('../controllers/flightController');

/* GET flights/new */
router.get('/', flightsController.flights);
router.get('/about', flightsController.about);
router.get('/new', flightsController.new);
router.post('/', flightsController.create);

module.exports = router;