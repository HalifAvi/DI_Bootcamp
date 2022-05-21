import '../basicElementStyle/ButtonStyle.css';

const Button = (props) => {

    return(

        <>
            <button id={process.env.REACT_APP_LOG_IN_BUTTON}>{props.buttonName}</button>
        </>
    )
}

export default Button;