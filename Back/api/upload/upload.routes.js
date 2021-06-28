const { Router } = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'tmp/' });

const getOne = require('./getOne');
const postOne = require('./postOne');

const router = Router();

router.get('/:id', getOne);
router.post('/', upload.single('File'), postOne);

module.exports = router;
