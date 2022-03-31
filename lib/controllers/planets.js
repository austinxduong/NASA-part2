// ** CONTROLLER ** 
// receives requests from the client/user interface (the view)
// organizes business logic
// never handles data... 
// instead, makes async requests to the model
// watches for error handling using try/catch
// asks the model data is being requested (based on user request)
// ...
// recevies data back from the model as response
// controller sends the response to the view...

import { Router } from 'express';
//importing the Planet Class (Model)
import Planet from '../models/Planet.js';

export default Router()

// gets all planets
.get('/api/v1/planets', async (req, res) => {
  try {
    const planet = await Planet.findAll();
    res.set('Access-Control-Allow-Origin', '*');
    res.send(planet);
  } catch(err) {
    res.status(500).send({ error: err.message });
  }
})

// gets planet by an id
.get('/api/v1/planets/:id', async (req, res) => {
  try {
    const planet = await Planet.findById(req.params.id);
    res.send(planet);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
})

// adds a planet
.post('/api/v1/planets', async (req, res) => {
  try {
    const planet = await Planet.insert(req.body);
    res.send(planet);
  } catch(err) {
    res.status(500).send({ error: err.message });
  }  
})

// updates a planet
.put('/api/v1/planets/:id', async (req, res) => {
  try {
    const planet = await Planet.update(req.body, req.params.id);
    res.send(planet);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
})

// deletes a planet
.delete('/api/v1/planets/:id', async (req, res) => {
  try {
    const planet = await Planet.delete(req.params.id);
    res.send(planet);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});








