import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

// import Planet from '../lib/models/Planet.js';
// remember, numerical values are not be wrapped in strings


describe('Planet routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a planet via. POST', async () => {
    const res = await request(app)
      .post('/api/v1/planet')
      .send({
        name: 'Venus',
        moons: 0,
        namesake: 'Roman Goddess of Love',
        atmosphere: 'Hot',
        length_of_year: '225 Earth Days',
        associated_zodiac: 'Taurus, Libra'
      });

    expect(res.body).toEqual({
      id: '1',
      name: 'Venus',
      moons: 0,
      namesake: 'Roman Goddess of Love',
      atmosphere: 'Hot',
      length_of_year: '225 Earth Days',
      associated_zodiac: 'Taurus, Libra'
    });
  });
});



