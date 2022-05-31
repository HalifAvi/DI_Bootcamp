import '../BasicElementStyle/ImageStyle.css';

const Image = (props) => {

    return(

        <>
            <img id={props.id} src={props.src}/>
        </>
    )
}

export default Image;