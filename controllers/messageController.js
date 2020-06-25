const { uuid, isUuid } = require('uuidv4');
const { addToMessages, findByID, findByTag } = require('./../service/messageService');
const { checkSignature } = require('../utils/signature');
const { existsKey, findKey } = require('../service/credentialService');

// create new message
exports.createMessage = (req, res) => {
    try {
        const { msg, tags } = req.body;
        const newMessage = {
            id: uuid(),
            msg: msg,
            tags: tags.split(","),
        }

        const signature = req.header('X-Signature');
        const xRoute = req.header('X-Route');
        const keySecret = findKey(req.header('X-Key'));
        const data = [`msg: '${msg}'`,`tags: '${tags}'`, xRoute].sort().join(';');
        let isSigned = checkSignature(signature, data, 'adios');
        if(isSigned) {
            addToMessages(newMessage);
            res.sendStatus(201);
        } else {
            res.sendStatus(403);
        }

    } catch(e) {
        console.error(e);
        res.status(500).send({
            message: "Can not create message"
        });
    }
};

// get message by ID/tag
exports.getMessagBySlug = (req, res) => {
    const slug = req.params.slug;
    let messages = [];
    let status = 200;
    if(!isUuid(slug)) {
        messages = findByTag(slug);
    } else {
        messages = findByID(slug)[0];
    }
    res.status(status).send(messages);
};
