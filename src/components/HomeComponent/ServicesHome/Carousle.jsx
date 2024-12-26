import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import ServiceCard from "./ServiceCard";
import "./Carousel.css";

// Import images
import AgmentServices1 from "../../../assets/Home/AgmentServices1.png";
import AgmentServices2 from "../../../assets/Home/AgmentServices2.png";
import AgmentServices3 from "../../../assets/Home/AgmentServices3.png";
import Serviceprvious from "../../../assets/Home/Service prvious.png";
import ServiceNext from "../../../assets/Home/ServiceNext.png";

const Carousel = () => {
  const slides = [
    { id: 1, image: AgmentServices1 },
    { id: 2, image: AgmentServices2 },
    { id: 3, image: AgmentServices3 },
    { id: 4, image: AgmentServices3 },
    { id: 5, image: AgmentServices3 },
    { id: 3, image: AgmentServices3 },
    { id: 4, image: AgmentServices3 },
    { id: 5, image: AgmentServices3 },
  ];

  return (
    <div className="carousel-container ">
      <Swiper
      className='swiper-slide-service-carousel'
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={0}
        loop={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth:400,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: -50,
          },
        }}
        modules={[EffectCoverflow, Navigation]}
        
        onSwiper={(swiper) => {
          swiper.slideToLoop(0, 0); // Start from the first slide in loop mode
        }}
      >
        {/* Carousel slides */}
        {slides.map((slide) => (
          <SwiperSlide style={{display:'flex',justifyContent:'center',alignItems:'center'}} key={slide.id} className="swiper-slide">
            <ServiceCard image={slide.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom navigation buttons */}
      <div className="custom-prev">
        <img src={Serviceprvious} alt="Previous" />
      </div>
      <div className="custom-next">
        <img src={ServiceNext} alt="Next" />
      </div>
    </div>
  );
};

export default Carousel;
