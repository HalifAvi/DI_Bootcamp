const daysName = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
const numOfDaysRowsInCalender = 6;


const createCalender = (year, month) => {

    let tableTag = createSingleElement('table');

    createAllTrWithHeaders(tableTag);

    createAllTrWithData(tableTag, year, month);

    appendTableToHtmlDiv(tableTag);
}

const howManyDotsDays = (month, year) => {

    return getBeginDayIndex(month, year);
}

// Create all tr with headers inside and append to table tag 
const createAllTrWithHeaders = (tableTag) => {

    let trTag = createSingleElement('tr');

    for(let i=0; i<daysName.length; i++){ // Create td's to each tr

        let newThTag = createSingleElement('th', daysName[i]);

        // Append the new th to the tr tag
        trTag.appendChild(newThTag);
    }

    // Append the new tr to the table tag
    tableTag.appendChild(trTag);
}

const getBeginDayIndex = (month, year) => {

    // 0 for Sunday, 1 for Monday, 2 for Tuesday
    // month, day, year
    let dayIndex = new Date(`${month}, 1, ${year}`).getDay();

    console.log(dayIndex);

    if(dayIndex === 0){ // If it's SUNDAY

        dayIndex = 6;
    }
    else{

        dayIndex -= 1;
    }

    return dayIndex;
}

const getNumberOfDaysInMonth = (month, year) => {

    return new Date(year, month, 0).getDate();

}


// Return td tag with the ralevent data inside
// const getNewTdTagAcorrdingToDataOrImageInside = (book, bookCategory) =>{

//     let newTdTag;
//     let isRead = false;

//     if(bookCategory === "image"){

//         newTdTag = createSingleElement('td');
//         newImageTag = createSingleElement('img');

//         // Set attributes to image tag
//         newImageTag.setAttribute('src', book[bookCategory]);
//         newImageTag.classList.add('image')


//         // Append the image tag to the td tag
//         newTdTag.appendChild(newImageTag);

//     }
//     else{

//         newTdTag = createSingleElement('td', book[bookCategory]); 

//         if(bookCategory === "alreadyRead"){

//             isRead = book[bookCategory];
//         }

//     }

//     return [newTdTag, isRead];
// }













// Create all tr with data inside and append to table tag 
const createAllTrWithData = (tableTag, year, month) => {

    // Let me know which day the month starts - days before print '.'
    let displayDotsDay = howManyDotsDays(month, year);
    let tdTag;
    let dayNumber = 1;

    for(let i=0; i<numOfDaysRowsInCalender; i++) { // Create tr's

        let trTag = createSingleElement('tr');

        for(let j=0; j<daysName.length; j++){ // Create td's to each tr

            if(displayDotsDay-- > 0){
    
                tdTag = createSingleElement('td','.');

                // Append the new td to the tr tag
                trTag.appendChild(tdTag);
            }
            else if(dayNumber <= getNumberOfDaysInMonth(month, year)){
        
                tdTag = createSingleElement('td', dayNumber);
                dayNumber++;

                // Append the new td to the tr tag
                trTag.appendChild(tdTag);
            }

 
        }

        // Append the new tr to the table tag
        tableTag.appendChild(trTag);
    }
    console.log(tableTag)
}


// Return new element with txt inside (in case we have)
const createSingleElement = (tagNameToCreate, txtToTag = '') => { // Default parameter 

    let newTag = document.createElement(tagNameToCreate);

    if(txtToTag !== ''){

        // Add txt to tag
        let txtNode = document.createTextNode(txtToTag);
        newTag.appendChild(txtNode);
    }


    return newTag;
}

// Append the table tag to the div tag
const appendTableToHtmlDiv = (calenderTable) => {

    // Get the div we have to append to
    let whereAppendTheTable = document.getElementsByTagName('div')[0];

    // Append the table tag to the div tag
    whereAppendTheTable.appendChild(calenderTable);
}





/***************************************************************************/

// Calling to function 
createCalender(2023, 1);

