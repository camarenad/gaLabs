var express = require('express');
var router = express.Router();
var skillController = require('../controllers/skillController');

router.get('/', skillController.index);
router.get('/new', skillController.new);
router.get('/:id', skillController.show);
router.post('/', skillController.create);
router.delete('/:id', skillController.delete);
router.get('/:id/edit', skillController.edit);
router.put('/:id', skillController.update);

module.exports = router;
