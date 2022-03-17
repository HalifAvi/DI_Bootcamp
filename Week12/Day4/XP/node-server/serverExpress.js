// Exercise 3 : Express
// Instructions
// Create a server file, name it - serverExpress.js
// Use express to create a server. Return an HTML line of code (Use only HTML tags, no HTML files),
// for requests to the root URL (/).
// Remember to use the GET method for the server route.
// Your server should run on http://localhost:3000/

const express = require('express');

const app = express();

app.listen(3000, () => {

    console.log('listen on port 3000');
})


app.get('/', (req, res) => {

    res.end("<h1>This is an HTML tag</h1>");
})