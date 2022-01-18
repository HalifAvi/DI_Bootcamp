

// Return the number to begin counting down bottles
const getNumberOfBottlesFromUser = () => {

    let regExp =  /^\d+$/;   //   "\d" = 0 to 9
    let numberOfBottles;

    do{
        numberOfBottles = prompt("Please insert number to begin counting down bottles");

    // Convert user answer to integer
    }while(!(regExp.test(numberOfBottles)) || parseInt(numberOfBottles) < 0)

    return numberOfBottles;
}


// Print specific lyrics in case there are no bottles
const printingInCaseZeroBottles = () => {

    console.log(`no bottle of beer on the wall`);
    console.log(`0 bottles of beer`);
}

// Print specific lyrics in case there are more than 0 bottles
const printingInCaseMoreThanZeroBottles = (i, howManyBottlesDown) => {

    console.log(`${i} bottles of beer on the wall`);
    console.log(`${i} bottles of beer`);

    // Checking how many bottles down and change the grammar in sentence according to it
    correctGrammar = getGrammarCorrectionInCaseOneBottleDown(howManyBottlesDown);

    console.log(`Take ${++howManyBottlesDown} down, pass ${correctGrammar} around`);

    return howManyBottlesDown;
}


// Recieve how any bottle down parameter and return the grammar correction according to it 
const getGrammarCorrectionInCaseOneBottleDown = howManyBottlesDown => {

    let correctGrammar = "them";

    // In case number of bottles down variable is just 1 so change the grammar (We print it when 'howManyBottlesDown' equals to 0)
    if(howManyBottlesDown === 0){

        correctGrammar = "it";
    }

return correctGrammar;
}

// Printing the bottles of beer lyrics according to the input of bottles from the user
const printBottlesOfBeerLyrics = () => {

    let numberOfBottles = getNumberOfBottlesFromUser();

    let i;
    let howManyBottlesDown = 0;

    for(i=numberOfBottles; i>0; i-=howManyBottlesDown){

        howManyBottlesDown = printingInCaseMoreThanZeroBottles(i, howManyBottlesDown);
    }

    // In case that remains 0 or less than 0 bottles
    if(i<=0){

        printingInCaseZeroBottles();
    }
}

/*****************************************************************************************/

// Call to function
printBottlesOfBeerLyrics();





