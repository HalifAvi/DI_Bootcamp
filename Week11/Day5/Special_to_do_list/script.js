let taskTitle = document.querySelector('#inputTaskTitle'),
    taskDesc = document.querySelector('#textarea'),
    taskStartDate = document.querySelector('#datetime-local1'),
    taskEndDate = document.querySelector('#datetime-local2'),
    taskDone = document.forms[0].optionsRadios,
    newTabWin,
    tasksArray = [],
    divTasks,
    descInput = document.createElement('input'),
    saveBtt = document.createElement('button');;

let setNewTabWinWhenClose = e => {

    e.preventDefault();
    newTabWin = undefined;
}

let addNewTask = e => {

    e.preventDefault();

    if( taskStartDate.value < taskEndDate.value ){

        let serial = getNextTaskSerial();

        localStorage.setItem(`${serial}`,  
        JSON.stringify({title: `${taskTitle.value}`,
                        description: `${taskDesc.value}`,
                        startDate: `${(taskStartDate.value).replace('T', ' ')}`,
                        endDate: `${(taskEndDate.value).replace('T', ' ')}`,
                        done: `${taskDone.value}`,
                        serial: `${serial}`}));


        if(newTabWin === undefined){

            newTabWin = window.open();
            newTabWin.addEventListener('beforeunload', setNewTabWinWhenClose);
            divTasks = document.createElement('div');
            (newTabWin.document.querySelector('body')).appendChild(divTasks);
        }

        updateTasksArray(serial);
        updateUI();

        taskTitle.value = '';
        taskDesc.value = '';
        taskStartDate.value = '';
        taskEndDate.value = '';
        taskDone.value = '';

        console.log(tasksArray)

    }else{

        alert("Error! End date must be after Start date!");
    }
}


let getNextTaskSerial = () => {

    let biggest = 0;

    if(localStorage.length > 0){

        (Object.keys(localStorage)).forEach(element => {

            if( element > biggest){

                biggest = element;
            }
        });

        res = Number(biggest) + 1;

    }else{

        res = biggest;

    }

    return res;
}


function compare( a, b ) {
    if ( a.startDate < b.startDate ){
      return -1;
    }
    if ( a.startDate > b.startDate ){
      return 1;
    }
    return 0;
  }


let updateTasksArray = serial => {

    if( localStorage.length === 1 ){

        tasksArray = [];
    }

    // In case we totally closed the browser and then start again so the array is empty but we still have data in localStorage
    if( tasksArray.length === 0 ){

        (Object.keys(localStorage)).forEach(element => {
            
            let taskObj = JSON.parse(localStorage.getItem(`${element}`));

            tasksArray.push(taskObj);
        });

    }else{ // If we just add a new task and we already stored all the previous in our array

        tasksArray.push(JSON.parse(localStorage.getItem(`${serial}`)));
    }

    tasksArray.sort( compare );

    console.log(tasksArray)
}


let updateUI = () => {

    divTasks.textContent = '';
    tasksArray.forEach(task => {

        let dropDownDiv = document.createElement('div');
        dropDownDiv.classList.add('dropdown');

        let removeBtt = document.createElement('button');
        removeBtt.classList.add('btn', 'btn-secondary');
        removeBtt.textContent = "REMOVE";
        removeBtt.setAttribute('id',`${task.serial}`);
        removeBtt.addEventListener('click', removeTask);
        dropDownDiv.appendChild(removeBtt); 

        let dropDownBtt = document.createElement('button');
        dropDownBtt.classList.add('btn', 'btn-secondary', 'dropdown-toggle');
        dropDownBtt.setAttribute('type','button');
        dropDownBtt.setAttribute('id',`${task.serial}`);
        dropDownBtt.setAttribute('data-bs-toggle','dropdown');
        dropDownBtt.setAttribute('aria-expanded','false');
        
        dropDownBtt.addEventListener('click', showDescription);
        dropDownBtt.textContent = `Task Name: ${task.title}`;

        if(formatDate(new Date()) > task.endDate){

            dropDownBtt.style.color = 'orange';

        }else{

            task.done === 'true' ? dropDownBtt.style.color = 'green' : dropDownBtt.style.color = 'red';
            let checkStatus = document.createElement('input');
            checkStatus.setAttribute('id',`${task.serial}`);
            checkStatus.setAttribute('type', 'checkbox');
            checkStatus.addEventListener('click',changeStatus);
            dropDownDiv.appendChild(checkStatus);
        }

        dropDownBtt.style.margin = "10px";
        dropDownDiv.appendChild(dropDownBtt);

        let ulDropDown = document.createElement('ul');
        ulDropDown.setAttribute('id',`${task.serial}`);
        ulDropDown.classList.add('dropdown-menu');
        ulDropDown.setAttribute('aria-labelledby','dropdownMenuButton1');
        
        let startDateLi = document.createElement('li');

        startDateLi.textContent = `Starting Date: ${task.startDate}`;
        ulDropDown.appendChild(startDateLi);

        let howManyDaysLi = document.createElement('li');

        howManyDaysLi.textContent = `How many days left to complete: ${howManyDays(task.endDate)}`;
        ulDropDown.appendChild(howManyDaysLi);  

        dropDownDiv.appendChild(ulDropDown);
        divTasks.appendChild(dropDownDiv);   
    });
}


