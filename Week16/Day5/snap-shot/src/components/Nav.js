import { Link } from "react-router-dom";
import './Nav.css';



const Nav = () => {

    return(
        <div className="bttsSection">
            <Link to='/mountain' className="btt">Mountain</Link>
            <Link to='/beach' className="btt">Beach</Link>
            <Link to='/bird' className="btt">Bird</Link>
            <Link to='/food' className="btt">Food</Link>
        </div>
    )
}

export default Nav;