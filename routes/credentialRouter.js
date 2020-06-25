const express = require('express');
const credentialRouter = express.Router();
const { saveCredential } = require('../controllers/credentialController');

credentialRouter.put('/', saveCredential);

module.exports = credentialRouter;