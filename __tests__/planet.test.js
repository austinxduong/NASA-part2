import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('Planet routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a planet via. POST', async () => {
    const  res = await request(app)
      .post('/api/v1/planet')
      .send({
        name: 'Venus',
        namesake: 'Roman Goddess of Love',
        lengthOfYear: '225 Earth Days',
        moons: '0',
        zodiacs: 'Taurus, Libra'

      })
  }
});
