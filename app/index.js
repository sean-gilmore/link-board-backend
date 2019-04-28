import Link from './models/link.js';
const express = require('express')
const app = express();
const port = 3000;


app.get('/', (req, res) => res.send('Hello World!'));
app.get('/link/test', (req, res) => res.send(Link.test()));

app.post('/link/create', (req, res) => res.send(Link.create(req.body)));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
