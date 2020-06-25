const express = require('express');
const { createMessage, getMessagBySlug } = require('../controllers/messageController');

const messageRouter = express.Router();

messageRouter.post('/', createMessage);
messageRouter.get('/:slug', getMessagBySlug);

module.exports = messageRouter;