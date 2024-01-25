import React, { useState, useEffect } from 'react';

const AnimatedArcChart = ({ percent = 75 }) => {
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    const interval = 1000 / percent;
    const timer = setInterval(() => {
      setCurrentPercent((prev) => {
        if (prev < percent) {
          return prev + 1;
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, interval);
    return () => clearInterval(timer);
  }, [percent]);

  const lineLength = 471; // Approximate total length of the SVG path
  const linePercent = -Math.abs(lineLength * (1 - (currentPercent / 100)));

  return (
<div className="flex justify-center items-center h-screen  text-white">
  <figure className="relative flex justify-center items-center w-[340px] h-[190px]">
    <svg width="340" height="190" viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0">
      <path d="M320 170c0-82.843-67.157-150-150-150S20 87.157 20 170" stroke="rgba(50, 114, 188, .3)" strokeWidth="40" fill="none" strokeLinecap="round"/>
    </svg>
    <svg width="340" height="190" viewBox="0 0 340 190" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0">
      <path d="M320 170c0-82.843-67.157-150-150-150S20 87.157 20 170" stroke="#3272BC" strokeWidth="40" fill="none" strokeLinecap="round" style={{ strokeDasharray: lineLength, strokeDashoffset: linePercent, transition: 'all 1s' }}/>
    </svg>
    <div className="flex flex-col justify-end items-center z-10">
      <div className="text-8xl font-bold">
        <span className="number">{currentPercent}</span>
        <span className="text-3xl ml-[-0.5rem]">%</span>
      </div>
      <span className="text-2xl">Profile complete</span>
    </div>
  </figure>
</div>
  );
};

export default AnimatedArcChart;
