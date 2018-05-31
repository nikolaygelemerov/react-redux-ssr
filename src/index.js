import express from 'express';
import renderer2 from './helpers/renderer2';

const PORT = process.env.PORT || 3000;
const enviroment = process.env.NODE_ENV;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  if (enviroment === 'production') {
    res.sendFile('index.html');
  } else {
    res.send(renderer2());
  }
});

app.listen(3000, () => {
  console.log('Listening on port: ', enviroment);
});
