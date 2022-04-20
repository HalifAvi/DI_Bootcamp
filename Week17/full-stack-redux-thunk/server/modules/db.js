const dotenv = require('dotenv');
dotenv.config();


const knex = require('knex');
const db = knex({

    client: 'pg',
    connection:{

        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        sslmode : false
    }
})


const getCountries = () => {

    return db('country')
    .select('country', 'country_id');
}


const getCities = (countryID) => {

    return db('city')
    .select('city', 'country_id')
    .where({country_id : countryID});
}


module.exports = {

    getCountries,
    getCities
}

