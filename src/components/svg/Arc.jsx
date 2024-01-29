import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const AnimatedArcChart = ({ triggerRef }) => {
  const [currentPercent, setCurrentPercent] = useState(50); 
  const targetPercent = 30; 
  const maxArcPercent = 50; 
  const chartRef = useRef(null); 
  const lineLength = 571; 

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    if (triggerRef && triggerRef.current) {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: 'bottom bottom', 
        onEnter: () => startAnimation(),
     
      });
    }
  
    return () => {
     
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [triggerRef]);

  const startAnimation = () => {
    let timer; 

    const delay = setTimeout(() => {
      const interval = 1000 / (50 - targetPercent); 
      timer = setInterval(() => {
        setCurrentPercent(prev => {
          if (prev > targetPercent) {
            return prev - 1; 
          } else {
            clearInterval(timer); 
            return targetPercent;
          }
        });
      }, interval);
    }, 500); 

    return () => {
      clearTimeout(delay); 
      clearInterval(timer); 
    };
  };

  const visualPercent = currentPercent + (maxArcPercent - targetPercent);
  const linePercent = -Math.abs(lineLength * (1 - (visualPercent / 100)));

  return (
    <div ref={chartRef} className="flex justify-center items-center h-screen text-white">
      <figure className="relative flex justify-center items-center w-[340px] h-[190px]">
      <svg width="340" height="190" viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0">
  <defs>
    <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{ stopColor: ' #e1c6cc', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: '#dcb5ff', stopOpacity: 1 }} />
    </linearGradient>
  </defs>
  <path d="M320 170c0-82.843-67.157-150-150-150S20 87.157 20 170" stroke="rgba(255,255,255)" strokeWidth="10" fill="none" strokeLinecap="round"/>
  <path d="M320 170c0-82.843-67.157-150-150-150S20 87.157 20 170" stroke="url(#arcGradient)" strokeWidth="20" fill="none" strokeLinecap="round" style={{ strokeDasharray: lineLength, strokeDashoffset: linePercent, transition: 'all 1s' }}/>
</svg>

        <div className="flex flex-col justify-end items-center z-10">
          <div className="mt-10 text-8xl">
            <span className="number">{currentPercent}</span>
            <span className="text-3xl ml-[-0.5rem]">%</span>
          </div>
          <span className="text-2xl">Less Time</span>
        </div>
      </figure>
    </div>
  );
};

export default AnimatedArcChart;
