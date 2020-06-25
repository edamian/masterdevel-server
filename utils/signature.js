const crypto = require('crypto');

exports.checkSignature = (signature, data, secret) => {
    computedSignature = crypto
        .createHmac('sha256', secret)
        .update(data).digest('hex');
    return signature === computedSignature;
};