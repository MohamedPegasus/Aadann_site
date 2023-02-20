import React  from 'react'
import './Possibility.css';
import Tilt from 'react-parallax-tilt';
import html from './pictures/html5.png'
import css from './pictures/css3.png'
import java from './pictures/javascript.png'
import react from './pictures/react.png'
import laravel from './pictures/laravel.png'
import php from './pictures/php.png'
import mysql from './pictures/icons8-mysql-logo-144.png'
import api from './pictures/icons8-rest-api-64.png'



const Possibility = () => {
 
  return (
    <div id='possibility' className='gpt3__possibility pading' >
      <h1 className='gradient__text'> our skills</h1>
              <div className='gpt3__possibility-image'>
                  <Tilt style={{transformStyle:'preserve-3d',perspective: '1000px '}}>
                    <div className="boxesg" >
                        <img src={html} />
                      <h1>html5</h1> 
                      <p>Without a domain and hosting, you cannot get new customers.
                        Get a professional domain and excellent hosting
                        for your website to get more customers and build long-term relationships.</p>
                    </div>
                  </Tilt>
                  <Tilt style={{transformStyle:'preserve-3d',perspective: '1000px '}}>
                    <div className="boxesg" >
                        <img src={css} />
                      <h1>css3</h1> 
                      <p>Without a domain and hosting, you cannot get new customers.
                        Get a professional domain and excellent hosting
                        for your website to get more customers and build long-term relationships.</p>
                    </div>
                  </Tilt>
                  <Tilt style={{transformStyle:'preserve-3d',perspective: '1000px '}}>
                    <div className="boxesg" >
                        <img src={java} />
                      <h1>javascript</h1> 
                      <p>Without a domain and hosting, you cannot get new customers.
                        Get a professional domain and excellent hosting
                        for your website to get more customers and build long-term relationships.</p>
                    </div>
                  </Tilt>
                  <Tilt style={{transformStyle:'preserve-3d',perspective: '1000px '}}>
                    <div className="boxesg" >
                        <img src={react} />
                      <h1>react</h1> 
                      <p>Without a domain and hosting, you cannot get new customers.
                        Get a professional domain and excellent hosting
                        for your website to get more customers and build long-term relationships.</p>
                    </div>
                  </Tilt>
                  <Tilt style={{transformStyle:'preserve-3d',perspective: '1000px '}}>
                    <div className="boxesg" >
                        <img src={php} />
                      <h1>php</h1> 
                      <p>Without a domain and hosting, you cannot get new customers.
                        Get a professional domain and excellent hosting
                        for your website to get more customers and build long-term relationships.</p>
                    </div>
                  </Tilt>
                  <Tilt style={{transformStyle:'preserve-3d',perspective: '1000px '}}>
                    <div className="boxesg" >
                        <img src={laravel} />
                      <h1>laravel</h1> 
                      <p>Without a domain and hosting, you cannot get new customers.
                        Get a professional domain and excellent hosting
                        for your website to get more customers and build long-term relationships.</p>
                    </div>
                  </Tilt>
                  <Tilt style={{transformStyle:'preserve-3d',perspective: '1000px '}}>
                    <div className="boxesg" >
                        <img src={mysql} />
                      <h1>my SQL</h1> 
                      <p>Without a domain and hosting, you cannot get new customers.
                        Get a professional domain and excellent hosting
                        for your website to get more customers and build long-term relationships.</p>
                    </div>
                  </Tilt>
                  <Tilt style={{transformStyle:'preserve-3d',perspective: '1000px '}}>
                    <div className="boxesg" >
                        <img src={api} />
                      <h1>API</h1> 
                      <p>Without a domain and hosting, you cannot get new customers.
                        Get a professional domain and excellent hosting
                        for your website to get more customers and build long-term relationships.</p>
                    </div>
                  </Tilt>
                  </div>
                  <div className='gpt3__possibility-content'>
                    
                      
                  </div>
                
      </div>
    
    
  );
}


export default Possibility;