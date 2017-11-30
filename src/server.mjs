'use strict';

import main from './routes/main';
import twitter from './routes/twitter';
import news from './routes/news';
import status from './routes/status';
import traffic from './routes/traffic';
import Hapi from 'hapi';
import setHeader from 'hapi-set-header';
import {PORT} from './constants';

const server = new Hapi.Server();

const ROUTES = [main, twitter, news, status, traffic];

server.connection({ port: PORT });
setHeader(server, 'Access-Control-Allow-Origin', '*');

ROUTES.forEach( module => server.route(module) );

console.log(`Starting service at port ${PORT}`);

server.start(() => {});
