export const moveIndicator = (e) => {

    let marker = document.querySelector('#navBar-marker'); 
    
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
}


// Add active class in hovered list item
export const activeLink = (id) => {

    let li_s = document.querySelectorAll('li'); 

    let liArray = Array.from(li_s);
        
    liArray.forEach(item=> item.classList.remove('active'));

    liArray[id].className = "active";
}












 