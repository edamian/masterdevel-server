const messages = [];

exports.messages;

exports.addToMessages = (message) => {
    messages.push(message);
    console.log(messages);
};

exports.findByID = (id) => {
    const message = messages.filter((message) => message.id == id);
    return message;
};

exports.findByTag = (slug) => {
    const filteredMessagesByTag = messages.filter( (message) => message.tags.some((tag) => tag === slug));
    return filteredMessagesByTag;
};

