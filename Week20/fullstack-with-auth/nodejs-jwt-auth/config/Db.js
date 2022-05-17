
// instead of using 'knex'
import { Sequelize } from 'sequelize';


import dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize(
    
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,

    {
        host: 'localhost',
        dialect: 'postgres'
    }
);

export default db;




// const getAllProducts = () => {

//     return  db('products')
//     .select('id', 'name', 'price')
//     .orderBy('name')
// }

// const getProduct = productId => {

//     return  db('products')
//     .select('name', 'price')
//     .where({id : productId})
// } 

// const searchProduct = name => {

//     return  db('products')
//     .select('name', 'price')
//     .whereILike('name', `${name}%`)
// } 

// const addProduct = (product) => {

//     return  db('products')
//     .insert(product)
//     .returning('*')
// } 

// const deleteProduct = (productID) => {

//     return  db('products')
//     .del(productID)
//     .where({id:productID})
//     .returning('*')
// } 

// // into 'product' we have name and price
// const updateProduct = (productID, product) => {

//     return  db('products')
//     .update(product) // Here we have obj that inside has the name & price to update 
//     .where({id:productID})
//     .returning('*')
// } 













// /*
// *
// *This function get the all countries
// */
// const getCountries = () => {

//     return  db('country')
//     .select('country_id', 'country');
// } 

// /*
// *
// *This function get the all cities of specific country according to the country id
// */
// const getCities = countryId => {

//     return  db('city')
//     .select('city', 'country_id')
//     .where({country_id : countryId})
// } 



// const addCountry = countryName => {

//     return  db('country')
//     .insert({country : countryName})
//     .returning('*')
// } 



