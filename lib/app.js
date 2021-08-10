/* eslint-disable no-console */
import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import cors from 'cors';


import planetController from './controllers/planets.js';

const app = express();

app.use(cors());
app.use(express.json());

if (app) {
  console.log('hi');
}

app.use(planetController);
  

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
