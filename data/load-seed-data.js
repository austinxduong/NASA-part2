/* eslint-disable no-console */
/* eslint-disable max-len */
import client from '../lib/client.js';
import planets from './data.js';

run();

async function run() {
  
  try {
    await Promise.all(
      planets.map(planet => {
        return client.query(`
                INSERT INTO planets (name, moons, image, namesake, atmosphere, planet_type)
                VALUES ($1, $2, $3, $4, $5, $6);
                `, [planet.name, planet.moons, planet.image, planet.namesake, planet.atmosphere, planet.planetType]);
      })
    );
  } catch(error) {
    console.error(error);
  }
  finally {
    console.log('seed data loaded successfully into backend API')
    client.end();

  }
}
