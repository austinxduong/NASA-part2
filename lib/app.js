/* eslint-disable no-console */
import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import cors from 'cors';
import planetController from './controllers/planets.js';

const app = express();

// all http route handlers contained in the controller
app.use(planetController);
app.get('/', (req, res) => {res.send('sunny');});


app.use(cors());
app.use(express.json()); 
app.use(errorMiddleware);
app.use(notFoundMiddleware);

export default app;
