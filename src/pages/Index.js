import React from "react";

import Footer from '../containers/footer/Footer'
import Header from '../containers/header/Header'
import WhatGPT3 from '../containers/whatGPT3/WhatGPT3'
const Home = () =>{
    return(
        <div>
            
            <Header />
            <WhatGPT3 />
            <Footer />
            
        </div>
    )
}

export default Home;