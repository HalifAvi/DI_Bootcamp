let intervalID;

// I change the exe to move from right to left 5 times and after for 5 times in the diagonal axis and stop
const myMove = () => {

    let redRect = document.querySelector('#animate');
    let position = 0;
    let toLeftSide = false;
    let numOfTimes = 0;
    let changeDirection = true;
    let diagonal = false;

     console.log(intervalID)


     // No matter how many clicks we have he creates just one rectangle (just one ID)
    intervalID = !intervalID ? setInterval( function(){

        if(position<350 && position>=0 && !toLeftSide){

            position++; 
            redRect.style.left = position + "px"; 
            if(diagonal){
                redRect.style.top = position + "px"; 
            }
        }
        else{

            toLeftSide = true;
            position--;
            redRect.style.left = position + "px"; 
            if(diagonal){
                redRect.style.top = position + "px"; 
            }

            if(position === 0){

                toLeftSide = false;
            }
        }

        numOfTimes++;

        if(numOfTimes === 1750){ // After 5 times (350*5) change the direction for 5 times more

            if(changeDirection){

                diagonal = true;
                changeDirection = false;
                numOfTimes = 0;
            }
            else{ // After 5 times in the diagonal axis stop it!

                clearInterval(intervalID);
            }
           
            
        }
    // every 0.1 he changes the position of the rectangle
    },0.1) : intervalID; 
}

