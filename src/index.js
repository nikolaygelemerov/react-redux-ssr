import express from 'express';
import renderer from './helpers/renderer';

const production = process.env.NODE_ENV;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('process: ', production);
  res.send(renderer());
});

app.listen(3000, () => {
  console.log('Listening on port: ', production);
});
