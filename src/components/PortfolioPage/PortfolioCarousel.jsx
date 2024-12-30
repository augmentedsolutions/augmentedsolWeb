import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import './PortfolioCarousel.css';
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
      img: ServicesImage2,
      text: "Snapchat Filters",
      options: [
        { option: "Augmented Reality" },
        { option: "ARkit" },
        { option: "ARCore" },
      ],
    }
    ,
    {
      img: ServicesImage2,
      text: "Snapchat Filters",
      options: [
        { option: "Augmented Reality" },
        { option: "ARkit" },
        { option: "ARCore" },
      ],
    }
    ,
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

  ];

  return (
    <Swiper
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      modules={[Navigation, EffectCoverflow, Pagination, Autoplay]}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 0, // Stretch the slides for better visibility
        depth: 50, // Add depth to the slide stack
        modifier: 1,
        slideShadows: true,
      }}
      spaceBetween={5}
      slidesPerView={4} // Show 4 slides: 1 active + 1 on each side
      centeredSlides
      loop
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        1200: {
          slidesPerView: 4, // Show slides on both sides for larger screens
          spaceBetween: 5,
        },
        576: {
          slidesPerView: 2, // Single slide for smaller screens
          spaceBetween: 10,
        },
      }}
    >
      {portfolioData.map((item, index) => (
        <SwiperSlide key={index} style={{ height: "auto" }}>
          <PortfolioCard
            img={item.img}
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
