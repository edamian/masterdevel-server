const express = require('express');
const router = express.Router();
const messageRouter = require('./messageRouter');
const credentialrouter = require('./credentialRouter');

router.use('/message', messageRouter);
router.use('/credential', credentialrouter);

module.exports = router;