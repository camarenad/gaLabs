var express = require('express');
var router = express.Router();
var ticketsController = require('../controllers/ticketsController');

router.get('/tickets/new', ticketsController.new);
router.post('/tickets', ticketsController.create);
router.post('/flights/:id/tickets', ticketsController.addToTickets);

module.exports = router;