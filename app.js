const express = require('express');
const app = express();

app.get('/ping', (req, res) => res.send('pong'));

app.listen(3002, () => console.log('app listening on port 3002'));