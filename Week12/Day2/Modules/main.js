// Part I:
// Create a file named main.js that contains a variable const largeNumber = 356; and export the module.

// Use the exported module in a script.js file.

// In the script.js file declare a variable const b = 5; and use it to output the sum of the imported module + b


// const largeNumber = 356;

// module.exports = {

//     a : largeNumber

// }



// Part III:
// Create a file named main.js and create a function that returns the current date and time. Export the module.

// Use the exported module in a script.js file.

// Create a server with http, set the response header and respond with a message that outputs the current date and time from the exported module.

// Your server should run on http://localhost:8080/

const getCurrentDateTime = () => {

    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;
    return dateTime;
}


module.exports = {

    getCurrentDateTime : getCurrentDateTime
}

