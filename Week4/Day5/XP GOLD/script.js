
// Return a book obj array
const createAllBooksArray = () => {

    let allBooks = [

        {title: "book 1", author: "author 1", image: "./img/1.jpg", alreadyRead : true},
        {title: "book 2", author: "author 2", image: "./img/2.jpg", alreadyRead : false},
        {title: "book 3", author: "author 3", image: "./img/3.jpg", alreadyRead : true},
        {title: "book 1", author: "author 1", image: "./img/1.jpg", alreadyRead : true},
        {title: "book 2", author: "author 2", image: "./img/2.jpg", alreadyRead : false},
        {title: "book 3", author: "author 3", image: "./img/3.jpg", alreadyRead : false},
        {title: "book 1", author: "author 1", image: "./img/1.jpg", alreadyRead : false},
        {title: "book 2", author: "author 2", image: "./img/2.jpg", alreadyRead : false},
        {title: "book 3", author: "author 3", image: "./img/3.jpg", alreadyRead : true}
        
        ];

        return allBooks;
}

// Create all book information table and return the table rag
const createAllBooksTable = (allBooksArr) => {

    let tableTag = createSingleElement('table');

    createAllTrWithHeaders(allBooksArr, tableTag);

    createAllTrWithData(allBooksArr, tableTag);

    return tableTag;
}


// Create all tr with headers inside and append to table tag 
const createAllTrWithHeaders = (allBooksArr, tableTag) => {

    let trTag = createSingleElement('tr');

    // SCAN EACH *OBJECT* SO 'FOR IN' IS GOOD
    for(let bookCategory in allBooksArr[0]){ // Create td's to each tr

        let newThTag = createSingleElement('th', bookCategory);

        // Append the new th to the tr tag
        trTag.appendChild(newThTag);
    }

    // Append the new tr to the table tag
    tableTag.appendChild(trTag);
}


// Return td tag with the ralevent data inside
const getNewTdTagAcorrdingToDataOrImageInside = (book, bookCategory) =>{

    let newTdTag;
    let isRead = false;

    if(bookCategory === "image"){

        newTdTag = createSingleElement('td');
        newImageTag = createSingleElement('img');

        // Set attributes to image tag
        newImageTag.setAttribute('src', book[bookCategory]);
        newImageTag.classList.add('image')


        // Append the image tag to the td tag
        newTdTag.appendChild(newImageTag);

    }
    else{

        newTdTag = createSingleElement('td', book[bookCategory]); 

        if(bookCategory === "alreadyRead"){

            isRead = book[bookCategory];
        }

    }

    return [newTdTag, isRead];
}


// Create all tr with data inside and append to table tag 
const createAllTrWithData = (allBooksArr, tableTag) => {

    // SCAN OBJECT *ARRAY* SO 'FOREACH' IS GOOD
    allBooksArr.forEach(book => { // Create tr tags according to the numbers of obj = books in array

        let isAlreadyRead;
        let trTag = createSingleElement('tr');

        // SCAN EACH *OBJECT* SO 'FOR IN' IS GOOD
        for(let bookCategory in book){ // Create td's to each tr

            let newTdTagAndIsRead = getNewTdTagAcorrdingToDataOrImageInside(book, bookCategory);

            let newTdTag = newTdTagAndIsRead[0];
            isAlreadyRead = newTdTagAndIsRead[1];

            // Append the new td to the tr tag
            trTag.appendChild(newTdTag);
        }

        // Set to red the table row if already read
        if(isAlreadyRead){

            trTag.setAttribute('class','red');           
        }

        // Append the new tr to the table tag
        tableTag.appendChild(trTag);
    });
}


// Return new element with txt inside (in case we have)
const createSingleElement = (tagNameToCreate, txtToTag = '') => { // Default parameter to txtToTag

    let newTag = document.createElement(tagNameToCreate);

    // Add txt to tag in case we have
    if(txtToTag != ''){

        let txtNode = document.createTextNode(txtToTag);
        newTag.appendChild(txtNode);
    }

    return newTag;
}

// Append the table tag to the div tag
const appendAllBooksTableToHtmlDiv = (allBooksTable) => {

    // Get the div we have to append to
    let whereAppendTheTable = document.getElementsByClassName('listBooks')[0];

    // Append the table tag to the div tag
    whereAppendTheTable.appendChild(allBooksTable);
}

// Start function
const startOfExe = () => {

    let allBooksArr = createAllBooksArray();

    let allBooksTable = createAllBooksTable(allBooksArr);

    appendAllBooksTableToHtmlDiv(allBooksTable);
}


/***************************************************************************/

// Calling to function 
startOfExe();






