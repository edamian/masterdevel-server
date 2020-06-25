const keysStorage = [];

exports.keysStorage;

exports.addToStorage = (key) => {
    keysStorage.push(key);
}

exports.existsKey = (key) => {
    let keys = Object.keys(key);
    return keysStorage.filter(function(item){
        let itemKeys = Object.keys(item);
        return itemKeys[0] === keys[0];
    });
}
