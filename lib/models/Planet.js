import pool from '../utils/pool.js';

export default class Planet {
    id;
    name;
    moons;
    image;
    namesake;
    atmosphere;
    planet_type;
    length_of_year;
    associated_zodiac;

    constructor(row) {
      this.id = row.id;
      this.name = row.name;
      this.moons = row.moons;
      this.image = row.image;
      this.namesake = row.namesake;
      this.atmosphere = row.atmosphere;
      this.planet_type = row.planet_type;
      this.length_of_year = this.lengthOfyear;
      this.associated_zodiac = this.associatedZodiac;
    }

    static async insert({ 
      name, moons, image, namesake,
      atmosphere, planet_type,
      length_of_year, 
      associated_zodiac 
    }) {
      const { rows } = await pool.query(
        `INSERT into planets (name, moons, image, 
            namesake, atmosphere, planet_type, 
            length_of_year, associated_zodiac)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *
            `,
        [name, moons, image, namesake, atmosphere, 
          planet_type, length_of_year, 
          associated_zodiac]
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

