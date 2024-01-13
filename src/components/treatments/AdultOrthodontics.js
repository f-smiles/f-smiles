import React, { useRef, useEffect } from "react";
import { gsap } from "gsap-trial";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const AdultOrthodontics = () => {
  const sectionRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const dot = dotRef.current;

    gsap.set(dot, {
      width: "140rem",
      height: "140rem",
      backgroundColor: "green",
      borderRadius: "50%",
      position: "absolute",
      top: "50%",
      left: "20%",
      transform: "translate(-50%, -50%)",
      scale: 0.1,
    });

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl1.to(dot, {
      scale: 1,
      duration: 1,
    });
  }, []);

  return (
    <main>
    <section
      ref={sectionRef}
      className="min-h-screen" 
      style={{
        position: "relative",
        height: "100vh",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
    
    <div
  ref={dotRef}
  className="dot"
  style={{
    background:`url("/images/pinkblur.jpg")`,
    // backgroundColor: "green",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    position: "absolute",

    transform: "translate(-50%, -50%)",
  }}
></div>
<section
className="flex flex-col"
  style={{
    position: "relative",
    top: "50%",
    left: "20%", 
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    zIndex: 1,
  }}
>
<div>
  <h4 style={{ textAlign: "center" }}>
    <div>
      <span
        className="font-HelveticaNowPro font-thin tracking-tight tracking-tighter"
        style={{ fontSize: "4rem", display: "block" }}
      >
        Because{" "}
        <span className="italic inline">Every</span> Smile
      </span>
      <span
        className="font-HelveticaNowPro font-thin tracking-tight tracking-tighter"
        style={{ fontSize: "4rem", display: "block" }}
      >
        Is Unique
      </span>
    </div>
  </h4>
  <div className="flex justify-center pt-10"> 
    <Link
      to="/our-team"
      className="text-xl rounded-lg border border-primary50 p-4 font-normal leading-6 transition-colors duration-300 ease-linear text-primary50 hover:text-primary30"
    >
      Our Team <span aria-hidden="true"></span>
    </Link>
    <Link
      to="/book-now"
      className="text-xl rounded-lg border border-primary50 bg-primary50 text-white p-4 font-normal leading-6 transition-colors duration-300 ease-linear text-primary50 hover:text-primary30 ml-4"
    >
      Book Now <span aria-hidden="true"></span>
    </Link>
  </div>
</div>

<div className="">     <img
              className="-mt-120 rounded-full absolute max-w-md right-10"
              src="../../images/mainsectionimage.jpg"
              alt="girl smiling"
              style={{
                position: "absolute",
                top: "100%",
                right: "-40%",
                transform: "translate(-50%, -50%)",
              }}
            /></div>
</section>

         
            
    </section>

<div className="h-screen overflow-scroll">
<div
    className="flex flex-col items-center justify-center text-5xl"
    style={{ position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)" }} // Center the container horizontally at the top
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px", 
      }}
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginBottom: "4px" }} 
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z"
          fill="url(#paint0_linear_105_460)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_105_460"
            x1="27.5"
            y1="59.5"
            x2="69.9415"
            y2="168.136"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD9A0" />
            <stop offset="1" stopColor="#FFF5F1" />
          </linearGradient>
        </defs>
      </svg>
      <img
        src="/images/logo_icon.png"
        alt="logo"
        className="w-20 h-20" 
      />
    </div>
  </div>
<div className=" bg-ddd9eb text-2xl">
  <div className="flex max-w-screen-xl mx-auto">
    <div className="flex items-center justify-center h-screen relative w-1/3">
      <figure className="absolute inset-0 -top-1/8">
        <img
          className="object-contain w-full h-full"
          src="../images/aligner.png"
          alt="invisalign"
        />
      </figure>
    
    </div>

    <div className="flex flex-col justify-center items-center w-1/3">
      <span className="text-9xl text-white transform -rotate-90">
        Invisalign
      </span>
    </div>

    <div className="flex flex-col justify-center w-1/3">
      <div className="text-black text-2xl text-center">
        <p className="w-full max-w-md">
          As part of the top 1% of Invisalign providers in the US, we
          have the experience to deliver the smile you deserve.
        </p>
        <div className="text-lg mt-4">
          <Link
            className="justify-center justify-content text-black px-6 py-2 ease-linear border rounded-full border-[#e67fb4] hover:bg-gray-800 hover:border-0 hover:text-white"
            to="/invisalign"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
