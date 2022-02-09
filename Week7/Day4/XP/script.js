
// Exercise 1 : Location
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// OUTPUT : I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// Exercise 2: Display Student Info
// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// Destructure the parameter inside the function and return a string as the example seen below:
// displayStudentInfo({first: 'Elie', last:'Schoppik'}) 
// output : 'Your full name is Elie Schoppik'`

const displayStudentInfo = ({first, last}) => console.log( `Your full name is ${first} ${last}` );

let studentObject = {

    first: 'Elie',
    last:'Schoppik'
} 

displayStudentInfo(studentObject);

// Exercise 3: User & Id
const users = { user1: 18273, user2: 92833, user3: 90315 };

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
let entriesArray = Object.entries(users); 
console.log( entriesArray );
// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
console.log( entriesArray.map( element => [element[0], element[1]*2] ) );

// Exercise 4 : Person Class
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member); // OUTPUT : object


  // Exercise 5 : Dog Class
  class Dog {
    constructor(name) {
      this.name = name;
    }
  };

    // 2
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };

  let labradorDog = new Labrador("Shpitz", 122);

  console.log(labradorDog);


  // Exercise 6 : Challenges

  [2] === [2]  // false - both of them have different memory address so there are not excactlly the same
//   {} === {} // false - both of them have different memory address so there are not excactlly the same


  // What is, for each object below, the value of the property number ?
  const object1 = { number: 5 }; 
  const object2 = object1; 
  const object3 = object2; 
  const object4 = { number: 5}; 
  object1.number = 4;

  // object1.number = 4
  // object2.number = 4
  // object3.number = 4 // objects number : 1, 2, 3 have the same memory address so when we changed object1.number = 4 we'll see the same in others
  // object4.number = 5

  // Create a class Animal with the attributes name, type and color
  class Animal{

    constructor(name, type, color){

        this.name = name;
        this.type = type;
        this.color = color;
    }
  }


  // Create a class Mamal that extends from the Animal class.
  // It has a method called sound(). This method takes a parameter: the sound the animal makes,
  // and returns the details of the animal (name, type and color) as well as the sound it makes.
class Mamal extends Animal{

    constructor(name, type, color){

        super(name, type, color);
    }

    sound(sound){

        return `${sound} I'm an ${this.type} ${this.name} with ${this.color} color`;
    }
}

// Create a cow object that accepts a name, a type and a color and calls the sound method that moo’s her name, type and color.
let cow = new Mamal("cow", "A", "black");
console.log( cow.sound("moooo") );








