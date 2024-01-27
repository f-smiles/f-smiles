import React, { useEffect } from 'react';
import gsap from 'gsap';

const AnimatedBalls = () => {
  useEffect(() => {
    // GSAP animations
    // ... Your existing animation code ...
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* Parent Container */}
      <div className="relative w-full">
        <div className="flex justify-center">
          {/* Horizontal Line: 50% of parent's width */}
          <div className="border border-black w-2/3 transform rotate-1"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBalls;
