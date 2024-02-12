import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { gsap, Power3 } from "gsap-trial";
AOS.init();
const FlipCard = ({ value }) => {

  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(true);
    const timer = setTimeout(() => setFlipped(false), 600);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className={`flip-card ${flipped ? "flipped" : ""}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">{value}</div>
        <div className="flip-card-back">{value}</div>
      </div>
    </div>
  );
};

const YourCare = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const formatDigit = (digit) => digit.toString().padStart(2, "0");
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsOpen(true);
   
      const contentTimer = setTimeout(() => {
        setShowContent(true);
      }, 1000); 

      return () => clearTimeout(contentTimer);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleShutter = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      setTimeout(() => setShowContent(true), 1000); 
    } else {
      setShowContent(false);
    }
  };
  const heroRef = useRef(null);
  const girlImageRef = useRef(null);
  const boyImageRef = useRef(null);
  const sectionRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.from(girlImageRef.current, {
              y: 300,
              ease: Power3.easeOut,
              duration: 1.2,
            });

            gsap.from(girlImageRef.current.children[0], {
              scale: 1.6,
              ease: Power3.easeOut,
              duration: 2,
              delay: 0.3,
            });

            gsap.from(boyImageRef.current, {
              y: 150,
              ease: Power3.easeOut,
              duration: 1.2,
              delay: 0.2,
            });

            gsap.from(boyImageRef.current.children[0], {
              scale: 1.6,
              ease: Power3.easeOut,
              duration: 2,
              delay: 0.3,
            });

            observer.current.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (heroRef.current) {
      observer.current.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.current.unobserve(heroRef.current);
      }
    };
  }, []);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const transitionStart = 40;
      const transitionEnd = 800;
      const scrollPercentage = Math.min(
        1,
        Math.max(
          0,
          (scrollPosition - transitionStart) / (transitionEnd - transitionStart)
        )
      );

      const startColor = [247, 239, 238];
      const endColor = [204, 222, 206];

      const interpolatedColor = startColor.map((start, i) => {
        const end = endColor[i];
        return Math.round(start + (end - start) * scrollPercentage);
      });

      setBackgroundColor(`rgb(${interpolatedColor.join(",")})`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const image = "../../images/wave.webp";
  <a href="https://pngtree.com/freepng/color-circle-time-flow-chart_5453938.html"></a>;

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <ul
          className={`c-shutter ${isOpen ? "c-shutter--opened" : ""}`}
       
        >
          {[...Array(10)].map((_, i) => (
            <li key={i} className="c-shutter__slat"></li>
          ))}
        </ul>
        {showContent && (
          <div className="content"
          style={{ 
            backgroundImage: `url('/images/pinkcircle.png')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        
          }}>
            <div className="clock-container">
              <FlipCard value={formatDigit(time.getHours())} />
              <FlipCard value={formatDigit(time.getMinutes())} />
              <FlipCard value={formatDigit(time.getSeconds())} />
            </div>
          </div>
        )}
      </div>
      <div className="pt-2" style={{ minHeight: "200vh", backgroundColor }}>
        <div className="">
          <div className="mt-40 py-2 px-24 grid grid-cols-3 ">
            <div className="col-span-1 text-white ml-1 py-2 flex items-center"></div>
          </div>
          <div className="flex">
            <div className="w-1/2 relative z-10 flex flex-col items-center">
              <h1 className="font-HelveticaNowVar font-thin text-5xl text-center mt-12 mb-10 animation">
                Getting Started
              </h1>

              <div className="flex justify-center">
                <div className="flex flex-col items-center mx-4">
                  <h3
                    className="border border-gray-300 text-center text-xl text-lime-900 mb-2 rounded-full px-4 py-2"
                    style={{
                      width: "80px",
                      height: "80px",
                      lineHeight: "60px",
                    }}
                  >
                    1
                  </h3>
                  <p>
                    Book a personalized consultation with one of our doctors,
                    either virtually or in person.
                  </p>
                </div>
                <div className="flex flex-col items-center mx-4">
                  <h3
                    className="border border-gray-300 text-center text-xl text-lime-900 mb-2 rounded-full px-4 py-2"
                    style={{
                      width: "80px",
                      height: "80px",
                      lineHeight: "60px",
                    }}
                  >
                    2
                  </h3>
                  <p>
                    Your first appointment will consist of a thorough
                    orthodontic examination including photos and a digital
                    radiograph of your teeth.
                  </p>
                </div>
                <div className="flex flex-col items-center mx-auto">
                  <h3
                    className="border border-gray-300 text-center text-xl text-lime-900 mb-2 rounded-full px-4 py-2"
                    style={{
                      width: "80px",
                      height: "80px",
                      lineHeight: "60px",
                    }}
                  >
                    3
                  </h3>
                  <p>
                    Discover the ideal solution for your needs, free from any
                    financial obligations or commitments.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center items-center">
              <div className="md:w-1/2 flex justify-center items-center">
                <div
                  className="relative mx-2"
                  style={{ width: "300px", height: "240px" }}
                >
                  <img
                    className="rounded-full opacity-90 w-full h-full object-cover"
                    src="../../images/carepatient1.png"
                    alt="patient"
                    style={{ objectPosition: "40% 50%" }}
                  />
                </div>
                <div
                  className="relative mx-2"
                  style={{ width: "300px", height: "300px" }}
                >
                  <img
                    className="rounded-full opacity-90 w-full h-full object-cover"
                    src="../../images/carepatient2.png"
                    alt="patient"
                    style={{ objectPosition: "10% 50%" }}
                  />
                </div>

                <div
                  className="relative mx-2"
                  style={{ width: "300px", height: "340px" }}
                >
                  <img
                    className="rounded-full opacity-90 w-full h-full object-cover"
                    src="../../images/carepatient3.png"
                    alt="patient"
                  />
                </div>
                <div
                  className="relative mx-2"
                  style={{ width: "330px", height: "400px" }}
                >
                  <img
                    className="rounded-full opacity-90 w-full h-full object-cover"
                    src="../../images/carepatient4.png"
                    alt="patient"
                    style={{ objectPosition: "40% 50%" }}
                  />
                </div>
                <div
                  className="relative mx-2"
                  style={{ width: "300px", height: "480px" }}
                >
                  <img
                    className="rounded-full opacity-90 w-full h-full object-cover"
                    src="../../images/freysmilepatient1.jpg"
                    alt="patient"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section style={{ minHeight: "200vh", backgroundColor }}>
          <div className="md:flex max-h-full px-12 pb-12 pt-40">
            <div className="md:w-1/2 flex justify-center items-center relative">
              <div className={`your-care ${isScrolled ? "scrolled" : ""}`}>
                <div ref={heroRef} className="hero h-screen">
                  <div ref={girlImageRef} className="hero-image ">
                    <img src={image} />
                  </div>
            
                </div>

                <div
                  className="md:w-1/2 flex justify-center items-center"
                  style={{
                    filter: "brightness(0) invert(1)",
                    zIndex: 2,
                    width: "200px",
                    height: "auto",
                    position: "absolute",
                    top: -40,
                    right: 20,
                  }}
                >
                  Monitor development
                  <img src="../../images/flowchart.png" alt="scan" />
                </div>

                <div
                  className="glass-overlay"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    zIndex: 3,
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    pointerEvents: "none",
                  }}
                >
                  {[...Array(10)].map((_, index) => (
                    <div
                      key={index}
                      className="glass"
                      // style={{
                      //   width: 'calc(100% / 12)',
                      //   background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 10%, rgba(4, 9, 20, 0) 70%, rgba(255, 255, 255, 0.05) 110%)',
                      //   // backdropFilter: 'blur(1.5px)',
                      // }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center relative">
              <div className="rounded-full overflow-hidden flex-shrink-0">
            
              </div>
              <div ref={boyImageRef} className="hero-image boy">
                  <div className="ml-6">
                <h3 className="font-HelveticaNowVar font-thin text-5xl mb-14 mt-20">
                  Growth and Guidance
                </h3>
                <div className="paragraph-with-background">
                  <p>
                    The American Association of Orthodontists (AAO) recommends
                    an orthodontic evaluation by age 7 to assess potential
                    treatment needs. If immediate treatment isn't necessary,
                    you'll be enrolled in our FreySmiles Club, where you'll
                    receive biannual and annual check-ins to monitor your
                    progress. Early intervention can simplify or eliminate the
                    need for extensive treatment later on. Our collaboration
                    with your family dentist ensures comprehensive care
                    throughout your treatment.
                  </p>
                </div>
              </div>
                  </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="550"
            data-aos-easing="linear"
            className="rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-md md:flex  max-h-full px-12 "
          >
            <div className="">
              <>
                <h3 className="font-HelveticaNowVar font-thin text-5xl text-center mb-10">
                  Pricing
                </h3>
                <p>
                  Since treatment plans and payment options may be discussed, we
                  ask that a parent or guardian be present for the first visit.
                  Including everyone who will be making this important decision
                  helps us communicate thoroughly. We want our patients to leave
                  the office with a clear understanding of their specific
                  treatment plan, so don’t hesitate to ask questions.
                </p>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <colgroup>
                    <col style={{ width: "33%" }} />
                    <col style={{ width: "33%" }} />
                    <col style={{ width: "33%" }} />
                  </colgroup>
                  <tr>
                    <td
                      style={{
                        border: "1px solid #B3B3B5",
                        padding: "8px",
                        fontSize: "18px",
                        textAlign: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-shield-plus"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        strokeWidth=".5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ display: "block", margin: "0 auto" }}
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12.462 20.87c-.153 .047 -.307 .09 -.462 .13a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 .11 6.37" />
                        <path d="M16 19h6" />
                        <path d="M19 16v6" />
                      </svg>
                      <div style={{ paddingTop: "10px" }}>
                        Please bring your insurance card if you have orthodontic
                        coverage
                      </div>
                    </td>
                    <td
                      style={{
                        border: "1px solid #B3B3B5",
                        padding: "8px",
                        fontSize: "18px",
                        textAlign: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-discount-check"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        strokeWidth=".5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ display: "block", margin: "0 auto" }}
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
                        <path d="M9 12l2 2l4 -4" />
                      </svg>
                      FSA/HSA dollars are accepted
                    </td>

                    <td
                      style={{
                        border: "1px solid #B3B3B5",
                        padding: "8px",
                        fontSize: "18px",
                        textAlign: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="option check"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        strokeWidth=".5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ display: "block", margin: "0 auto" }}
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
                        <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
                        <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
                        <path d="M11 6l9 0" />
                        <path d="M11 12l9 0" />
                        <path d="M11 18l9 0" />
                      </svg>
                      <div style={{ marginTop: "5px" }}>Payment Plans</div>
                    </td>
                  </tr>
                </table>
              </>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default YourCare;

// const YourCare = () => {
//   const [activeAccordion, setActiveAccordion] = useState([
//     false,
//     false,
//     false,
//     false,
//   ]);

//   const toggleAccordion = (index) => {
//     setActiveAccordion((prevState) =>
//       prevState.map((isActive, i) => (i === index ? !isActive : false))
//     );
//   };

//   return (
//     <div className="my-60 flex justify-center items-start">
//       <div className="max-w-screen-xl flex mx-4">
//         <div className="flex-1">
//           <div className="flex flex-col justify-start">
//             <div
//               className={` py-3 px-4 flex justify-between items-center cursor-pointer select-none ${
//                 activeAccordion[0] ? "bg-white" : ""
//               }`}
//               onClick={() => toggleAccordion(0)}
//             >
//               <h2 className="flex text-lg font-medium ml-16 text-indigo-700 ">Your First Visit</h2>
//               <svg
//                 className={`h-6 w-6 transform ${
//                   activeAccordion[0] ? "rotate-180" : ""
//                 }`}
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={activeAccordion[0] ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
//                 />
//               </svg>
//             </div>
//             <div
//               className={`overflow-hidden transition-all duration-1000 ${
//                 activeAccordion[0] ? "max-h-96" : "max-h-0"
//               }`}
//             >
//               <p>
// During your initial visit you’ll get to know some of the friendly
// faces of the FreySmiles orthodontic team and see what makes us
// unique. We are always excited about meeting new patients. Your first
// appointment will consist of a thorough orthodontic examination
// including photos, a digital radiograph of your teeth, and a
// discussion of your options. This important 60-90 minute visit will
// give us a picture of your orthodontic needs.
//               </p>
//             </div>
//                      <div className={`border-t border-indigo-300 border-t-1 border-indigo-300 py-3 px-4 flex justify-between items-center cursor-pointer select-none ${
//             activeAccordion[1]  ? "bg-white" : ""
//           }`}
//           onClick={() => toggleAccordion(1)}
//         >
//           <h2 className="text-lg font-medium ml-16">Accordion Item #2</h2>
//           <svg
//             className={`h-6 w-6 transform ${
//               activeAccordion[1]  ? "rotate-180" : ""
//             }`}
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d={activeAccordion[1]  ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
//             />
//           </svg>
//         </div>
//         <div
//           className={`overflow-hidden transition-all duration-1000 ${
//             activeAccordion[1] ? "max-h-96" : "max-h-0"
//           }`}
//         >
//           <p>
//             Many times we are able to save you a return trip back to office and
//             can start treatment at your first visit. We know you’ll be excited
//             to see your new FreySmile!
//           </p>
//         </div>
//         <div
//           className={`border-t border-indigo-300 py-3 px-4 flex justify-between items-center cursor-pointer select-none ${
//             activeAccordion[2]  ? "bg-white" : ""
//           }`}
//           onClick={() => toggleAccordion(2)}
//         >
//           <h2 className="text-lg font-medium ml-16 text-indigo-700">Growth And Guidance</h2>
//           <svg
//             className={`h-6 w-6 transform ${
//               activeAccordion[2]  ? "rotate-180" : ""
//             }`}
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d={activeAccordion[2]  ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
//             />
//           </svg>
//         </div>
//         <div
//           className={`overflow-hidden transition-all duration-1000 ${
//             activeAccordion[2] ? "max-h-96" : "max-h-0"
//           }`}
//         >
//           <p>
//             {" "}
//             If braces are not needed right away, you will be enrolled in our
//             complementary growth and guidance program, called our Future
//             FreySmiles Club, where we will see you every 6-12 months to monitor
//             your progress. Timing is extremely important for us to be able to
//             provide the best results and to deliver your new smile as quickly as
//             possible. These visits for a “peace of mind policy” cost you
//             nothing! We’ll also be working with your family dentist before and
//             during braces to provide you with the highest level of care.
//           </p>
//         </div>
//         <div
//           className={`border-t border-indigo-300 py-3 px-4 flex justify-between items-center cursor-pointer select-none ${
//             activeAccordion[3] ? "bg-white" : ""
//           }`}
//           onClick={() => toggleAccordion(3)}
//         >
//           <h2 className="text-lg font-medium ml-16 text-indigo-700">What To Bring</h2>
//           <svg
//             className={`h-6 w-6 transform ${
//               activeAccordion[3]  ? "rotate-180" : ""
//             }`}
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d={activeAccordion[3] ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
//             />
//           </svg>
//         </div>
//         <div
//           className={`overflow-hidden transition-all duration-1000 ${
//             activeAccordion[3] ? "max-h-96" : "max-h-0"
//           }`}
//         >
//           <p >
//             {" "}
//             Since treatment plans and payment options may be discussed, we ask
//             that a parent or guardian be present for the first visit. Including
//             everyone who will be making this important decision helps us
//             communicate thoroughly. We are an insurance friendly office so
//             please assist us by bringing your insurance card if you have
//             orthodontic coverage. We want our patients to leave the office with
//             a clear understanding of their specific treatment plan, so don’t
//             hesitate to ask questions.
//           </p>
//         </div>
//           </div>
//         </div>
//         <div className="flex-1 flex justify-end">
// <div className=" max-h-96 overflow-hidden">
// <img className="opacity-90 w-full h-auto" src="../../images/itero.png" alt="scan" style={{ maxWidth: '100%', maxHeight: '100%' }} />
//   </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default YourCare;