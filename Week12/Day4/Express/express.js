const express = require('express');

const app = express();

app.listen(5000, () => {

    console.log('listen on port 5000');
})

const Hobbies = [
    {name: 'swimming', price: 800},
    {name: 'traveling', price: 650},
    {name: 'eating', price: 750}
];

// app.get('/api/products', (req, res) => {

//     res.json(products);
// })

// app.get('/api/search', (req, res) => {

//     const result = products.find(item => {

//         return item.name == req.query.name
//     });

//     // res.json({msg:'ok'});  
//     res.json(result); 
// })

app.get('/aboutMe/:hobby', (req, res) => {

    const result = Hobbies.find(item => {

        return item.name == req.params.hobby
    });

    // res.json({msg:'ok'});  
    res.json(result); 
})