const colorArr = ['purple', 'red', 'yellow', 'green', 'orange', 'pink', 'black', 'brown', 'grey', 'white',
'lightcoral', 'lightblue', 'lightgreen', 'lightcyan', 'lightskyblue', 'lightsalmon', 'lightgray', 'orangered',
 'orchid', 'yellowgreen', 'papayawhip'
];

let chosenColor = "white";
let clicked = false;

const chooseColor = event => {

    chosenColor = event.target.style.background;
}


const mseOver = event => {

    if(clicked){

        event.target.style.background = chosenColor;
    }
}

const mseUp = event => {

    clicked = false;
}

const mseDown = event => {

    event.target.style.background = chosenColor;
    clicked = true;
}

const clearAll = gridDivs => {

    let gridDivsArr = [...gridDivs];

    gridDivsArr.forEach(element => {

    element.style.background = "white";
});
}


const createBlankGrid = () => {

  let grid = document.createElement('div');
  grid.setAttribute('id',"nonColorGridContainer");

  for(let i=0; i<950; i++){

    let newGridCell = document.createElement('div');
    newGridCell.classList.add("gridCell");
    newGridCell.addEventListener("mousedown", mseDown);
    newGridCell.addEventListener("mouseup", mseUp);
    newGridCell.addEventListener("mouseover", mseOver);
    grid.appendChild(newGridCell);

    }
  return grid;
} 


const createColorsGrid = () => {

  let grid = document.createElement('div');
  grid.setAttribute('id',"colorGridContainer");

  for(let i=0; i<colorArr.length; i++){

    let newGridCell = document.createElement('div');
    newGridCell.classList.add("gridCell");
    newGridCell.style.background = colorArr[i];
    newGridCell.addEventListener("click",chooseColor)
    grid.appendChild(newGridCell);
  }

  return grid;
}



let rowDiv = document.querySelector('#rowContainer');

let button = document.createElement('button');
button.textContent = "Clear";
button.classList.add("roundedBtt");

let colorsGrid = createColorsGrid();
let nonColorsGrid = createBlankGrid();

button.addEventListener("click", function() { clearAll(nonColorsGrid.children);}, false);

rowDiv.children[0].appendChild(button);
rowDiv.children[0].appendChild(colorsGrid);
rowDiv.children[1].appendChild(nonColorsGrid);












