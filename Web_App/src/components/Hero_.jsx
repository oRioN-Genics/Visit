import React from "react";
import "./Hero_.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow, Navigation } from "swiper/modules";

// Import images
import img1 from "E:/Visit/Web_App/src/assets/img_1.jpg";
import img2 from "E:/Visit/Web_App/src/assets/img_2.jpg";
import img3 from "E:/Visit/Web_App/src/assets/img_3.jpg";
import img4 from "E:/Visit/Web_App/src/assets/img_4.jpg";
import img5 from "E:/Visit/Web_App/src/assets/img_5.jpg";
import img6 from "E:/Visit/Web_App/src/assets/img_6.jpg";
import img7 from "E:/Visit/Web_App/src/assets/img_7.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

function Hero_() {
  return (
    <div className="hero-container">
      <h1 className="hero-heading">
        Visit: Your Gateway to Unforgettable Destinations
      </h1>
      <p className="hero-subheading">
        Plan with ease, book with confidence, and explore with joy—your next
        adventure starts here
      </p>

      <Swiper style={{paddingBottom: 20}}
        modules={[Pagination, EffectCoverflow, Navigation]}
        effect="coverflow"
        coverflowEffect={{
          rotate: -10, // Angle of slides
          stretch: 0, // Space between slides
          depth: 150, // Depth perspective
          modifier: 1, // Effect multiplier
          slideShadows: true, // Enable shadows
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="hero-swiper"
        spaceBetween={0}
        slidesPerView={3}
        centeredSlides={true}
        grabCursor={true}
        initialSlide={Math.floor(images.length / 2)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="hero-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev">←</div>
      <div className="swiper-button-next">→</div>

      <Link to="/signin">
        <button className="hero-button">Start Your Journey →</button>
      </Link>
    </div>
  );
}

export default Hero_;
