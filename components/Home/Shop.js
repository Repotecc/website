
// import React from "react";
// Import Swiper React components
import Image from 'next/image'
// import {  useLayoutEffect  } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import styles from './slider.module.scss'



import swag1 from "../../public/assets/img/swag/Black face mask.jpg";
import swag2 from "../../public/assets/img/swag/Black hoodie 2.jpg";
import swag3 from "../../public/assets/img/swag/Black shirt.jpg";
import swag4 from "../../public/assets/img/swag/Grey shirt.jpg";
import swag5 from "../../public/assets/img/swag/White hoodie.jpg";
import swag6 from "../../public/assets/img/swag/White shirt.jpg";




// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function Shop() {
  
  
  
  return (
    <>

            <section id="workshops"  className="nav-clear-margin">
                <div  className="workshops">
                    <h1><b>Shop our Latest Collections</b></h1>
                    <br /> <br />
                    <a  href="https://paystack.shop/repotecc/" rel="noopener noreferrer" target="_blank">
                    <Swiper 
                        slidesPerView={1} 
                        autoplay={{ 
                            "delay": 5000,
                            "disableOnInteraction": false,

                        }} 
                        spaceBetween={10} 
                        pagination={{
                            "clickable": true,
                            "loop": true,

                        }} 
                        breakpoints={{
                            "640": {
                            "slidesPerView": 2,
                            "spaceBetween": 20
                        },
                            "768": {
                                "slidesPerView": 4,
                                "spaceBetween": 40
                            },
                            "1024": {
                                "slidesPerView": 5,
                                "spaceBetween": 50
                            }
                        }} 
                        className="mySwiper">
                        <SwiperSlide>
                            <Image className="img-fluid img-thumbnail" alt="" src={swag1} placeholder="blur"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className="img-fluid img-thumbnail" alt="" src={swag2} placeholder="blur"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className="img-fluid img-thumbnail" alt="" src={swag3} placeholder="blur"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className="img-fluid img-thumbnail" alt="" src={swag4} placeholder="blur"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className="img-fluid img-thumbnail" alt="" src={swag5} placeholder="blur"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className="img-fluid img-thumbnail" alt="" src={swag6}  placeholder="blur"/>
                        </SwiperSlide>
                        
                    </Swiper>
                    </a>
                    <br />
                    <br />
                  {/* <div  className="center">
                      <a rel="noopener noreferrer" target="_blank" href="https://paystack.shop/repotecc">
                          SHOP
                      </a>
                      
                  </div> */}
              </div>
          </section>
        
    
    </>
  )
}
