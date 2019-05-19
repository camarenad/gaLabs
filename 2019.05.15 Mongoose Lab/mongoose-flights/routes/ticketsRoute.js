var express = require('express');
var router = express.Router();
var ticketsController = require('../controllers/ticketsController');

router.get('/flights/:flightId/tickets/new', ticketsController.new);
router.post('/flights/:flightId', ticketsController.create);

module.exports = router;