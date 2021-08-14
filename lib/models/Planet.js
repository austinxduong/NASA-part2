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

    static async insert({ name, moons, image, namesake, atmosphere, planetType}) {
      const { rows } = await pool.query(`
        INSERT into planets (name, moons, image, namesake, atmosphere, planet_type)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
        `, [name, moons, image, namesake, atmosphere, planetType]);

      return new Planet(rows[0]);
    }

    static async findAll() {
      const { rows } = await pool.query(`
        SELECT * 
        FROM planets
        `);

      return rows.map(row => new Planet(row));
    }

    static async findById(id) {
      const {rows } = await pool.query(
        `SELECT *
        FROM planets
        WHERE id = $1`,
        [id]
      );

      return new Planet(rows[0]);
    }

}

