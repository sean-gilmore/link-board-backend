import LinkController from './controllers/LinkController.js';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => res.send('Hello World!'));

// Links

app.get('/links', async (req, res) => {
  const result = await LinkController.index();
  res.json(result);
})

app.post('/links/create', async (req, res) => {
  const result = await LinkController.create(req.body);
  res.json(result);
})

app.get('/links/:id', async (req, res) => {
  const result = await LinkController.show(req.params.id);
  res.json(result);
})

app.delete('/links/:id', async (req, res) => {
  const result = await LinkController.delete(req.params.id);
  res.json(result);
})

app.put('/links/:id', async (req, res) => {
  const result = await LinkController.update(req.params.id, req.body);
  res.json(result);
})

// App start
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
