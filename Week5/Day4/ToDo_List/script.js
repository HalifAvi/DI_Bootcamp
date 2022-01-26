
 let taskObjArr = [];
let numOfTask = 1;


const doneTask = newLabel => {

    // In case we delete elements from the array we have to seek for the
    // task with 'find' fun and not according to position in the array
    let taskId = parseInt(event.target.getAttribute('data-task-id'));
    let theTaskWithSameId = taskObjArr.find(x => x.task_id === taskId)
        
    if(event.target.checked){

        theTaskWithSameId.done = true;
        newLabel.classList.toggle("redLine");
    }
    else{

        theTaskWithSameId.done = false;
        newLabel.classList.toggle("redLine");
    }
}

const addTask = inputStr => {

    if(inputStr){

        taskObjArr.push({task_id: numOfTask++,
                         text: inputStr,
                         done: false});   

        let whereToAdd = document.querySelector("div.listTasks");

        let newTaskDiv = document.createElement('div');
        let newInput = document.createElement('input');
        newInput.setAttribute('type','checkbox');
        newInput.setAttribute('name',`task${taskObjArr.length}`);
        newInput.setAttribute('data-task-id', `${numOfTask-1}`); 
        let newLabel = document.createElement('label');
        newLabel.setAttribute('for',`task${taskObjArr.length}`);
        newLabel.textContent = inputStr;
        let lineUnder = document.createElement('hr')

        newInput.addEventListener('click', function() { doneTask(newLabel);}, false);

        let icon = document.createElement('i');
        icon.classList.add("fas", "fa-times-circle");
        icon.addEventListener('click',  function() { deleteTask(newTaskDiv)}, false);
        newTaskDiv.appendChild(icon);
        newTaskDiv.appendChild(newInput);
        newTaskDiv.appendChild(newLabel);
        newTaskDiv.appendChild(lineUnder);
        whereToAdd.appendChild(newTaskDiv);
    }

    console.log(taskObjArr);
    event.preventDefault();
}

const deleteTask = divOfTask => {

//Delete task from the array
let taskId = divOfTask.querySelector('input').getAttribute("data-task-id");
taskObjArr.splice(taskId-1, 1); // 2nd parameter means remove one item only

console.log(taskObjArr)

//Delete task from the display ( = the main div) 
divOfTask.remove();
} 


const clearAllTask = () => {

    document.querySelector("div.listTasks").remove();
}


/**********************************************************/

let addBtt = document.forms[0].querySelector('#addBtt');
addBtt.addEventListener("click", function() { addTask(document.forms[0].newTask.value);}, false);

let clearBtt = document.forms[0].querySelector('#clearBtt');
clearBtt.addEventListener("click", clearAllTask);




