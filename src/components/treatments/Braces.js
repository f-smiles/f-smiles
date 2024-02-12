// import React, { useState, useEffect, useRef } from 'react';
// import { gsap } from "gsap";
// import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// const Braces = () => {

//   const [scrollY, setScrollY] = useState(0);
//   const repeatedText = 'DAMON BRACKET '.repeat(100);
//   const secondNumberOfImages = 5;
//   const rowImageTwo = "images/damon.png";

//   const images = [
//     "images/boyflossing.jpeg",
//     "images/damon.png",
//     "images/damonpatient1.png",

//   ];

//   const handleScroll = () => {
//     setScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="font-helvetica m-0 h-[300vh] overflow-x-hidden"

// >
// <div
//     style={{
//       backgroundImage: `url("../../images/whitesquiggle.png")`,
//       backgroundRepeat: "no-repeat",
//       backgroundSize: "cover",
//       backgroundPosition: "center center",
//       height: '100vh',
//     }}>
//       </div>

//       <div className="title-container"
//       >
//       <div className="title text-[calc(100vw/24*3)] uppercase leading-none whitespace-nowrap m-0 transition-all duration-100 ease-out"
//             style={{ transform: `translateX(-${scrollY}px)` }}>
//           {repeatedText}
//         </div>
//       </div>

//       <div className="image-container whitespace-nowrap transition-all duration-100 ease-out"
//            style={{ transform: `translateX(${scrollY}px)` }}>
//         {Array.from({ length: secondNumberOfImages }, (_, index) => (
//           <img key={index} src={rowImageTwo} alt={`Damon ${index + 1}`} className="inline-block" />
//         ))}
//       </div>

//       <div className="title-container">
//         <div className="title reverse text-[calc(100vw/24*3)] uppercase leading-none whitespace-nowrap m-0 transition-all duration-100 ease-out"
//             style={{ transform: `translateX(-${scrollY}px)` }}>
//           DAMON BRACKET DAMON BRACKET
//         </div>
//       </div>

//       <div className="image-container reverse whitespace-nowrap transition-all duration-100 ease-out"
//      style={{ transform: `translateX(-${scrollY}px)` }}>
//   {images.map((image, index) => (
//     <img
//       key={index}
//       src={image}
//       alt={`patients`}
//       className={`inline-block ${index % 2 === 0 ? 'w-80 h-80 object-cover' : 'h-auto w-auto max-w-80 max-h-80'}`}
//     />
//   ))}
// </div>

//     </div>
//   );
// };

// export default Braces;

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const MyComponent = () => {

  const [scrollY, setScrollY] = useState(0);
  const repeatedText = 'LEHIGH VALLEY TOP PROVIDER '.repeat(100);
  const secondNumberOfImages = 5;
  const rowImageTwo = "images/damon.png";

  const images = [
    "images/boyflossing.jpeg",
    "images/damon.png",
    "images/damonpatient1.png",

  ];

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const sceneRefs = useRef([]);
  const imgRef = useRef();

  const addToRefs = (el) => {
    if (el && !sceneRefs.current.includes(el)) {
      sceneRefs.current.push(el);
    }
  };

  useEffect(() => {

    const totalSpread = 800;
    const startPositions = sceneRefs.current.map((_, index) => {
      const numLetters = sceneRefs.current.length;
      return (index - (numLetters - 1) / 2) * (totalSpread / (numLetters - 1));
    });

    sceneRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { x: startPositions[index], y: -50, opacity: 0 },
        {
          x: 0,
          y: 50,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.1,
        }
      );
    });


    gsap.fromTo(
      imgRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 0.8, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.1 }
    );
  }, []);

  return (
    <div className="slider min-h-screen flex flex-col">
      {/* Main content area */}
      <div className="flex-grow relative">
        <img
          ref={imgRef}
          src="images/whitesquiggle.png"
          alt="Descriptive Alt Text"
          className="object-cover h-full w-full"
        />

        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center z-10">
          {/* DAMON Text */}
          <div style={{fontSize: '10rem'}} className="font-Marcellus text-center">
            {["D", "A", "M", "O", "N"].map((letter, index) => (
              <span key={index} ref={addToRefs} className="inline-block">{letter}</span>
            ))}
          </div>

          {/* BRACKET Text */}
          <div style={{fontSize: '10rem'}} className="font-Marcellus mt-20">
            {['B', 'R', 'A', 'C', 'K', 'E', 'T'].map((letter, index) => (
              <span key={index} ref={addToRefs} className="inline-block">{letter}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="title-container"
      >
      <div className="title text-[calc(100vw/24*3)] uppercase leading-none whitespace-nowrap m-0 transition-all duration-100 ease-out"
            style={{ transform: `translateX(-${scrollY}px)` }}>
          {repeatedText}
        </div>
      </div>

      <div className="image-container whitespace-nowrap transition-all duration-100 ease-out"
           style={{ transform: `translateX(${scrollY}px)` }}>
        {Array.from({ length: secondNumberOfImages }, (_, index) => (
          <img key={index} src={rowImageTwo} alt={`Damon ${index + 1}`} className="inline-block" />
        ))}
      </div>

      <div className="title-container">
        <div className="title reverse text-[calc(100vw/24*3)] uppercase leading-none whitespace-nowrap m-0 transition-all duration-100 ease-out"
            style={{ transform: `translateX(-${scrollY}px)` }}>
          DAMON BRACKET DAMON BRACKET
        </div>
      </div>

      <div className="image-container reverse whitespace-nowrap transition-all duration-100 ease-out"
     style={{ transform: `translateX(-${scrollY}px)` }}>
  {images.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`patients`}
      className={`inline-block ${index % 2 === 0 ? 'w-80 h-80 object-cover' : 'h-auto w-auto max-w-80 max-h-80'}`}
    />
  ))}
</div>
    </div>
  );
};

