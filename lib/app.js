/* eslint-disable no-console */
import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import cors from 'cors';
import planetController from './controllers/planets.js';

//calling out express library, to extract the various methods
//ie. app.get(), app.use()
const app = express();

app.use(planetController)
// all http route handlers contained in the controller

app.get('/', (req, res) => {res.send('sunny');});


app.use(cors({
    allowedHeaders: ["authorization", "Content-Type"],
    exposedHeaders: ["authorization"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false
}));
app.use(express.json()); 
app.use(errorMiddleware);
app.use(notFoundMiddleware);

export default app;
