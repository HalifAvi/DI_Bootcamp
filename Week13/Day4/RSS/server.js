let Parser = require('rss-parser');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const axios = require('axios');


let parser = new Parser();
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.listen(process.env.PORT||8080, ()=> {

    console.log(`listen to port ${process.env.PORT}`);
})

app.set('view engine', 'ejs');


let feed;
let categories;
let postsToDisplay = [];

app.get('/', (req, res) => {

    (async () => {

        feed = await parser.parseURL(`${process.env.API}`);

        res.render('pages/index',
    
        // An Obj to send in the response to client ( PAGE + DATA) :
            {
                allRSSFacts : feed.items
            }
        )
    })();
})



app.get('/search', (req, res) => {

    postsToDisplay = [];
    categories = getAllCategories();
    
    res.render('pages/search',
    
    // An Obj to send in the response to client ( PAGE + DATA) :
        {
            allRSSFacts : postsToDisplay,
            allCategories : categories
        }
    )
})


let getAllCategories = () => {

    let objArr = feed.items;

    let categoriesArr = [];

    (objArr).forEach(element => {

        categoriesArr.push(element.categories)
       
    });

    return categoriesArr.flat(Infinity);
}



let getAllPostObjAccordingToTitle = strToCheck => {

    let postsObjArr = feed.items;

    return postsObjArr.filter( postObj => (((postObj.title).toLowerCase()).includes(strToCheck.toLowerCase())) === true )
}


let getAllPostObjAccordingToCategory = strToCheck => {

    let postsObjArr = feed.items;

    console.log(postsObjArr)

    return postsObjArr.filter( postObj => {

        let onePostCatagoryArray = postObj.categories;

        if( onePostCatagoryArray.some( category => ((category).toLowerCase()).includes(strToCheck.toLowerCase()) ) === true) {

            return true;
        }
    })
}


app.post('/search/title', (req, res) => {

    let titleToSearch = req.body.titleSearch;

    postsToDisplay = getAllPostObjAccordingToTitle(titleToSearch);

    res.render('pages/search',
  
      // An Obj to send in the response to client ( PAGE + DATA) :
          {
            allRSSFacts : postsToDisplay,
            allCategories : categories
          }
    )
})



app.post('/search/category', (req, res) => {

    let categoryToSearch = req.body.categorySearch;

    postsToDisplay = getAllPostObjAccordingToCategory(categoryToSearch);

    console.log(postsToDisplay)

    res.render('pages/search',
  
      // An Obj to send in the response to client ( PAGE + DATA) :
          {
            allRSSFacts : postsToDisplay,
            allCategories : categories
          }
    )
})
