import pool from '../utils/pool.js';

export default class Planet {
    id;
    name;
    moons;
    namesake;
    atmosphere;
    planet_type;
    length_of_year;
    associated_zodiac;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.moons = row.moons;
        this.namesake = row.namesake;
        this.atmosphere = row.atmosphere;
        this.planet_type = row.planet_type;
        this.length_of_year = this.length_of_year;
        this.associated_zodiac = this.associated_zodiac;
    }

    static async insert({ name, moons, namesake, length_of_year, associated_zodiac }) {
        const { rows } = await pool.query(
            `INSERT into planets (name, moons, namesake, atmosphere, planet_type, length_of_year, associated_zodiac)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`,
            [name, moons, namesake, atmosphere, planet_type, length_of_year, associated_zodiac]
        );

        return new Player(rows[0]);
    }

}

