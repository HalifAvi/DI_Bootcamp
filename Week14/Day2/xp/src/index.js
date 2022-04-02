import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserFavoriteColors from './UserFavoriteColors';
import Exercise4 from './Exercise4';



// Exercise 1 : No JSX
// WITHOUT JSX
//Create an element without JSX and render it. The element should be an <h1> with the content “I do not use JSX”
const myelementWithoutJSX = React.createElement('h1', {}, 'I do not use JSX');
ReactDOM.render(myelementWithoutJSX, document.getElementById('root'));


// Exercise 2: With JSX
// Display a “Hello World!” message on the page.
ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));


// WITH JSX
// Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page.
const myelementWithJSX = <h1>I Love JSX!</h1>;
ReactDOM.render(myelementWithJSX, document.getElementById('root'));


// Create a constant variable named sum, which value is 5 + 5. Render on the page, 
// the following sentence "React is <sum> times better with JSX"
const sum = 5+5;
ReactDOM.render(<h1>React is {sum} times better with JSX</h1>, document.getElementById('root'));



// Exercise 3 : Object
const user = {
  first_name: 'Bob',
  last_name: 'Dylan',
  fav_animals : ['Horse','Turtle','Elephant','Monkey']
};


// In the React App, render the first name and the last name of the user in two <h3>.
ReactDOM.render(
<div>
  <h3>{user.first_name}</h3> 
  <h3>{user.last_name}</h3>
</div>,
document.getElementById('root'));


// In a separate Javascript file, create a new Component called UserFavoriteColors.
// Use props to pass the fav_animals array to the UserFavoriteColors component.
ReactDOM.render(
  <UserFavoriteColors array = {user.fav_animals}/>,
  document.getElementById('root'));












  
// Exercise 4 : HTML Tags In React
ReactDOM.render(
    <App />,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
