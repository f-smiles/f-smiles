import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const LogoGrid = () => {

  const logos = [
    ['../../images/movingbannerfiles/damonlogo_invert.png', '../../images/movingbannerfiles/invis-logo_invert.png', '../../images/movingbannerfiles/readers.png'], // Logos for column 1
    ['../../images/movingbannerfiles/topDentist_logo.png', '../../images/movingbannerfiles/aao_invert.png', 'l../../images/movingbannerfiles/invisalign_invert.png'], // Logos for column 2
    ['../../images/movingbannerfiles/ABO.png', '../../images/movingbannerfiles/damonlogo_invert.png', '../../images/movingbannerfiles/valley.png'], // Logos for column 3
    ['../../images/movingbannerfiles/readers.png', '../../images/movingbannerfiles/topDentist_logo.png', './../images/movingbannerfiles/invis-logo_invert.png'] // Logos for column 4
  ];
  const [activeLogos, setActiveLogos] = useState(logos.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogos(currentActive =>
        currentActive.map((active, idx) => (active + 1) % logos[idx].length)
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="logo-grid  grid grid-cols-4">
    {logos.map((columnLogos, columnIndex) => (
      <div key={columnIndex} className="column">
        {columnLogos.map((logo, logoIndex) => (
          <div 
            key={logoIndex} 
            className={`grid-logo-wrapper ${activeLogos[columnIndex] === logoIndex ? 'active' : ''}`}
          >
            <img src={logo} alt={`Logo ${logoIndex + 1}`} />
          </div>
        ))}
      </div>
    ))}
  </div>
  
  );
};

export default LogoGrid;

    // <section id="logo-slider" className="my-8 space-y-4">
    //   <ParallaxText baseVelocity={-5}>
    //     <img
    //       className='object-contain h-[48px] my-auto aspect-auto'
    //       src="../../images/movingbannerfiles/damonlogo_invert.png"
    //       alt="damon"
    //     />
    //     <img
    //       className='object-contain w-24 aspect-auto'
    //       src="../../images/movingbannerfiles/invis-logo_invert.png"
    //       alt="invisalign"
    //     />
    //     <img
    //       className='object-contain my-auto h-28 aspect-auto'
    //       src="../../images/movingbannerfiles/readers.png"
    //       alt="readers choice"
    //     />
    //     <img
    //       className='object-contain my-auto h-[64px] aspect-auto'
    //       src="../../images/movingbannerfiles/topDentist_logo.png"
    //       alt="top-dentist"
    //     />
    //   </ParallaxText>
    //   <ParallaxText baseVelocity={5}>
    //     <img
    //       className='object-contain my-auto h-18 aspect-auto'
    //       src="../../images/movingbannerfiles/invisalign_invert.png"
    //       alt="invisalign"
    //     />
    //     <img
    //       className='object-contain h-16 my-auto aspect-auto'
    //       src="../../images/movingbannerfiles/aao_invert.png"
    //       alt="aao"
    //     />
    //     <img
    //       className='object-contain h-32 aspect-auto'
    //       src="../../images/movingbannerfiles/ABO_invert.png"
    //       alt="ABO"
    //     />
    //     <img
    //       className='object-contain h-28 aspect-auto'
    //       src="../../images/movingbannerfiles/valley.png"
    //       alt="best of the valley 2018"
    //     />
    //   </ParallaxText>
    // </section>


// import React, { useRef } from "react";

// const LogoSlider = () => {
//   const sliderRef = useRef(null);
//   const minImageSize = "50px";
//   const maxImageSize = "100px";

//   const logoSliderStyle = {
//     overflow: "hidden",
//     width: "200vw",
//     margin: "0 auto",
//     position: "relative",
//     display: "flex",
//     animation: "marquee 30s linear infinite",
//     lineHeight: "0",
//   };

//   const imgStyle = {
//     display: "block",
//     minWidth: `var(--image-size, ${maxImageSize})`,
//     height: "200px",
//     objectFit: "contain",
//     // mixBlendMode: "color-burn",
//     margin: "0 1vw",
//     boxSizing: "border-box",
//   };

//   const afterStyle = {
//     content: '""',
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     left: "0",
//     top: "0",
//     background:
//       "linear-gradient(to right, white, rgba(white, 0) 80px, rgba(white, 0) calc(100% - 80px), white)",
//   };

//   const mediaQueryStyle = {
//     "--image-size": `min(max(${minImageSize}, 10vw), ${maxImageSize})`,
//   };

//   const handleMouseEnter = () => {
//     sliderRef.current.style.animationPlayState = "paused";
//   };

//   const handleMouseLeave = () => {
//     sliderRef.current.style.animationPlayState = "running";
//   };

//   return (
//     <div
//       className="mt-20 bg-rose-200"
//       style={logoSliderStyle}
//       ref={sliderRef}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {[...Array(2)].map((_, index) => (
//         <React.Fragment key={index}>
//           <img
//             src="../../images/movingbannerfiles/damonlogo.png"
//             style={imgStyle}
//             alt="damon"
//           />
//           <img
//             src="../../images/movingbannerfiles/invis-logo.png"
//             style={imgStyle}
//             alt="invisalign"
//           />
//           <img
//             src="../../images/movingbannerfiles/invis.png"
//             style={imgStyle}
//             alt="invisalign"
//           />
//           <img
//             src="../../images/movingbannerfiles/readers.png"
//             style={imgStyle}
//             alt="readers choice"
//           />
//           <img
//             src="../../images/movingbannerfiles/Top-Dentist.png"
//             style={imgStyle}
//             alt="top-dentist"
//           />
//           <img
//             src="../../images/movingbannerfiles/aao.png"
//             style={imgStyle}
//             alt="Image"
//           />
//           <img
//             src="../../images/movingbannerfiles/ABO.png"
//             style={imgStyle}
//             alt="ABO"
//           />
//           <img
//             src="../../images/movingbannerfiles/valley.jpg"
//             style={imgStyle}
//             alt="valley"
//           />
//           <img
//             src="../../images/movingbannerfiles/top-dentists.png"
//             style={imgStyle}
//             alt="dentists"
//           />
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// export default LogoSlider;
