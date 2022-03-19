const express = require('express');
var bodyParser = require('body-parser');

const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(5000, ()=> {

    console.log('listen to port 5000');
})

app.use(express.json());
app.use('/', express.static(__dirname + '/public'));

let items = [];
const fileName = 'items.txt';




app.post('/addItem', (req, res) => {

    items.push( req.body );

    fs.writeFile('items.txt', JSON.stringify(items), err => {

        if(err){

            res.json({msg: `WRITTING ERROR : FILE ${fileName}`});

        }else{

            res.redirect('./shoppingList.html');
        }
    })
})




app.get('/showItems', (req, res) => {

    const itemsBuffer = fs.readFileSync(`${fileName}`); 
    const jsonData = itemsBuffer.toString(); // Convert from buffer data to string

    res.json(jsonData); // Send a JSON data back to browser
})







