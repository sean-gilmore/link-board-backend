// import LinkController from './controllers/LinkController.js';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;
import LinkRoutes from './routes/LinkRoutes.js';

app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => res.send(`Hello World!`));

app.use('/links', LinkRoutes);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

export default app;