let removeTask = e => {

    let answer = newTabWin.confirm("Are you sure you want to delete?");

    if(answer === true){

        console.log(tasksArray);
        tasksArray = [];
        divTasks.textContent = "";
        localStorage.removeItem(`${e.target.id}`); 
        updateTasksArray();
        console.log(tasksArray);
        updateUI();
    }
}

let changeStatus = e => {

    let toBeParsed = localStorage.getItem(`${(e.target).nextElementSibling.id}`);
    let taskObj = JSON.parse( toBeParsed );
    let objToChange = tasksArray.find( obj => obj.serial === (e.target).nextElementSibling.id);

    if((e.target).nextElementSibling.style.color === "green"){
        (e.target).nextElementSibling.style.color = "red";
        objToChange.done = 'false';
        taskObj.done = 'false';

    }else{

        (e.target).nextElementSibling.style.color = "green";
        objToChange.done = 'true';
        taskObj.done = 'true';
    }

    localStorage.setItem(`${(e.target).nextElementSibling.id}`, JSON.stringify(taskObj));

    console.log(tasksArray)
}


let showDescription = e => {

    saveBtt.style.pointerEvents = 'auto';
    saveBtt.value = '';
    descInput.textContent = '';
    descInput.style.pointerEvents = 'none';
    let JSONToParse = localStorage.getItem(e.target.id);
    let objToDisplay = JSON.parse(JSONToParse);
    descInput.value = `${objToDisplay.description}`;
    descInput.style.color = "blue";
    descInput.addEventListener('keyup', saveChanges);
    descInput.setAttribute('id',`${e.target.id}`); 
    (((e.target).nextElementSibling).lastChild).appendChild(descInput);

    saveBtt.textContent = "TO EDIT DESCRIPTION PRESS ON THIS BTT !";
    saveBtt.style.color = "red";
    saveBtt.addEventListener('click', openToEditDescription);
    (((e.target).nextElementSibling).lastChild).appendChild(saveBtt);
}

let openToEditDescription = e => {

    descInput.style.pointerEvents = 'auto';
    saveBtt.textContent = "TO SAVE CHANGES PRESS ON THE DESCRIPTION AND AFTER ENTER";
    saveBtt.style.color = "green";
}


let saveChanges = event => {

    if(event.keyCode === 13){

        let obj = JSON.parse(localStorage.getItem(`${descInput.getAttribute('id')}`));
        obj.description = descInput.value;
        localStorage.setItem(`${descInput.getAttribute('id')}`, JSON.stringify(obj));

        let arrCellToChange = tasksArray.find( obj => obj.serial === descInput.getAttribute('id'));
        arrCellToChange.description = descInput.value;

        newTabWin.alert("Description was saved sucessfully!");
        saveBtt.textContent = "SAVED";
        saveBtt.style.color = "blue";
        descInput.style.pointerEvents = 'none';
        saveBtt.style.pointerEvents = 'none';
    }
}
    

let howManyDays = taskEndDate => {

    let diff = Math.round((moment.duration( moment( taskEndDate ).diff( moment(formatDate(new Date())) ))).asDays());

    diff <= 0 ? diff = 0 : null;

    return diff;
}


// Format Date as yyyy-mm-dd hh:mm:ss

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date) {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
      ].join(':')
    );
  }



  
(document.querySelector('form')).addEventListener('submit', addNewTask);




