import React , {useState}from "react";
import './Header.css';
import {Nav,Navbar,Container,NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

function Header ()
{
    let user =JSON.parse(localStorage.getItem("user-info"))
    console.warn(user)
    const history= useNavigate();
    function logOut(){
        localStorage.clear();
        history("/register")
    }
    const [ toggleMenu, setToggleMenu] = useState(false);

    return(
        
        <div>
        
        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <div className='gpt3__navbar-links_logo'>
                    <h1 className='gradient__text'>aadann</h1>
                </div>

                <Nav className="me-auto Navbar_warapper">
                <div className='gpt3__navbar-sign'>
                
                <>
                <Link to = "/">Home</Link>
                <Link to = "/Services">Services</Link>
                <Link to = "/Blog">Blog</Link>
                <Link to = "/Connect">Connect Us</Link>
                <Link to = "/Register">Register</Link>
                <Link to = "/Login">Login</Link>
                </>
                </div>
                </Nav>
                <Nav className="me-auto Navbar_warapper">
                    <div className='gpt3__navbar-menu_container-links-sign'>
                        {toggleMenu
                        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                        }
                        {toggleMenu && (
                            <>
                            
                            <Link to = "/">Home</Link>
                            <Link to = "/Services">Services</Link>
                            <Link to = "/Blog">Blog</Link>
                            <Link to = "/Connect">Connect Us</Link>
                            <Link to = "/Register">Register</Link>
                            <Link to = "/Login">Login</Link>
                            
                            </>
                            
                            )}
                    </div>
                </Nav>
                {localStorage.getItem("user-info")?
                <Nav >
                    <NavDropdown  title={ user.name} >
                        <NavDropdown.Item onClick={logOut}>logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                :null}
            </Container>
        </Navbar>
        
        </div>
    )
}

export default Header;