export default MyComponent;


// <main className="w-full px-4 pt-16">
//   <div className="mx-auto w-full max-w-screen-lg rounded-2xl bg-white p-2">
//     <span>Different Types of Braces</span>
//     <p>
//       Thanks to today's advances in orthodontic technology, FreySmiles
//       Orthodontics can provide our patients with more options than ever
//       before when it comes to wearing different types of braces when
//       undergoing treatment in Allentown, Bethlehem, Schnecksville and
//       Lehighton PA areas.Not only do our doctors lessen your time in braces by combining clear aligners to finish your case we use most hygenic fasting moving brackets common misalignments such as major rotation
//     </p>
//     <p>
//       As experts in various treatment types, our doctors will help you
//       determine which treatment choice is right for you. Our goal is the
//       best, most beautiful, healthy smile of your lifetime!
//     </p>
//     <span>Metal Braces</span>
//     <p>
//       Damon Braces are tieless braces that don't need to be tightened and
//       are gentle to the teeth and tissues. Other style braces use elastic
//       ties or active clips to bind archwires in place, which can slow down
//       tooth movement and cause pain and are more difficult to keep clean.
//       Our braces system also uses titanium wires. These type light,
//       memory-shape wires have excellent formability and great efficiency
//       range for gentle tooth movement. As the leader in the area for Damon
//       Braces, we can give you a great smile, in less time and with more
//       comfort.
//     </p>
//     <span>What is Invisalign?</span>
//     <p>
//       Invisalign uses a series of customized, clear aligners to straighten
//       teeth faster and with fewer office visits than traditional braces.
//       Thousands of orthodontists in the United States and Canada use
//       Invisalign to accurately and effectively treat their patients. This
//       type of treatment in the hands of experts delivers fantastic results.
//       Aligners are:
//     </p>
//     <ul>
//       <li>
//         Completely invisible - aligners cannot be seen while you are wearing
//         them! Friends, family members and co-workers may never even know you
//         are wearing aligners, unless of course, you tell them!
//       </li>
//       <li>
//         Comfortable to wear - The aligners are made from a special plastic
//         that has smooth, rounded edges so they won't irritate your mouth and
//         tissues like traditional braces often can.
//       </li>
//       <li>
//         Customized just for you - Your aligners are customized to fit your
//         mouth. Dr. Frey and Dr. Frey uses advanced 3-D computer imaging
//         technology to replicate an exact impression of your mouth and teeth,
//         then our doctors customize each aligner treatment plan specific to
//         your needs. This RX is sent to the lab that fabricates a series of
//         your custom aligners so that they fit your mouth, and over time they
//         move your teeth into the proper position.
//       </li>
//       <li>
//         Removable - Unlike traditional metal braces, you can remove your
//         aligners to eat, drink, brush your teeth, floss and for special
//         occasions. There's no need to change your lifestyle with Invisalign!
//       </li>
//       <li>
//         Effective - You will begin to notice a significant difference even
//         before your treatment is complete! Most treatments are completed
//         within one year; however, this can vary from patient to patient.
//       </li>
//     </ul>
//     <span>Why Consider Invisalign</span>
//     <p>
//       People everywhere are beginning to experience the benefits of
//       treatment. Here's why people just like you are choosing Invisalign
//       over traditional braces:
//     </p>
//     <ul>
//       <li>
//         You can have a straighter, healthier smile without all the
//         noticeable wires and brackets of traditional braces.
//       </li>
//       <li>
//         Aligners are removable making it easy for you to enjoy the foods you
//         love without worrying about breaking or bending your brackets and
//         wires. You can also remove your Invisalign aligners to brush and
//         floss regularly.
//       </li>
//       <li>
//         You don't need to change anything about your current lifestyle! With
//         Invisalign, you can continue participating in day-to-day activities
//         without changing a thing. Invisalign is great for professionals,
//         athletes, brides, and parents.
//       </li>
//       <li>
//         Office visits and checkups are easy, quick, and painless. Fewer
//         appointments are required throughout your entire treatment.
//       </li>
//     </ul>
//     <span>Choose Experience for Your Invisalign Treatment</span>
//     <p>
//       The science of Invisalign is not in the clear aligners, but in overall
//       design and prescription for tooth movement by our doctors based on the
//       full facial evaluation to craft the smile that is perfect for you. Our
//       experienced doctors are top experts and providers in clear aligner
//       treatment. Beware of mail-order aligner companies. Your smile and
//       health is nothing to take lightly. An orthodontic, on-site evaluation
//       with full digital x-rays and records is necessary to prescribe the
//       correct path to a safe and healthy result. Dr. Gregg Frey and Dr.
//       Daniel Frey have the expert tools and experience in Invisalign
//       treatment to give you a fantastic FreySmile!
//     </p>
//   </div>
// </main>