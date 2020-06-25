const keysStorage = [];

exports.addToStorage = (newKey) => {
    keysStorage.push(newKey);
}

exports.existsKey = (newKey) => {
    let newKeykeys = Object.keys(newKey);
    return keysStorage.filter(function(key){
        let keyKeys = Object.keys(key);
        return newKeykeys[0] === keyKeys[0];
    });
}
