const express = require('express');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/', express.static(__dirname + '/public'));

app.listen(process.env.PORT||8080, ()=> {

    console.log(`listen to port ${process.env.PORT}`);
})



// Exercise 1 : Reading From A File In Node.JS
// Instructions
// Create a text file and write something inside (example: ‘Some Text To See’)
// Create an fs.js file, and inside use the Node JS File System to read the text file
// and console.log the output in the terminal

app.get('/showFileContent', (req, res) => {

    const contentBuffer = fs.readFileSync(`${process.env.FILETOREAD}`); 
    const jsonData = contentBuffer.toString(); // Convert from buffer data to string

    // Exercise 2 : Writing Files With Node JS
    // Instructions
    // Create an fs.js file, and use the Node js File System to create a new
    // text file and write to it.
    fs.writeFile(`${process.env.FILETOWRITE}`, 'Bla bla', err => {

        if(err){

            res.json({msg: `WRITTING ERROR : FILE ${process.env.FILETOWRITE}`});
        }
    })

    // Use the Node js File System to append some other text to the text file.
    // (Example:”Buy orange juice”)
    fs.appendFile(`${process.env.FILETOAPPEND}`, ' Buy orange juice', err => {

        if(err){

            res.json({msg: `WRITTING ERROR : FILE ${process.env.FILETOWRITE}`});
        }
    })
    
    // Use the Node js File System to delete the file.
    fs.unlink(`${process.env.FILETOAPPEND}`, err => {

        if(err){

            res.json({msg: `DELETING ERROR : FILE ${process.env.FILETOAPPEND}`});
        }
    })

    res.json(jsonData); // Send a JSON data back to browser
})



