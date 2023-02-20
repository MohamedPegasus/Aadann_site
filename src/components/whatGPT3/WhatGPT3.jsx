import React from 'react'
import './WhatGPT3.css'
import Main from './assets/pexels-xxss-is-back-777001 (1).jpg'
import ma from './assets/lee-campbell-DtDlVpy-vvQ-unsplash.jpg'
import mk from './assets/design.jpg'
import ml from './assets/web.jpg'
import webdesign from "../features/pictures/web.jpg"
import sdesign from "../features/pictures/web design (8).jpg"
import ddesign from "../features/pictures/pexels-lukas-574070.jpg"




const WhatGPT3 = () => {
        
    return (
      <div className='gpt3__what'>
        <div className='gpt3__what-main'>
          <h1>What makes you choose Aadann to implement your idea?</h1>
          <div className='gpt3__what-section'>
            <div className='gpt3__what-section-feat'>
              <img src={webdesign} alt=''/>
              <h1>responsive design</h1>
              <p> responsive design accross all devices(desktop - labtop - tab - mobile)</p>
              </div>
            <div className='gpt3__what-section-feat'>
              <img src={ddesign} alt=''/>
              <h1>Specialization design</h1>
              <p>We always help you to get a design that fits your specialization with all specialization requirements</p>
              </div>
            <div className='gpt3__what-section-feat'>
              <img src={sdesign} alt=''/>
              <h1>Dynamic design</h1>
              <p> We work to provide a dynamic and interactive design to meet your needs and the requirements of your field of work</p>
              </div>
            
        </div>
        </div>
        <div className='gpt3__what-section-service'>
            <h1>How to get service from Aadann?</h1>
            <h2>1</h2>
            <p>You can go to the services page</p>
            <h2>2</h2>
            <p>review the services, and select the service you want </p>
            <h2>3</h2>
            <p>do not hesitate
              to contact us via the contact page and send a message to specify service details and plan of prices.</p>
        </div>

        
      </div>
    )
    }


export default WhatGPT3 ;