import React, { useRef, useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import "./Features.css";
import webdesign from "./pictures/web.jpg"
import webdevelopment from "./pictures/web development.jpg"
import ecommerce from "./pictures/ecommerce.jpg"
import woocommerce from "./pictures/woocommerce.jpg"
import wordpress from "./pictures/wordpress.jpg"
import hosting from "./pictures/hosting.jpg"
import email from "./pictures/email.jpg"
import graphic from "./pictures/graphic.jpg"






const Features = () => {
    const [show, setShow] = useState(false);
  return (
      <div className="gpt3__features">
          <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img src={webdesign} />
          <h1>web design</h1>
        </SwiperSlide>
        <SwiperSlide >
          <img src={webdevelopment} />
          <h1>web devolpment</h1>
          
        </SwiperSlide>
        <SwiperSlide >
          <img src={ecommerce} />
          <h1>e-commerce website</h1>
            
        </SwiperSlide>
        <SwiperSlide >
          <img src={woocommerce} />
          <h1>woocommerce website</h1>
          
        </SwiperSlide>
        <SwiperSlide >
          <img src={wordpress} />
          <h1>wordpress design</h1>
          
        </SwiperSlide>
        <SwiperSlide >
          <img src={hosting} />
          <h1>domain and hosting</h1>
          
        </SwiperSlide>
        <SwiperSlide >
          <img src={email} />
          <h1>Professional email</h1>
          
        </SwiperSlide>
        <SwiperSlide >
          <img src={graphic} />
          <h1>graphic design</h1>
          
        </SwiperSlide>
      </Swiper>
    </>
    <div >
    <button onClick={() => setShow(!show)}> 
          click here
          </button>
          {show && <Item />}
          </div>
      </div>
  
  )
};


const Item = () => {
  
    return(
        <div className="explan" style={{marginTop:'2%',marginLeft:'auto',marginRight:'auto', width:'75%', height:'auto', display:'flex',alignContent: 'center', justifyContent:'center',color:'#000', fontSize:'17px', borderRadius:'10px', background:'#eee'}} >
          <p>Please go below to know the service details and for more details do not hesitate and contact us through the contact page </p>
        </div>
    );
};


export default Features;