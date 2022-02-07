

// PART 1

// Create a function getCarHonda(carInventory) that takes a single parameter.
// carInventory‘s value is an array which is an inventory of cars (see the array of objects below)

let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];


let getCarHonda = carInventory => { 
  
  let hondaCar = carInventory.find( car => car.car_make === "Honda" );

  return `This is a ${hondaCar.car_make} ${hondaCar.car_model} from ${hondaCar.car_year}`;
}
        
console.log( getCarHonda(inventory) );



// PART 2

// Create a function sortCarInventoryByYear(carInventory) that takes a single parameter.
// carInventory‘s value is an array which is an inventory of cars (see the array of objects below).

let sortCarInventoryByYear = carInventory => {

    let clonedArray =  [...carInventory];

    return clonedArray.sort( (car1, car2) => car1.car_year - car2.car_year)
};

console.log(sortCarInventoryByYear(inventory)); // RETURN NEW SORTED ARRAY

console.log(inventory); // NO CHANGES IN THE SOURCE ARRAY
