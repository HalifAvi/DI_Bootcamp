

const createBlankGrid = () => {

    let grid = document.createElement('div');
    grid.setAttribute('id',"gridContainer");


    for(let i=0; i<7; i++){
        for(let j=0; j<7; j++){

            let options = [((j===1 || j===5) && (i!==0)),
                ((i===0 || i===3) && (j===2 || j===3 || j===4))              
            ];

            let newGridCell = document.createElement('div');

            if(options.indexOf(true) !== -1){
                newGridCell.textContent = '*';
            }

            newGridCell.classList.add("gridCell");
            grid.appendChild(newGridCell);
        }
      }
    return grid;
  } 




  let mainSection = document.querySelector('#mainSection');
  mainSection.appendChild(createBlankGrid());

  console.log(mainSection)