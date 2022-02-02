
let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}



// Create an arrow function named displayGroceries,
// that console.logs the 3 fruits from the groceries object.
// Use the forEach method.

let displayGroceries = () => groceries.fruits.forEach(product => console.log(product));

displayGroceries();



// Create another arrow function named cloneGroceries.
let cloneGroceries = () => {

    // In the function, create a variable named user that is a copy of the client variable.
    // (Tip : make the user variable equal to the client variable)
    let user = client; // Now both of them have the same value (primitive)

    // Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
    client = "Betty";
    console.log(user); // We won't see the modification in client here cause when we wrote 'user=client' we just copy client by value.

    //In the function, create a variable named shopping that is a copy of the groceries object.
    // (Tip : make the shopping variable equal to the groceries variable)
    let shopping = groceries; // Now both of them have the same reference (Objects).

    // Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
    groceries.totalPrice = "35$";
    console.log(shopping.totalPrice); // We see this change also in 'shopping' object cause both of them have the same reference.

    // Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?
    groceries.other.payed = false; 
    console.log(shopping.other.payed); // We see this change also in 'shopping' object cause we did a shallow clone.

}

// Invoke the cloneGroceries function.
cloneGroceries();

