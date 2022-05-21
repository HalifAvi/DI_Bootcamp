import '../basicElementStyle/ButtonStyle.css';

const Button = (props) => {

    return(

        <>
            <button id={props.id}>{props.buttonName}</button>
        </>
    )
}

export default Button;