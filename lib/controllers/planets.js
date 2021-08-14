import { Router } from 'express';
import Planet from '../models/Planet.js';

export default Router()

  .post('/api/v1/planets', async (req, res) => {
    try {
      const planet = await Planet.insert(req.body);
      res.send(planet);
    } catch(err) {
      res.status(500).send({ error: err.message });
    }
  })

  .get('/api/v1/planets', async (req, res) => {
    try {
      const planet = await Planet.findAll();
      res.send(planet);
    } catch(err) {
      res.status(500).send({ error: err.message });
    }
  })

  .get('/api/v1/planets/:id', async (req, res) => {
    try {
      const planet = await Planet.findById(req.params.id);
      res.send(planet);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .put('/api/v1/planets/:id', async (req, res) => {
    try {
      const planet = await Planet.update(req.body, req.params.id);
      res.send(planet);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });








