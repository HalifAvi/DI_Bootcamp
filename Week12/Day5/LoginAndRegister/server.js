
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


let users = [];
const fileName = 'users.txt';


let isAlreadyInFile = req => {

    let answer = false;
    let bufferPreviousUsers = fs.readFileSync('users.txt');
    let stringPreviousUsers = bufferPreviousUsers.toString();

    if(stringPreviousUsers !== ""){ // If the file is not empty

        let previousUsersArray = JSON.parse(stringPreviousUsers); 
        answer = previousUsersArray.some( element => element.userName === (req.body).userName && element.password === (req.body).password );
    }

    return answer;
}



app.post('/register', (req, res) => {

    // The way to store new users with historical users :

    // Check if the user already exists in the file
    if(!(isAlreadyInFile(req))){

        // After save the previous data from the file 
        // And keep it into the array
        const bufferDataFile = fs.readFileSync('users.txt');
        let strDataFile = bufferDataFile.toString();

        if(strDataFile !== ""){

            users = JSON.parse(strDataFile); 
        }

        // Second add the new item to the previous array data
        users.push( req.body );

        // Write the all data (old+new) to file
        fs.writeFile('users.txt', JSON.stringify(users), err => {

            if(err){

                res.send({msg: `WRITTING ERROR : FILE ${fileName}`});

            }else{

                res.send(`Hello "${(req.body).userName}", your account is now created!:)`);
            }
        })

    } else{

        res.send(`Username : "${(req.body).userName}" is already exists`);
    }
})


app.post('/login', (req, res) => {

    // Check if the user exists in the file
    if(isAlreadyInFile(req)){
    
        res.send({message: `Hi ${(req.body).userName}, Welcome back again!`});

    } else{
        
        res.send({message: `Username : "${(req.body).userName}" is not registered`});
    }
})










