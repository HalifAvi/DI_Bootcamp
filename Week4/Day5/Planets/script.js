let position = 100;



const planets = () => {

    let planetsArr = getPlanetObjectArray();

    // Get the section element
    let whereToAppendTheNewDiv = document.getElementsByClassName('listPlanets')[0];

    // After this function we have new div's nested to the section in the html file
    createDivsAndAppendToSectionAcorrdingToNumOfPlanets(planetsArr, whereToAppendTheNewDiv);
}


// Return a planet objects array
const getPlanetObjectArray = () => {

    let planetsArr = [
        { planetName: 'Mercury', moonNames : [] },
        { planetName: 'Venus',   moonNames : [] },
        { planetName: 'Earth',   moonNames : ['lazy'] },
        { planetName: 'Mars',    moonNames : ['lazy', 'lazy'] },
        { planetName: 'Jupiter', moonNames : ['lazy', 'lazy', 'lazy'] },
        { planetName: 'Saturn',  moonNames : ['lazy', 'lazy', 'lazy', 'lazy', 'lazy', 'lazy', 'lazy'] },
        { planetName: 'Uranus',  moonNames : ['lazy', 'lazy', 'lazy', 'lazy', 'lazy', 'lazy', 'lazy', 'lazy', 'lazy', 'lazy', 'lazy'] },
        { planetName: 'Neptune', moonNames : ['lazy', 'lazy', 'lazy', 'lazy', 'lazy', 'lazy', 'lazy', 'lazy'] }
    ];

    return planetsArr;
}


const createDivsAndAppendToSectionAcorrdingToNumOfPlanets = (planetsArr, whereToAppendTheNewDiv) => {

    planetsArr.forEach(planetObj => {

        let newPlanetDiv = createNewDiv(planetObj.planetName);

        addClassesToNewDivForStyle(newPlanetDiv, planetObj.planetName, "planet");

         // Finally append each div to the <section> in the HTML
         whereToAppendTheNewDiv.appendChild(newPlanetDiv);

        /*******************BONUS**********************/
        // Do the same process to create the moons
        createDivForEachMoonAndAppendToPlanetDiv(planetObj, newPlanetDiv);
    });
} 


// Using also for moon and planet
// Return new div with the name inside
const createNewDiv = txtName => {

    // Create a <div> using createElement.
    let newDiv = document.createElement('div');

    // Append to each div the name
    let txtNode = document.createTextNode(txtName); 

    // Append textNode to the div
    newDiv.appendChild(txtNode);

    return newDiv;
}


// Using also for moon and planet
// After this function we will have a styled div with name into
const addClassesToNewDivForStyle = (newDiv, styleAccordingToName, styleAccordingToType) => {

    // This div should have a class name
    // Each div have a different background color
    newDiv.classList.add(styleAccordingToType, styleAccordingToName); // type = "moon/planet", name = name of planet/moon
}


// After this function we will have a styled moon divs inside the planet div 
const createDivForEachMoonAndAppendToPlanetDiv = (planetObj, planetDivToAppendTo) => {

    (planetObj.moonNames).forEach( moon => { // moon is an element in the moons array names

        let newMoonDiv = createNewDiv(moon);

        addClassesToNewDivForStyle(newMoonDiv, moon , "moon"); //"moon"= build-in class, moon = class of the name of moon

        newMoonDiv.setAttribute('style',`right: ${position-30}px`);

        position -= 30;

        // Finally append moon div to the planet div in the HTML
        planetDivToAppendTo.appendChild(newMoonDiv);
    });
}


/****************************************/

// Calling the function 
planets(); // START









