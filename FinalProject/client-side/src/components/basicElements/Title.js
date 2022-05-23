import '../basicElementStyle/TitleStyle.css';

const Title = (props) => {

    return(

        <>
            <h1 id={props.id} className={props.classN || null} dataSpeed={props.dataSpeed || null}>{props.titleName}</h1>
        </>
    )
}

export default Title;