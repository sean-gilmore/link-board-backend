import Link from './models/link.js';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => res.send('Hello World!'));

// Links

app.get('/v1/links', async (req, res) => {
  const result = await Link.all();
  res.json(result)
})

app.post('/v1/links/create', async (req, res) => {
  console.log(req.body);
  const result = await Link.create(req.body);
  res.json(result);
})

app.get('/v1/links/:id', async (req, res) => {
  const result= await Link.get(req.params.id);
  res.json(result);
})

// App start
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
