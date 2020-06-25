const messages = [];

exports.addToMessages = (message) => {
    messages.push(message);
};

exports.findByID = (id) => {
    return messages.filter((message) => message.id === id);
};

exports.findByTag = (slug) => {
    return messages.filter( (message) => message.tags.some((tag) => tag === slug));
};

