"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import RatingStar from "../RaitingStar/RaitingStar";
import data from "../../data/sportsBar.json";
import Link from "next/link";

const RatingBar = () => {
  const { sportsBars } = data;
  const [selectValue, setSelectValue] = useState("name");
  const [sortArray, setSortArray] = useState(sportsBars);
  const [inputValue, setInputValue] = useState("");

  const sortBars = (bars, field) => {
    if (field === "name") {
      setSortArray(bars.sort((a, b) => a.name.localeCompare(b.name)));
    }
    if (field === "location") {
      setSortArray(bars.sort((a, b) => a.location.localeCompare(b.location)));
    }
    if (field === "rating") {
      setSortArray(bars.sort((a, b) => b.rating - a.rating));
    }
  };

  const filterBars = (bars, query) => {
    return bars.filter((bar) =>
      bar.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  useEffect(() => {
    const filteredBars = filterBars(sportsBars, inputValue);
    sortBars(filteredBars, selectValue);
  }, [inputValue, selectValue, sportsBars]);

  return (
    <section id="rating" className="py-10 ">
      <div className="container">
        <h2 className="text-orange text-5xl text-center mb-6 font-semibold">
          {data.title}
        </h2>
        <form className="flex flex-col md:flex-row justify-between items-center gap-3">
          <input
            className="border border-main px-2 py-1 rounded-md outline-0 focus:border-2 w-full md:w-1/3"
            placeholder="Find..."
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <select
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="location">Location</option>
            <option value="rating">Rating</option>
          </select>
        </form>

        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
          {sortArray.map(
            ({ name, location, description, rating, image, id }, ind) => (
              <li
                key={ind}
                className="bg-main rounded-md px-3 py-4 flex flex-col gap-2"
              >
                <Link href={`bar/${id}`}>
                  <div className="flex flex-col justify-between flex-1 gap-1">
                    <p className="text-orange text-xl font-bold text-center">
                      {name}
                    </p>
                    <p className="text-white text-lg">{location}</p>
                    <p className="text-accent text-base">{description}</p>
                    <div className="flex items-center gap-4">
                      <p className="text-white text-2xl">{rating.toFixed(1)}</p>
                      <RatingStar value={rating} />
                    </div>
                  </div>
                  <div className="w-full h-60 relative">
                    <Image
                      src={image}
                      alt={name}
                      className="object-cover object-center"
                      fill={true}
                    />
                  </div>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default RatingBar;
