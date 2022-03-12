
let taskTitle = document.querySelector('#inputTaskTitle'),
    taskDesc = document.querySelector('#textarea'),
    taskStartDate = document.querySelector('#datetime-local1'),
    taskEndDate = document.querySelector('#datetime-local2'),
    taskDone = document.forms[0].optionsRadios,
    newTabWin,
    tasksArray = [],
    divTasks;

let setNewTabWinWhenClose = e => {

    e.preventDefault();
    newTabWin = undefined;
}

let addNewTask = e => {

    e.preventDefault();

    localStorage.setItem(`task${++(localStorage.length)}`, 
        JSON.stringify({title: `${taskTitle.value}`,
                        description: `${taskDesc.value}`,
                        startDate: `${taskStartDate.value}`,
                        endDate: `${taskEndDate.value}`,
                        done: `${taskDone.value}`}));

    if(newTabWin === undefined){

        newTabWin = window.open();
        newTabWin.addEventListener('beforeunload', setNewTabWinWhenClose);
        divTasks = document.createElement('div');
        (newTabWin.document.querySelector('body')).appendChild(divTasks);
    }

    updateTasksArray();
    updateUI();
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


let updateTasksArray = () => {

    let i = localStorage.length;

    // In case we totally closed the browser and then start again so the array is empty but we still have data in localStorage
    if(localStorage.length !== 0 && tasksArray.length === 0){

        while(i > 0){

            tasksArray.push(JSON.parse(localStorage.getItem(`task${i--}`)));
        }

    }else{ // If we just add a new task and we already stored all the previous in our array

        tasksArray.push(JSON.parse(localStorage.getItem(`task${localStorage.length}`)));
    }

    tasksArray.sort( compare );
}


let updateUI = () => {

    divTasks.textContent = '';

    tasksArray.forEach(task => {

        let dropDownDiv = document.createElement('div');
        dropDownDiv.classList.add('dropdown');
        let dropDownBtt = document.createElement('button');
        dropDownBtt.classList.add('btn', 'btn-secondary', 'dropdown-toggle');
        dropDownBtt.setAttribute('type','button');
        dropDownBtt.setAttribute('id','dropdownMenuButton1');
        dropDownBtt.setAttribute('data-bs-toggle','dropdown');
        dropDownBtt.setAttribute('aria-expanded','false');
        dropDownBtt.textContent = task.title;
        dropDownBtt.style.margin = "10px";
        dropDownDiv.appendChild(dropDownBtt);

        let ulDropDown = document.createElement('ul');
        ulDropDown.classList.add('dropdown-menu');
        ulDropDown.setAttribute('aria-labelledby','dropdownMenuButton1');
        
        let startDateLi = document.createElement('li');

        startDateLi.textContent = task.startDate;
        ulDropDown.appendChild(startDateLi);

        let howManyDaysLi = document.createElement('li');

        howManyDaysLi.textContent = "32433243";
        ulDropDown.appendChild(howManyDaysLi);

        dropDownDiv.appendChild(ulDropDown);
        divTasks.appendChild(dropDownDiv);
    });

}
    






  
(document.querySelector('form')).addEventListener('submit', addNewTask);
