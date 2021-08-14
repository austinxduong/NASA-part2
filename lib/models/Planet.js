import pool from '../utils/pool.js';

export default class Planet {
    id;
    name;
    moons;
    image;
    namesake;
    atmosphere;
    planetType;
    lengthOfYear;
    associatedZodiac;

    constructor(row) {
      this.id = row.id;
      this.name = row.name;
      this.moons = row.moons;
      this.image = row.image;
      this.namesake = row.namesake;
      this.atmosphere = row.atmosphere;
      this.planetType = row.planet_type;
      this.lengthOfYear = this.length_of_year;
      this.associatedZodiac = this.associated_zodiac;
    }

    static async insert({ 
      name, moons, image, namesake,
      atmosphere, planetType,
      lengthOfYear, 
      associatedZodiac 
    }) {
      const { rows } = await pool.query(
        `INSERT into planets (name, moons, image, 
            namesake, atmosphere, planet_type, 
            length_of_year, associated_zodiac)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *
            `,
        [name, moons, image, namesake, atmosphere, 
          planetType, lengthOfYear, 
          associatedZodiac]
      );

      return new Planet(rows[0]);
    }

    static async findAll() {
      const { rows } = await pool.query(`
        SELECT * FROM planets
        `);

      return rows.map(row => new Planet(row));

    }

}

