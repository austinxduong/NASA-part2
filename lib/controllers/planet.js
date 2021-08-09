import { Router } from 'express';
import Planet from '../models/Planet';

export default Router()

  .post('/api/v1/pasta', async (req, res) => {
    try {
      const planet = await Planet.insert(req.body);
      res.send(planet);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }

  });


