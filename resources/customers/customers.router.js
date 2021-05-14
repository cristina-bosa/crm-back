const router = require('express').Router();
const controller = require('./customers.controller');


router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', controller.createOne);

router.patch('/:id', controller.editOne);

router.delete('/:id', controller.deleteOne);

module.exports = router;