<div class=" bg-[#E8E1FD] w-screen  h-screen  ">
  <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto lg:flex-row">
    <div className="flex items-center justify-center h-screen relative w-1/3 flex-col">
      <p className="text-3xl pb-4 text-center">
        Combining self-ligating braces with advanced archwires
        clinically proven to move teeth quickly and comfortably.
      </p>

      <div className="mt-4">
        <Link
          className="inline-block px-6 py-4 transition-colors duration-300 ease-linear border rounded-full border-[#7781d9] hover:bg-gray-800 hover:border-0 hover:text-white"
          to="/braces"
        >
          Damon System
        </Link>
      </div>
    </div>

    <div className="flex items-center">
      <span className="text-9xl text-white transform -rotate-90">
        Damon
      </span>
      <span
        className="text-9xl text-white transform rotate-90"
        style={{ marginLeft: "-20rem" }}
      >
        Bracket
      </span>
    </div>

    <figure className="flex flex-col items-center justify-center w-1/2">
      <img
        className="w-auto h-32 md:h-40"
        src="../images/damonfull.png"
        alt="invis"
      />
      <img
        className="w-auto h-40 md:h-48"
        src="../images/damontech.png"
        alt="damon braces"
      />
    </figure>
  </div>
</div>
<div class="bg-[#E8E1FD]  w-screen h-screen flex items-center justify-center ">
  <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto lg:flex-row">
    <div className="flex items-center justify-center h-screen relative w-1/2 flex-col">
      <figure className="flex items-center justify-center ">
        <img
          className="w-auto h-96"
          src="../images/itero2.png"
          alt="itero"
        />
      </figure>
    </div>
    <div className="flex items-center">
      <span className="text-9xl text-white transform -rotate-90">
        Advanced
      </span>
      <span
        className="text-9xl text-white transform rotate-90"
        style={{ marginLeft: "-30rem" }}
      >
        Technology
      </span>
    </div>

    <div className="flex items-center justify-center h-screen relative w-1/3 flex-col">
      <p className="text-3xl pb-4">
        We offer Invisalign without Impressions. Say goodbye to goopy
        impressions with our iTero digital scanner.
      </p>

      <Link
        className="inline-block px-6 py-4 transition-colors duration-300 ease-linear border rounded-full border-[#f2ab79] hover:bg-gray-800 hover:border-0 hover:border-secondary50 hover:text-white"
        to="/invisalign"
      >
        Learn More
      </Link>
    </div>
  </div>
</div>
</div>
</main>
  );
}

export default AdultOrthodontics;





// import React, { useRef, useEffect } from "react";
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
// import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
// import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

// const AdultOrthodontics = () => {
//   const main = useRef();
//   const smoother = useRef();
//   const imageRef = useRef(null);
//   const wrapperRef = useRef(null);

//   useEffect(() => {
//     const image = imageRef.current;
//     const wrapper = wrapperRef.current;

//     gsap.to(image, {
//       yPercent: -100, 
//       ease: "none",
//       scrollTrigger: {
//         trigger: wrapper,
//         start: "top bottom",
//         end: "bottom top", 
//         scrub: true,
//       },
//     });
//   }, []);
//   useEffect(() => {
//     const image = imageRef.current;

//     gsap.set(image, { y: "10%" }); 

