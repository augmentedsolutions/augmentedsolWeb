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
  ];

  return (
    <div className="carousel-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={100}
        loop={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        modules={[EffectCoverflow, Navigation]}
        className="swiper"
        onSwiper={(swiper) => {
          swiper.slideToLoop(0, 0); // Start from the first slide in loop mode
        }}
      >
        {/* Carousel slides */}
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="swiper-slide">
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
