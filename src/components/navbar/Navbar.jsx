import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css';
import {  Link } from "react-router-dom";







const Menu = () => (
    <>
            <p>
            <Link to='/'> Home</Link>
            </p>
            <p>
            <Link to='/Services'> Services</Link>
            </p>
            <p>
            <Link to='/Connect'>Conncet Us</Link>
            </p>
            <p>
            <Link to='/Blog'> Blog</Link>
            </p>
    </>
)


const Navbar = () => {
const [ toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    <h1 className='gradient__text'>aadann</h1>
                </div>
                <div className='gpt3__navbar-links_container'>
                <Menu />
                </div>
            </div>
            
            
                <div className='gpt3__navbar-sign'>
                
                <button type='button' >
                <Link to="/Login">Sign In</Link>
                </button>
                <button type='button' >
                <Link to="/Register">Sign up</Link>
                </button>
            </div>
            
            <div className='gpt3__navbar-menu'>
                    {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className='gpt3__navbar-menu_container scale-up-center'>
                            <div className='gpt3__navbar-menu_container-links'>
                                    <Menu />
                                    <div className='gpt3__navbar-menu_container-links-sign'>
                                        
                                        <button type='button' >
                                        <Link to="/Login" >Sign In</Link>
                                        </button>
                                        <button type='button' >
                                        <Link to="/Register">Sign up</Link>
                                        </button>
                                    </div>
                            </div>
                        </div>
                    )}    
                </div>
            
        </div>
    )
}


export default Navbar;