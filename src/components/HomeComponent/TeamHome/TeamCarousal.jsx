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
  const images = [ServiceImage1, ServiceImage2, ServiceImage3, ServiceImage3];

  return (
    <div className="row">

    <Swiper
    modules={[Navigation, EffectCoverflow, Pagination]}
    effect="coverflow"
    loop={true}
    pagination={{
      clickable: true,
      renderBullet: (index, className) =>
        `<span class="${className} custom-pagination-bullet"></span>`,
    }}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 0,
      slideShadows: false,
    }}
    spaceBetween={-130} // No space between slides
    slidesPerView={3}
    centeredSlides
    breakpoints={{
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 1,
      },
    }}
    style={{width:'100%'}}
  >
    {images.map((image, index) => (
      <SwiperSlide key={index} className="custom-slide">
        <TeamCard image={image} />
      </SwiperSlide>
    ))}
  </Swiper>
    </div>
  
  );
};

export default TeamCarousal;
