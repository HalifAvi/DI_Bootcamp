let taskTitle = document.querySelector('#inputTaskTitle'),
    taskDesc = document.querySelector('#textarea'),
    taskStartDate = document.querySelector('#datetime-local1'),
    taskEndDate = document.querySelector('#datetime-local2'),
    taskDone = document.forms[0].optionsRadios,
    newTabWin,
    tasksArray = [],
    divTasks,
    pDescription = document.createElement('p');

let setNewTabWinWhenClose = e => {

    e.preventDefault();
    newTabWin = undefined;
}

let addNewTask = e => {

    e.preventDefault();

    if(taskStartDate.value < taskEndDate.value ){

        localStorage.setItem(`task${localStorage.length}`, 
        JSON.stringify({title: `${taskTitle.value}`,
                        description: `${taskDesc.value}`,
                        startDate: `${(taskStartDate.value).replace('T', ' ')}`,
                        endDate: `${(taskEndDate.value).replace('T', ' ')}`,
                        done: `${taskDone.value}`}));

        if(newTabWin === undefined){

            newTabWin = window.open();
            newTabWin.addEventListener('beforeunload', setNewTabWinWhenClose);
            divTasks = document.createElement('div');
            (newTabWin.document.querySelector('body')).appendChild(divTasks);
        }

        updateTasksArray();
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

    let i = localStorage.length - 1;

    // In case we totally closed the browser and then start again so the array is empty but we still have data in localStorage
    if(localStorage.length !== 0 && tasksArray.length === 0){

        while(i >= 0){

            tasksArray.push(JSON.parse(localStorage.getItem(`task${i}`)));
            i--;
        }

    }else{ // If we just add a new task and we already stored all the previous in our array

        tasksArray.push(JSON.parse(localStorage.getItem(`task${(localStorage.length)-1}`)));
    }

    tasksArray.sort( compare );
}


let updateUI = () => {

    divTasks.textContent = '';
    tasksArray.forEach((task, idx) => {

        let dropDownDiv = document.createElement('div');
        dropDownDiv.classList.add('dropdown');
        let dropDownBtt = document.createElement('button');
        dropDownBtt.classList.add('btn', 'btn-secondary', 'dropdown-toggle');
        dropDownBtt.setAttribute('type','button');
        dropDownBtt.setAttribute('id',`${idx}`);
        dropDownBtt.setAttribute('data-bs-toggle','dropdown');
        dropDownBtt.setAttribute('aria-expanded','false');
        
        dropDownBtt.addEventListener('click', showDiscription);
        dropDownBtt.textContent = `Task Name: ${task.title}`;

        if(formatDate(new Date()) > task.endDate){

            dropDownBtt.style.color = 'orange';

        }else{

            task.done === 'true' ? dropDownBtt.style.color = 'green' : dropDownBtt.style.color = 'red';
            let checkStatus = document.createElement('input');
            checkStatus.setAttribute('id',`${idx}`);
            checkStatus.setAttribute('type', 'checkbox');
            checkStatus.addEventListener('click',changeStatus);
            dropDownDiv.appendChild(checkStatus);
        }

        dropDownBtt.style.margin = "10px";
        dropDownDiv.appendChild(dropDownBtt);

        let ulDropDown = document.createElement('ul');
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


let changeStatus = e => {

    let toBeParsed = localStorage.getItem(`task${(e.target).nextElementSibling.id}`);
    let taskObj = JSON.parse( toBeParsed );

    if((e.target).nextElementSibling.style.color === "green"){

        (e.target).nextElementSibling.style.color = "red";
        tasksArray[(e.target).nextElementSibling.id].done = false;
        taskObj.done = false;

    }else{

        (e.target).nextElementSibling.style.color = "green";
        tasksArray[(e.target).nextElementSibling.id].done = true;
        taskObj.done = true;
    }

    localStorage.setItem(`task${(e.target).nextElementSibling.id}`, JSON.stringify(taskObj));
}


let showDiscription = e => {

    pDescription.textContent = '';
    pDescription.textContent = `DESCRIPTION : ${tasksArray[e.target.id].description}`;
    (((e.target).nextElementSibling).lastChild).appendChild(pDescription);
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




