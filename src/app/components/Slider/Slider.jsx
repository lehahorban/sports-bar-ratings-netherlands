"use client";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ children }) => {
  return (
    <Swiper
      className="flex items-center"
      slidesPerView={1}
      spaceBetween={10}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation]}
      breakpoints={{
        120: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
