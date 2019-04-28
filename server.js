import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, Switch, Route } from 'react-router-dom';

import routes from '~/src/routes';

const RouteWithSubroutes = (route, index) => (
  <Route {...route} key={index} />
)

const app = express();

app.get('*', (req, res) => {
  let context = {};

  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Switch>
      {routes.map((route, index) =>  RouteWithSubroutes(route, index) ) }
      </Switch>
    </ StaticRouter>
  );

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Lesson T</title>
    </head>
    <body>
      <div id="root">${content}</div>
    </body>
    </html>
  `;
  res.status(context.status || 200);
  res.send(html);
});

app.listen(3001, () => console.log("Started on http://localhost:3001"));
