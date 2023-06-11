import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const YourCare = () => {
  return (
    <>
      <section className="my-16  space-y-24">
        <div
          data-aos="fade-up"
          data-aos-duration="750"
          data-aos-easing="linear"
          className="bg-stone-900 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-md md:flex  max-h-full px-12 pb-12 pt-20"
        >
          <div >
            <h3 className="text-2xl text-lime-900 uppercase mb-14 mt-20">Your First Visit</h3>
            <p className="text-lime-900">
              During your initial visit, you'll get to know some of the friendly
              faces of the FreySmiles orthodontic team and see what makes us
              unique. We are always excited about meeting new patients. Your
              first appointment will consist of a thorough orthodontic
              examination including photos, a digital radiograph of your teeth,
              and a discussion of your options. This important 60-90 minute
              visit will give us a picture of your orthodontic needs.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              className="opacity-90 "
              src="../../images/itero.png"
              alt="scan"
              style={{ maxWidth: "80%", maxHeight: "80%" }}
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1050"
          data-aos-easing="linear"
          className="brounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-md md:flex  max-h-full px-12 pb-12 pt-20"
        >
          <div className="md:w-1/2">
            <h3 className="text-2xl text-lime-900 uppercase mb-14 mt-20">Growth and Guidance</h3>
            <p>
              If braces are not needed right away, you will be enrolled in our
              FreySmiles Club, where we will see you every 6-12 months to
              monitor your progress. Timing is extremely important for us to be
              able to provide the best results and to deliver your new smile as
              quickly as possible. These visits for a “peace of mind policy”
              cost you nothing! We’ll also be working with your family dentist
              before and during braces to provide you with the highest level of
              care.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              className="opacity-90 "
              src="../../images/freysmilecartoon.jpg"
              alt="scan"
              style={{ maxWidth: "80%", maxHeight: "80%" }}
            />
          </div>
          
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="550"
          data-aos-easing="linear"
          className="rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-md md:flex  max-h-full px-12 pb-12 pt-20"
        >
          <div className="md:w-1/2">
            <h3 className="text-2xl text-lime-900 uppercase mb-14 mt-20">What to Bring</h3>
            <p>
            Since treatment plans and payment options may be discussed, we ask
           that a parent or guardian be present for the first visit. Including
            everyone who will be making this important decision helps us
          communicate thoroughly. We are an insurance friendly office so
          please assist us by bringing your insurance card if you have
           orthodontic coverage. We want our patients to leave the office with
          a clear understanding of their specific treatment plan, so don’t
          hesitate to ask questions.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              className="opacity-90 "
              src="../../images/freysmilecartoon.jpg"
              alt="scan"
              style={{ maxWidth: "80%", maxHeight: "80%" }}
            />
          </div>
          
        </div>
      </section>
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
