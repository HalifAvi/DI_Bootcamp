


const number = num =>{

   if(document.getElementById('displayLabel').innerHTML !== "ERROR"){

            isOnlyZeroAtDisplay();
            document.getElementById('displayLabel').innerHTML += num;
    }
    else{

        document.getElementById('displayLabel').innerHTML = num;   
    }
}

const operator = operator => {

    if(document.getElementById('displayLabel').innerHTML !== "ERROR"){

            if(operator !== '.'){

                isOnlyZeroAtDisplay();
            }
            
            document.getElementById('displayLabel').innerHTML += operator;
        }
    else{

        document.getElementById('displayLabel').innerHTML = operator;        
    }
}


const equal = () => {

    const regExp = /^([-+]?)(\d+)(.(\d)+)?(([-+*/])(([-+])?\d+(.(\d)+)?))+$/;

        if(regExp.test(document.getElementById('displayLabel').innerHTML)){

            document.getElementById('displayLabel').innerHTML = eval(document.getElementById('displayLabel').innerHTML); 
        }
        else{

            document.getElementById('displayLabel').innerHTML = "ERROR";
        }
}

const isOnlyZeroAtDisplay = () => {

    const regExp = /^0$/;

    if(regExp.test(document.getElementById('displayLabel').innerHTML)){

        document.getElementById('displayLabel').innerHTML = "";
    }
}

const reset = () => {

    document.getElementById('displayLabel').innerHTML = '0';
}

const clearDisplay = () => {

    let currDisplay = document.getElementById('displayLabel').innerHTML;

    if(currDisplay.length === 1){

        document.getElementById('displayLabel').innerHTML = '0';
    }
    else if(currDisplay !== "ERROR"){

        document.getElementById('displayLabel').innerHTML = document.getElementById('displayLabel').innerHTML.slice(0,-1);
    }
}

