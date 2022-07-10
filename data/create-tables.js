import client from '../lib/client.js';

run();

async function run() {
    // now we can run the script from package.json file 'npm run create-tables'
    try {
        await client.query(`
            CREATE TABLE planets (
                id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                name TEXT NOT NULL,
                moons SMALLINT NOT NULL,
                image TEXT NOT NULL,
                namesake TEXT NOT NULL,
                atmosphere TEXT NOT NULL,
                planet_type TEXT NOT NULL
            );
        `);

        console.log('create tables complete for ALL planets')
    } 
    catch(err) {
        console.log(err)
    } 
    finally {
        client.end()
    }
}
