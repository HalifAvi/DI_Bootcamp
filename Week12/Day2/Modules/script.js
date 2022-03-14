// Part I:
// Create a file named main.js that contains a variable const largeNumber = 356; and export the module.

// Use the exported module in a script.js file.

// In the script.js file declare a variable const b = 5; and use it to output the sum of the imported module + b



// const b = 5;
// const a = require('./main.js');
// const c = a.a + b;
// console.log();



// Part II:
// In a script.js file create a server with http and console.log a message.

// Set the response header, and respond by the result from Part I.

// Also write in a head tag a message like ‘Hi there at the frontend’

// Your server should run on http://localhost:3000/


// const http = require('http');
// const server = http.createServer((req,res) => {

//     console.log('Im listening.......');
//     res.end(`My Moudle is: ${c}, Hi there at the fronted!`);
// }); 

// server.listen(3000);


// Part 3:

const dateAndTime = require('./main.js');


const http = require('http');
const server = http.createServer((req,res) => {

    console.log('Im listening.......');
    res.end(`The date and time are currently : ${dateAndTime.getCurrentDateTime()}`);
}); 

server.listen(8080);



