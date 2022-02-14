
class Robot {

    constructor(id, name, username, email, image){

        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.image = image;
    }
}

const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
];

    let whereToAppend = document.querySelector('#col1RobotDisplay');

    // Return new array with all the new Robot objects according to the object array (with details on each robot) we passed as a parameter
    let robotObjectInstantiation = robotObjArray => robotObjArray.map( ({id, name, username, email, image}) => new Robot(id, name, username, email, image) );

    let appendRobotCardsToPage = robotObjectArray => {

        robotObjectArray.forEach(robotObj => {

            let cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
            cardDiv.style.width = "18rem";
            cardDiv.style.display = "inline-block";
            cardDiv.style.margin = "20px";
            cardDiv.style.textAlign = "center"; 
            cardDiv.style.background = "#CAA7DE";
            cardDiv.style.padding = "20px"; 

            let cardImg = document.createElement('img');
            cardImg.classList.add('card-img-top', 'robotImg');
            cardImg.setAttribute('alt', robotObj.id ); 
            cardImg.setAttribute('src', robotObj.image );
            cardImg.style.background = "gainsboro";
          

            let cardBodyDiv = document.createElement('div');
            cardBodyDiv.classList.add('card-body');

            let robotNameHeader = document.createElement('h6');
            robotNameHeader.textContent = robotObj.name;
            robotNameHeader.style.textAlign = "center";
            robotNameHeader.style.fontWeight = "bold";
            robotNameHeader.style.fontSize = "18px";

            let robotEmail = document.createElement('h6');
            robotEmail.textContent = robotObj.email;
            robotEmail.style.textAlign = "center";

            cardDiv.appendChild(cardImg); 

            cardBodyDiv.appendChild(robotNameHeader);
            cardBodyDiv.appendChild(robotEmail);
    
            cardDiv.appendChild(cardBodyDiv);
    
            whereToAppend.appendChild(cardDiv);
        });
    }





    let displayAllRobotsOnRefreshPage = () => {

        let robotObjectArray = robotObjectInstantiation(robots);

        appendRobotCardsToPage(robotObjectArray);
    }



    let filterRobotsToDisplay = () => {

        whereToAppend.textContent = "";

        let userInupt = document.querySelector('#searchingInput').value;

        let filteredRobotObjArray = robots.filter( robotObjDetails => (robotObjDetails.name.toLowerCase()).startsWith(userInupt.toLowerCase()) );  

        let robotObjectArray = robotObjectInstantiation(filteredRobotObjArray);

        appendRobotCardsToPage(robotObjectArray);
    }




    displayAllRobotsOnRefreshPage();

    let searchingInput = document.querySelector('input#searchingInput');
    searchingInput.addEventListener('input', filterRobotsToDisplay);
