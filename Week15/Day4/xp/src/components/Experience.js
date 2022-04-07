import './Style.css';

const Experience = (props) => {

    // console.log(props)

    return(
         <div>
            <img className={'experienceDetail'} src={props.src} alt={`${props.key}`} />  
            <a className={'experienceDetail'} href={props.url}>{props.companyName}</a>
            <h6 style={{  fontWeight: "bold" }} className={'experienceDetail'}>{props.title}</h6>
            <h6 className={'experienceDetail'}>{props.startDate + props.location}</h6>
            <h6 className={'experienceDetail'}>{props.description}</h6>
        </div>
    )
}

export default Experience;