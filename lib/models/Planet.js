// **  MODEL ** 
// handles all data logic
// communicates with the database, and interacts with data (PostgresSQL)
// getting(all || id), posting, updating, deleting, etc.
// sends that data back to the controller

import pool from '../utils/pool.js';

export default class Planet {
    id;
    name;
    moons;
    image;
    namesake;
    atmosphere;
    planetType;

    constructor(row) {
      this.id = row.id;
      this.name = row.name;
      this.moons = row.moons;
      this.image = row.image;
      this.namesake = row.namesake
      this.atmosphere = row.atmosphere;
      this.planetType = row.planet_type;
    }

    static async findAll() {
      const { rows } = await pool.query(`
        SELECT * 
        FROM planets
        `);

      return rows.map(row => new Planet(row));
    }

    static async findById(id) {
      const { rows } = await pool.query(
        `SELECT *
        FROM planets
        WHERE id = $1`,
        [id]
      );

      return new Planet(rows[0]);
    }
    

    static async insert({ name, moons, image, namesake, atmosphere, planetType}) {
      const { rows } = await pool.query(`
        INSERT into planets (name, moons, image, namesake, atmosphere, planet_type)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
        `, [name, moons, image, namesake, atmosphere, planetType]);

      return new Planet(rows[0]);
    }


    static async update(planet, id) {
      const { rows } = await pool.query(
        `UPDATE planets
        SET name = $1,
            moons = $2,
            image = $3,
            namesake = $4,
            atmosphere = $5,
            planet_type = $6
        WHERE id = $7
        RETURNING *`,
        [planet.name, planet.moons, planet.image, planet.namesake, planet.atmosphere, planet.planetType, id]);

        return new Planet(rows[0]);
  
    }

    static async delete(id) {
      const { rows } = await pool.query(`
        DELETE FROM planets
        WHERE id = $1
        RETURNING *
      `, [id]);

      return new Planet(rows[0]);
    }

}

