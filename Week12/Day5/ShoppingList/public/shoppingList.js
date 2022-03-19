
fetch("http://localhost:5000/showItems")
.then(res=> res.json())
.then(jsonData=> {
    
    let objArray = JSON.parse(jsonData);
    let whereToAppend = document.querySelector('ul');

    console.log(objArray)
    console.log(whereToAppend)

    objArray.forEach(item => {

            let li = document.createElement('li');
            let textNode = document.createTextNode(`${item.itemName} : ${item.quantity}`);
            li.appendChild(textNode);
            whereToAppend.appendChild(li)
        });
    })
.catch(e=> console.log(e))
