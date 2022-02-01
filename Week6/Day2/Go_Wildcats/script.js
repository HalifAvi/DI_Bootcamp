const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];



// Create an array using forEach that contains all the usernames from the gameInfo array,
// add an exclamation point (ie. “!”) to the end of every username.

let usernames  = [];

gameInfo.forEach( (element, idx) => usernames[idx] = `${element.username}!`)

console.log(usernames);


// Create an array using forEach that contains the usernames of all players with a score bigger
// than 5. Use the ternary operator

let winners  = [];

gameInfo.forEach( (element, idx) => element.score > 5 ? winners[idx] = element.username : element.username )

console.log(winners);


//  Find and display the total score of the users.
let totalScore = 0;

// gameInfo.forEach( element => totalScore += element.score )

gameInfo.forEach(element => totalScore += element.score);

console.log(totalScore);


