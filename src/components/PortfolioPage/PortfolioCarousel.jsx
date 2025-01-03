import React, { useEffect, useState } from "react";
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
import axios from "axios";
import Loading from "../../common/Loading/Loading";

const PortfolioCarousel = () => {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;
  const routeRoute1 = import.meta.env.VITE_API_Route1;
  const Request2 = import.meta.env.VITE_API_Request2;
  console.log('API URL:', apiUrl,routeRoute1,Request2);
  const ApiCall=async()=>{
    console.log('APi Call start')
     try{
    const response=await axios.get(`${apiUrl}${routeRoute1}${Request2}`)
    console.log("response", response.data)
       setData(response.data)
       setLoading(false)
     }catch(error)
     {
      console.log("error",error)
      setLoading(false)
     }
  }
  
  useEffect(()=>{
ApiCall()
  },[])
  useEffect(()=>{
    console.log("Set Data ", data)
  },[data])
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
    <>
    {loading?( <Loading/>    ):(
      <Swiper
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      modules={[Navigation, EffectCoverflow, Pagination, Autoplay]}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 0, // Stretch the slides for better visibility
        depth: 0, // Add depth to the slide stack
        modifier: 1,
        slideShadows: true,
      }}
      spaceBetween={20}
      slidesPerView={4} // Show 4 slides: 1 active + 1 on each side
      centeredSlides
      loop
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        1500: {
          slidesPerView: 4, // Show slides on both sides for larger screens
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3, // Show slides on both sides for larger screens
          spaceBetween: 5,
        },
        700: {
          slidesPerView: 2, // Single slide for smaller screens
          spaceBetween: 10,
        },
        300: {
          slidesPerView: 1, // Single slide for smaller screens
          spaceBetween: 10,
        },

      }}
    >
      
        {data.map((item, index) => (
          <SwiperSlide key={index} style={{ height: "auto" }}>
            <PortfolioCard
            item={item}
            />
          </SwiperSlide>
        ))}
        </Swiper>
    )}
    </>
  );
    };

export default PortfolioCarousel;
