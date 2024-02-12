import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Logo from "../svg/Logo";
import Features from "./Features";
import FeaturedReviews from "./FeaturedReviews";
import Locations from "./Locations";
import GiftCards from "../products/GiftCards";

const Home = () => {
  // const [activeSlide, setActiveSlide] = useState(0);

  // const prevSlide = () => {
  //   setActiveSlide((prevSlide) =>
  //     prevSlide === 0 ? slides.length - 1 : prevSlide - 1
  //   );
  // };

  // const nextSlide = () => {
  //   setActiveSlide((prevSlide) =>
  //     prevSlide === slides.length - 1 ? 0 : prevSlide + 1
  //   );
  // };
  // const [isCardHovered, setIsCardHovered] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);
  // const [isTransition, setIsTransition] = useState(false);
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [showTextPerson1, setShowTextPerson1] = useState(true);
  // const [showTextPerson2, setShowTextPerson2] = useState(false);

  // const handleToggleTextPerson1 = () => {
  //   setShowTextPerson1(!showTextPerson1);
  // };

  // const handleToggleTextPerson2 = () => {
  //   setShowTextPerson2(!showTextPerson2);
  // };

  // const threshold = 400;
  // const InvisalignRef = useRef(null);
  // const damonRef = useRef(null);
  // const techRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const position = window.pageYOffset;
  //     const windowHeight = window.innerHeight;

  //     const damonSection = damonRef.current;
  //     if (damonSection) {
  //       const damonSectionRect = damonSection.getBoundingClientRect();
  //       const damonSectionTop = damonSectionRect.top;
  //       const damonSectionHeight = damonSectionRect.height;
  //       const isDamonVisible =
  //         damonSectionTop <= windowHeight / 2 &&
  //         damonSectionTop + damonSectionHeight >= windowHeight / 2;
  //       setIsCardHovered(isDamonVisible);
  //     }

  //     setScrollPosition(position);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const calculateOffset = (sectionNumber) => {
  //   return sectionNumber * scrollPosition * 0.5;
  // };









  return (
      <main className="w-full overflow-hidden bg-white">
        <div >

        </div>

        {/* <Hero /> */}
        <Features />
  
        <Locations />
        {/* <GiftCards /> */}
      </main>
  );
};

export default Home;