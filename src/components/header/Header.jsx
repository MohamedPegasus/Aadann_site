import React , {useState}from "react";
import './Header.css';
import {Nav,Navbar,Container,NavDropdown, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Tilt from 'react-parallax-tilt';
import Logo from './logo/Logo.png';


function Header ()
{
    let user =JSON.parse(localStorage.getItem("user-info"))
    console.warn(user)
    const history= useNavigate();
    function logOut(){
        localStorage.clear();
        history("/Aadann_site/")
    }
    function signin (){
        history("/Aadann_site/Login")
    }
    function signup (){
        history("/Aadann_site/Register")
    }
    
    const [ toggleMenu, setToggleMenu] = useState(false);
    return(
        <Navbar  collapseOnSelect expand="lg"  variant="dark" className="gpt3__navbar"
            >
            
            
                
                    <div className="gpt3__navbar-links" >
                        
                        <div href="/" className='gpt3__navbar-links_logo' >
                        <Tilt style={{transformStyle:'preserve-3d',perspective: '1000px '}}>
                            <img className="logo" src={Logo}/>
                            </Tilt>
                            </div>
                                    <div className="gpt3__navbar-links_container" >
                                        <Nav className="me-auto " >
                                        <p  >
                                        <Link to="/Aadann_site/">Home</Link>
                                        </p>
                                        <p >
                                        <Link to='/Aadann_site/Services'> Services</Link>
                                        </p>
                                        <p >
                                        < Link to='/Aadann_site/Contact'>Contact </Link>
                                        </p>
                                        <p >
                                        <Link to='/Aadann_site/Blog'> Blog</Link>
                                        </p>
                                        </Nav>
                                        </div>
                        </div>
                        <div className="gpt3__navbar-users">
                                        <Nav >
                                        {localStorage.getItem("user-info")?
                                        
                                        <NavDropdown  title={ user.name} >
                                            <NavDropdown.Item onClick={logOut}>logout</NavDropdown.Item>
                                        </NavDropdown>
                                        :null}
                                        </Nav>
                                        </div>
                        <div  className='gpt3__navbar-sign' iniitial="initial" animate="animate">
                            <Nav >
                            <Button variant="outline-warning" onClick={signin} >
                            sign in
                            </Button>
                            <Button variant="outline-warning" onClick={signup} >
                            sign up
                            </Button>
                            </Nav>
                        </div>
                        
                        <div className='gpt3__navbar-menu'>
                            {toggleMenu
                            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                            }
                            {toggleMenu && (
                                <div className='gpt3__navbar-menu_container scale-up-center'>
                                        <div className='gpt3__navbar-menu_container-links'>
                                        <Nav className="me-auto">
                                        <p  >
                                        <Link to="/Aadann_site/">Home</Link>
                                        </p>
                                        <p >
                                        <Link to='/Aadann_site/Services'> Services</Link>
                                        </p>
                                        <p >
                                        < Link to='/Aadann_site/Contact'>Contact </Link>
                                        </p>
                                        <p >
                                        <Link to='/Aadann_site/Blog'> Blog</Link>
                                        </p>
                                        </Nav>
                                        <div className="gpt3__navbar-users">
                                        <Nav className="me-auto">
                                        {localStorage.getItem("user-info")?
                                        
                                        <NavDropdown  title={ user.name} >
                                            <NavDropdown.Item onClick={logOut}>logout</NavDropdown.Item>
                                        </NavDropdown>
                                        
                                        :null}
                                        </Nav>
                                        </div>
                                        <div className='gpt3__navbar-menu_container-links-sign'>
                                        <Nav className="me-auto">
                                        <Button variant="outline-warning" onClick={signin}>
                                        sign in
                                        </Button>
                                        <br></br>
                                        <Button variant="outline-warning" onClick={signup}>
                                        sign up
                                        </Button>
                                        </Nav>
                                        </div>
                                    </div>
                                </div>
                                )}
                        </div>
                    
                    
                
        </Navbar>
        
        
    )
}

export default Header;