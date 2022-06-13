import '../BasicElementStyle/PopUpMessage.css';
import Title from "../BasicElements/Title"


const PopUpMessage = ({message, closePopUp, popUpAnswer}) => {

    const handlePopUp = (setPopUpValue, setWantToAddValue) => {
        closePopUp(setPopUpValue);
        popUpAnswer(setWantToAddValue);
    }

    return(
        <section className={"popUpMessage-section"}>
            <div className={"popUpMessage-container"}>
                <Title id={"popUpMessage-title"} titleName={message}/> 
                <div>
                    <label>
                        <input type={"radio"} name={"question"}/>
                        <i onClick={()=>handlePopUp(false, true)} class="fa fa-check" aria-hidden="true"></i>
                    </label>
                    <label>
                        <input type={"radio"} name={"question"}/>
                        <i onClick={()=>handlePopUp(false, false)} class="fa fa-times" aria-hidden="false"></i>
                    </label>
                </div>
            </div>
        </section>
    )
}

export default PopUpMessage;




