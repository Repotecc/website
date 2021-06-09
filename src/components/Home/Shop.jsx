
// import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";


import swag1 from "../../../src/assets/img/swag/Black face mask.JPG";
import swag2 from "../../../src/assets/img/swag/Black hoodie 2.JPG";
import swag3 from "../../../src/assets/img/swag/Black shirt.JPG";
import swag4 from "../../../src/assets/img/swag/Grey shirt.JPG";
import swag5 from "../../../src/assets/img/swag/White hoodie.JPG";
import swag6 from "../../../src/assets/img/swag/White shirt.JPG";



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
                 
                    <Swiper 
                        slidesPerView={1} 
                        autoplay={{ 
                            "delay": 2500,
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
                            <img className="img-fluid img-thumbnail" alt="" src={swag1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img-fluid img-thumbnail" alt="" src={swag2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img-fluid img-thumbnail" alt="" src={swag3} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img-fluid img-thumbnail" alt="" src={swag4} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img-fluid img-thumbnail" alt="" src={swag5} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img-fluid img-thumbnail" alt="" src={swag6} />
                        </SwiperSlide>
                        
                    </Swiper>
                    <br />
                    <br />
                  <div  className="center">
                      <a  href="https://paystack.shop/repotecc">
                          SHOP
                      </a>
                      
                  </div>
              </div>
          </section>
        
    
    </>
  )
}
