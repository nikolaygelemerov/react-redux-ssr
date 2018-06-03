import express from 'express';
import rendererDev from './helpers/renderer.dev';
import rendererProd from './helpers/renderer.prod.js';

const PORT = process.env.PORT || 3000;
const enviroment = process.env.NODE_ENV;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(enviroment === 'development' ? rendererDev() : rendererProd());
});

app.listen(3000, () => {
  console.log('Listening on port: ', PORT);
});
