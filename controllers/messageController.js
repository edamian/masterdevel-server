const { uuid, isUuid } = require('uuidv4');
const { addToMessages, findByID, findByTag } = require('./../service/messageService');

// create new message
exports.createMessage = (req, res) => {
    try {
        const { msg, tags } = req.body;
        const newMessage = {
            id: uuid(),
            msg: msg,
            tags: tags.split(","),
        }
        
        addToMessages(newMessage);
        res.sendStatus(201);
    } catch(e) {
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
