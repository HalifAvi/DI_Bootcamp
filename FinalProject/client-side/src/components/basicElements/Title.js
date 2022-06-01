import '../BasicElementStyle/TitleStyle.css';

const Title = (props) => {

    return(

        <>
            <h1 id={props.id} className={props.pattern || props.typing || null}>{props.titleName}</h1>
        </>
    )
}

export default Title;