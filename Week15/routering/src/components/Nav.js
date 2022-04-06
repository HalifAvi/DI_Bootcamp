import { Link } from "react-router-dom";

const Nav = (props) => {

    return(
        <>
            <Link to='/'>Home</Link> |
            <Link to='/About'>About</Link> |
            <Link to='/Contact'>Contact</Link> 
        </>
    )
}

export default Nav;