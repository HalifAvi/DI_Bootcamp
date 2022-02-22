

// Exercise 1 : Comparison







const compareToTen = num => {

    return new Promise((resolve, reject) => {

        if(num >= 10) {

                // the promise rejects if argument is greater than 10
            reject(`${num} is bigger than 10, success!`);

        } else if(num < 10) {

              // the promise resolves if the argument is less than 10
            resolve(`${num} is less than 10, error!`);

        } else {

            reject(`Not all items in the array are strings!`)
        }
    });
  };



compareToTen(3)
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










