const { Router } = require('express');

const getOne = require('./getOne');

const router = Router();

router.get('/:id', getOne);

module.exports = router;
