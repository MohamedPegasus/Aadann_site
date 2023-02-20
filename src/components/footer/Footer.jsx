import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff4b" fill-opacity="1" d="M0,64L16,80C32,96,64,128,96,165.3C128,203,160,245,192,240C224,235,256,181,288,144C320,107,352,85,384,90.7C416,96,448,128,480,117.3C512,107,544,53,576,69.3C608,85,640,171,672,218.7C704,267,736,277,768,245.3C800,213,832,139,864,90.7C896,43,928,21,960,48C992,75,1024,149,1056,197.3C1088,245,1120,267,1152,234.7C1184,203,1216,117,1248,101.3C1280,85,1312,139,1344,133.3C1376,128,1408,64,1424,32L1440,0L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"></path></svg>
      <div className='gpt3__footer-heading'>
         <h1 className='gradient__text'> Www.Aadann.Com</h1>
      </div>
      <div className='gpt3__footer-btn'>
         <p className='gradient__text'> Access To Future</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
           <h1 className='gradient__text'>aadann</h1>
        </div>
        <div className='gpt3__footer-links-div'>
            <h4>links</h4>
            <p>social media</p>
            <p>contact</p>
            <p>counters</p>
        </div>
        <div className='gpt3__footer-links-div'>
            <h4>Company</h4>
            <p>Privcy & Conditions</p>
            <p>contact</p>
            <p>counters</p>
        </div>
        <div className='gpt3__footer-links-div'>
            <h4>Get in Touch</h4>
            <p>social media</p>
            <p>contact</p>
            <p>01060586855</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
            &copy;
            <p>www.aadann.com</p>
      </div>
    </div>
  )
}

export default Footer