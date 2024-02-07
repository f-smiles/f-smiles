// import React, { useState, useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// const AnimatedArcChart = ({ triggerRef }) => {
//   const [currentPercent, setCurrentPercent] = useState(50); 
//   const targetPercent = 30; 
//   const maxArcPercent = 50; 
//   const chartRef = useRef(null); 
//   const lineLength = 571; 

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
  
//     if (triggerRef && triggerRef.current) {
//       ScrollTrigger.create({
//         trigger: triggerRef.current,
//         start: 'bottom bottom', 
//         onEnter: () => startAnimation(),
     
//       });
//     }
  
//     return () => {
     
//       ScrollTrigger.getAll().forEach(t => t.kill());
//     };
//   }, [triggerRef]);

//   const startAnimation = () => {
//     let timer; 

//     const delay = setTimeout(() => {
//       const interval = 1000 / (50 - targetPercent); 
//       timer = setInterval(() => {
//         setCurrentPercent(prev => {
//           if (prev > targetPercent) {
//             return prev - 1; 
//           } else {
//             clearInterval(timer); 
//             return targetPercent;
//           }
//         });
//       }, interval);
//     }, 500); 

//     return () => {
//       clearTimeout(delay); 
//       clearInterval(timer); 
//     };
//   };

//   const visualPercent = currentPercent + (maxArcPercent - targetPercent);
//   const linePercent = -Math.abs(lineLength * (1 - (visualPercent / 100)));

//   return (
//     <div ref={chartRef} className="flex justify-center items-center h-screen text-white">
//       <figure className="relative flex justify-center items-center w-[340px] h-[190px]">
//       <svg width="340" height="190" viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0">
//   <defs>
//     <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//       <stop offset="0%" style={{ stopColor: ' #e1c6cc', stopOpacity: 1 }} />
//       <stop offset="100%" style={{ stopColor: '#dcb5ff', stopOpacity: 1 }} />
//     </linearGradient>
//   </defs>
//   <path d="M320 170c0-82.843-67.157-150-150-150S20 87.157 20 170" stroke="rgba(255,255,255)" strokeWidth="10" fill="none" strokeLinecap="round"/>
//   <path d="M320 170c0-82.843-67.157-150-150-150S20 87.157 20 170" stroke="url(#arcGradient)" strokeWidth="20" fill="none" strokeLinecap="round" style={{ strokeDasharray: lineLength, strokeDashoffset: linePercent, transition: 'all 1s' }}/>
// </svg>

//         <div className="flex flex-col justify-end items-center z-10">
//           <div className="mt-10 text-8xl">
//             <span className="number">{currentPercent}</span>
//             <span className="text-3xl ml-[-0.5rem]">%</span>
//           </div>
//           <span className="text-2xl">Less Time</span>
//         </div>
//       </figure>
//     </div>
//   );
// };

// export default AnimatedArcChart;

import React, { useEffect, useRef } from 'react';
import { gsap, Power3 } from 'gsap';

const CircularProgress = ({ percentage = 85, speed = 10 }) => {
  const barRef = useRef(null);

  const drawProgress = (percent) => {
    const angle = percent * 360;
    const paddedRadius = 50;
    const radians = (angle * Math.PI / 180);
    const x = Math.sin(radians) * paddedRadius;
    const y = Math.cos(radians) * -paddedRadius;
    const mid = (angle > 180) ? 1 : 0;
    const pathData = `M 50 50 v -${paddedRadius} A ${paddedRadius} ${paddedRadius} 1 ${mid} 1 ${50 + x} ${50 + y} z`;

    barRef.current.setAttribute('d', pathData);
  };

  useEffect(() => {
    gsap.to({}, {
      x: percentage / 100,
      duration: speed,
      ease: Power3.easeOut,
      onUpdate: function () {
        drawProgress(this.targets()[0].x);
      }
    });
  }, [percentage, speed]);

  return (
    <div id="dashed-circle-progress" className="flex justify-center items-center h-screen">
      <svg className="progress-radial" width="300px" height="400px" viewBox="0 0 120 120" shape-rendering="geometricPrecision">
        <defs>
          <mask id="circle_mask" x="0" y="0" width="100" height="100" maskUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="51" stroke-width="0" fill="black" opacity="1"/>
            <circle r="50" cx="50" cy="50" fill="transparent" strokeDasharray="1" strokeDashoffset="1000" stroke="white" strokeWidth="9"/>
            <circle className="progress-radial-mask-inner" cx="50" cy="50" r="40" strokeWidth="0" fill="black" opacity="1"/>
          </mask>
        </defs>
        <g mask="url(#circle_mask)">
          <circle className="progress-radial-track" cx="50" cy="50" r="50" fill="white"/>
          <path ref={barRef} className="progress-radial-bar" fill="#66cdc3"/>
        </g>
      </svg>
    </div>
  );
};

export default CircularProgress;
