// import Image from "next/image";
// import data from "../../data/reviews.json";

// const Reviews = () => {
//   return (
//     <section className="py-10">
//       <div className="container">
//         <h2 className="text-orange text-5xl text-center mb-6 font-semibold">
//           {data.title}
//         </h2>
//         <ul className="grid grid-cols-3 gap-4">
//           {data.reviews.map(({ name, text, photo }, ind) => (
//             <li
//               className="bg-main rounded-md px-3 py-4 flex flex-col gap-2 "
//               key={ind}
//             >
//               <div className="flex-1">
//                 <p className="text-orange text-lg font-bold text-center">
//                   {name}
//                 </p>
//                 <p className="text-white text-base font-normal">{text}</p>
//               </div>
//               <div className="relative w-20 h-20 rounded-full overflow-hidden">
//                 <Image
//                   className="object-cover object-center"
//                   fill={true}
//                   alt={name}
//                   src={photo}
//                 />
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Reviews;
"use client";
import data from "../../data/reviews.json";

import ReviewCard from "../ReviewCard/ReviewCard";
import Slider from "../Slider/Slider";

import { Swiper, SwiperSlide } from "swiper/react";

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
