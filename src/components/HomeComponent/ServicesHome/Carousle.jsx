import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,EffectCoverflow } from 'swiper/modules';
import ServiceCard from "./ServiceCard";
import ServiceIMage1 from '../../../assets/Home/AgmentServices1.png';
import ServiceIMage2 from '../../../assets/Home/AgmentServices2.png';
import ServiceIMage3 from '../../../assets/Home/AgmentServices3.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css'; // Custom styles for scaling effect

const Carousel = () => {
  return (
    <Swiper
    modules={[Navigation,EffectCoverflow]}
      
    effect="coverflow"
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides={true} // Center the slides
      navigation
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <ServiceCard image={ServiceIMage1} />
      </SwiperSlide>
      <SwiperSlide>
        <ServiceCard image={ServiceIMage2} />
      </SwiperSlide>
      <SwiperSlide>
        <ServiceCard image={ServiceIMage3} />
      </SwiperSlide>
      <SwiperSlide>
        Slide 4
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
