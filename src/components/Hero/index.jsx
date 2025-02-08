import "./style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <Swiper
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <h5 className="position-absolute text-white bottom-0">
              Solo Leveling
            </h5>
            <img src="/media/solo-leveling.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <h5 className="position-absolute text-white bottom-0">
              Black Clover
            </h5>
            <img src="/media/blackClover.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <h5 className="position-absolute text-white bottom-0">
              Jujutsu Kaisen
            </h5>
            <img src="/media/jujutsu.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <h5 className="position-absolute text-white bottom-0">
              The Promised Neverland
            </h5>
            <img src="/media/promised.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <h5 className="position-absolute text-white bottom-0">
              Hunter X Hunter
            </h5>
            <img src="/media/hunter.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <h5 className="position-absolute text-white bottom-0">
              Attack on Titan
            </h5>
            <img src="/media/attack.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
