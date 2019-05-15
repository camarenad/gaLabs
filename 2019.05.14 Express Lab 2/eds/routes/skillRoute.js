var express = require('express');
var router = express.Router();
var skillController = require('../controllers/skillController');

router.get('/', skillController.redirectHome);
router.get('/about', skillController.about);
router.get('/home', skillController.home);
router.get('/skills', skillController.index);
router.get('/skills/:id', skillController.show);
router.get('/skills/:id/edit', skillController.edit);
router.get('/new', skillController.new);
router.post('/', skillController.create);
router.delete('/:id', skillController.delete);
router.put('/:id', skillController.update);

module.exports = router;