import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";

const OurTeam = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const Doctors = [
    {
      name: "Dr.Gregg Frey",
      img: "",
      bio: "Dr. Gregg Frey is an orthodontist based in Pennsylvania, who graduated from Temple University School of Dentistry with honors and served in the U.S. Navy Dental Corps before establishing his practice in the Lehigh Valley. He is a Diplomat of the American Board of Orthodontics and has received numerous distinctions, accreditations, and honors,including being named one of America's Top Orthodontists by the Consumer Review Council of America. This distinction is held by fewer than 25% of orthodontists nationwide. ABO certification represents the culmination of 5-10 years of written and oral examinations and independent expert review of actual treated patients. Recently Dr. Frey voluntarily re-certified. Dr. Frey enjoys coaching soccer, vintage car racing, and playing the drums. He is joined by his son, Dr Daniel Frey, at FreySmiles Orthodontics.",
    },
    {
      name: "Dr. Daniel Frey",
      img: "",
      bio: "Raised in the Lehigh Valley, Dr. Daniel Frey had a passion for youth soccer and explored his creative interests in music and film production during his adolescence. He graduated from Blair Academy in Blairstown, NJ in 2005. He then pursued his pre-dental requisites at the University of Pittsburgh,majoring in Biology. Dr. Frey excelled in his studies and was admitted to Temple University's dental school, graduating at the top of his class with the prestigious Summa Cum Laude designation.Continuing his education, Dr. Frey was admitted to the esteemed orthodontic residency program at the University of the Pacific in San Francisco, CA, where he worked with faculty from around the world and utilized cutting-edge orthodontic techniques. During his time in San Francisco, he conducted research in three-dimensional craniofacial analysis and earned his Master of Science degree. Dr. Frey is a member of the American Association of Orthodontists and the American Dental Association. In his leisure time, he enjoys staying active outdoors, camping, playing music, cooking, and spending time with loved ones.",},
  ];

  return (
    <main className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-screen-lg rounded-2xl bg-white p-2 mt-16">
        <h1 className="text-xl font-bold text-purple-900 relative mb-4">
          Our Team
        </h1>
        <dl className="space-y-8 overflow-hidden h-96">
          {Doctors.map((member, index) => (
            <div key={index}>
              <span className="relative">
                <span
                  className={`bg-purple-500 h-full w-1 absolute left-0 top-0 transition-all duration-700 ${
                    activeAccordion === index ? "h-full" : "h-0"
                  } rounded-full`}
                ></span>
                <dt
                  className={`text-lg font-medium text-purple-900 cursor-pointer relative pl-4 focus:outline-none ${
                    activeAccordion === index ? "mb-2" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-start">
                    <span className="pl-2 text-xl">{member.name}</span>
                    {activeAccordion === index ? (
                      <ChevronUpIcon className="h-5 w-5" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5" />
                    )}
                  </div>
                  <Transition
                    show={activeAccordion === index}
                    enter="transition-all duration-700"
                    enterFrom="opacity-0 max-h-0"
                    enterTo="opacity-100 max-h-[500px]"
                    leave="transition-all duration-700"
                    leaveFrom="opacity-100 max-h-[500px]"
                    leaveTo="opacity-0 max-h-0"
                  >
                    <dd className="text-sm text-gray-500 pl-7">
                      {member.bio}
                    </dd>
                  </Transition>
                </dt>
              </span>
            </div>
          ))}
        </dl>
      </div>
    </main>
  );
};

export default OurTeam;


// import { ChevronUpIcon } from "@heroicons/react/20/solid";
// import { Transition } from "@headlessui/react";

// const OurTeam = () => {
//   const [isOpenOrthodontists, setIsOpenOrthodontists] = useState(false);
//   const [isOpenTeam, setIsOpenTeam] = useState(false);
//   const disclosureRef = useRef(null);

//   const toggleDisclosure = (disclosure) => {
//     setIsOpenOrthodontists(false);
//     setIsOpenTeam(false);
//     if (disclosure === "orthodontists") {
//       setIsOpenOrthodontists(true);
//       setIsOpenTeam(false); // Add this line
//     } else if (disclosure === "team") {
//       setIsOpenTeam(true);
//     }
//   };

//   const closeOrthodontists = () => {
//     setIsOpenOrthodontists(false);
//   };

//   const closeTeam = () => {
//     setIsOpenTeam(false);
//   };

//   return (
//     <main className="w-full px-4 pt-16">
//       <div
//         data-headlessui-state="open"
//         className="mx-auto w-full max-w-screen-lg rounded-2xl bg-white p-2 mt-16"
//       >
//         <Disclosure
//           open={isOpenOrthodontists}
//           onChange={() => toggleDisclosure("orthodontists")}
//           ref={disclosureRef}
//         >
//           {({ open }) => (
//             <>
//               <Disclosure.Button
//                 className={`bar ${
//                   open ? "active" : ""
//                 } flex w-full justify-between px-4 py-2 text-left text-sm font-medium text-purple-900`}
//                 onClick={() => {
//                   setIsOpenOrthodontists(!isOpenOrthodontists);
//                   setIsOpenTeam(false);
//                   toggleDisclosure("orthodontists");
//                 }}
//               >
//                 <span>Our Orthodontists</span>
//                 <ChevronUpIcon
//                   className={`${
//                     open ? "rotate-180 transform" : ""
//                   } h-5 w-5 text-purple-500 z-0`}
//                 />
//               </Disclosure.Button>
//               <Transition
//                 show={open}
//                 enter="transition ease-out duration-500"
//                 enterFrom="transform opacity-0 scale-95"
//                 enterTo="transform opacity-100 scale-100"
//                 leave="transition ease-out duration-500"
//                 leaveFrom="transform opacity-100 scale-100"
//                 leaveTo="transform opacity-0 scale-95"
//               >
//                 <Disclosure.Panel
//                   className={`bar ${
//                     open ? "active" : ""
//                   } px-4 pt-4 pb-2 text-sm text-gray-500`}
//                 >
//                   <h2 className="text-lg font-medium">Dr.Gregg Frey</h2>
//                   <img alt="Dr.Gregg Frey" src="" />
//                   <div data-headlessui-state="open">
//                     Dr. Gregg Frey is an orthodontist based in Pennsylvania, who
//                     graduated from Temple University School of Dentistry with
//                     honors and served in the U.S. Navy Dental Corps before
//                     establishing his practice in the Lehigh Valley. He is a
//                     Diplomat of the American Board of Orthodontics and has
//                     received numerous distinctions, accreditations, and honors,
//                     including being named one of "America's Top Orthodontists" by
//                     the Consumer Review Council of America. This distinction is
//                     held by fewer than 25% of orthodontists nationwide. ABO
//                     certification represents the culmination of 5-10 years of
//                     written and oral examinations and independent expert review of
//                     actual treated patients. Recently Dr. Frey voluntarily
//                     re-certified. Dr. Frey enjoys coaching soccer, vintage car
//                     racing, and playing the drums. He is joined by his son, Dr.
//                     Daniel Frey, at FreySmiles Orthodontics.
//                   </div>

//                   <h2 className="text-lg font-medium">Dr. Daniel Frey</h2>
//                   <img alt="Dr.Daniel Frey" src="" />
//                   <div data-headlessui-state="open">
                    // Raised in the Lehigh Valley, Dr. Daniel Frey had a passion for
                    // youth soccer and explored his creative interests in music and
                    // film production during his adolescence. He graduated from
                    // Blair Academy in Blairstown, NJ in 2005. He then pursued his
                    // pre-dental requisites at the University of Pittsburgh,
                    // majoring in Biology. Dr. Frey excelled in his studies and was
                    // admitted to Temple University's dental school, graduating at
                    // the top of his class with the prestigious Summa Cum Laude
                    // designation.Continuing his education, Dr. Frey was admitted to
                    // the esteemed orthodontic residency program at the University
                    // of the Pacific in San Francisco, CA, where he worked with
                    // faculty from around the world and utilized cutting-edge
                    // orthodontic techniques. During his time in San Francisco, he
                    // conducted research in three-dimensional craniofacial analysis
                    // and earned his Master of Science degree. Dr. Frey is a member
                    // of the American Association of Orthodontists and the American
                    // Dental Association. In his leisure time, he enjoys staying
                    // active outdoors, camping, playing music, cooking, and spending
                    // time with loved ones.
//                   </div>
//                 </Disclosure.Panel>
//               </Transition>
//             </>
//           )}
//         </Disclosure>
//         <Disclosure>
//           {({ open }) => (
//             <>
//               <Disclosure.Button
//                 className={`bar ${
//                   open ? "active" : ""
//                 } flex w-full justify-between px-4 py-2 text-left text-sm font-medium text-purple-900`}
//                 onClick={() => {
//                   setIsOpenTeam(!isOpenTeam);
//                   setIsOpenOrthodontists(false);
//                 }}
//               >
//                 <span>Our Team</span>
//                 <ChevronUpIcon
//                   className={`${
//                     open ? "rotate-180 transform" : ""
//                   } h-5 w-5 text-purple-500`}
//                 />
//               </Disclosure.Button>

//               <Transition
//                 show={open}
//                 enter="transition ease-out duration-500"
//                 enterFrom="transform opacity-0 scale-95"
//                 enterTo="transform opacity-100 scale-100"
//                 leave="transition ease-out duration-500"
//                 leaveFrom="transform opacity-100 scale-100"
//                 leaveTo="transform opacity-0 scale-95"
//               >
//                 <Disclosure.Panel
//                   className={`bar ${
//                     open ? "active" : ""
//                   } px-4 pt-4 pb-2 text-sm text-gray-500`}
//                 >
//                 <h2>Team</h2>
//                 <img alt="Team" src="" />
//                 <h2>Team</h2>
//                 <img alt="Tean" src="" />
//                 <h2>Team</h2>
//                 <img alt="Team" src="" />
//                 <h2>Team</h2>
//                 <img alt="Team" src="" />
//                 <h2>Team</h2>
//                 <img alt="Team" src="" />
//                 <h2>Team</h2>
//                 <img alt="Team" src="" />
//               </Disclosure.Panel>
//               </Transition>
//             </>
//           )}
//         </Disclosure>
//       </div>
//     </main>
//   );
// };

// export default OurTeam;

