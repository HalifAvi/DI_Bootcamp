import '../basicElementStyle/ImageStyle.css';

const Image = (props) => {

    return(

        <>
            <img id={props.id} src={props.src} className={props.classN || null} dataSpeed={props.dataSpeed || null} />
        </>
    )
}

export default Image;