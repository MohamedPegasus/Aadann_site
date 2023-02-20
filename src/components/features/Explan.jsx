import React, { useRef, useState, useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import './Boxes.css';
import webdesign from "./pictures/web.jpg"
import webdevelopment from "./pictures/web development.jpg"
import ecommerce from "./pictures/ecommerce.jpg"
import woocommerce from "./pictures/woocommerce.jpg"
import wordpress from "./pictures/wordpress.jpg"
import hosting from "./pictures/hosting.jpg"
import email from "./pictures/email.jpg"
import graphic from "./pictures/graphic.jpg"
import Tilt from 'react-parallax-tilt';

const Explan = ()=>{

  return(
    <div className="grids">
    <Tilt>
        <div className="boxes" >
              <img src={webdesign} />
            <div className="contantbox">
              <h1>web design</h1>
              <p>You are always looking for a tool that helps you meet the growing and crowded needs of your customers, get new customers and increase your success. 
              You can get your responsive design accross all devices(desktop - labtop - tab - mobile) and complete website to suit your needs and requirements of your company and help you respond quickly to your customers and achieve more success.
              Let's be a success partner</p>
            </div>
        </div>
        </Tilt>
        <Tilt>
        <div className="boxes" > 
              <img src={ecommerce} />
            <div className="contantbox">
          <h1>ecommerce web site</h1>
          <p>You have an innovative business idea and out of the box, do not miss the opportunity.
            Now you can design a complete e-commerce website 
            and It works to meet your needs of following up
            the movement of sales, purchases, inventory, revenues, expenses, net profits, 
            and how to display your products.</p>
            </div>
        </div>
        </Tilt>
        <Tilt>
        <div className="boxes" >
              <img src={wordpress}/>
            <div className="contantbox">
          <h1>wordpress design</h1>
          <p>Get a very perfect design using WordPress that meets all your needs and
            the requirements of your customers</p>
            </div>
        </div>
        </Tilt>
        <Tilt>
        <div className="boxes" >
              <img src={email}/>
            <div className="contantbox">
          <h1>Professional email</h1>
          <p>Get your professional email to build bridges of trust between you and your customers</p>
          <p>Because customers trust more in reliable source emails</p>
            </div>
        </div>
        </Tilt>
        <Tilt style={{transformStyle:'preserve-3d',perspective: '1000px '}}>
        <div className="boxesg" >
          <img src={webdevelopment} />
          <h1>web devolpment</h1>
          <p>You own a website, but it is old and you are looking forward to modifying this old website to match the growth of your company, your future ambitions and the requirements of your customers. 
            Now you can develop your old website and add a lot to it to become interactive, responsive and dainamic</p>
        </div>
        </Tilt>
        
        <Tilt style={{transformStyle:'preserve-3d',perspective: '1000px '}}>
        <div className="boxesg" >
              <img src={woocommerce} />
          <h1>woocommerce website</h1>
          <p>Are you looking for an online store that is ready to work and works to meet your needs
            in terms of following up sales 
            and how to display your products? All you have to do is choose 
            the design of your online store with woocommerce</p>
            
        </div>
        </Tilt>
        
        <Tilt style={{transformStyle:'preserve-3d',perspective: '1000px '}}>
        <div className="boxesg" >
          <img src={hosting} />
        <h1>domain and hosting</h1> 
        <p>Without a domain and hosting, you cannot get new customers.
          Get a professional domain and excellent hosting
          for your website to get more customers and build long-term relationships.</p>
            
        </div>
        </Tilt>
        
        <Tilt style={{transformStyle:'preserve-3d',perspective: '1000px '}}>
        <div className="boxesg" >
          <img src={graphic} />
          <h1>graphic design</h1>
          <p>This service is not available at the moment, but we are working hard to
            provide it as soon as possible
            You can follow the Blog page to know the latest news
          </p>
        </div>
        </Tilt>
        </div>
    
)
};

export default Explan;