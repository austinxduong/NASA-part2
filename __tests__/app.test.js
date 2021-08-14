import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Planet from '../lib/models/Planet.js';

// import Planet from '../lib/models/Planet.js';
// remember, numerical values are not be wrapped in strings


describe('Planet routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a planet via. POST', async () => {
    const res = await request(app)
      .post('/api/v1/planets')
      .send({
        name: 'Venus',
        moons: 0,
        image: 'venus.jpg',
        namesake: 'Roman Goddess of Love',
        atmosphere: 'Hot',
        planetType: 'Terrestrial',
      });

    expect(res.body).toEqual({
      id: '1',
      name: 'Venus',
      moons: 0,
      image: 'venus.jpg',
      namesake: 'Roman Goddess of Love',
      atmosphere: 'Hot',
      planetType: 'Terrestrial',
    });
  });

  it('finds all planet via GET', async () => {

    const test1 = await Planet.insert({
      name: 'Venus',
      moons: 0,
      image: 'venus.jpg',
      namesake: 'Roman Goddess of Love',
      atmosphere: 'Hot',
      planetType: 'Terrestrial',
    });

    const test2 = await Planet.insert({
      name: 'Jupiter',
      moons: 53,
      image: 'jupiter.jpg',
      namesake: 'King of the Ancients GOds',
      atmosphere: 'Gassed Up',
      planetType: 'Gas Giant',
    });

    const test3 = await Planet.insert({
      name: 'Mercury',
      moons: 0,
      image: 'mercury.jpg',
      namesake: 'Most Swift of Ancient Roman Gods',
      atmosphere: 'Airy',
      planetType: 'Terrestrial',
    });

    const res = await request(app)
      .get('/api/v1/planets');

    expect(res.body).toEqual([test1, test2, test3]);
  });

});






