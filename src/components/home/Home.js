import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import LogoSlider from "./logoslider";
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

  const handleMouseEnter = (event) => {
    const target = event.target;
    const text = target.innerText;
    const chars = text.split('');

    target.innerHTML = '';

    chars.forEach((char, index) => {
      const span = document.createElement('span');
      span.innerText = char;
      span.style.animation = `typewriter-anim 0.5s forwards ${index * 0.05}s`;
      target.appendChild(span);
    });
  };

  const handleMouseLeave = (event) => {
    const target = event.target;
    const spans = Array.from(target.querySelectorAll('span'));

    spans.forEach((span, index) => {
      span.style.animation = `typewriter-reverse-anim 0.5s reverse ${index * 0.05}s`;
    });

    setTimeout(() => {
      target.innerHTML = target.innerText;
    }, spans.length * 50);
  };

  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      setLogoVisible(true);
    });
  }, []);
  const [showText, setShowText] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);


  const [showH, setShowH] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowH(scrollPosition > 10);
  }, [scrollPosition]);



  const calculateOpacity = (scrollY, threshold) => {
    if (scrollY < threshold) {
      return 1;
    } else {
      return 1 - Math.min((scrollY - threshold) / (threshold * 0.5), 1);
    }
  };



  return (
      <main className="w-full overflow-hidden bg-white">
        <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <div
        className="flex items-center justify-center h-screen"
        style={{
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <video
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
          src="../../images/moving.mp4"
          autoPlay
          muted
          loop
        />

        <img
          className={`max-w-lg ${showH ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}
          src="../../images/logo_full.png"
          alt="girl smiling"
        />

        {showH && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '3rem',
              fontWeight: 'bold',
              zIndex: 2,
              color: '#000',
              opacity: showH ? 1 : 0,
              transition: 'opacity 0.5s',
            }}
          >
            H
          </div>
        )}
      </div>
        </div>

        <Hero />
        <Features />
        <LogoSlider />
        <Locations />
        <GiftCards />
      </main>
  );
};

export default Home;