import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { gsap } from "gsap-trial";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { SplitText } from "gsap-trial/all";
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);
const Option = ({ image, title, subtitle, active, onClick }) => {


  const [imageLoaded, setImageLoaded] = useState(false);


  const handleImageLoad = () => {
    setImageLoaded(true);
  };


  const optionStyle = {
    filter: active ? "none" : "grayscale(100%)", 
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
      className={`option ${active ? "active" : ""} cursor-pointer transition-all`}
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

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("team-section");
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= sectionTop - window.innerHeight + sectionHeight / 2) {
        setAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const handleNextMember = () => {
    setActiveOption((prevOption) =>
      prevOption < optionsData.length - 1 ? prevOption + 1 : prevOption
    );
  };

  const handlePrevMember = () => {
    setActiveOption((prevOption) => (prevOption > 0 ? prevOption - 1 : prevOption));
  };
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
  const smootherRef = useRef(null);
  const textRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      content: smootherRef.current,
      smooth: 3,
      normalizeScroll: true,
      ignoreMobileResize: true,
      effects: true,
    });
  
    smoother.effects("img", { speed: "auto" });
  
    const heading = textRef.current;
    const mySplitText = new SplitText(heading, { type: "chars" });
    const chars = mySplitText.chars;
  
    chars.forEach((char, i) => {
      smoother.effects(char, { lag: (i + 2) * 0.1, speed: 1 });
    });
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heading,
        start: 'top 20%',
        end: 'bottom 10%',
        scrub: 2,
        markers: false,
        toggleActions: 'play none play reset'
      }
    });
  
    const itemSplitted = new SplitText(heading, { type: 'lines' });
    tl.from(itemSplitted.lines, { y: 100, opacity: 0, stagger: 0.05, duration: 0.5, ease: 'back.inOut' });
  
    return () => {

    };
  }, []);
  
  return (
    <div className="relative ">
      <div className="absolute inset-0 w-full h-full" ref={smootherRef} 
      id="team-section">
        <div className="my-24 text-center">
          <h1
            ref={textRef}
            className="js-splittext-lines text-2xl font-bold text-center"
          >
            Split by <span className="text-pink-500">LINES:</span>        Our members are X-ray certified, trained in CPR and first aid, and most of them have
          received the designation of Specialized Orthodontic Assistant{" "}
          <a
            className="text-6xl  underline transition duration-200 underline-offset-4 text-secondary40 hover:text-secondary50"
            href="https://www.trapezio.com/training-resources/course-outlines/soa-prep-course-outline/"
          >
            (SOA)
          </a>
          . This is a voluntary certification program started by the American Association of
          Orthodontists to recognize those in the profession for their knowledge and experience.
          </h1>
        </div>
       
        {/*  
  <div className=" my-24 text-center" ref={smootherRef}>
        <h1 className="text-6xl font-bold text-center js-splittext-lines" ref={textRef}>
         
        </h1>
        <p className="text-6xl  mt-6 md:mt-8 text-center md:text-lg tex py-2 px-20">
          Our members are X-ray certified, trained in CPR and first aid, and most of them have
          received the designation of Specialized Orthodontic Assistant{" "}
          <a
            className="text-6xl  underline transition duration-200 underline-offset-4 text-secondary40 hover:text-secondary50"
            href="https://www.trapezio.com/training-resources/course-outlines/soa-prep-course-outline/"
          >
            (SOA)
          </a>
          . This is a voluntary certification program started by the American Association of
          Orthodontists to recognize those in the profession for their knowledge and experience.
        </p>
      </div> */}
      </div>
      <div>
        <div className="font-HelveticaNowPro  tracking-tight tracking-tighter flex flex-row justify-center items-center overflow-hidden h-screen transition-all">
          <div className="flex flex-col justify-center items-start w-1/5">
            <div className=" flex items-center w-full -mt-40">
              <button
                onClick={handlePrevMember}
                disabled={activeOption === 0}
                className="p-2 transition duration-300 ease-in-out border-2 rounded-full hover:border-black hover:cursor-pointer"
                style={{ display: "flex", alignItems: "center" }}
              >
                <ArrowLeftIcon className="z-0 w-5 h-5 text-primary50" />
              </button>
              <span className="mx-4">
                {(activeOption + 1).toString().padStart(2, "0")} -{" "}
                {optionsData.length}
              </span>

              <button
                onClick={handleNextMember}
                disabled={activeOption === optionsData.length - 1}
                className="p-2 transition duration-300 ease-in-out border-2 rounded-full hover:border-black hover:cursor-pointer"
                style={{ display: "flex", alignItems: "center" }}
              >
                <ArrowRightIcon className="z-0 w-5 h-5 text-primary50" />
              </button>
            </div>
            <div className="mt-20">
              {activeOption !== null && optionsData[activeOption] ? (
                <>
                  <div style={{ position: "relative" }}>
                    <div
                      className="text-2xl"
                      style={{
                        borderBottom: "1px solid black",
                        paddingBottom: "5px",
                      }}
                    >
                      {optionsData[activeOption].title}
                    </div>
                    <div style={{ paddingTop: "10px" }}>
                      {optionsData[activeOption].subtitle}
                    </div>
                  </div>
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
   
    </div>
  );
};
export default MembersSection;

