
let displayAlert = () => {

    alert("Hello from JavaScript");
}




// Use your server to get the static HTML file from the public folder

// Create two files : server.js and script.js.
// In the server.js file, create an express server and a route /, using the GET method.
// 4. Use your server to get the static HTML file from the public folder.
// 5. Your server should run on http://localhost:3000/ to serve the HTML file.
// 6. In the script.js file, fetch your server and get the response.
//  The response should be the JSON Object. console.log this object and display it on the HTML.

fetch('http://localhost:3000/user')
.then(res => res.json())
.then(data => {
    
    console.log(data);
    (document.querySelector('div')).textContent = JSON.stringify(data);
})
.catch(e => console.log(e))


let btt = document.querySelector('button');
btt.addEventListener('click', displayAlert);

