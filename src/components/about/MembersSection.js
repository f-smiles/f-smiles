import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Option= ({ image, title, subtitle, active, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const optionStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flex: "1",
    maxWidth: active ? "300px" : "30px",
    minHeight: "300px",
    margin: active ? "0px" : "10px",
    borderRadius: active ? "40px" : "30px",
    transition: "0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95",
  };
  
  const transition = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  const imageTransition = {
    type: "tween",
    ease: "linear",
  };

  return (
    
    <motion.div
    className={`option ${active ? "active" : ""} overflow-hidden cursor-pointer transition-all`}
    style={optionStyle}
    onClick={onClick}
    // animate={{
    //   flex: active ? 1 : 1,
    //   scale: active ? 1 : 1,
    

    // }}
  >
    <div className="shadow"></div>
    <div className="label">
      <div className="icon">
        <i className="fas fa-walking"></i>
      </div>
      {active && (
    <div className="info">
            <div className="main">{title}</div>
            <div className="sub">{subtitle}</div>
          </div>
      )}
    </div>
    {active && !imageLoaded && (
 <motion.img
 src={image}
 alt={title}
 style={{ display: "none" }}
 onLoad={handleImageLoad}
 initial={{ width: "0%", height: "0%" }}

 transition={{ duration: 5, type: "tween", delay: 2 }}
/>
    )}
  </motion.div>
  );
};
const MembersSection = () => {
  const optionsData = [
    {
      image: "../../images/team_members/Alyssa.jpg",
      title: 'Alyssa',
      subtitle: 'Treatment Coordinator',
    },
    {
      image: '../../images/team_members/Lexi.jpg',
      title: 'Lexi',
      subtitle: 'Treatment Coordinator',
    },
    {
      image: '../../images/team_members/Lizzie.jpg',
      title: 'Lizzie',
      subtitle: 'Patient Services',
    },
    {
      image: '../../images/team_members/Elizabeth.jpg',
      title: 'Elizabeth',
      subtitle: '    Patient Services',
    },
    {
      image: '../../images/team_members/Kayli.jpg',
      title: 'Kayli',
      subtitle: '        Financial Coordinator',
    },
    {
      image: '../../images/team_members/Adriana.jpg',
      title: 'Adriana',
      subtitle: '             Insurance Coordinator',
    },
    {
      image: '../../images/team_members/Ibis.jpg',
      title: 'Ibis',
      subtitle: '      Lab Manager',
    },
    {
      image: '../../images/team_members/Nicolle.jpg',
      title: 'Nicolle',
      subtitle: '       Specialized Orthodontic Assistant',
    },
    {
      image: '../../images/team_members/Grace.jpg',
      title: 'Grace',
      subtitle: 'Specialized Orthodontic Assistant',
    },
    {
      image: '../../images/team_members/Dana.jpg',
      title: 'Dana',
      subtitle: 'Marketing Operations',
    },
  ];

  const [activeOption, setActiveOption] = useState(0);

  const handleOptionClick = (index) => {
    setActiveOption((prevIndex) => (index === prevIndex ? prevIndex : index));
  };
  

  useEffect(() => {
    handleOptionClick(0);
  }, []); 

  return (
    
    <div>   
       <h1 className="text-2xl font-light capitalize  lg:text-4xl dark:text-white text-center">
    Our Team
  </h1>
  <p className="mt-6 md:mt-8 text-center md:text-lg xl:text-xl xl:font-medium py-10 px-20">
    Our members are X-ray certified, trained in CPR and first aid, and most
    of them have received the designation of Specialized Orthodontic
    Assistant{" "}
    <a
      className="underline transition duration-200 underline-offset-4 text-secondary40 hover:text-secondary50"
      href="https://www.trapezio.com/training-resources/course-outlines/soa-prep-course-outline/"
    >
      (SOA)
    </a>
    . This is a voluntary certification program started by the American
    Association of Orthodontists to recognize those in the profession for
    their knowledge and experience.
  </p>
<div className="flex flex-row justify-center items-center overflow-hidden h-screen transition-all">
  
<div className="flex flex-col justify-center items-start w-1/5">
  <div>
    {activeOption !== null && optionsData[activeOption] ? (
      <>
        <div className="text-2xl">{optionsData[activeOption].title}</div>
        <div>{optionsData[activeOption].subtitle}</div>
      </>
    ) : (
      ""
    )}
  </div>
</div>


  <div className="w-3/5 h-400 flex">
    {optionsData.map((option, index) => (
      <Option
        key={index}
        image={option.image}

        active={index === activeOption}
        onClick={() => handleOptionClick(index)}
      />
    ))}
  </div>
</div>
</div>

  );
};
export default MembersSection;

