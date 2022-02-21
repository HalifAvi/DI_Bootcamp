
let addOneIfMonth = (value, key) => key === "getMonth" ? (value + 1).toString() : value.toString();

let formatDate = (dateObj) => {

    let obj = {
               getFullYear: "",
               getMonth: "",
               getDate: "",
               getHours: "",
               getMinutes: "", 
               getSeconds: "",
    };


    for (let key in obj){

        // Way to use string as a function name. The function calling : obj[stringAsFunName]()
        let value = dateObj[key]();
        ((dateObj[key]()).toString()).length < 2  ?  obj[key] = "0" + addOneIfMonth(value, key) : obj[key] = addOneIfMonth(value, key);
    }

    return Object.values(obj).join('');
}



    


console.log(formatDate(new Date(2020, 6, 4, 8, 0, 0))) // "20200704080000"

console.log(formatDate(new Date(2019, 11, 31, 23, 59, 59))) // "20191231235959"

console.log(formatDate(new Date(2020, 6, 4))) // "20200704000000"