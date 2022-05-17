import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const db = knex({

    client: 'pg',
    connection:{

        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        // when use Free Heroko version without ssl:
        sslmode : false
        // ssl: { rejectUnauthorized: false}
    }
});


const getAllProducts = () => {

    return  db('products')
    .select('id', 'name', 'price')
    .orderBy('name')
}

const getProduct = productId => {

    return  db('products')
    .select('name', 'price')
    .where({id : productId})
} 

const searchProduct = name => {

    return  db('products')
    .select('name', 'price')
    .whereILike('name', `${name}%`)
} 

const addProduct = (product) => {

    return  db('products')
    .insert(product)
    .returning('*')
} 

const deleteProduct = (productID) => {

    return  db('products')
    .del(productID)
    .where({id:productID})
    .returning('*')
} 

// into 'product' we have name and price
const updateProduct = (productID, product) => {

    return  db('products')
    .update(product) // Here we have obj that inside has the name & price to update 
    .where({id:productID})
    .returning('*')
} 













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
    .select('city', 'country_id')
    .where({country_id : countryId})
} 



const addCountry = countryName => {

    return  db('country')
    .insert({country : countryName})
    .returning('*')
} 



module.exports = {

    getCountries,
    getCities,
    addCountry,


    getAllProducts,
    getProduct,
    searchProduct,
    addProduct,
    deleteProduct,
    updateProduct
}