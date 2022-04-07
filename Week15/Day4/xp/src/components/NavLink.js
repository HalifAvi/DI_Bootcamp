import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';


const NavBar = (props) => {

    return(
        <>
            <Nav variant="pills" defaultActiveKey="/">
                <Nav.Item>
                    <NavLink className="nav-link" to='/'>Home</NavLink> 
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="nav-link" to='/profile'>Profile</NavLink> 
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="nav-link" to='/shop'>Shop</NavLink> 
                </Nav.Item>
            </Nav>
        </>
    )
}

export default NavBar;








