const { addToStorage, existsKey } = require('../service/credentialService');

exports.saveCredential = (req, res) => {
    const { key, shared_secret } = req.body;
    let newKey = {};
    newKey[key] = shared_secret;
    let code = 0;
    if(existsKey(newKey).length > 0) {
        code = 403;
    } else {
        addToStorage(newKey);
        code = 204;
    }
    res.sendStatus(code);
};