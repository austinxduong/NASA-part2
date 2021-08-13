/* eslint-disable no-console */
/* eslint-disable max-len */
import client from '../lib/client.js';
import { planets } from './data.js';

run();

async function run() {
  try {
    await Promise.all(
      planets.map(planet => {
        return client.query(`
                INSERT INTO planets (name, moons, image, namesake, atmosphere, planet_type, length_of_year, associated_zodiac)
                VALUES ($1, $2, $3, $4, $5, $6, $7);
                `,
        [planet.name, planet.moons, planet.image, planet.namesake, planet.atmosphere, planet.planet_type, planet.length_of_year, planet.associated_zodiac]);
      })
            
    );
  } catch(error) {
    console.error(error);
  }
  finally {
    client.end();

  }
}
