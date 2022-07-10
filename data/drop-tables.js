import client from '../lib/client.js';

run();

async function run() {

    try {
        await client.query(`
        DROP TABLE IF EXISTS planets;
        `)

        console.log('drop tables complete for All planets')
    }
    catch(err) {
        console.log(err) 
    }
    finally {
        client.end();
    }
}