import '../BasicElementStyle/ImageStyle.css';

const Image = (props) => {

    return(

        <>
            <img onClick={null || props.onClickEvent}  id={props.id} src={props.src} className={null || props.classN}/>
        </>
    )
}

export default Image;