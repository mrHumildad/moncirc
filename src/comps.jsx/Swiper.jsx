

// SwiperComponent.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import super6 from '../assets/fotos_uri/Super6.png';
import super7 from '../assets/fotos_uri/Super7.png';
import super8 from '../assets/fotos_uri/Super8.png';
import super9 from '../assets/fotos_uri/Super9.png';
//import "./styles.css";
import {
    Autoplay,
    EffectCoverflow,
    Pagination,
    Navigation,
} from "swiper/modules";

const SwiperComponent = () => {
    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            /* pagination={{
                clickable: true,
            }} */
            navigation={true}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            className="mySwiper">
            <SwiperSlide>
                <img src={super6} alt="slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={super7} alt="slide 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={super8} alt="slide 3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={super9} alt="slide 4" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={super7} alt="slide 5" />
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperComponent;
