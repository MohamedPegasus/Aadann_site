import React from "react";
import Features from '../containers/features/Features';
import Explan from '../containers/features/Explan';
import Navbar from"../Header"
import Footer from '../containers/footer/Footer'
import Header from '../containers/header/Header'


function Services ()
{
    return(
        <div>
        
        <Header /> 
            <h1>Services Page</h1>
            <Features />
            <br></br>
            <br></br>
            <br></br>
            <Explan />
            <Footer />
        </div>
    )
}

export default Services;