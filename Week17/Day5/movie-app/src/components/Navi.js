import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';


const Navi = () => {

    return(

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Link to={'/'} style={{color: "white", fontSize: "40px", textDecoration:"none"}}>MovieSeriesInfo</Link>
            <Nav>
                <i style={{color: "#f5de50", marginRight: "20px"}} class="fab fa-imdb fa-5x" id="imdb-logo"></i>
                <i style={{color: "#00d8ff"}} class="fab fa-react fa-5x" id="react-logo"></i>
            </Nav>
        </Container>
        </Navbar>
    )
}


export default Navi;
