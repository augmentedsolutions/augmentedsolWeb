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
      <div className="row MarginBottomText1">
        <div className="col-12 text-center">
          <h1 className="heading_primary">Augmented Clients</h1>
        </div>
      </div>
      <div className="row">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          loop={true} // Enable looping
          centeredSlides={true}
          slidesPerView={3} // Number of slides visible
          autoplay={{
            delay: 3000, // Delay between each slide change (3 seconds)
            disableOnInteraction: false, // Keep autoplay active even after user interaction
            pauseOnMouseEnter: true, // Pause autoplay when mouse hovers over the swiper
          }}
          speed={1500} // Smooth transition with 1.5 seconds speed
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 1,
            },
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <SwiperSlide key={index}>
              <ClientCard Img={client} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ClientCardOne;
