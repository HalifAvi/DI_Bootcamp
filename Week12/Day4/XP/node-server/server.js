// Create a server file, name it - server.js
// In this file, use http to create a server. Send the below Javascript Object to the browser:


const http = require('http');

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const server = http.createServer((req, res) => {

    res.end(JSON.stringify(user));
});

server.listen(8080, () => {

    console.log("server is listening to port 8080");
})