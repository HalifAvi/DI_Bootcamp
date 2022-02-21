
let formatDate = (dateObj) => {

    let year = dateObj.getFullYear();
    let month; 
    let day;
    let hours;
    let minutes;
    let seconds;

    // Be aware that the Date's month field is zero based (0 is January and 11 is December).
    (dateObj.getMonth()).toString().length == 2 ?  month = (dateObj.getMonth()+1).toString() : month = "0" + (dateObj.getMonth()+1);

    (dateObj.getDate()).toString().length == 2 ?  day = (dateObj. getDate()).toString() : day = "0" + (dateObj.getDate());

    (dateObj.getHours()).toString().length == 2 ?  hours = (dateObj. getHours()).toString() : hours = "0" + (dateObj.getHours());
    
    (dateObj.getMinutes()).toString().length == 2 ?  minutes = (dateObj.getMinutes()).toString() : minutes = "0" + (dateObj.getMinutes());

    (dateObj.getSeconds()).toString().length == 2 ?  seconds = (dateObj.getSeconds()).toString() : seconds = "0" + (dateObj.getSeconds());

    return year + month + day + hours + minutes + seconds;
}




console.log(formatDate(new Date(2020, 6, 4, 8, 0, 0))) //➞ "20200704080000"

console.log(formatDate(new Date(2019, 11, 31, 23, 59, 59))) //➞ "20191231235959"

console.log(formatDate(new Date(2020, 6, 4))) //➞ "20200704000000"