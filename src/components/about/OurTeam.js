import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { gsap } from "gsap-trial";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { SplitText } from "gsap-trial/all";
import * as PIXI from 'pixi.js';
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
    maxWidth: active ? "300px" : "50px",
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
      className={`option ${
        active ? "active" : ""
      } cursor-pointer transition-all`}
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

export default function OurTeam() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = 3; 
  const spritesRef = useRef([]);
  const displacementFilterRef = useRef(null);

  useEffect(() => {
      let app = new PIXI.Application({
          width: 800,
          height: 600,
          transparent: true,
      });
      document.getElementById('pixi-canvas').appendChild(app.view);

      const imageUrls = [
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/j110.jpg',
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/j104.jpg',
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/j42.jpg'
      ];

      let sprites = imageUrls.map(url => {
          let sprite = PIXI.Sprite.from(url);
          sprite.visible = false; 
          app.stage.addChild(sprite);
          return sprite;
      });


      sprites[0].visible = true;

      let displacementSprite = PIXI.Sprite.from('https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/disp5.jpg');
      displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
      displacementSprite.skew.x = 1;
      displacementSprite.skew.y = -1;
      displacementSprite.position.y = 380;
      displacementSprite.scale.y = 1.8;
      displacementSprite.scale.x = 1.8;
      app.stage.addChild(displacementSprite);
  
      let displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
      sprites.forEach(sprite => sprite.filters = [displacementFilter]);
      
      spritesRef.current = sprites;
      displacementFilterRef.current = displacementFilter;

      function onArrowKeyPress(e) {
          if (e.keyCode === 37 || e.keyCode === 39) { 
              changeImage((currentImageIndex + (e.keyCode === 39 ? 1 : -1) + totalImages) % totalImages);
          }
      }

      window.addEventListener('keydown', onArrowKeyPress);

      return () => {
          window.removeEventListener('keydown', onArrowKeyPress);
          app.destroy();
      };
  }, []);




  const handlePrevClick = () => {
      changeImage((currentImageIndex - 1 + totalImages) % totalImages);
  };

  const handleNextClick = () => {
      changeImage((currentImageIndex + 1) % totalImages);
  };
  const optionsData = [
    {
      image: "../../images/team_members/Alyssa.jpg",
      title: "Alyssa",
      subtitle: "Treatment Coordinator",
    },
    {
      image: "../../images/team_members/Lexi.jpg",
      title: "Lexi",
      subtitle: "Treatment Coordinator",
    },
    {
      image: "../../images/team_members/Lizzie.jpg",
      title: "Lizzie",
      subtitle: "Patient Services",
    },
    {
      image: "../../images/team_members/Elizabeth.jpg",
      title: "Elizabeth",
      subtitle: "    Patient Services",
    },
    {
      image: "../../images/team_members/Kayli.jpg",
      title: "Kayli",
      subtitle: "        Financial Coordinator",
    },
    {
      image: "../../images/team_members/Adriana.jpg",
      title: "Adriana",
      subtitle: "             Insurance Coordinator",
    },
    {
      image: "../../images/team_members/Ibis.jpg",
      title: "Ibis",
      subtitle: "      Lab Manager",
    },
    {
      image: "../../images/team_members/Nicolle.jpg",
      title: "Nicolle",
      subtitle: "       Specialized Orthodontic Assistant",
    },
    {
      image: "../../images/team_members/Grace.jpg",
      title: "Grace",
      subtitle: "Specialized Orthodontic Assistant",
    },
    {
      image: "../../images/team_members/Dana.jpg",
      title: "Dana",
      subtitle: "Marketing Operations",
    },
  ];
  const [index, setIndex] = useState(1);
  const [switchDoctor, setSwitchDoctor] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleSwitchDoctor = () => {
    setSwitchDoctor(!switchDoctor);
    setShowParagraph(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowParagraph(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [switchDoctor]);
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("team-section");
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;

      if (
        scrollPosition >=
        sectionTop - window.innerHeight + sectionHeight / 2
      ) {
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
    setActiveOption((prevOption) =>
      prevOption > 0 ? prevOption - 1 : prevOption
    );
  };

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

  const textScrubRef = useRef(null);

  useEffect(() => {
    if (textScrubRef.current) {
      const words = Array.from(textScrubRef.current.querySelectorAll(".word"));
      gsap.to(words, {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: textScrubRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,

          onUpdate: (self) => {
            const scrubProgress = self.progress;

            words.forEach((word, index) => {
              const wordProgress = index / words.length;
              gsap.to(word, {
                opacity: wordProgress <= scrubProgress ? 1 : 0.2,
                immediateRender: false,
              });
            });
          },
        },
      });
    }
  }, []);

  const splitToWords = (text) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="word" style={{ opacity: 0.2 }}>
        {word}{" "}
      </span>
    ));
  };

  return (
    <main className="relative overflow-hidden min-h-screen">
   <div className="slider-container">
            <div id="pixi-canvas" className="w-full h-full"></div>
            <button onClick={handlePrevClick} className="arrow-button left-arrow">Prev</button>
            <button onClick={handleNextClick} className="arrow-button right-arrow">Next</button>
        </div>
      {/* <svg 
    className="absolute top-0 left-0 w-full h-full  z-[-1]" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ height: '100%' }}
  >
  <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
  <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
  <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
  <line x1="40%" y1="0" x2="40%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
  <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
  <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
  <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
  <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
  <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
  <line x1="100%" y1="0" x2="100%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
</svg> */}

      <div className="mt-40 font-HelveticaNowPro font-thin tracking-tight tracking-tighter px-6 py-10 mx-auto">

        <div className="xl:flex xl:items-start xl:-mx-4">
          <div className="xl:w-1/2 xl:mx-4">

            <h1 className="text-center font-HelveticaNowPro font-thin tracking-tight tracking-tighter lg:text-5xl dark:text-white">
              Our Doctors
            </h1>


       
      <div className="flex justify-center items-center w-full h-full">
      <img 
    className="pt-6 w-32 h-auto" 
    src="/images/dots.svg" 
    alt="squiggly design"
  />
  </div>
            {/* doctor bio */}
            <div className=" text-lg text-center relative z-20 max-w-2xl mt-6  ">
              {showParagraph && (
                <p
                  className={`transition-opacity duration-500 ${
                    showParagraph ? "opacity-100 animate-fade-in" : "opacity-0"
                  }`}
                >
                  {switchDoctor
                    ? "Dr. Daniel Frey began his journey in orthodontics at the University of Pittsburgh where he majored in Biology. He excelled in his studies and was admitted to Temple University's dental school, graduating at the top of his class, Summa Cum Laude. Continuing his education, Dr. Frey was admitted to the esteemed orthodontic residency program at the University of the Pacific in San Francisco where he worked with students and faculty from around the world and utilized cutting-edge orthodontic techniques. During his time in San Francisco, he conducted research in three-dimensional craniofacial analysis and earned his Master of Science degree. Dr. Frey is a member of the American Association of Orthodontists and the American Dental Association. In his leisure time, he enjoys staying active outdoors, camping, and spending time with loved ones."
                    : "Dr. Gregg Frey is an orthodontist based in Pennsylvania, who graduated from Temple University School of Dentistry with honors and served in the U.S. Navy Dental Corps before establishing his practice in the Lehigh Valley. He is a Diplomat of the American Board of Orthodontics and has received numerous distinctions, accreditations, and honors, including being named one of America's Top Orthodontists by the Consumer Review Council of America. This distinction is held by fewer than 25% of orthodontists nationwide. ABO certification represents the culmination of 5-10 years of written and oral examinations and independent expert review of actual treated patients. Recently Dr. Frey voluntarily re-certified. Dr. Frey enjoys coaching soccer, vintage car racing, and playing the drums."}
                </p>
              )}
            </div>
          </div>
         
          <div className="grid grid-cols-2 gap-8 mt-8 place-items-stretch xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
            
            <div>
            <figure className="parent">
    <img
        className={`${switchDoctor ? "right" : "switch-right"} object-contain aspect-[2/3] transition-all ease-in-out duration-3000`}
        src="../../images/team_members/GreggFrey.jpg"
        alt="Dr. Gregg Frey"
    />
    <img
        className={`${switchDoctor ? "left" : "switch-left"} object-contain aspect-[2/3] transition-all ease-in-out duration-3000`}
        src="../../images/team_members/DanFrey.jpg"
        alt="Dr. Daniel Frey"
    />
</figure>

              <figcaption>
                <div className="text-xl text-gray-700 font-HelveticaNowPro font-thin tracking-tight tracking-tighter ">
                  {!switchDoctor ? "Dr. Gregg Frey" : "Dr. Daniel Frey"}
                </div>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 font-HelveticaNowPro">
                  {!switchDoctor ? "DDS" : "DMD, MSD"}
                </p>
              </figcaption>
            </div>
       
            <div className="hidden mt-3 md:block">
              <figure
                className="parent smaller grayscale hover:cursor-pointer"
                onClick={toggleSwitchDoctor}
              >
                <img
                  className={`${
                    switchDoctor ? "right" : "switch-right"
                  } object-contain aspect-[2/3] transition-all duration-500`}
                  src="../../images/team_members/DanFrey.jpg"
                  alt="Dr. Daniel Frey"
                />
                <img
                  className={`${
                    switchDoctor ? "left" : "switch-left"
                  } object-contain aspect-[2/3] transition-all duration-1000`}
                  src="../../images/team_members/GreggFrey.jpg"
                  alt="Dr. Gregg Frey"
                />
              </figure>
            </div>
            <div
    id="controls"
    className="flex items-center justify-center -mt-10 space-x-4 text-gray-700 dark:text-white"
  >
    <button
      className="p-2 transition duration-300 ease-in-out border-2 rounded-full hover:border-primary50 hover:cursor-pointer"
      onClick={toggleSwitchDoctor}
    >
      <ArrowLeftIcon className="z-0 w-5 h-5 text-primary50" />
    </button>
    <span>0{!switchDoctor ? index : index + 1} - 02</span>
    <button
      className="p-2 transition duration-300 ease-in-out border-2 rounded-full hover:border-primary50 hover:cursor-pointer"
      onClick={toggleSwitchDoctor}
    >
      <ArrowRightIcon className="z-0 w-5 h-5 text-primary50" />
    </button>
  </div>
          </div>
        </div>
      </div>
      <div className="relative ">
        <div
          // style={{
          //   backgroundImage: `url('/images/wavyline2.png')`,
          //   backgroundSize: "contain",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          // }}
        >
          <div className=" my-24 text-center">
          <div className="font-geomanistregular uppercase font-bold text-[12vw]">Meet the Team</div>


            <div className="flex justify-center items-center w-full h-full">
      <img 
    className="pt-6 w-48 h-auto" 
    src="/images/whitedots.svg" 
    alt="squiggly design"
  />
  </div>
            <p
              ref={textScrubRef}
              className="mx-auto text-3xl text-center max-w-3xl"
            >
              {splitToWords(`Our team members are X-ray certified, trained in CPR and first aid, and most of them have
    received the designation of Specialized Orthodontic Assistant`)}
              <a
                className="word text-2xl transition duration-200 text-secondary40 hover:text-secondary50"
                style={{ opacity: 0.2 }}
                href="https://www.trapezio.com/training-resources/course-outlines/soa-prep-course-outline/"
              >
                (SOA)
              </a>
              {splitToWords(`. This is a voluntary certification program started by the American Association of
    Orthodontists to recognize those in the profession for their knowledge and experience.`)}
            </p>
          </div>

          <div
            className="absolute inset-0 w-full h-full"
            ref={smootherRef}
            id="team-section"
          ></div>
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
      </div>
    </main>
  );
}