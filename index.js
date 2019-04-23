import Link from './models/links.js'
const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => res.send('Hello World!'));

app.post('/link/create', (req, res) => res.send(Link.create(req.body)))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
