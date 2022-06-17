import { useEffect } from 'react';
import '../BasicElementStyle/RecpieDescriptionCard.css';

const RecpieDescriptionCard = (props) => {

    useEffect(()=> {

        const modal = document.querySelector("#modal");
        const openModal = document.querySelector(".open-button");
        const closeModal = document.querySelector(".close-button");

        openModal.addEventListener("click", () => {
            
            modal.showModal();
        });

        closeModal.addEventListener("click", () => {
        
            modal.setAttribute("closing", "");

        modal.addEventListener(
            
            "animationend",
            () => {
            modal.removeAttribute("closing");
            modal.close();
            },
            { once: true }
        );
        });

    })

    return(

        <dialog class="modal" id="modal">
            <h2>An interesting title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum esse nisi, laboriosam illum temporibus ipsam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quo.</p>
            <button class="button close-button">close modal</button>
        </dialog>
    )
}

export default RecpieDescriptionCard;