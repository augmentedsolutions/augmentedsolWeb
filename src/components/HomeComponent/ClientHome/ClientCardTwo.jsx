import React from "react";
import "../../../index.css";
import Client1 from "../../../assets/Home/Client1.png";
import Client2 from "../../../assets/Home/Client2.png";
import Client3 from "../../../assets/Home/Client3.png";
import ClientTwoCard from "./ClientTwoCard";
import Serviceprvious from "../../../assets/Home/Service prvious.png";
import ServiceNext from "../../../assets/Home/ServiceNext.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/autoplay'; // Import autoplay styles
import { Autoplay, Navigation } from "swiper/modules";



const ClientCardTwo = () => {
  return (
    <>
      <div
        className="row border_radius_two MarginBottomText1"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-auto">
          <h1 className="heading_primary">What our clients say</h1>
        </div>
      </div>
      <div
        className="row MarginBottomText1"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-auto">
          <p className="text_primary">
            See what our customer say about us. It really matters for us. How
            good or bad we will make it for evaluation to make EhyalLive better.
          </p>
        </div>
      </div>
      
      {/* Swiper Carousel */}
      <div className="row" style={{ display: "flex", justifyContent: "center" }}>
        <div className="col-11">
          <Swiper
            modules={[Navigation, Autoplay]} // Enable Navigation and Autoplay modules
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            style={{display:'flex',justifyContent:'center',alignItems:'center'}}
            spaceBetween={0} // Spacing between slides
            slidesPerView={1} // Number of slides visible at once
            loop={true} // Loop the slides
            autoplay={{ delay: 2500 }} // Automatically move to next slide every 3 seconds
            breakpoints={{
              768: { slidesPerView: 1 }, // Show 1 slide on tablet and larger screens
              1024: { slidesPerView: 3 }, // Show 2 slides on desktop and larger screens
            }}
            className="mySwiper"
          >
            <SwiperSlide >
              <ClientTwoCard
                Img={Client1}
                comment='“I know in real-time where the money is spent, and I don’t have to lend out the company’s credit card anymore. What a relief!"'
                name="Cody Fisher"
                email="deanna.curtis@example.com"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ClientTwoCard
                Img={Client2}
                comment="“VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap”"
                name="Kathryn Murphy"
                email="alma.lawson@example.com"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ClientTwoCard
                Img={Client3}
                comment="“I can actually see the improvement in the graphics, not having the external sensors is a big plus”"
                name="Eleanor Pena"
                email="michelle.rivera@example.com"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Custom Navigation
      <div className="swiper-button-prev" style={{ position: "absolute", bottom: '-550px', left: "10px", zIndex: 10 }}>
        <img src={Serviceprvious} alt="Previous" />
      </div>
      <div className="swiper-button-next" style={{ position: "absolute", bottom: "0%", right: "10px", zIndex: 10 }}>
        <img src={ServiceNext} alt="Next" />
      </div> */}
    </>
  );
};

export default ClientCardTwo;
