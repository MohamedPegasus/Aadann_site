import React from "react";
import Navbar from"../Header"
import Footer from '../containers/footer/Footer'
import Header from '../containers/header/Header'
import Possibility from '../containers/possibility/Possibility'

function Blog ()
{
    return(
        <div>
            <Navbar />
            <Header />
            <Possibility />
            <Footer />
        </div>
    )
}

export default Blog;