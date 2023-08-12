import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, 45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="max-w-screen-xl mx-auto parallax">
      <motion.div className="scroller" style={{ x }}>
        <span className='inline-flex space-x-8'>{children} </span>
      </motion.div>
    </div>
  );
}

export default function LogoSlider() {
  return (
    <section id="logo-slider" className="bg-primary70">
      <ParallaxText baseVelocity={-5}>
        <img
          className='object-contain w-1/6 aspect-auto'
          src="../../images/movingbannerfiles/damonlogo.png"
          alt="damon"
        />
        <img
          className='object-contain w-24 aspect-auto'
          src="../../images/movingbannerfiles/invis-logo.png"
          alt="invisalign"
        />
        <img
          className='object-contain w-1/6 aspect-auto'
          src="../../images/movingbannerfiles/readers.png"
          alt="readers choice"
        />
        <img
          className='object-contain w-1/6 aspect-auto'
          src="../../images/movingbannerfiles/Top-Dentist.png"
          alt="top-dentist"
        />
      </ParallaxText>
      <ParallaxText baseVelocity={5}>
        <img
          className='object-contain w-1/4 aspect-auto'
          src="../../images/movingbannerfiles/invis.png"
          alt="invisalign"
        />
        <img
          className='object-contain w-1/4 aspect-auto'
          src="../../images/movingbannerfiles/aao.png"
          alt="aao"
        />
        <img
          className='object-contain w-1/6 aspect-auto'
          src="../../images/movingbannerfiles/ABO.png"
          alt="ABO"
        />
        <img
          className='object-contain w-1/6 aspect-auto'
          src="../../images/movingbannerfiles/valley.jpg"
          alt="valley"
        />
        <img
          className='object-contain w-1/6 aspect-auto'
          src="../../images/movingbannerfiles/top-dentists.png"
          alt="dentists"
        />
      </ParallaxText>
    </section>
  );
}




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
