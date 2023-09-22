// import React from "react";

// const Star = ({ filledPercentage }) => (
//   <div className="relative w-6 h-6">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       className="w-full h-full absolute"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M12 15.372l-9.447 6.326 3.599-10.745L.172 9.374l10.888-.493L12 0l1.94 8.881 10.888.493-6.98 5.579 3.6 10.745L12 15.372z"
//       />
//     </svg>
//     <div style={{ width: `${filledPercentage}%`, overflow: "hidden" }}>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="gold"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         className="w-full h-full"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M12 15.372l-9.447 6.326 3.599-10.745L.172 9.374l10.888-.493L12 0l1.94 8.881 10.888.493-6.98 5.579 3.6 10.745L12 15.372z"
//         />
//       </svg>
//     </div>
//   </div>
// );

// const RatingStar = ({ value }) => {
//   return (
//     <div className="flex">
//       {[...Array(5)].map((_, i) => {
//         let filledPercentage = 100;
//         if (value < i + 1) {
//           filledPercentage = (value - i) * 100;
//         }
//         return <Star key={i} filledPercentage={filledPercentage} />;
//       })}
//     </div>
//   );
// };

// export default RatingStar;
// import React from "react";

// const Star = ({ filledPercentage }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 51 48"
//     className="w-6 h-6"
//   >
//     <defs>
//       <linearGradient id="starGradient">
//         <stop offset={`${filledPercentage}%`} stopColor="gold" />
//         <stop offset={`${filledPercentage}%`} stopColor="transparent" />
//       </linearGradient>
//     </defs>
//     <path
//       fill="url(#starGradient)"
//       d="M25.5 0l6.902 17.955L51 19.173l-14.553 12.356L40.098 48 25.5 38.378 10.902 48l3.65-16.471L0 19.173l18.598-1.218L25.5 0z"
//     />
//   </svg>
// );

// const RatingStar = ({ value }) => {
//   return (
//     <div className="flex">
//       {[...Array(5)].map((_, i) => {
//         let filledPercentage = 100;
//         if (value < i + 1) {
//           filledPercentage = (value - i) * 100;
//         }
//         return <Star key={i} filledPercentage={filledPercentage} />;
//       })}
//     </div>
//   );
// };

// export default RatingStar;

// import React from "react";

// const Star = ({ filledPercentage }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 51 48"
//     className="w-6 h-6"
//   >
//     <defs>
//       <linearGradient id={`starGradient${filledPercentage}`}>
//         <stop offset={`${filledPercentage}%`} stopColor="gold" />
//         <stop offset={`${filledPercentage}%`} stopColor="transparent" />
//       </linearGradient>
//     </defs>
//     <path
//       fill={`url(#starGradient${filledPercentage})`}
//       d="M25.5 0l6.902 17.955L51 19.173l-14.553 12.356L40.098 48 25.5 38.378 10.902 48l3.65-16.471L0 19.173l18.598-1.218L25.5 0z"
//     />
//   </svg>
// );

// const RatingStar = ({ value }) => {
//   return (
//     <div className="flex">
//       {[...Array(5)].map((_, i) => {
//         let filledPercentage = 100;
//         if (value < i + 1) {
//           filledPercentage = (value - i) * 100;
//         }
//         return <Star key={i} filledPercentage={filledPercentage} />;
//       })}
//     </div>
//   );
// };

// export default RatingStar;

// import React from "react";

// const Star = ({ filledPercentage }) => (
//   <div className="relative w-6 h-6">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 51 48"
//       className="w-full h-full absolute"
//     >
//       <path
//         fill="none"
//         stroke="currentColor"
//         d="M25.5 0l6.902 17.955L51 19.173l-14.553 12.356L40.098 48 25.5 38.378 10.902 48l3.65-16.471L0 19.173l18.598-1.218L25.5 0z"
//       />
//     </svg>
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 51 48"
//       className="w-full h-full absolute"
//     >
//       <defs>
//         <linearGradient id={`starGradient${filledPercentage}`}>
//           <stop offset={`${filledPercentage}%`} stopColor="gold" />
//           <stop offset={`${filledPercentage}%`} stopColor="transparent" />
//         </linearGradient>
//       </defs>
//       <path
//         fill={`url(#starGradient${filledPercentage})`}
//         d="M25.5 0l6.902 17.955L51 19.173l-14.553 12.356L40.098 48 25.5 38.378 10.902 48l3.65-16.471L0 19.173l18.598-1.218L25.5 0z"
//       />
//     </svg>
//   </div>
// );

// const RatingStar = ({ value }) => {
//   return (
//     <div className="flex">
//       {[...Array(5)].map((_, i) => {
//         let filledPercentage = 100;
//         if (value < i + 1) {
//           filledPercentage = (value - i) * 100;
//         }
//         return <Star key={i} filledPercentage={filledPercentage} />;
//       })}
//     </div>
//   );
// };

// export default RatingStar;

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
