const express = require('express');
const app = express();
const router = require('./routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('App is running')
});

app.use('/api', router);

app.listen(3000, () => {
    console.log('Server listening on port 3000')
});

module.exports = {
    app
}
