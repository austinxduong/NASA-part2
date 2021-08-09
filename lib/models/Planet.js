import pool from '../utils/pool';

export default class Planet {
    id;
    name;
    namesake;
    lengthOfYear;
    moons;
    zodiac;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.namesake = row.namesake
        this.lengthOfYear = row.length_of_year;
        this.moons = row.moons;
        this.associatedZodiac = row.associated_zodiac;
    }

    static async insert({ name, namesake, lengthOfYear, moons, zodiac }) {
        const { rows } = await pool.query(
            `INSERT INTO planet (name, namesake, length_of_year, moons, associated_zodiac)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`,
            [name, namesake, lengthOfYear, moons, associatedZodiac]
        );

        return new Planet(rows[0]);
    }
}