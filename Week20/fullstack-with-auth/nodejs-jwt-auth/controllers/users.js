import Users from "../models/UserModel.js"; // the 'users' table

// Hasing the password - before sending to db
import bcrypt from 'bcrypt';

// To create an access token - to define the expiration time
// We will send this token in the cookie to the front end
// And we can wrap 'Home' component with that token - and the user'll have access to this page according 
// to expiry time we defined in this token
import jwt from 'jsonwebtoken';



// The fun has here the req & res
// cause everthing we send from the router
// has these 
export const _register = async (req, res) => {

    console.log(req.body)

    const {email, password} = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try{

        await Users.create({

            email: email,
            password: hashPassword
        })

        res.json({message: 'Register successfuly!'})
    }
    catch(error){

        // We defined our 'email' as unique in db
        res.status(404).json({msg:'Email already exist'})
    }
}



export const _login = async (req, res) => {

    try{

        const user = await Users.findAll({
            where:{
                email: req.body.email
            }
        })

        const match = await bcrypt.compare(req.body.password, user[0].password)
        if(!match) return res.status(404).json({msg: "Wrong Password"});
        const userId = user[0].id;
        const email = user[0].email;

        // Each time we'll get a different access token cause we'll have different userId and email with our ACCESS_TOKEN_SECRET
        // that we only know so we can verify according to it
        // We will send this token in the cookie to the front end
        // And we can wrap 'Home' component with that token - and the user'll have access to this page according 
        // to expiry time we defined in this token
        const accessToken = jwt.sign({userId, email}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '60s'
        })

        // Set the cookie in the http response ((we imported it in 'server.js'))
        // we get here the all encrypted data
        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            maxAge: 60 * 1000 // 60 seconds
        }); 

        // We send back the access token
        res.json({accessToken});
    }

    catch(error){

        console.log(error);
        res.status(404).json({msg:'Email not found'})
    }
}





// // CRUD - CREATE READ UPDATE DELETE

// // READ - get method
// const _getAllProducts = (req, res) => {

//     getAllProducts() 
//     .then(data => {

//         res.send(data);
//     })
//     .catch(e=> res.json({message: e.message}));
// }


// // READ - get method
// const _getProduct = (req, res) => {

//     getProduct(req.params.id) 
//     .then(product => {

//         res.send(product);
//     })
//     .catch(e=> res.json({message: e.message}));
// }

// // READ - get method : search according to name 
// //  http://localhost:5000/api/product?q=ip
// const _searchProduct = (req, res) => {

//     searchProduct(req.query.q) 
//     .then(product => {

//         res.send(product);
//     })
//     .catch(e=> res.json({message: e.message}));
// }





// // CREATE - post method
// // In postman choose 'POST' & 'body'->change to 'json'->and to 'raw' 
// const _addProduct = (req, res) => {

//     addProduct(req.body) 
//     .then(newProduct => {

//         res.json(newProduct);
//     })
//     .catch(e=> res.json({message: e.message}));
// }




// // DELETE
// const _deleteProduct = (req, res) => {

//     deleteProduct(req.params.id) 
//     .then(product => {

//         res.send(product);
//     })
//     .catch(e=> res.json({message: e.message}));
// }



// // UPDATE
// const _updateProduct = (req, res) => {

//     updateProduct(req.params.id, req.body) 
//     .then(product => {

//         res.send(product);
//     })
//     .catch(e=> res.json({message: e.message}));
// }



// module.exports = {

//     _getAllProducts,
//     _getProduct,
//     _searchProduct,
//     _addProduct,
//     _deleteProduct,
//     _updateProduct 
// }