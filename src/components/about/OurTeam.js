import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useRef, useState } from "react";
import { Transition } from "@headlessui/react";



const OurTeam = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const Members = [
    {
      name: "Alyssa",
      role: "Treatment Coordinator",
      img: "../../images/team_members/Alyssa_blob.png",
    },
    {
      name: "Lexi",
      role: "Treatment Coordinator",
      img: "../../images/team_members/Lexi_blob.png",
    },
    {
      name: "Alicia",
      role: "Specialized Orthodontic Assistant",
      img: "../../images/team_members/Alicia_blob.png",
    },
    {
      name: "Dana",
      role: "Marketing Coordinator",
      img: "../../images/team_members/Dana_blob.png",
    },
    {
      name: "Lizzie",
      role: "Patient Services",
      img: "../../images/team_members/Lizzie_blob.png",
    },
    {
      name: "Kayli",
      role: "Financial Coordinator",
      img: "../../images/team_members/Kayli_blob.png",
    },
    {
      name: "Adriana",
      role: "Insurance Coordinator",
      img: "../../images/team_members/Adriana_blob.png",
    },
    {
      name: "Ibis",
      role: "Lab Manager",
      img: "../../images/team_members/Ibis_blob.png",
    },
    {
      name: "Aleah",
      role: "Specialized Orthodontic Assistant",
      img: "../../images/team_members/Aleah_blob.png",
    },
    {
      name: "Nicolle",
      role: "Specialized Orthodontic Assistant",
      img: "../../images/team_members/Nicolle_blob.png",
    },
    {
      name: "Grace",
      role: "Specialized Orthodontic Assistant",
      img: "../../images/team_members/Grace_blob.png"
    },
    {
      name: "Samantha",
      role: "Patient Services",
      img: "../../images/team_members/Samantha_blob.png",
    },
    {
      name: "",
      role: "",
      img: "",
    },
    {
      name: "Elizabeth",
      role: "Patient Services",
      img: "../../images/team_members/Elizabeth_blob.png",
    },
    {
      name: "",
      role: "",
      img: "",
    },
  ];

  const Doctors = [
    {
      name: "Gregg Frey, DDS",
      img: "../../images/team_members/gregg_frey_dots.png",
      bio: "Dr. Gregg Frey is an orthodontist based in Pennsylvania, who graduated from Temple University School of Dentistry with honors and served in the U.S. Navy Dental Corps before establishing his practice in the Lehigh Valley. He is a Diplomat of the American Board of Orthodontics and has received numerous distinctions, accreditations, and honors,including being named one of America's Top Orthodontists by the Consumer Review Council of America. This distinction is held by fewer than 25% of orthodontists nationwide. ABO certification represents the culmination of 5-10 years of written and oral examinations and independent expert review of actual treated patients. Recently Dr. Frey voluntarily re-certified. Dr. Frey enjoys coaching soccer, vintage car racing, and playing the drums.",
      // backgroundImg:"../../images/royalblue.svg",
    },
    {
      name: "Daniel Frey, DMD, MSD",
      img: "../../images/team_members/dan_frey_dots.png",
      bio: "Dr. Daniel Frey graduated from Blair Academy in Blairstown, NJ in 2005. He then pursued his pre-dental requisites at the University of Pittsburgh,majoring in Biology. Dr. Frey excelled in his studies and was admitted to Temple University's dental school, graduating at the top of his class with the prestigious Summa Cum Laude designation.Continuing his education, Dr. Frey was admitted to the esteemed orthodontic residency program at the University of the Pacific in San Francisco, CA, where he worked with faculty from around the world and utilized cutting-edge orthodontic techniques. During his time in San Francisco, he conducted research in three-dimensional craniofacial analysis and earned his Master of Science degree. Dr. Frey is a member of the American Association of Orthodontists and the American Dental Association. In his leisure time, he enjoys staying active outdoors, camping, playing music, cooking, and spending time with loved ones.",
      // backgroundImg: "../../images/gray.svg",
    },
  ];

  return (
    <main className="custom-background">

      <section className="doctors-section max-w-screen-xl mx-auto pt-32 p-16 md:mt-32 md:pt-0">
          <h1 className="text-center text-5xl font-bold text-violet-700 pt-8">Our Doctors</h1>
          <dl className="doctors-list flex flex-col space-y-12 md:space-y-0 md:flex-row my-12">
            {Doctors && Doctors.map((doctor, index) => (
              <div className="doctors-list-container" key={index}>
                <dt className="static relative w-full text-lg font-medium text-violet-700 cursor-pointer focus:outline-none content-center" onClick={() => toggleAccordion(index)}>
                  <span className={`absolute top-0 left-0 h-full w-1 bg-violet-300 transition-all duration-500 ${activeAccordion === index ? "bg-violet-500 h-full" : "h-0"}`}></span>
                  <img src={doctor.img} className="inline-block mx-auto w-3/4 h-auto" alt={doctor.name} />
                  <div className="flex justify-between items-center p-8">
                    <h2 className="text-2xl">{doctor.name}</h2>
                    {activeAccordion === index ?
                      <ChevronUpIcon className="w-6 h-6" />
                      :
                      <ChevronDownIcon className="w-6 h-6" />
                      }
                  </div>
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
                  <dd className="max-w-screen-sm pt-4 px-8 pb-8 relative h-full">
                    <span className={`absolute top-0 left-0 h-full w-1 bg-violet-300 transition-all duration-500 ${activeAccordion === index ? "bg-violet-500 h-full" : "h-0"}`}></span>
                    {doctor.bio}
                  </dd>
                </Transition>
              </div>
            ))}
          </dl>
      </section>

      <section className="bg-violet-200 py-24">
        <div className="container max-w-screen-xl mx-auto">
          <div className="member-heading w-full text-center">
            <h2 className="text-5xl font-bold pb-16 text-indigo-500">Our Team</h2>
          </div>
          <div className="member-container grid gap-16 grid-cols-3">
            {Members && Members.map((member, index) => (
              <figure key={index} className="member-card">
                <img className="mx-auto h-72 w-auto" src={member.img} alt={member.name} />
                  <figcaption className="w-full py-8 text-center">
                    <h6 className="text-3xl text-rose-500">{member.name}</h6>
                    <span className="text-md">{member.role}</span>
                  </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
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
