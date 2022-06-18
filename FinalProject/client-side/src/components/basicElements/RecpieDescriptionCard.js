import '../BasicElementStyle/RecpieDescriptionCard.css';

const RecpieDescriptionCard = (props) => {


    const handleClick = () => {

        var modal = document.querySelector(".modal");

        modal.setAttribute("closing", "");

        modal.addEventListener(
         
            "animationend",

            () => {

                modal.removeAttribute("closing");
                modal.close();

            },

            { once: true }
        );
    }

    return(

        <dialog className={"modal"}>
            <h2>An interesting title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum esse nisi, laboriosam illum temporibus ipsam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quo.</p>
            <button className={"button close-button"} onClick={handleClick}>close modal</button>
        </dialog>
    )
}

export default RecpieDescriptionCard;

