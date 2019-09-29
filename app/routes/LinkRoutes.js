import express from 'express';
import LinkController from '../controllers/LinkController.js';
const app = express();

app.get('/', async (req, res) => {
  const result = await LinkController.index();
  res.json(result);
})

app.post('/create', async (req, res) => {
  const result = await LinkController.create(req.body);
  res.json(result);
})

app.get('/:id', async (req, res) => {
  const result = await LinkController.show(req.params.id);
  res.json(result);
})

app.delete('/:id', async (req, res) => {
  const result = await LinkController.delete(req.params.id);
  res.json(result);
})

app.put('/:id', async (req, res) => {
  const result = await LinkController.update(req.params.id, req.body);
  res.json(result);
});

export default app;
