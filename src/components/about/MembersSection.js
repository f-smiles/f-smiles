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
    backgroundSize: active ? "contain" : "cover",

    flex: "1",
    maxWidth: active ? "300px" : "20px",
    minHeight: active ? "300px" : "200px",
    margin: active ? "0px" : "10px",
    borderRadius: active ? "40px" : "30px",
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
    animate={{
      flex: active ? 1 : 1,
      scale: active ? 1 : 1,
      transition: { ...transition, ...imageTransition },
    }}
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
 animate={{ x: 100 }}
 transition={{ delay: 1 }}
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
      title: 'Specialized Orthodontic Assistant',
      subtitle: '        Nicolle',
    },
    {
      image: '../../images/team_members/Grace.jpg',
      title: 'Specialized Orthodontic Assistant',
      subtitle: '       Grace',
    },
    {
      image: '../../images/team_members/Dana.jpg',
      title: 'Marketing Operations',
      subtitle: '       Dana',
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
<div className="flex flex-row justify-center items-center overflow-hidden h-screen transition-all">
<div className="flex flex-col justify-center items-start w-1/5">
  <div>
    {activeOption !== null && optionsData[activeOption] ? (
      <>
        <div>{optionsData[activeOption].title}</div>
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


  );
};
export default MembersSection;
// let memberCardRef = useRef(null);
  // let { scrollYProgress } = useScroll({
  //   target: memberCardRef,
  //   offset: ["start start", "end start"]
  // });
  // let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // return (
  //   <div className="flex flex-col items-center justify-center px-0 py-0 md:px-14 xl:px-8">
  //     <div className="max-w-screen-lg px-12 text-primary30">
  //       <h1 className="text-3xl leading-10 tracking-wide text-center md:text-4xl xl:text-4xl xl:font-medium">
  //         Our Members
  //       </h1>
  //       <p className="mt-6 md:mt-8 text-md md:text-lg xl:text-xl xl:font-medium sm:text-left md:text-center">
  //         Our members are X-ray certified, trained in CPR and first aid and most
  //         of them have received the designation of Specialized Orthodontic
  //         Assistant{" "}
  //         <a
  //           className="underline transition duration-200 underline-offset-4 text-secondary40 hover:text-secondary50"
  //           href="https://www.trapezio.com/training-resources/course-outlines/soa-prep-course-outline/"
  //         >
  //           (SOA)
  //         </a>
  //         . This is a voluntary certification program started by the American
  //         Association of Orthodontists to recognize those in the profession for
  //         their knowledge and experience.
  //       </p>
  //     </div>
  //     <div className="relative flex items-center justify-center px-12 mt-8 xl:mt-14 md:px-10 2xl:px-14">
  //       {/* <img
  //         className="absolute top-0 left-0 z-0 object-cover lg:w-72 h-44 xl:h-60"
  //         src="../../images/team_members/cross_background_blush.svg"
  //         alt="pattern"
  //       />
  //       <img
  //         className="absolute bottom-0 right-0 z-0 object-cover lg:w-72 h-44 xl:h-60"
  //         src="../../images/team_members/cross_background_blush.svg"
  //         alt="pattern"
  //       /> */}
  //       <div className="relative z-10 flex flex-col items-center justify-center w-full space-y-4 sm:space-y-6 xl:space-y-0 xl:flex-row xl:space-x-6">
  //         <section className="flex flex-col items-center justify-center sm:justify-start sm:flex-row sm:items-start">
  //           <motion.div
  //             style={{ y }}
  //             className="flex flex-col items-center justify-center w-64 px-6 py-10 mb-4 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 hover:shadow-xl "
  //           >
  //             <img
  //               className="w-3/4 xl:w-48 2xl:w-48"
  //               src="../../images/team_members/Alyssa.jpg"
  //               alt="Alyssa"
  //             />
  //             <div className="flex flex-col items-center justify-center space-y-1 text-primary20">
  //               <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5">
  //                 Alyssa
  //               </p>
  //               <p className="leading-4.5 text-center">
  //                 Treatment Coordinator
  //               </p>
  //             </div>
  //           </motion.div>
  //           <motion.div
  //             style={{ y }}
  //             className="flex flex-col items-center justify-center w-64 px-6 py-10 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 sm:mt-14 xl:mt-32 hover:shadow-xl"
  //           >
  //             <img
  //               className="w-3/4 xl:w-48 2xl:w-48"
  //               src="../../images/team_members/Lexi.jpg"
  //               alt="Lexi"
  //             />
  //             <div className="flex flex-col items-center justify-center space-y-1 text-primary20">
  //               <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5">
  //                 Lexi
  //               </p>
  //               <p className="leading-4.5 text-center ">
  //                 Treatment Coordinator
  //               </p>
  //             </div>
  //           </motion.div>
  //         </section>
  //         <section className="flex flex-col items-center justify-center sm:justify-start sm:flex-row sm:items-start ">
          
  //           <motion.div
  //             style={{ y }}
  //             className="flex flex-col items-center justify-center w-64 px-6 py-10 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 sm:mt-14 xl:mt-32 hover:shadow-xl"
  //           >
  //             <img
  //               className="w-3/4 xl:w-48 2xl:w-48"
  //               src="../../images/team_members/Lizzie.jpg"
  //               alt="avatar 4"
  //             />
  //             <div className="flex flex-col items-center justify-center space-y-1 text-primary20">
  //               <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5">
  //                 Lizzie
  //               </p>
  //               <p className="leading-4.5 text-center ">
  //                 Patient Services
  //               </p>
  //             </div>
  //           </motion.div>
  //           <motion.div
  //             style={{ y }}
  //             className="flex flex-col items-center justify-center w-64 px-6 py-10 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 sm:mt-14 xl:mt-32 hover:shadow-xl "
  //           >
  //             <img
  //               className="w-3/4 xl:w-48 2xl:w-48"
  //               src="../../images/team_members/Elizabeth.jpg"
  //               alt="Elizabeth"
  //             />
  //             <div className="flex flex-col items-center justify-center space-y-1 text-primary20">
  //               <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5">
  //                 Elizabeth
  //               </p>
  //               <p className="leading-4.5 text-center">
  //                 Patient Services
  //               </p>
  //             </div>
  //           </motion.div>
  //         </section>
  //       </div>
  //     </div>
  //     <div className="relative flex items-center justify-center px-12 mt-8 xl:mt-14 md:px-10 2xl:px-14">

  //       <div className="relative z-10 flex flex-col items-center justify-center w-full space-y-4 sm:space-y-6 xl:space-y-0 xl:flex-row xl:space-x-6">
  //         <section className="flex flex-col items-center justify-center sm:justify-start sm:flex-row sm:items-start">
  //           <motion.div
  //             style={{ y }}
  //             className="flex flex-col items-center justify-center w-64 px-6 py-10 mb-4 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 hover:shadow-xl"
  //           >
  //             <img
  //               className="w-3/4 xl:w-48 2xl:w-48"
  //               src="../../images/team_members/Kayli.jpg"
  //               alt="Kayli"
  //             />
  //             <div className="flex flex-col items-center justify-center space-y-1 text-primary20">
  //               <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5">
  //                 Kayli
  //               </p>
  //               <p className="leading-4.5 text-center ">
  //                 Financial Coordinator
  //               </p>
  //             </div>
  //           </motion.div>
  //           <motion.div
  //             style={{ y }}
  //             className="flex flex-col items-center justify-center w-64 px-6 py-10 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 sm:mt-14 xl:mt-32 hover:shadow-xl"
  //           >
  //             <img
  //               className="w-3/4 xl:w-48 2xl:w-48"
  //               src="../../images/team_members/Adriana.jpg"
  //               alt="Adriana"
  //             />
  //             <div className="flex flex-col items-center justify-center space-y-1 text-primary20">
  //               <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5 ">
  //                 Adriana
  //               </p>
  //               <p className="leading-4.5 text-center ">
  //                 Insurance Coordinator
  //               </p>
  //             </div>
  //           </motion.div>
  //         </section>
  //         <section className="flex flex-col items-center justify-center sm:justify-start sm:flex-row sm:items-start">
  //           <motion.div
  //             style={{ y }}
  //             className="flex flex-col items-center justify-center w-64 px-6 py-10 mb-4 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 hover:shadow-xl"
  //           >
  //             <img
  //               className="w-3/4 xl:w-48 2xl:w-48"
  //               src="../../images/team_members/Ibis.jpg"
  //               alt="Ibis"
  //             />
  //             <div className="flex flex-col items-center justify-center space-y-1 text-primary20">
  //               <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5 ">
  //                 Ibis
  //               </p>
  //               <p className="leading-4.5 text-center ">Lab Manager</p>
  //             </div>
  //           </motion.div>
        
  //         </section>
  //       </div>
  //     </div>
  //     <div className="relative flex items-center justify-center px-12 mt-8 xl:mt-14 md:px-10 2xl:px-14">
  //       <img
  //         className="absolute top-0 left-0 z-0 object-cover lg:w-72 h-44 xl:h-60"
  //         src="../../images/team_members/cross_background_blush.svg"
  //         alt="pattern"
  //       />
  //       <img
  //         className="absolute bottom-0 right-0 z-0 object-cover lg:w-72 h-44 xl:h-60"
  //         src="../../images/team_members/cross_background_blush.svg"
  //         alt="pattern"
  //       />
  //       <div className="relative z-10 flex flex-col items-center justify-center w-full space-y-4 sm:space-y-6 xl:space-y-0 xl:flex-row xl:space-x-6">
  //         <section className="flex flex-col items-center justify-center sm:justify-start sm:flex-row sm:items-start">
  //           <motion.div
  //             style={{ y }}
  //             className="flex flex-col items-center justify-center w-64 px-6 py-10 mb-4 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 hover:shadow-xl"
  //           >
  //             <img
  //               className="w-3/4 xl:w-48 2xl:w-48"
  //               src="../../images/team_members/Nicolle.jpg"
  //               alt="Nicolle"
  //             />
  //             <div className="flex flex-col items-center justify-center space-y-2 text-primary20">
  //               <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5">
  //                 Nicolle
  //               </p>
  //               <p className="leading-4.5 text-center">
  //                 Specialized Orthodontic Assistant
  //               </p>
  //             </div>
  //           </motion.div>
  //           <motion.div
  //             style={{ y }}
  //             className="flex flex-col items-center justify-center w-64 px-6 py-10 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 sm:mt-14 xl:mt-32 hover:shadow-xl"
  //           >
  //             <img
  //               className="w-3/4 xl:w-48 2xl:w-48"
  //               src="../../images/team_members/Grace.jpg"
  //               alt="Grace"
  //             />
  //             <div className="flex flex-col items-center justify-center space-y-2 text-primary20">
  //               <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5">
  //                 Grace
  //               </p>
  //               <p className="leading-4.5 text-center">
  //                 Specialized Orthodontic Assistant
  //               </p>
  //             </div>
  //           </motion.div>
  //         </section>
  //         <section className="flex flex-col items-center justify-center sm:justify-start sm:flex-row sm:items-start">
       
       
  //           <motion.div
  //             style={{ y }}
  //             className="flex flex-col items-center justify-center w-64 px-6 py-10 mb-4 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 hover:shadow-xl"
  //           >
  //             <img
  //               className="w-3/4 xl:w-48 2xl:w-48"
  //               src="../../images/team_members/Dana.jpg"
  //               alt="Dana"
  //             />
  //             <div className="flex flex-col items-center justify-center space-y-1 text-primary20">
  //               <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5">
  //                 Dana
  //               </p>
  //               <p className="leading-4.5 text-center">
  //                 Marketing Operations
  //               </p>
  //             </div>
  //           </motion.div>
  //         </section>
  //       </div>
  //     </div>
  //   </div>
  // );
