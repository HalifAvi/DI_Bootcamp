

// 2 EVENTS FOR THE DRAGGABLE RECTANGELS :

// The regular action of dragstart to draggable element is to copy him
// In case we want to copy and remove the origin we have to write it as well :

// const dragStart = event => {

//     console.log("drag start"); // Just for TEST
    
//     event.target.className += 'hold'; // Just set a dash border when we hold the rectangle

//     // WITHOUT THE SET TIME - WHEN I START DRAG IT WILL BE INVISIBLE - we don't want it
//     // We want that when we start drag it with mouse a moment after, it will be invisible in the origin place
//     // We can put 0 in time parameter cause we just want it happen (= will be invisible) after we start drag it
//     setTimeout(()=>{event.target.className = 'invisible'},1000); // it will take him a sec to be invisible
// }

// In that case we also have to define what is gonna happen when we stop click the mouse => dragEnd
// // When you finish grabbing - Draw the rectangle you grab again as the origin
// const dragEnd = event => {

//     console.log("drag end"); // Just for TEST
//     event.target.className = 'square1';
// }


// Here we did it with just copy the origin amd don't hide it
const dragStart = () => {

    //set the data to be dragged
    console.log("target:",  event.target)
    console.log("id: ",  event.target.id ) // id: square1

    event.dataTransfer.setData("text", event.target.id);
}




// 4 EVENTS FOR THE UNGRAGGABLE RECTANGLE : 1. enter -> 2. over -> 3. leave  (( + 4. drop ))

// called also 'when over'
const allowDrop = () => {

    console.log("you now hover me!!!"); // Just for TEST
    event.preventDefault(); // Necessary. Allows us to drop.
  }
  


  const allowEnter = () => {

    console.log("You entered"); // Just for TEST
    event.target.classList.add('over'); //add dashes to the rectangle we want to drop into
  }
  


  const allowLeave = () => {

    console.log("You left"); // Just for TEST
    event.target.classList.remove('over'); //remove dashes
  }
  
 
  const dragDrop = () => {

  event.preventDefault();
  
  console.log("You droped!!!");
  console.log(event.target) //  event.target is the big div cause we are in an event of him 

  // retrieve the data dragged  
  let data = event.dataTransfer.getData("text");
  console.log("data: ",  data) //data: square1 

  // Put the druggable box into the undraggable big box by appending the divs - child to parent
  // The event.target is the big div cause we are in an event of him 
  let littleRectangle = document.getElementById(data) 
  event.target.appendChild(littleRectangle);
  }



/************************************************************************/

let square1 = document.getElementById("square1");
square1.setAttribute('draggable', true);
square1.addEventListener("dragstart", dragStart)

let square2 = document.getElementById("square2");
square2.setAttribute('draggable', true);
square2.addEventListener("dragstart", dragStart)

let square3 = document.getElementById("square3");
square3.addEventListener('dragover', allowDrop); // can also called as : 'when over' 
square3.addEventListener('dragenter', allowEnter);
square3.addEventListener('dragleave', allowLeave); 
square3.addEventListener('drop', dragDrop); // When we drop on him other rectangle


// Make the background with blue border also an element we can drop into
// So now we can grab the little boxes from him to the pink one and the opposite
// let box = document.getElementById("box");
// box.addEventListener('dragover', allowDrop); // can also called as : 'when over' 
// box.addEventListener('dragenter', allowEnter);
// box.addEventListener('dragleave', allowLeave); 
// box.addEventListener('drop', dragDrop); // When we drop on him other rectangle