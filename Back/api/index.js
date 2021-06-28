const { Router } = require('express');

const upload = require('./upload/upload.routes');

const router = Router();

router.use('/upload', upload);

module.exports = router;
