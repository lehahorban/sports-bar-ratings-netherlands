"use client";
import data from "../../data/reviews.json";

import ReviewCard from "../ReviewCard/ReviewCard";
import Slider from "../Slider/Slider";

import { SwiperSlide } from "swiper/react";

const Reviews = () => {
  return (
    <section id="reviews" className="py-10 ">
      <div className="container">
        <h2 className="text-orange text-5xl text-center mb-6 font-semibold">
          {data.title}
        </h2>
        <Slider>
          {data.reviews.map((review, ind) => (
            <SwiperSlide key={ind}>
              <ReviewCard {...review} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
