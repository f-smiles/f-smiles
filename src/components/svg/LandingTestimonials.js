import React, { useState, useRef, useEffect} from 'react';
import gsap from 'gsap';

const OakSlider = () => {
  const totalSlides = 3; 
  const [currentSlide, setCurrentSlide] = useState(1);
  const [animating, setAnimating] = useState(false); 
  const slidesRef = useRef(new Array(totalSlides).fill(null));
  const [autoPlay, setAutoPlay] = useState(true); 
  const autoPlaySpeed = 8; 
  const [progressBars, setProgressBars] = useState(new Array(totalSlides).fill(0));

  const slideData = [
    {
        imgSrc: "../images/narvaez.jpg",
        title: "Narvaez",
        description: "Narvaez quote"
    },
    {
        imgSrc: "../images/kinzie.jpg", 
        title: "Kinzie",
        description: "Kinzie quote"
    },
    {
        imgSrc: "../images/hurlburt.jpeg", 
        title: "Hurlburt",
        description: "Hurlburt quote"
    }
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
  slideAnimation(currentSlide, newSlideIndex, 'next');
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
  slideAnimation(currentSlide, newSlideIndex, 'prev');
  setCurrentSlide(newSlideIndex);
};




const slideAnimation = (from, to, dir) => {
  const fromSlide = slidesRef.current[from - 1];
  const toSlide = slidesRef.current[to - 1];


  gsap.fromTo(
    fromSlide,
    { x: 0 },
    { x: dir === 'next' ? '100%' : '-100%', duration: 1 }
  );

  gsap.fromTo(
    toSlide,
    { x: dir === 'next' ? '-100%' : '100%' },
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
  if (dir === 'next') {
    newSlideIndex = currentSlide >= totalSlides ? 1 : currentSlide + 1;
  } else {
    newSlideIndex = currentSlide <= 1 ? totalSlides : currentSlide - 1;
  }

  const slideDirection = dir === 'next' ? 'right' : 'left';

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
            const newProgress = progress + (100 / autoPlaySpeed);
            return newProgress <= 100 ? newProgress : 100;
          }
          return progress;
        })
      );


      if (progressBars[currentSlide - 1] >= 100) {

        const dir = currentSlide >= totalSlides ? 'next' : 'prev';
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
              const newProgress = progress + (100 / (autoPlaySpeed * 10));
              return newProgress <= 100 ? newProgress : 100;
            }
            return progress;
          })
        );
      }, 100);
  
      if (progressBars[currentSlide - 1] >= 100) {
        changeSlide('next');
        setProgressBars(new Array(totalSlides).fill(0));
      }
    }
  
    return () => clearInterval(interval);
  }, [autoPlay, autoPlaySpeed, currentSlide, progressBars]);
  




return (
  <div className="flex">
<div className="relative w-1/2 min-h-screen overflow-hidden flex items-start" >


    <div className="relative z-10 max-w-6xl mx-auto my-10 flex justify-between">
  
      <div className="flex flex-col space-y-2">
        {[...Array(totalSlides)].map((_, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="text-sm">{index + 1}</div>
            <div className="relative w-14 h-px bg-white/50">
              <div
                className="absolute top-0 left-0 h-full bg-white transition-all duration-100 ease-out"
                style={{ width: `${progressBars[index]}%` }}
              ></div>
            </div>
            <span className={`transition-opacity duration-500 ${index === currentSlide - 1 && progressBars[index] < 100 ? 'opacity-100' : 'opacity-0'}`}>
              {slideData[index].title}
            </span>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex space-x-5">
        <div className="w-12 h-12 rounded-full border border-white bg-white text-black flex justify-center items-center opacity-50 cursor-pointer" onClick={goToPrevSlide}> <span className="text-sm">{'<'}</span></div>
        <div className="w-12 h-12 rounded-full border border-white bg-white text-black flex justify-center items-center opacity-50 cursor-pointer" onClick={goToNextSlide}> <span className="text-sm">{'>'}</span></div>
      </div>
    </div>

    {/* Slider Content */}
    <div className="absolute top-0 left-0 w-full h-full">
      {slideData.map((slide, index) => (
        <div
          key={index}
          ref={el => slidesRef.current[index] = el}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${currentSlide === index + 1 ? 'opacity-100' : 'opacity-0'}`}
          style={{ transform: `translateX(${index > 0 ? 100 : 0}%)` }}
        >
          {/* Slide content */}
          <div className="absolute inset-0">
          <img
  src={slide.imgSrc}
  alt={`Slide ${index + 1}`}
  className="w-full h-full object-cover"
/>
          </div>
       
        </div>
      ))}
    </div>
  </div>
<div className="w-1/2 flex flex-col justify-center items-center">
  {slideData.map((slide, index) => (
    <div
      key={index}
      className={`transition-opacity duration-1000 ease-out ${currentSlide === index + 1 ? 'opacity-100' : 'opacity-0'}`}
    >
      <h2 className="border border-black text-4xl font-semibold mb-4" style={{ maxWidth: '90%' }}>
        {slide.description}
      </h2>
    </div>
  ))}
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
