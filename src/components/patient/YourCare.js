import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

AOS.init();

const YourCare = () => {
  const image = '../../images/wave.webp';
  <a href='https://pngtree.com/freepng/color-circle-time-flow-chart_5453938.html'></a>


  const [isHovered, setIsHovered] = useState(false);
  const images = [
    '../images/patient-charlotte.jpeg',
    '../images/landon.jpeg',
    '../images/youngboy.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const getTransitionStyle = () => {
    return {
      backgroundImage: `url(${images[currentImageIndex]})`,
      transition: 'background-image 1s ease-in-out'
    };
  };

  return (
    <>
      <div className="bg-F7EFEE pt-2">
        <div >
          <div className="mt-40 py-2 px-24 grid grid-cols-3 ">
            <div
              className="col-span-1 text-white ml-1 py-2 flex items-center"


            >

            </div>

          </div>
          <div className="flex">


            <div className="w-1/2 relative z-10 flex flex-col items-center">
              <h1 className="font-HelveticaNowVar font-thin text-5xl text-center mt-12 mb-10">
                Getting Started
              </h1>
              <div className="flex justify-center">
                <div className="flex flex-col items-center mx-4">
                  <h3
                    className="border border-gray-300 text-center text-xl text-lime-900 mb-2 rounded-full px-4 py-2"
                    style={{ width: "80px", height: "80px", lineHeight: "60px" }}
                  >
                    1
                  </h3>
                  <p>
                    Book a personalized consultation with one of our doctors, either virtually or in person.
                  </p>
                </div>
                <div className="flex flex-col items-center mx-4">
                  <h3
                    className="border border-gray-300 text-center text-xl text-lime-900 mb-2 rounded-full px-4 py-2"
                    style={{ width: "80px", height: "80px", lineHeight: "60px" }}
                  >
                    2
                  </h3>
                  <p>
                    Your first appointment will consist of a thorough orthodontic
                    examination including photos and a digital radiograph of your teeth.
                  </p>
                </div>
                <div className="flex flex-col items-center mx-auto">
                  <h3
                    className="border border-gray-300 text-center text-xl text-lime-900 mb-2 rounded-full px-4 py-2"
                    style={{ width: "80px", height: "80px", lineHeight: "60px" }}
                  >
                    3
                  </h3>
                  <p>
                    Discover the ideal solution for your needs, free from any financial obligations or commitments.
                  </p>
                </div>
              </div>

            </div>



            <div className="md:w-1/2 flex justify-center items-center">
              <div className="md:w-1/2 flex justify-center items-center">
                <div className="relative mx-2" style={{ width: "300px", height: "240px" }}>
                  <img
                    className="rounded-full opacity-90 w-full h-full object-cover"
                    src="../../images/carepatient1.png"
                    alt="patient"
                    style={{ objectPosition: "40% 50%" }}
                  />
                </div>
                <div className="relative mx-2" style={{ width: "300px", height: "300px" }}>
                  <img
                    className="rounded-full opacity-90 w-full h-full object-cover"
                    src="../../images/carepatient2.png"
                    alt="patient"
                    style={{ objectPosition: "10% 50%" }}
                  />
                </div>

                <div className="relative mx-2" style={{ width: "300px", height: "340px" }}>
                  <img
                    className="rounded-full opacity-90 w-full h-full object-cover"
                    src="../../images/carepatient3.png"
                    alt="patient"
                  />
                </div>
                <div className="relative mx-2" style={{ width: "330px", height: "400px" }}>
                  <img
                    className="rounded-full opacity-90 w-full h-full object-cover"
                    src="../../images/carepatient4.png"
                    alt="patient"
                    style={{ objectPosition: "40% 50%" }}
                  />
                </div>
                <div className="relative mx-2" style={{ width: "300px", height: "480px" }}>
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
        <section className="my-16  space-y-24">

          <div
            data-aos="fade-up"
            data-aos-duration="1050"
            data-aos-easing="linear"
            className=" rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-md md:flex max-h-full px-12 pb-12 pt-20"
          >
            <div className="md:w-1/2 flex justify-center items-center relative">
              <div style={{ position: 'relative' }}>
                <img
                  src={image}
                  alt="Background"
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div
                  className="md:w-1/2 flex justify-center items-center"
                  style={{
                    filter: 'brightness(0) invert(1)',
                    zIndex: 2,
                    width: '200px',
                    height: 'auto',
                    position: 'absolute',
                    top: -40,
                    right: 20,
                  }}
                >Monitor development
                  <img
                    src="../../images/flowchart.png"
                    alt="scan"
                  />
                </div>

                <div
                  className="glass-overlay"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    zIndex: 3,
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    pointerEvents: 'none',
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
                <div
                  className="object-cover w-full h-full"
                  style={getTransitionStyle()}
                ></div>
              </div>
              <div className="ml-6">
                <h3 className="font-HelveticaNowVar font-thin text-5xl mb-14 mt-20">
                  Growth and Guidance
                </h3>
                <div className="paragraph-with-background">
                  <p>
                    The American Association of Orthodontists (AAO) recommends an orthodontic evaluation by age 7 to assess potential treatment needs.

                    If immediate treatment isn't necessary, you'll be enrolled in our FreySmiles Club, where you'll receive biannual and annual check-ins to monitor your progress. Early intervention can simplify or eliminate the need for extensive treatment later on. Our collaboration with your family dentist ensures comprehensive care throughout your treatment.
                  </p>
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
                  Since treatment plans and payment options may be discussed, we ask that a parent or guardian be present for the first visit. Including everyone who will be making this important decision helps us communicate thoroughly. We want our patients to leave the office with a clear understanding of their specific treatment plan, so don’t hesitate to ask questions.
                </p>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <colgroup>
                    <col style={{ width: "33%" }} />
                    <col style={{ width: "33%" }} />
                    <col style={{ width: "33%" }} />
                  </colgroup>
                  <tr>
                    <td style={{ border: "1px solid #B3B3B5 ", padding: "8px", fontSize: "18px" }}> Please bring your insurance card if you have orthodontic coverage</td>
                    <td style={{ border: "1px solid #B3B3B5 ", padding: "8px", fontSize: "18px" }}>FSA/HSA dollars are accepted</td>
                    <td style={{ border: "1px solid #B3B3B5 ", padding: "8px", fontSize: "18px" }}>Payment Plans</td>
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
