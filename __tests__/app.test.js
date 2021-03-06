import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Planet from '../lib/models/Planet.js';

// import Planet from '../lib/models/Planet.js';
// remember, numerical values are not be wrapped in strings


describe('To verify each HTTP request is functional', () => {
  beforeEach(() => {
    return setup(pool);
  });


  it('finds all planets via GET', async () => {

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

  it('finds a specific planet by its id', async () => {

    const saturn = await Planet.insert({
      name: 'Saturn',
      moons: 53,
      image: 'saturn.jpg',
      namesake: 'Roman God of Agriculture & Wealth',
      atmosphere: 'Gassed Up',
      planetType: 'Gas Giant',
    });

    const res = await request(app).get(`/api/v1/planets/${saturn.id}`);

    expect(res.body).toEqual(saturn);

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

  it('updates/edits a planet by id', async () => {
    const saturn = await Planet.insert({
      name: 'Saturn',
      moons: 53,
      image: 'saturn.jpg',
      namesake: 'Roman God of Agriculture & Wealth',
      atmosphere: 'Gassed Up',
      planetType: 'Gas Giant',
    });

    saturn.image = 'idk.jpg';

    const res = await request(app).put(`/api/v1/planets/${saturn.id}`)
      .send(saturn);
    
    expect(res.body).toEqual(saturn);
  });

  it('deletes a planet by id via .DELETE', async () => {
    const saturn2 = await Planet.insert({
      name: 'Saturn',
      moons: 53,
      image: 'saturn.jpg',
      namesake: 'Roman God of Agriculture & Wealth',
      atmosphere: 'Gassed Up',
      planetType: 'Gas Giant',
    });

    const res = await request (app).delete(`/api/v1/planets/${saturn2.id}`)

    expect(res.body).toEqual(saturn2);

  });


});




