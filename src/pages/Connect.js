import React from "react";
import Navbar from"../Header"
import Footer from '../containers/footer/Footer'
import Header from '../containers/header/Header'
import Brand from "../components/brand/Brand"

function Connect ()
{
    return(
        <div>
            <Navbar />
            <Header />
            <Brand />
            <Footer />
        </div>
    )
}

export default Connect;