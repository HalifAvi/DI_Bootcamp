const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

const db = knex({

    client: 'pg',
    connection:{

        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
});


/*
*
*This function get the all countries
*/
const getCountries = () => {

    return  db('country')
    .select('country_id', 'country');
} 

/*
*
*This function get the all cities of specific country according to the country id
*/
const getCities = countryId => {

    return  db('city')
    .select('city')
    .where({country_id : countryId})
} 


module.exports = {

    getCountries,
    getCities
}