import '../basicElementStyle/TitleStyle.css';

const Title = (props) => {

    return(

        <>
            <h1 id={props.id}>{props.titleName}</h1>
        </>
    )
}

export default Title;