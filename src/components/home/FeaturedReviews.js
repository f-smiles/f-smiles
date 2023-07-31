// import React, { useState } from "react";
// import { StarIcon, StarFilledIcon } from "@radix-ui/react-icons";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
// export default function FeaturedReviews() {
//   const reviews = [
//     {
//       author: "Taneesha N.",
//       review:
//         "Fantastic!! Absolutely recommend! The team at FreySmiles was extremely accommodating to my busy schedule and was able to get me an appointment the day after I called. The staff was so sweet and made me feel welcomed as soon as I walked into the office. Dr. Frey has a wonderful practice. I have all the confidence in the world that I will love my smile once my treatment is done!",
//       rating: 4,
//     },
//     {
//       author: "Alexandra W",
//       review:
//         "My husband’s experience at FreySmiles Orthodontics has been absolutely amazing. He had an emergency that occurred on Friday and contacted the emergency contact number. Soon after, he was contacted by Dr. Gregg Frey who scheduled him an appointment right away. My husband was so happy to not have to go through the weekend in discomfort. Hands down, I have to say this is the best Orthodontist we have ever been to. The staff are always professional, polite and very eager to help!",
//       rating: 5,
//     },
//     {
//       author: "Fei Z",
//       review:
//         "Our whole experience for the past 10 years of being under Dr. Gregg Frey’s care and his wonderful staff has been amazing. My son and my daughter have the most beautiful smiles, and they received so many compliments on their teeth. It has made a dramatic and positive change in their lives. Dr. Frey is a perfectionist, and his treatment is second to none. I recommend Dr. Frey highly and without any reservation.",
//       rating: 4,
//     },
//   ];

//   function RatingStars({ rating }) {
//     const maxRating = 5;
//     const filledStars = Math.floor(rating);
//     const remainingStars = maxRating - filledStars;

//     return (
//       <span className="inline-flex items-center bg-gray-300 w-full text-red-500">
//         {[...Array(filledStars)].map((_, index) => (
//           <StarFilledIcon key={index} className="w-12 h-12" />
//         ))}
//         {[...Array(remainingStars)].map((_, index) => (
//           <StarIcon key={filledStars + index} className="w-12 h-12" />
//         ))}
//       </span>
//     );
//   }

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === reviews.length - 1 ? 0 : prevSlide + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? reviews.length - 1 : prevSlide - 1
//     );
//   };

//   const activeReview = reviews[currentSlide];

//   return (
//     <div className="slider-container space-y-16">
//       <div className="container mx-auto">
//       <div className="flex justify-center items-center">
//   <button
//     className="rounded-full p-2 border border-gray-400 hover:border-gray-700 hover:cursor-pointer prev-button"
//     onClick={prevSlide}
//   >
//     <ArrowLeftIcon className="w-5 h-5 z-0" />
//   </button>
//   <div className="slide active relative">
//     <div className="slide-content text-2xl text-center">
//       <h2 className="mt-10">"{activeReview.review}"</h2>
//       <p className="mt-10">{activeReview.author}</p>
//     </div>
//   </div>
//   <button
//     className="rounded-full p-2 border border-gray-400 hover:border-gray-700 hover:cursor-pointer next-button"
//     onClick={nextSlide}
//   >
//     <ArrowRightIcon className="w-5 h-5 z-0" />
//   </button>
// </div>

//       </div>

//       <div>
//         <div className="reviews-bars w-1/2 mx-auto relative">
//           {reviews.map((_, index) => (
//             <span
//               key={index}
//               className={`reviews-bar ${
//                 index === currentSlide ? "active" : ""
//               }`}
//             ></span>
//           ))}
//         </div>
//       </div>
//     </div>
//     // <div className="slider-container">
//     //   <div className="slider">
//     //     <div className="slide active">
//     //       <div className="slide-content">
//     //         <h2>{activeReview.review}</h2>
//     //         <RatingStars rating={activeReview.rating} />
//     //         <p>{activeReview.author}</p>
//     //       </div>
//     //     </div>
//     //   </div>
//     //   <button className="prev-button" onClick={prevSlide}>
//     //     Prev
//     //   </button>
//     //   <button className="next-button" onClick={nextSlide}>
//     //     Next
//     //   </button>
//     // </div>
//   );
// }

// import React from 'react'

// export default function FeaturedReviews() {

//   const slides = [
//     {
//       author: "Taneesha N.",
//       content: `Fantastic!! Absolutely recommend! The team at FreySmiles was extremely accommodating to my busy schedule and was able to get me an appointment the day after I called. The staff was so sweet and made me feel welcomed as soon as I walked into the office.  Dr. Frey has a wonderful practice. I have all the confidence in the world that I will love my smile once my treatment is done!`,
//     },
//     {
//       author: "Alexandra W",
//       content:
//         "“My husband’s experience at FreySmiles Orthodontics has been absolutely amazing. He had an emergency that occurred on Friday and contacted the emergency contact number. Soon after, he was contacted by Dr. Gregg Frey who scheduled him an appointment right away. My husband was so happy to not have to go through the weekend in discomfort. Hands down, I have to say this is the best Orthodontist we have ever been to. The staff are always professional, polite and very eager to help!”",
//     },
//     {
//       author: "Fei Z",
//       content:
//         "Our whole experience for the past 10 years of being under Dr. Gregg Frey’s care and his wonderful staff has been amazing. My son and my daughter have most beautiful smiles, and they received so many compliments on their teeth. It has made a dramatic and positive change in their lives. Dr. Frey is a perfectionist, and his treatment is second to none. I recommend Dr. Frey highly and without any reservation.",
//     },
//   ];

//   return (
//     <div className="relative min-h-screen flex items-center justify-center ml-60 mr-60">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute left-0 top-0 w-full h-full transition-opacity duration-500 ${
//             index === activeSlide ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <div className="absolute inset-x-0 bottom-0 p-4 text-black">
//             <h1 className="text-xl text-teal-700">{slide.content}</h1>
//           </div>
//         </div>
//       ))}
//       <button
//         className="absolute -left-20 top-1/2 transform -translate-y-20 px-4 py-2 rounded"
//         onClick={prevSlide}
//       >
//         <div className="border border-black rounded-full inline-flex p-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
//             />
//           </svg>
//         </div>
//       </button>
//       <button
//         className="absolute -right-20 top-1/2 transform -translate-y-20 px-4 py-2 rounded"
//         onClick={nextSlide}
//       >
//         <div className="border border-black rounded-full inline-flex p-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6 rounded-full"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
//             />
//           </svg>
//         </div>
//       </button>
//     </div>
//   )
// }
