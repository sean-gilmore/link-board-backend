import Link from './models/link.js';
const express = require('express')
const app = express();
const port = 3000;

// Routes
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/v1/link/test', (req, res) => res.send(Link.test()));
app.get('/v1/link/:id', async (req, res) => {
  const result = await Link.get(req.params.id);
  res.json(result);
});
app.post('/v1/link/create',  (req, res) => res.send(Link.create(req.body)));

// App start
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
