

// Create a function that returns true if all parameters are truthy, and false otherwise.

// In Javascript, arguments is a local JavaScript object variable that is available in all non-arrow functions.
// arguments is an Array-like object accessible inside functions that contain the
// values of the arguments passed to that function.

function isAllParamsTruthy () {

    let arr = [...arguments];

    return arr.every( element => element == true )
}


console.log( isAllParamsTruthy(0,1,2,3,4,5) ); // false - cause the equivalent boolean valuse of 0 is false
console.log( isAllParamsTruthy(true, true, true) ); // true
console.log( isAllParamsTruthy(true, false, true) ); // false


