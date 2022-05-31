import '../BasicElementStyle/TitleStyle.css';

const Title = (props) => {

    return(

        <>
            <h1 id={props.logoPart || props.id} className={props.pattern || null}>{props.titleName}</h1>
        </>
    )
}

export default Title;