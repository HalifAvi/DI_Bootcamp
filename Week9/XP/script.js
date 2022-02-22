

// Exercise 1 : Comparison

const compareToTen = num => {

    return new Promise((resolve, reject) => { `${num} is bigger than 10, success!`

        if(num <= 10) {

          num < 10 ? resolve(`${num} is smaller than 10, error!`) : resolve(`${num} is equal to 10`);

        } else {

            reject(`${num} is bigger than 10, success!`)
        }
    });
  };


// The fun return the promise and to get the answer from the promise we have to use '.then'
compareToTen(9)
  .then(result => console.log(result))
  .catch(error => console.log(error))


  // Exercise 2 : Promises

  // Create a promise that resolves itself in 4 seconds and returns a “success” string.
  const promise = new Promise((resolve, reject) => {

    setTimeout(() => {

      resolve("success");
      reject("Ooops something went wrong");

    }, 4000);
  }).then( res => console.log(res))
    .catch((error) => {

        console.log(error);
      })

      
// How can you make your promise from part 1 shorter 
Promise.resolve("success").then( res => console.log(res));


// Exercise 3 : Resolve & Reject
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
console.log(Promise.resolve(3))


// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
Promise.reject("Boo!").catch(error => console.log(error))










