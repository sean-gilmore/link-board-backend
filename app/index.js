import LinkController from './controllers/LinkController.js';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => res.send('Hello World!'));

// Links

app.get('/links', (req, res) => {
  res.json(LinkController.index());
})

app.post('/links/create', async (req, res) => {
  console.log(req.body);
  const result = await Link.create(req.body);
  res.json(result);
})

app.get('/links/:id', async (req, res) => {
  const result= await Link.get(req.params.id);
  res.json(result);
})

// App start
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