//     ScrollTrigger.create({
//       trigger: image,
//       start: "top bottom", 
//       end: "bottom top", 
//       scrub: true, 
//       onUpdate: (self) => {
//         const progress = self.progress; 
//         gsap.set(image, { y: `${(1 - progress) * 100}%` }); 
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => {
//         trigger.kill(); 
//       });
//     };
//   }, []);
  

//   useEffect(() => {
//     gsap.to(".SVGref", {
//       rotate: () => -360,
//       ease: "none",
//       scrollTrigger: {
//         start: -100,
//         end: "max",
//         scrub: 1,
//       },
//     });

//     smoother.current = ScrollSmoother.create({
//       smooth: 2,
//       effects: true,
//       smoothTouch: 0.1,
//     });

//     return () => {
//       smoother.current.kill();
//       ScrollTrigger.getAll().forEach((trigger) => {
//         trigger.kill();
//       });
//     };
//   }, []);
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
//     const smoother = ScrollSmoother.create({
//       smooth: 2,
//       effects: true,
//       smoothTouch: 0.1,
//     });

//     return () => {
//       smoother.kill();
//       // ... any other cleanup logic
//     };
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col">    <div
//     id="smooth-wrapper"
//     ref={main}
//     className="flex-grow items-center  justify-center"
//   >
//     <div id="smooth-content" className=" w-full">


//       <section className="flex justify-between">

//         <div className=" " data-speed=".4">
//         <img
//   ref={imageRef}
//   src="/images/cloud16.jpg"
//   alt=""
//   className="image absolute left-0"
//   style={{
//     height: "400px",
//     overflow: "hidden",
//     borderRadius: "400px",
//     position: "relative",
//     margin: "0 auto",
//     display: "flex",
//     justifyContent: "center", 
//     alignItems: "center",
//     marginLeft: "20px",
//   }}
// />
//         </div>
//         <div
// className="image-wrapper"
// ref={wrapperRef}
// style={{
//   // border: "1px solid black",
//   height: "100vh",



// }}
// >

// <img
//   ref={imageRef}
//   src="/images/cloud19.jpg"
//   alt=""
//   className="image"
//   style={{
//     height: "400px",
//     overflow: "hidden",
//     borderRadius: "400px",
//     position: "relative",
//     margin: "0 auto",
//     display: "flex",
//     justifyContent: "center", 
//     alignItems: "center",

//   }}
// />
// <div className="font-HelveticaNowVar font-extralight text-white text-4xl" style={{ whiteSpace: 'nowrap', textAlign: 'center', lineHeight: '1' }}>
// <span style={{ fontSize: '4rem' }}>Because <div className="italic" style={{ display: 'inline' }}>Every</div> Smile</span><br />
// <span style={{ fontSize: '4rem' }}>Is Unique</span>
// </div>

// <svg
// xmlns="http://www.w3.org/2000/svg"
// viewBox="0 0 440 440"
// className="SVGref"
// data-speed="1.5"
// style={{ width: "204px", height: "204px" }}
// >
//  <defs>
//   <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//     <stop offset="0%" style={{ stopColor: "#B8DBFC" }} />
//     <stop offset="100%" style={{ stopColor: "#F8FBFE" }} />
//   </linearGradient>
// </defs>
//             <path
//               d="M440,211.9l-0.6-10.3l-208,15.9l200.9-56.3l-2.9-9.8L230.6,215l182.5-101.2l-5.1-8.9L229.3,212.6L383.6,72l-7-7.5
// L227.4,210.7L345.2,38.2l-8.5-5.6L225.2,209.2l74.9-195l-9.6-3.5l-67.8,197.6l28-207.1L240.5,0L220,208L199.5,0l-10.2,1.2l28,207.1
// L149.5,10.6l-9.6,3.5l74.9,195L103.3,32.6l-8.5,5.6l117.8,172.5L63.4,64.6l-7,7.5l154.3,140.6L32,104.9l-5.1,8.9L209.4,215
// L10.6,151.4l-2.9,9.8l200.9,56.3l-208-15.9L0,211.9l208.5,8.4L2.4,252.8l1.8,10.1l204.7-40l-193,79.3l4,9.4L210,225.3L40.4,347.1
// l6.1,8.2l165.1-127.8L74.6,385.1l7.8,6.6l131.2-162.5l-97,185l9.2,4.6L216,230.4l-51.8,202.4l10,2.4l44.4-204.1L214.9,440h10.2
// l-3.8-208.9l44.4,204.2l10-2.4L224,230.5l90.2,188.4l9.2-4.6l-97-185l131.2,162.5l7.8-6.6L228.4,227.5l165.1,127.8l6.1-8.2
// L230,225.3l190,86.2l4.1-9.4l-193-79.3l204.7,40l1.8-10.1l-206.1-32.6L440,211.9z"
//             />
            
//           </svg>
//         </div>
//       </section>
//       <section className=" project__title text-center">
//         <h1>…with ScrollSmoother.</h1>
//       </section>
     
//     </div>
//   </div></div>

//   );
// };

// export default AdultOrthodontics;
