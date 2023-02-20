import React from 'react';
import './Landing.css';
import pepo from './picture/people.png';
import main from './picture/blog01.png';



const Landing = () => {

return (
    
    <div className='gpt3__header section__padding' id='home' iniitial="initial" animate="animate">
    <div className='gpt3__header-content' >
        <h1 className='gradient__text' >
            wellcome to aadann world
        </h1>
        <p>In Aadann, we are always working to provide our services with new and 
          innovative ideas, and we are always working on developing our skills
          to keep pace with customer requirements, and we are always looking forward to building 
          long-term relationships with customers and always gaining their trust.</p>
        
    </div>
    <div className='gpt3__header-image' initial={{x:200, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5, delay:0.8}}>
        <div className='intro'>
        <h1 className='gradient__text'>
            aadann 
        </h1>
        </div>
    </div> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff4b" fill-opacity="1" d="M0,64L16,80C32,96,64,128,96,165.3C128,203,160,245,192,240C224,235,256,181,288,144C320,107,352,85,384,90.7C416,96,448,128,480,117.3C512,107,544,53,576,69.3C608,85,640,171,672,218.7C704,267,736,277,768,245.3C800,213,832,139,864,90.7C896,43,928,21,960,48C992,75,1024,149,1056,197.3C1088,245,1120,267,1152,234.7C1184,203,1216,117,1248,101.3C1280,85,1312,139,1344,133.3C1376,128,1408,64,1424,32L1440,0L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path></svg>
    </div>
)
}

export default Landing;

