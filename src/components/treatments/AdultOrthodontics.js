// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap-trial";
// import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

// const AdultOrthodontics = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const dotRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const section = sectionRef.current;
//     const title = titleRef.current;
//     const mark = title.querySelector("span");
//     const dot = dotRef.current;

//     gsap.set(dot, {
//       width: "142vmax",
//       height: "142vmax",
//       xPercent: -50,
//       yPercent: -50,
//       top: "50%",
//       left: "50%",
//     });

//     const tl1 = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: "bottom top",
//         markers: true,
//         scrub: 1.5,
//         pin: section,
//         pinSpacing: true,
//         invalidateOnRefresh: true,
//       },
//       defaults: { ease: "none" },
//     });

//     tl1.to(title, { opacity: 1 }).fromTo(
//       dot,
//       {
//         scale: 0,
//         x: () => {
//           let markBounds = mark.getBoundingClientRect();
//           let px = markBounds.left + markBounds.width * 0.54;
//           return px - section.getBoundingClientRect().width / 2;
//         },
//         y: () => {
//           let markBounds = mark.getBoundingClientRect();
//           let py = markBounds.top + markBounds.height * 0.73;
//           return py - section.getBoundingClientRect().height / 2;
//         },
//       },
//       {
//         x: 0,
//         y: 0,
//         ease: "power3.in",
//         scale: 1,
//       }
//     );
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       style={{
//         position: "relative",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
     
//       <p
//         ref={titleRef}
//         style={{
//           fontSize: "100px",
//           textAlign: "center",
//           position: "relative",
//           fontWeight: 900,
//           color: "#fff",
//           opacity: 0,
//           left: "200px",
//         }}
//       >
//         TITLE <span>?</span>
//       </p>
//       <div
//         ref={dotRef}
//         className="dot"
//         style={{
//           backgroundColor: "white",
//           width: 0,
//           height: 0,
//           borderRadius: "50%",
//           position: "absolute",
//         }}
//       ></div>
//     </section>
//   );
// }

// export default AdultOrthodontics;





import React, { useRef, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const AdultOrthodontics = () => {
  const main = useRef();
  const smoother = useRef();
  const imageRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const wrapper = wrapperRef.current;

    gsap.to(image, {
      yPercent: -100, 
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top bottom",
        end: "bottom bottom", 
        scrub: true,
      },
    });
  }, []);
  useEffect(() => {
    const image = imageRef.current;

    gsap.set(image, { y: "10%" }); 

    ScrollTrigger.create({
      trigger: image,
      start: "top bottom", 
      end: "bottom top", 
      scrub: true, 
      onUpdate: (self) => {
        const progress = self.progress; 
        gsap.set(image, { y: `${(1 - progress) * 100}%` }); 
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill(); 
      });
    };
  }, []);
  

  useEffect(() => {
    gsap.to(".SVGref", {
      rotate: () => -360,
      ease: "none",
      scrollTrigger: {
        start: -100,
        end: "max",
        scrub: 1,
      },
    });

    smoother.current = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      smoother.current.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">    <div
    id="smooth-wrapper"
    ref={main}
    className="flex-grow items-center  justify-center"
  >
    <div id="smooth-content" className=" h-m w-full">


      <section className="flex justify-between">

        <div className=" " data-speed="1.4">
    
        </div>
        <div
className="image-wrapper"
ref={wrapperRef}
style={{
  border: "1px solid black",
  // height: "100vh",
  // overflow: "hidden",
  // borderRadius: "1200px",
  position: "relative", 
}}
>
<img
  ref={imageRef}
  src="/images/cloud16.jpg"
  alt=""
  className="image"
  style={{
    height: "400px",
    overflow: "hidden",
    borderRadius: "400px",
    position: "relative",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center", 
    alignItems: "center", 
  }}
/>
<div className="font-HelveticaNowVar font-extralight text-white text-4xl" style={{ whiteSpace: 'nowrap', textAlign: 'center', lineHeight: '1' }}>
<span style={{ fontSize: '4rem' }}>Because <div className="italic" style={{ display: 'inline' }}>Every</div> Smile</span><br />
<span style={{ fontSize: '4rem' }}>Is Unique</span>
</div>

<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 440 440"
className="SVGref"
data-speed="1.5"
style={{ width: "204px", height: "204px" }}
>
 <defs>
  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" style={{ stopColor: "#B8DBFC" }} />
    <stop offset="100%" style={{ stopColor: "#F8FBFE" }} />
  </linearGradient>
</defs>
            <path
              d="M440,211.9l-0.6-10.3l-208,15.9l200.9-56.3l-2.9-9.8L230.6,215l182.5-101.2l-5.1-8.9L229.3,212.6L383.6,72l-7-7.5
L227.4,210.7L345.2,38.2l-8.5-5.6L225.2,209.2l74.9-195l-9.6-3.5l-67.8,197.6l28-207.1L240.5,0L220,208L199.5,0l-10.2,1.2l28,207.1
L149.5,10.6l-9.6,3.5l74.9,195L103.3,32.6l-8.5,5.6l117.8,172.5L63.4,64.6l-7,7.5l154.3,140.6L32,104.9l-5.1,8.9L209.4,215
L10.6,151.4l-2.9,9.8l200.9,56.3l-208-15.9L0,211.9l208.5,8.4L2.4,252.8l1.8,10.1l204.7-40l-193,79.3l4,9.4L210,225.3L40.4,347.1
l6.1,8.2l165.1-127.8L74.6,385.1l7.8,6.6l131.2-162.5l-97,185l9.2,4.6L216,230.4l-51.8,202.4l10,2.4l44.4-204.1L214.9,440h10.2
l-3.8-208.9l44.4,204.2l10-2.4L224,230.5l90.2,188.4l9.2-4.6l-97-185l131.2,162.5l7.8-6.6L228.4,227.5l165.1,127.8l6.1-8.2
L230,225.3l190,86.2l4.1-9.4l-193-79.3l204.7,40l1.8-10.1l-206.1-32.6L440,211.9z"
            />
            
          </svg>
        </div>
      </section>
      <section className=" project__title text-center">
        <h1>…with ScrollSmoother.</h1>
      </section>
     
    </div>
  </div></div>

  );
};

export default AdultOrthodontics;
