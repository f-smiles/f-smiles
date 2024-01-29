import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useSwipeable } from "react-swipeable";
const OakSlider = () => {
  const totalSlides = 3;
  const [currentSlide, setCurrentSlide] = useState(1);
  const [animating, setAnimating] = useState(false);
  const slidesRef = useRef(new Array(totalSlides).fill(null));
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlaySpeed = 8;
  const [progressBars, setProgressBars] = useState(
    new Array(totalSlides).fill(0)
  );

  const slideData = [
    {
      imgSrc: "../images/narvaez.jpg",
      title: "Narvaez",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Parturient montes nascetur ridiculus mus mauris. ",
    },
    {
      imgSrc: "../images/kinzie.jpg",
      title: "Kinzie",
      description: " consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Parturient montes nascetur ridiculus mus mauris. ",
    },
    {
      imgSrc: "../images/kara.jpeg",
      title: "Kara",
      description: "Lorem ipsum sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Parturient montes nascetur ridiculus mus mauris. ",
      customStyle: "scale-50",
    },
  ];

  const goToNextSlide = () => {
    if (animating) return;
    setAnimating(true);

    const currentSlideIndex = currentSlide - 1;
    setProgressBars((progressBars) =>
      progressBars.map((progress, index) =>
        index === currentSlideIndex ? 0 : progress
      )
    );

    setActiveSlideProgress(0);

    const newSlideIndex = currentSlide >= totalSlides ? 1 : currentSlide + 1;
    slideAnimation(currentSlide, newSlideIndex, "next");
    setCurrentSlide(newSlideIndex);
  };

  const goToPrevSlide = () => {
    if (animating) return;
    setAnimating(true);

    const currentSlideIndex = currentSlide - 1;
    setProgressBars((progressBars) =>
      progressBars.map((progress, index) =>
        index === currentSlideIndex ? 0 : progress
      )
    );

    setActiveSlideProgress(0);

    const newSlideIndex = currentSlide <= 1 ? totalSlides : currentSlide - 1;
    slideAnimation(currentSlide, newSlideIndex, "prev");
    setCurrentSlide(newSlideIndex);
  };

  const slideAnimation = (from, to, dir) => {
    const fromSlide = slidesRef.current[from - 1];
    const toSlide = slidesRef.current[to - 1];

    gsap.fromTo(
      fromSlide,
      { x: 0 },
      { x: dir === "next" ? "100%" : "-100%", duration: 1 }
    );

    gsap.fromTo(
      toSlide,
      { x: dir === "next" ? "-100%" : "100%" },
      { x: 0, duration: 1, onComplete: () => setAnimating(false) }
    );
  };

  const changeSlide = (dir) => {
    if (animating) return;

    const currentSlideIndex = currentSlide - 1;
    setProgressBars((progressBars) =>
      progressBars.map((progress, index) =>
        index === currentSlideIndex ? 0 : progress
      )
    );

    let newSlideIndex = currentSlide;
    if (dir === "next") {
      newSlideIndex = currentSlide >= totalSlides ? 1 : currentSlide + 1;
    } else {
      newSlideIndex = currentSlide <= 1 ? totalSlides : currentSlide - 1;
    }

    const slideDirection = dir === "next" ? "right" : "left";

    setProgressBars((progressBars) =>
      progressBars.map((progress, index) =>
        index === newSlideIndex - 1 ? activeSlideProgress : progress
      )
    );

    slideAnimation(currentSlide, newSlideIndex, slideDirection);
    setCurrentSlide(newSlideIndex);
  };

  const [activeSlideProgress, setActiveSlideProgress] = useState(0);
  const autoPlaySlide = () => {
    const updateProgress = () => {
      setActiveSlideProgress(0);

      setProgressBars((progressBars) =>
        progressBars.map((progress, index) => {
          if (index === currentSlide - 1) {
            const newProgress = progress + 100 / autoPlaySpeed;
            return newProgress <= 100 ? newProgress : 100;
          }
          return progress;
        })
      );

      if (progressBars[currentSlide - 1] >= 100) {
        const dir = currentSlide >= totalSlides ? "next" : "prev";
        changeSlide(dir);

        setProgressBars(new Array(totalSlides).fill(0));
      }
    };

    const interval = setInterval(updateProgress, 1000);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setProgressBars((progressBars) =>
          progressBars.map((progress, index) => {
            if (index === currentSlide - 1) {
              const newProgress = progress + 100 / (autoPlaySpeed * 10);
              return newProgress <= 100 ? newProgress : 100;
            }
            return progress;
          })
        );
      }, 100);

      if (progressBars[currentSlide - 1] >= 100) {
        changeSlide("next");
        setProgressBars(new Array(totalSlides).fill(0));
      }
    }

    return () => clearInterval(interval);
  }, [autoPlay, autoPlaySpeed, currentSlide, progressBars]);

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNextSlide(),
    onSwipedRight: () => goToPrevSlide(),
  });

  return (
    <div>
      <div className="flex flex-col  md:flex-row">
        <div
          className="relative w-full md:w-1/2 min-h-screen overflow-hidden flex items-start"
          style={{ transform: "scale(0.8)" }}
        >
          <div className="relative z-10 max-w-6xl mx-auto my-10 flex justify-between ">
            {/* <div className="flex flex-col space-y-2">
              {[...Array(totalSlides)].map((_, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="text-sm">{index + 1}</div>
                  <div
                    className={`relative ${
                      currentSlide === index + 1 ? "w-28" : "w-14"
                    } h-px bg-white/50`}
                  >
                    <div
                      className="absolute top-0 left-0 h-full bg-white transition-all duration-100 ease-out"
                      style={{ width: `${progressBars[index]}%` }}
                    ></div>
                  </div>

                  <span
                    className={`text-custom-size transition-opacity duration-500 ${
                      index === currentSlide - 1 && progressBars[index] < 100
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    style={{ fontSize: "24px" }}
                  >
                    {slideData[index].title}
                  </span>
                </div>
              ))}
            </div> */}

            <div className="flex space-x-5">
              <div
                className="w-12 h-12 rounded-full border border-white bg-white text-black flex justify-center items-center opacity-50 cursor-pointer hidden md:flex"
                onClick={goToPrevSlide}
              >
                <span className="text-sm">{"<"}</span>
              </div>
              <div
                className="w-12 h-12 rounded-full border border-white bg-white text-black flex justify-center items-center opacity-50 cursor-pointer hidden md:flex"
                onClick={goToNextSlide}
              >
                <span className="text-sm">{">"}</span>
              </div>
            </div>
          </div>


          <div className="absolute top-0 left-0 w-full h-full" {...handlers}>
          {slideData.map((slide, index) => (
    <div
      key={index}
      ref={(el) => (slidesRef.current[index] = el)}
      className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
        currentSlide === index + 1 ? "opacity-100" : "opacity-0"
      }`}
      style={{ transform: `translateX(${index > 0 ? 100 : 0}%)` }}
    >

      <div className="absolute inset-0">
        <img
          src={slide.imgSrc}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover "
        />
      </div>

      {/* {/ Glassmorphism Mobile View /} */}
      <div className={`absolute inset-0 right-0 p-4 bg-white/30 backdrop-blur-sm z-10 md:hidden ${currentSlide === index + 1 ? 'opacity-100' : 'opacity-0'}`}
         style={{
           maxWidth: '60%',
           margin: 'auto',

           height: '60%', 
         }}>
        <h2 className="text-2xl font-thin mb-4 text-black" style={{ maxWidth: "90%" }}>
          {slide.description}
        </h2>
      </div>
    </div>
  ))}
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center hidden md:flex">
        <div className="-mt-60 flex flex-col space-y-2">
              {[...Array(totalSlides)].map((_, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="text-sm">{index + 1}</div>
                  <div
                    className={`relative ${
                      currentSlide === index + 1 ? "w-28" : "w-14"
                    } h-px bg-white/50`}
                  >
                    <div
                      className="absolute top-0 left-0 h-full bg-white transition-all duration-100 ease-out"
                      style={{ width: `${progressBars[index]}%` }}
                    ></div>
                  </div>

                  <span
                    className={`text-custom-size transition-opacity duration-500 ${
                      index === currentSlide - 1 && progressBars[index] < 100
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    style={{ fontSize: "24px" }}
                  >
                    {slideData[index].title}
                  </span>
                </div>
              ))}
            </div>
  {slideData.map((slide, index) => (
    <div
      key={index}
      className={`relative transition-opacity duration-1000 ease-out ${currentSlide === index + 1 ? 'opacity-100' : 'opacity-0'}`}
      style={{
        opacity: currentSlide === index + 1 ? 1 : 0,
        position: "fixed",
        top: "specific value",
        left: "specific value",
      }}
    >

      <h2 className="text-2xl font-thin mb-4 text-black" style={{ maxWidth: "90%" }}>
        {slide.description}
      </h2>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default OakSlider;

// import React, { useEffect } from 'react';
// import  gsap  from "gsap";
// import  ScrollTrigger  from "gsap/ScrollTrigger";
// import Scrollbar from 'smooth-scrollbar';

// const LandingTestimonials = () => {

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     let bodyScrollBar = Scrollbar.init(document.querySelector('.scroller'), {
//         damping: 0.1,
//         delegateTo: document,
//     });

//     ScrollTrigger.scrollerProxy(".scroller", {
//         scrollTop(value) {
//             if (arguments.length) {
//                 bodyScrollBar.scrollTop = value;
//             }
//             return bodyScrollBar.scrollTop;
//         },
//     });

//     bodyScrollBar.addListener(ScrollTrigger.update);

//     gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

//     gsap.utils.toArray('.panel:not(.purple)').forEach((image, i) => {
//         gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".black",
//                 scroller: ".scroller",
//                 start: () => "top -" + (window.innerHeight * (i + 0.5)),
//                 end: () => "+=" + window.innerHeight,
//                 scrub: true,
//                 invalidateOnRefresh: true,
//             }
//         })
//         .to(image, { height: 0 });
//     });

//     gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

//     gsap.utils.toArray('.panel-text').forEach((text, i) => {
//         gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".black",
//                 scroller: ".scroller",
//                 start: () => "top -" + (window.innerHeight * i),
//                 end: () => "+=" + window.innerHeight,
//                 scrub: true,
//                 invalidateOnRefresh: true,
//             }
//         })
//         .to(text, { duration: 0.33, opacity: 1, y: "50%" })
//         .to(text, { duration: 0.33, opacity: 0, y: "0%" }, 0.66);
//     });

//     ScrollTrigger.create({
//         trigger: ".black",
//         scroller: ".scroller",
//         start: "top top",
//         end: () => "+=" + ((gsap.utils.toArray('.panel').length + 1) * window.innerHeight),
//         pin: true,
//         scrub: true,
//         invalidateOnRefresh: true,

//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       bodyScrollBar.destroy();
//   };
// }, []);

//     return (
//         <div className="scroller h-screen overflow-hidden">
//             <section className="black flex justify-around items-center h-screen  sticky top-0 z-10">
//                 <div className="text-wrap relative overflow-hidden w-[450px] h-[80vh]">
//                     <div className="panel-text blue-text absolute inset-0 z-10 w-full h-full text-4xl  text-center  text-blue-500">Blue</div>
//                     <div className="panel-text red-text absolute inset-0 z-10 w-full h-full text-4xl text-center  text-red-500">Red</div>
//                     <div className="panel-text orange-text absolute inset-0 z-10 w-full h-full text-4xl  text-center  text-orange-500">Orange</div>

//                 </div>
//                 <div className="p-wrap relative overflow-hidden w-[450px] h-[80vh]">
//                 <div className="panel blue absolute inset-0">
//     <img src="../images/kinzie.jpg" alt="Blue" className="object-cover w-full h-full" />
// </div>
// <div className="panel red absolute inset-0">
//     <img src="../images/narvaez.jpg" alt="Red" className="object-cover w-full h-full" />
// </div>
//                     <div className="panel orange absolute inset-0 bg-orange-600"></div>

//                 </div>
//             </section>

//         </div>
//     );
// };

// export default LandingTestimonials;
