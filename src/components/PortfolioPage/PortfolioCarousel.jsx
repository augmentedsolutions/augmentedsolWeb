import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import ServicesImage1 from "../../assets/Protfolio/ServicesImage1.png";
import ServicesImage2 from "../../assets/Protfolio/ServicesImage2.png";
import ServicesImage3 from "../../assets/Protfolio/ServicesImage3.png";
import ServicesImage4 from "../../assets/Protfolio/ServicesImage4.png";
import ServicesImage5 from "../../assets/Protfolio/ServicesImage5.png";
import PortfolioCard from "../../components/PortfolioPage/PortfolioCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const PortfolioCarousel = () => {
  const portfolioData = [
    {
      img: ServicesImage1,
      text: "Instagram and Facebook Filters",
      options: [
        { option: "Augmented Reality" },
        { option: "ARkit" },
        { option: "ARCore" },
      ],
    },
    {
      img: ServicesImage2,
      text: "Snapchat Filters",
      options: [
        { option: "Augmented Reality" },
        { option: "ARkit" },
        { option: "ARCore" },
      ],
    },
    {
      img: ServicesImage3,
      text: "Interactive 3D Models",
      options: [
        { option: "Augmented Reality" },
        { option: "ARkit" },
        { option: "ARCore" },
      ],
    },
    {
      img: ServicesImage4,
      text: "E-commerce AR Filters",
      options: [
        { option: "Augmented Reality" },
        { option: "ARkit" },
        { option: "ARCore" },
      ],
    },
    {
      img: ServicesImage5,
      text: "Custom AR Experiences",
      options: [
        { option: "Augmented Reality" },
        { option: "ARkit" },
        { option: "ARCore" },
      ],
    },
  ];

  return (
    <Swiper
    style={{display:'flex',justifyContent:'center',alignItems:'center'}}
    modules={[Navigation, EffectCoverflow, Pagination]}
    effect="coverflow"
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows: true,
    }}
    spaceBetween={20} // Consistent spacing
    slidesPerView={3}
    centeredSlides
    navigation
    // pagination={{ clickable: true }}
    breakpoints={{
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    }}
  >
    {portfolioData.map((item, index) => (
      <SwiperSlide key={index} style={{ height: "auto" }}>
        <PortfolioCard
          img={item.img || "path/to/fallback-image.png"}
          text={item.text}
          options={item.options}
          aria-label={`Portfolio card showcasing ${item.text}`}
          loading="lazy"
        />
      </SwiperSlide>
    ))}
  </Swiper>
  
  );
};

export default PortfolioCarousel;
