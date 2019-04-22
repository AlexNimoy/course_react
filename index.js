const express = require('express');

require('@babel/register');
require('@babel/polyfill');

const render = require('./render').default;

const app = express();

app.get('/', async (_, res) => {
  const response = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Course React</title>
    </head>
    <body>
      <div id="root">${await render()}</div>
    </body>
    </html>
  `;
  res.send(response);
});

app.listen(3001, () => { console.log('Server started, port 3001') })
