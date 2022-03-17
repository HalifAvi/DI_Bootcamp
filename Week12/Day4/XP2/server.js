// In the server.js file, create an express server and a route /, using the GET method

const express = require('express');

const app = express();

app.use('/', express.static(__dirname + '/public'))

app.listen(3000, () => {

    console.log('listen on port 3000');
})


app.get('/user/', (req, res) => {

    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }

    res.json(user);
})


// Exercise 2 : Express & Parameters
// Instructions

// In the server.js file, create your server using express.
// Create a route to the root of the app, using a GET request method.
// The path of the route should contain the route parameter id.
// The handler function of the route should respond with the value of the route parameter.
// Run on port http://localhost:3000/1234
// The response on the page and on the console, should be a JSON Object

app.get('/:id', (req, res) => {

    res.json(req.params);
})