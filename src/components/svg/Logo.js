import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const LogoGrid = () => {

  const logos = [
    ['../../images/movingbannerfiles/damonlogo_invert.png', '../../images/movingbannerfiles/invis-logo_invert.png', '../../images/movingbannerfiles/readers.png'], 
    ['../../images/movingbannerfiles/topDentist_logo.png', '../../images/movingbannerfiles/aao_invert.png', 'l../../images/movingbannerfiles/invisalign_invert.png'], 
    ['../../images/movingbannerfiles/ABO.png', '../../images/movingbannerfiles/damonlogo_invert.png', '../../images/movingbannerfiles/valley.png'], 
    ['../../images/movingbannerfiles/readers.png', '../../images/movingbannerfiles/top-Dentist.png', './../images/movingbannerfiles/invis-logo_invert.png'] 
  ];
  const [activeLogos, setActiveLogos] = useState(logos.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogos(currentActive =>
        currentActive.map((active, idx) => (active + 1) % logos[idx].length)
      );
    }, 2000); 

    return () => clearInterval(interval);
  }, []);


  return (
   <div className=" mx-auto">
    <div className=" logo-grid grid grid-cols-4">
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
  </div> 
  
  );
};

export default LogoGrid;

 