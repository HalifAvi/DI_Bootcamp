
const deleteGif = e => {

    e.target.parentNode.remove();
}

const deleteAllGifs = () => {

    let mainDiv = document.querySelector('div#mainDiv');
    mainDiv.textContent = "";
}


const handleSubmit = e => {

    e.preventDefault();

    let formData = new FormData(e.target);
    let categoryObj = Object.fromEntries(formData.entries());

    let categoryToSearch = categoryObj.category;
    
    let xhr = new XMLHttpRequest();

    xhr.open("GET", `https://api.giphy.com/v1/gifs/search?q=${categoryToSearch}&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`, [true]);

    xhr.send();

    xhr.responseType = "json";

    xhr.onload = function() {

        let whereToAppend = document.querySelector('#mainDiv');
        let newGifDiv = document.createElement('div');
        let deleteBtt = document.createElement('button');
        deleteBtt.textContent = "DELETE GIT";
        deleteBtt.addEventListener('click', deleteGif)
        let gif = document.createElement('img');
        

        gif.src = `${xhr.response.data[0].images.preview_gif.url}`;

        newGifDiv.appendChild(gif);
        newGifDiv.appendChild(deleteBtt);

        whereToAppend.appendChild(newGifDiv);
    }
}

let form = document.querySelector("form");
form.addEventListener('submit', handleSubmit);

let deleteAllGifsBtt = form.deleteAll; 
deleteAllGifsBtt.addEventListener('click', deleteAllGifs);



