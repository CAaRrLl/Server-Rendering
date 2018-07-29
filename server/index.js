import express from 'express';
import cors from 'cors';
import config from '../config';
import { renderToString } from 'react-dom/server';
import App from '../common/App';
import React from 'react';
import serialize from 'serialize-javascript';
import routes from '../common/routes';
import { matchPath, StaticRouter } from 'react-router-dom';

const app = express();

app.use(cors());

app.use(express.static(config.static_path));

app.get('/favicon.ico', (req, res, next) => {
    res.send();
});

app.get('*', (req, res, next) => {

    const activeRoute = routes.find(route => matchPath(req.url, route)) || {};

    const promise = activeRoute.initData? activeRoute.initData(req.path) : Promise.resolve();

    promise.then((data) => {
        const context = { data };
        const app = renderToString(
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        );
    
        const template = 
        `<!DOCTYPE html>
        <html>
            <head>
                <title>React SSR</title>
                <script src="/index.bundle.js" defer></script>
                <script>window.__INITDATA__ = ${serialize(data)}</script>
            </head>
            <body>
                <div id="app">${app}</div>
            </body>
        </html>`;

        res.send(template);
    })
    .catch(next);
});

app.listen(config.port, config.host, () => {
    console.log('server is listening on port: 4200');
})