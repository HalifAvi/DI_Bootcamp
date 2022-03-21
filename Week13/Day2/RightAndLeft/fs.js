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

let stepsCounter = 0;
let firstTimeInLeftSide = 0;
let firstTime = true;
const contentBuffer = fs.readFileSync(`${process.env.FILETOREAD}`); 
const stringData = contentBuffer.toString(); // Convert from buffer data to string
const dataArray = stringData.split(''); // Convert string to array

console.log(dataArray)
dataArray.forEach((element, idx) => {

    element===">" ? stepsCounter++ : stepsCounter--;

    if(firstTime && stepsCounter===-1){

        firstTimeInLeftSide = idx+1;
        firstTime = false;
    }
});

let message;

stepsCounter>0 ? message = `${stepsCounter} steps to the right` : message = `${Math.abs(stepsCounter)} steps to the left`;

if(stepsCounter === 0){

    console.log(`No movement`);
}else{

    console.log(message);
}

firstTimeInLeftSide===0 ? firstTimeInLeftSide = "No in left side" : null;

console.log(`The first time in left side : ${firstTimeInLeftSide} steps`);
    



