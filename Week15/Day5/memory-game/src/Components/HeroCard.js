import Card from 'react-bootstrap/Card';
import './style.css'

function HeroCard(props){

    return(

        <>
            <Card className="card animate" style={{ display: "inline-block"}}>
            <Card.Img id={props.id} style={{ width: '100%', height: '20vw', objectFit: 'contain'}} src={props.image}  onClick={()=>props.fun(props.id, props.clicked)} />
            <Card.Body>
                <Card.Text>
                    <h6>Name: {props.name}</h6>
                    <h6>Occupation: {props.occupation}</h6>
                </Card.Text>
            </Card.Body>
            </Card>
        </>
    )
}


export default HeroCard;