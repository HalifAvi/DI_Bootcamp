import '../BasicElementStyle/TitleStyle.css';

const Title = (props) => {

    return(

        <>
            <h1 id={props.id} onClick={props.onClickEvent || null} className={props.pattern || props.typing || null}>{props.titleName}</h1>
        </>
    )
}

export default Title;