import React from "react";

const Star = ({ filledPercentage }) => (
  <div className="relative w-6 h-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 51 48"
      className="w-full h-full absolute"
    >
      <path
        fill="#FF6600"
        d="M25.5 0l6.902 17.955L51 19.173l-14.553 12.356L40.098 48 25.5 38.378 10.902 48l3.65-16.471L0 19.173l18.598-1.218L25.5 0z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 51 48"
      className="w-full h-full absolute"
    >
      <defs>
        <linearGradient id={`starGradient${filledPercentage}`}>
          <stop offset={`${filledPercentage}%`} stopColor="#FF6600" />
          <stop offset={`${filledPercentage}%`} stopColor="#ddd" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#starGradient${filledPercentage})`}
        d="M25.5 0l6.902 17.955L51 19.173l-14.553 12.356L40.098 48 25.5 38.378 10.902 48l3.65-16.471L0 19.173l18.598-1.218L25.5 0z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 51 48"
      className="w-full h-full absolute"
    >
      <path
        fill="none"
        stroke="#FF6600"
        d="M25.5 0l6.902 17.955L51 19.173l-14.553 12.356L40.098 48 25.5 38.378 10.902 48l3.65-16.471L0 19.173l18.598-1.218L25.5 0z"
      />
    </svg>
  </div>
);

const RatingStar = ({ value }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => {
        let filledPercentage =
          value > i ? (value > i + 1 ? 100 : (value - i) * 100) : 0;
        return <Star key={i} filledPercentage={filledPercentage} />;
      })}
    </div>
  );
};

export default RatingStar;
