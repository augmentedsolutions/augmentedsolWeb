import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import './ClientCardOne.css';
import "../../../index.css";
import ClientCard from "./ClientCard.jsx";
import ClientIMg1 from "../../../assets/Home/AugmentedClients1.png";
import ClientIMg2 from "../../../assets/Home/AugmentedClients2.png";
import ClientIMg3 from "../../../assets/Home/AugmentedClients3.png";
import ClientIMg4 from "../../../assets/Home/AugmentedClients4.png";
import ClientIMg5 from "../../../assets/Home/AugmentedClients5.png";

const ClientCardOne = () => {
  const clients = [ClientIMg1, ClientIMg2, ClientIMg3, ClientIMg4, ClientIMg5];

  return (
    <>
      <div className="row my-5">
        <div className="col-12 text-center">
          <h1 className="text-white">Augmented Clients</h1>
        </div>
      </div>
      <div className="row my-5 ">
        <Swiper
          allowTouchMove={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false, 
            pauseOnMouseEnter: false,
          }}
          className='swiper-transition' //add CSS class
          direction='horizontal'
          loop
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={16}
          speed={2000}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween:40
            },
            991: {
              slidesPerView: 2,
              spaceBetween:40
            },
            300:{
              slidesPerView: 1,
              spaceBetween:40
            }
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <SwiperSlide key={index} >
              <ClientCard Img={client} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ClientCardOne;
