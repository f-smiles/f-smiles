// import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
// import { Fragment, useState } from "react";
// import { Transition } from "@headlessui/react";

// const OurTeam = () => {
//   const [activeAccordion, setActiveAccordion] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const Doctors = [
//     {
//       name: "Gregg Frey, DDS",
//       img: "",
//       bio: "Dr. Gregg Frey is an orthodontist based in Pennsylvania, who graduated from Temple University School of Dentistry with honors and served in the U.S. Navy Dental Corps before establishing his practice in the Lehigh Valley. He is a Diplomat of the American Board of Orthodontics and has received numerous distinctions, accreditations, and honors,including being named one of America's Top Orthodontists by the Consumer Review Council of America. This distinction is held by fewer than 25% of orthodontists nationwide. ABO certification represents the culmination of 5-10 years of written and oral examinations and independent expert review of actual treated patients. Recently Dr. Frey voluntarily re-certified. Dr. Frey enjoys coaching soccer, vintage car racing, and playing the drums. He is joined by his son, Dr Daniel Frey, at FreySmiles Orthodontics.",
//     },
//     {
//       name: "Daniel Frey, DMD, MSD",
//       img: "",
//       bio: "Raised in the Lehigh Valley, Dr. Daniel Frey had a passion for youth soccer and explored his creative interests in music and film production during his adolescence. He graduated from Blair Academy in Blairstown, NJ in 2005. He then pursued his pre-dental requisites at the University of Pittsburgh,majoring in Biology. Dr. Frey excelled in his studies and was admitted to Temple University's dental school, graduating at the top of his class with the prestigious Summa Cum Laude designation.Continuing his education, Dr. Frey was admitted to the esteemed orthodontic residency program at the University of the Pacific in San Francisco, CA, where he worked with faculty from around the world and utilized cutting-edge orthodontic techniques. During his time in San Francisco, he conducted research in three-dimensional craniofacial analysis and earned his Master of Science degree. Dr. Frey is a member of the American Association of Orthodontists and the American Dental Association. In his leisure time, he enjoys staying active outdoors, camping, playing music, cooking, and spending time with loved ones.",},
//   ];

//   return (
//     <main   className="custom-background"
//       style={{
//         backgroundColor: 'rgb(237, 234, 232)',
//         backgroundImage:
//           'linear-gradient(#ddbb99 2px, transparent 2px), linear-gradient(90deg, #ddbb99 2px, transparent 2px), linear-gradient(rgba(153,221,187,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(153,221,187,.3) 1px, transparent 1px)',
//         backgroundSize: '100px 100px, 100px',
//         backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
//       }}>
    
//       <div className=" mx-auto w-full max-w-screen-lg rounded-2xl bg-stone p-2 mt-16">
//       <div className="mx-auto w-full max-w-screen-lg rounded-2xl p-2 mt-16 backdrop-blur-md bg-opacity-70 bg-gradient-conic from-fuchsia-300 via-green-400 to-rose-700">
//         <h1 className="text-xl font-bold text-purple-900 relative mb-4">
//           Our Doctors
//         </h1>
//         <dl className="space-y-8 overflow-hidden h-96">
//           {Doctors.map((member, index) => (
//             <div key={index}>
//               <span className="relative">
//                 <span
//                   className={`bg-purple-500 h-full w-1 absolute left-0 top-0 transition-all duration-700 ${
//                     activeAccordion === index ? "h-full" : "h-0"
//                   } rounded-full`}
//                 ></span>
//                 <dt
//                   className={`text-lg font-medium text-purple-900 cursor-pointer relative pl-4 focus:outline-none ${
//                     activeAccordion === index ? "mb-2" : ""
//                   }`}
//                   onClick={() => toggleAccordion(index)}
//                 >
//                   <div className="flex items-start">
//                     <span className="pl-2 text-xl">{member.name}</span>
//                   </div>
//                   <Transition
//                     show={activeAccordion === index}
//                     enter="transition-all duration-700"
//                     enterFrom="opacity-0 max-h-0"
//                     enterTo="opacity-100 max-h-[500px]"
//                     leave="transition-all duration-700"
//                     leaveFrom="opacity-100 max-h-[500px]"
//                     leaveTo="opacity-0 max-h-0"
//                   >
//                     <dd className="text-sm text-gray-500 pl-7">
//                       {member.bio}
//                     </dd>
//                   </Transition>
//                 </dt>
//               </span>
//             </div>
//           ))}
//         </dl>
//         <h1 className="text-xl font-bold text-purple-900 relative mb-4">
//           Our Team
//         </h1>
//       </div>
//       </div>
//     </main>
//   );
// };

// export default OurTeam;

// import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Transition } from "@headlessui/react";

const OurTeam = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const teamMembers = [
    {
      name: "Dr.Gregg Frey",
      img: "",
      bio:
        "Dr. Gregg Frey is an orthodontist based in Pennsylvania,who graduated from Temple University School of Dentistry with honors and served in the U.S. Navy Dental Corps before establishing his practice in the Lehigh Valley. He is a Diplomat of the American Board of Orthodontics and has.",
    },
    {
      name: "Dr. Daniel Frey",
      img: "",
      bio:
        "Raised in the Lehigh Valley, Dr. Daniel Frey had a passion for youth soccer and explored his creative interests in music and film production during his adolescence. He graduated from Blair Academy in Blairstown, NJ in 2005.",
    },
  ];

  return (
    <main className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-screen-lg rounded-2xl bg-white p-2 mt-16">
        <h1 className="text-xl font-bold text-purple-900 relative mb-4">
          Our Team
        </h1>
        <dl className="space-y-4 overflow-hidden h-96">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <dt
                className="text-lg font-medium text-purple-900 cursor-pointer relative pl-4 focus:outline-none content-center"
                onClick={() => toggleAccordion(index)}
              >
                {/* <ChevronUpIcon
                  className={`${
                    activeAccordion === index ? "transform rotate-180" : ""
                  } h-5 w-5 text-purple-500 mr-2`}
                /> */}
                <span
                  className={`bg-violet-300 h-full w-1 absolute top-0 left-0 transition-all duration-500 ${
                    activeAccordion === index ? "bg-violet-500 h-full" : "h-0"
                  }`}
                ></span>
                <p className="py-4">{member.name}</p>
              </dt>

              <Transition
                show={activeAccordion === index}
                enter="transition-all duration-500"
                enterFrom="-mt-10 opacity-0"
                enterTo="mt-0 opacity-100"
                leave="transition-all duration-500"
                leaveFrom="mt-0 opacity-100"
                leaveTo="-mt-10 opacity-0"
              >
                <dd className="relative text-sm text-gray-500 pl-7">
                  <span
                    className={`bg-violet-300 h-full w-1 absolute top-0 left-0 transition-all duration-500 ${
                      activeAccordion === index ? "bg-violet-500 h-full" : "h-0"
                    }`}
                  ></span>
                  <p>{member.bio}</p>
                </dd>
              </Transition>
            </div>
          ))}
        </dl>
      </div>
    </main>
  );
};

export default OurTeam;






