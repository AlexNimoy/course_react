import express from 'express';
import path from 'path';

import render from './render';

const manifest = require('../../public/manifest.json');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(process.cwd(), 'public')));

app.set('views', path.resolve(process.cwd(), 'public'));
app.set('view engine', 'ejs');

app.get(
  '*',
  (req, res) => {
    render(req, res)
      .then((result) => {
        res.status(200);
        res.render(
          'index', {
            content: result.content,
            helmet: result.helmet,
            manifest,
            initialState: JSON.stringify(result.initialState)
          }
        );
      });
  }
);

app.listen(
  PORT,
  () => console.log(`Server is listening on ${PORT}`)
);
