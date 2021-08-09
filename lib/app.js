/* eslint-disable no-console */
import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';

import planetController from './controllers/planet.js';

const app = express();

app.use(express.json());

if (app) {
  console.log('hi');
}

app.use(planetController);
  

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
