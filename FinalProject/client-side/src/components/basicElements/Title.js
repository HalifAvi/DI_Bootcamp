import '../basicElementStyle/TitleStyle.css';

const Title = (props) => {

    return(

        <>
            <h1 id={props.id} className={"pattern-checks-sm bg-mint white text-pattern"}>{props.titleName}</h1>
        </>
    )
}

export default Title;