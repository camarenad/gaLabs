var express = require('express');
var router = express.Router();
var flightsController = require('../controllers/flightsController');

router.get('/', flightsController.flights);
router.get('/new', flightsController.new);
router.get('/:id', flightsController.show);
router.post('/', flightsController.create);

module.exports = router;