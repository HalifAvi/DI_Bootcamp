import '../BasicElementStyle/PopUpMessage.css';


const PopUpMessage = (props) => {

    return(

        <>
            <h1 id={props.id} onClick={props.onClickEvent || null} className={props.pattern || props.typing || props.classN || null}>{props.titleName}</h1>
        </>
    )
}

export default PopUpMessage;