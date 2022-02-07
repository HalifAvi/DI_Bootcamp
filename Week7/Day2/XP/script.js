
// Exercise 1 : Analyzing

// Analyze these pieces of code before executing them. What will be the outputs ?

//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // ["bread", "carrot", "potato", "chicken", "apple", "orange"] : copy by value the arrays

//------2------
const country = "USA";
console.log([...country]); // ["U", "S", "A"]

//------Bonus------
let newArray = [...[,,]];
console.log(newArray); // [ undefined, undefined]


// Exercise 2 : Employees

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];


// Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
users.map( user => console.log(`Hello ${user.firstName}`) );

// Using the filter() method, create a new array, containing only the Full Stack Residents.
let fullstackArr = users.filter( user => user.role === "Full Stack Resident");
console.log(fullstackArr);

// Bonus : Chain the filter method with a map method, to congratulate the Full Stack Residents
// (ie. “Good job Bradley”, “Good Job Chloe” ect…)

(users.filter( user => user.role === "Full Stack Resident" )).map( fullStackUser => console.log(`Good Job ${fullStackUser.firstName}`));


// Exercise 3 : Star Wars
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

console.log( epic.reduce( (prev, curr) => prev + " " + curr , "") );

// Exercise 4 : Employees #2
let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}
];


// Using the filter() method, create a new array, containing the students that passed the course.
let passedStudents = student.filter( std => std.isPassed );
console.log(passedStudents);

// Bonus : Chain the filter method with a map method, to congratulate the students with their name and course name
// (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
(student.filter( std => std.isPassed )).map( passedStd => console.log(`Good Job ${passedStd.name}, you passed the course in ${passedStd.course}`));
