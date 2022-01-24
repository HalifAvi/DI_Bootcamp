let userWordsObjArray = [];
const shuffleBttName = "SHUFFLE THE STORY";


const createStoriesArray = () => {

    let stories = [`Once upon a time, there lived a little girl called ${userWordsObjArray.find(x => x.wordType === 'Someone\'s Name').theWord}.
                        She wore a ${userWordsObjArray.find(x => x.wordType === 'Adjective').theWord} red cape
                        that her grandma had made for her.
                        One day, her mother said, Come here Little Red Riding Hood. Your ${userWordsObjArray.find(x => x.wordType === 'Noun').theWord} is not very well. I would
                        like you to ${userWordsObjArray.find(x => x.wordType === 'Verb').theWord} this bread and cheese to her but remember to stay on ${userWordsObjArray.find(x => x.wordType === 'A place').theWord}.`,

                        `The Lion King tells the story of ${userWordsObjArray.find(x => x.wordType === 'Someone\'s Name').theWord}, a young lion who is to succeed his father,
                        Mufasa, as King of ${userWordsObjArray.find(x => x.wordType === 'A place').theWord}; however, after Simba\'s paternal uncle Scar
                        murders Mufasa, Simba is manipulated into thinking he was responsible and flees
                        into exile. After ${userWordsObjArray.find(x => x.wordType === 'Verb').theWord} in the company of the carefree outcasts Timon and Pumbaa,
                        Simba receives ${userWordsObjArray.find(x => x.wordType === 'Adjective').theWord} perspective from his childhood friend, Nala, and his shaman,
                        Rafiki, before returning to challenge Scar to end his ${userWordsObjArray.find(x => x.wordType === 'Noun').theWord} and take his place in
                        the Circle of Life as the rightful King.`,

                        `What do you get when you combine a ${userWordsObjArray.find(x => x.wordType === 'Noun').theWord}, a flying carpet, a beautiful princess,
                         and a ${userWordsObjArray.find(x => x.wordType === 'Someone\'s Name').theWord} who wants to be a prince? Disney's Aladdin! All the fun and adventure
                         of the hit movie is retold in the classic Little Golden Book. It's perfect for children
                        ages 2 to 5. Your kids will ${userWordsObjArray.find(x => x.wordType === 'Verb').theWord} reading their favorite cartoon movie in ${userWordsObjArray.find(x => x.wordType === 'A place').theWord}.
                        And because they already watched the movie cartoon, they will already know the story,
                        and that's will make it easier for them to read it and picture it in their minds.
                        So they will learn a lot of ${userWordsObjArray.find(x => x.wordType === 'Adjective').theWord} English words without even knowing it.`
        ];

    return stories;
}



const generatedStory = (event) => {

    // In case the user clicks on 'Lib it!' so it's a new game and recieve input from user  
    if(event.target.textContent !== shuffleBttName){

        getAllValuesFromInputs();
    }

    // In case we click the 'Lib it!' btt - it's new game and we have to check user input
    // In case we click the shuffle btt - we continue with the same input we already have
    if(isValidInputs() || (event.target.textContent === shuffleBttName)){

        let stories = createStoriesArray();
        
        whereToAddTheArticle = document.querySelector('span#story');

        appendTheStory(stories, event);
    }
    else{ // In case the user inserted incorrect input

        alert("PAY ATTENTION! ONE OR MORE OF YOUR INPUT IS NOT A WORD!");
        window.location.reload();
    }
}


const appendTheStory = (stories, event) => {

    // If the user pressed the 'Lib it!' btt and want to start a new game
   if(event.target.textContent !== shuffleBttName){

       createNewStoryToAppend(stories);
   
       // Make shuffle btt visible now - After you know the input is o.k and block the input fields
       shuffleBtt.style.display = "block";
    }
   else{

       whereToAddTheArticle.lastChild.remove();
       createNewStoryToAppend(stories);
    }
}


const createNewStoryToAppend = (stories) => {

    let txtNode = document.createTextNode(stories[Math.floor(Math.random() * 3)]);
    let newArticletag = document.createElement('article');
    let storyToAppend = newArticletag.appendChild(txtNode);
    whereToAddTheArticle.appendChild(storyToAppend);
}


const getAllValuesFromInputs = () => {

    let allInputsTag = document.querySelectorAll('li input');
    let allLisTag = document.querySelectorAll('li');

    disableAllInputsArea(allInputsTag);

    // convert Node list to array and get the input values in array from map function 
    let inputValuesArray =  [...allInputsTag].map( inputTag => inputTag.value);

    // convert Node list to array and get the li text content in array from map function 
    // Remove the space and ':' in each li name
    let liNamesArray =  [...allLisTag].map( liTag => liTag.textContent.trim().slice(0,liTag.textContent.trim().length-1));

    userWordsObjArray = getAllUserWordsObjArray(liNamesArray, inputValuesArray);

    cleanInputFields(allInputsTag);
}


const disableAllInputsArea = allInputsTag => {

    for(let i=0; i<allInputsTag.length; i++){

        allInputsTag[i].setAttribute("disabled","");
    }
}


const getAllUserWordsObjArray = (liNamesArray, inputValuesArray) => {

    let allUserWords = [];

    for(let i=0; i<liNamesArray.length; i++){

        allUserWords.push( { wordType: `${liNamesArray[i]}`, theWord: `${inputValuesArray[i]}` } );
    } 

    return allUserWords;
}

  
const isValidInputs = () => {

    let answer = true;

    // Scan each of the obj array we created and check the value of 'theWord' key into the obj
    userWordsObjArray.forEach(inputValue => {

        if( !(isValidWord(inputValue.theWord)) ){

            answer = false;
        }
    });

    return answer;  
}

const isValidWord = wordToCheck => /^[a-zA-Z]+$/.test(wordToCheck);

const cleanInputFields = listToClean => {

    for(let i=0; i<listToClean.length; i++){
        
        listToClean[i].value = "";
    }
} 




/**********************************EXE STARTS FROM HERE**********************************/



let button = document.querySelector('#lib-button');
button.addEventListener("click", generatedStory);

// BONUS - CREATE ANOTHR BUTTON

let shuffleBtt = document.createElement('button');
shuffleBtt.textContent = shuffleBttName;        
shuffleBtt.style.display = "none";
shuffleBtt.addEventListener('click', generatedStory);

document.querySelector('ul').append(shuffleBtt);