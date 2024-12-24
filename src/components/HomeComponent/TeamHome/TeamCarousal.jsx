import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import ServiceImage1 from "../../../assets/Home/AgmentServices1.png";
import ServiceImage2 from "../../../assets/Home/AgmentServices2.png";
import ServiceImage3 from "../../../assets/Home/AgmentServices3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./TeamCarousal.css";
import TeamCard from "./TeamCard";

const TeamCarousal = () => {
  return (
    <Swiper
      modules={[Navigation, EffectCoverflow, Pagination]}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: true,
      }}
      spaceBetween={-150} // Negative space between to allow overlap
      slidesPerView={3}   // Show 3 slides at once
      centeredSlides
      navigation
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: -100,  // Adjust for tablets
        },
        576: {
          slidesPerView: 1,
          spaceBetween: -50,  // Adjust for mobile
        },
      }}
    >
      {[ServiceImage1, ServiceImage2, ServiceImage3].map((image, index) => (
        <SwiperSlide key={index} style={{ height: "auto" }}>
          <TeamCard />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamCarousal;
