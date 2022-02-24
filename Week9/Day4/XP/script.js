

// Exercise 1: Conversion
// Convert the below promise into async await:
fetch("https://swapi.dev/api/starships/9/")
    .then(response => response.json())
    .then(result => console.log(result));


let getData = async () => {

    try{

        //  await is equal to '.then' we getting a promise, and fetch is a promise
        let response  = await fetch("https://swapi.dev/api/starships/9/");
        
        let data = await response.json();

        console.log(data);

    }catch(error){

        console.log(error);
    }
}

// Calling the async function
getData();



// Exercise 2: Analyze
// Analyze the code provided above what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// First we will see the console.log('calling'); ------> "calling"
// Then we waut to the answer from 'resolveAfter2Seconds' function that will be a promose
// but by using the 'await' key word we will store into 'result' variable the resolve answer from the promise (it'll be after 2 sec)
// First we will see the console.log('calling'); ----> "resolved"