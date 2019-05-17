var express = require('express');
var router = express.Router();
var flightsController = require('../controllers/flightsController');

/* GET flights/new */
router.get('/', flightsController.flights);
router.get('/new', flightsController.new);
router.get('/:id', flightsController.show);
router.get('/:id/edit', flightsController.edit);
router.put('/:id', flightsController.update);
router.post('/', flightsController.create);

module.exports = router;