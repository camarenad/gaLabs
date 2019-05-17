var express = require('express');
var router = express.Router();
var destinationsController = require('../controllers/destinationsController');

router.post('/flights/:id/destinations', destinationsController.create);
// router.post('/flights/:id/destinations', destinationsController.create);

module.exports = router;