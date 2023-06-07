// import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
// import { Fragment, useState } from "react";
import React, { useRef, useState } from "react";
import { Transition } from "@headlessui/react";

/* blaze slider */
// import BlazeSlider from 'blaze-slider'
import { useBlazeSlider } from "react-blaze-slider";
import "blaze-slider/dist/blaze.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "../..index.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

const OurTeam = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const ref = useBlazeSlider({
    all: {
      slidesToShow: 3,
    },
  });



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
      name: "Elizabeth",
      role: "Patient Services",
      img: "../../images/team_members/Elizabeth_blob.png",
    },
  ];

  const Doctors = [
    {
      name: "Gregg Frey, DDS",
      // img: "../../images/team_members/GreggFrey_blog.jpg",
      img: "../../images/team_members/GreggFrey_blob.png",
      bio: "Dr. Gregg Frey is an orthodontist based in Pennsylvania, who graduated from Temple University School of Dentistry with honors and served in the U.S. Navy Dental Corps before establishing his practice in the Lehigh Valley. He is a Diplomat of the American Board of Orthodontics and has received numerous distinctions, accreditations, and honors,including being named one of America's Top Orthodontists by the Consumer Review Council of America. This distinction is held by fewer than 25% of orthodontists nationwide. ABO certification represents the culmination of 5-10 years of written and oral examinations and independent expert review of actual treated patients. Recently Dr. Frey voluntarily re-certified. Dr. Frey enjoys coaching soccer, vintage car racing, and playing the drums.",
      backgroundImg:"../../images/royalblue.svg",
    },
    {
      name: "Daniel Frey, DMD, MSD",
      // img: "../../images/team_members/DanFrey.jpg",
      img: "../../images/team_members/DanFrey_blob.png",
      bio: "Dr. Daniel Frey graduated from Blair Academy in Blairstown, NJ in 2005. He then pursued his pre-dental requisites at the University of Pittsburgh,majoring in Biology. Dr. Frey excelled in his studies and was admitted to Temple University's dental school, graduating at the top of his class with the prestigious Summa Cum Laude designation.Continuing his education, Dr. Frey was admitted to the esteemed orthodontic residency program at the University of the Pacific in San Francisco, CA, where he worked with faculty from around the world and utilized cutting-edge orthodontic techniques. During his time in San Francisco, he conducted research in three-dimensional craniofacial analysis and earned his Master of Science degree. Dr. Frey is a member of the American Association of Orthodontists and the American Dental Association. In his leisure time, he enjoys staying active outdoors, camping, playing music, cooking, and spending time with loved ones.",
      backgroundImg: "../../images/gray.svg",
    },
  ];

  return (
    <main className="bg-indigo-50 custom-background">
      <div className="flex">
        <div className="w-1/2">
          {Doctors.map((doctor, index) => (
            <div key={index} className="mb-4 relative">
            <img
             src={doctor.backgroundImg}
              alt="lilac blob"
              className="opacity-100 -mt-20 absolute top-0 left-0 w-full h-auto"
              style={{ maxWidth: "70%" }}
            />
            <img
              src={doctor.img}
              alt={doctor.name}
              className="block mx-auto max-w-full mr-15 h-auto mt-20 relative"
              style={{ maxWidth: "100%", maxHeight: "300px", zIndex: 1 }}
            />
          </div>

          ))}
        </div>
        <div className="w-1/2">
          <section className="justify-center mx-auto w-full max-w-screen-lg rounded-2xl p-2 mt-16 backdrop-blur-md bg-opacity-70 bg-gradient-conic from-fuchsia-300 via-green-400 to-rose-700">
            <h1 className="mb-10 flex text-center text-3xl font-bold text-purple-900 mb-4">
              Our Doctors
            </h1>
            <dl className="space-y-8 overflow-hidden h-full">
              {Doctors.map((member, index) => (
                <div key={index} className="flex">
                  <span className="relative">
                    <span
                      className={`bg-purple-300 h-full w-1 absolute left-0 top-0 transition-all duration-700 ${
                        activeAccordion === index
                          ? "bg-purple-500 h-full"
                          : "h-0"
                      } rounded-full`}
                    ></span>
                    <dt
                      className={`text-lg font-medium text-purple-900 cursor-pointer relative pl-4 focus:outline-none ${
                        activeAccordion === index ? "mb-2" : ""
                      }`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className="flex items-start">
                        <span className="pl-2 text-2xl">{member.name}</span>
                      </div>
                    </dt>
                    <Transition
                      show={activeAccordion === index}
                      enter="transition-all duration-700"
                      enterFrom="opacity-0 max-h-0"
                      enterTo="opacity-100 max-h-[500px]"
                      leave="transition-all duration-700"
                      leaveFrom="opacity-100 max-h-[500px]"
                      leaveTo="opacity-0 max-h-0"
                    >
                      <dd className="text-md text-center text-gray-500 pl-7">
                        {member.bio}
                      </dd>
                    </Transition>
                  </span>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>

      <>
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroupSkip={2}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="max-w-screen-lg"
      >
        {Members.map((member, index) => (
          <SwiperSlide>
              <img src={member.img} alt={member.name} />
              <caption className="px-4 mt-8">
                <h2 className="text-left">{member.name}</h2>
                <p className="w-max">{member.role}</p>
              </caption>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
    <section className="mx-auto w-full max-w-screen-lg rounded-2xl p-2 mt-16 backdrop-blur-md bg-opacity-70 bg-gradient-conic from-fuchsia-300 via-green-400 to-rose-700 py-8">
        <h1 className="text-3xl text-center font-bold text-purple-900 relative mb-4">
          Our Team
        </h1>
        <div className="blaze-slider" ref={ref}>
          <div className="blaze-container px-8">
            <div className="blaze-track-container">
              <div className="blaze-track">
                {Members.map((member, index) => (
                  <picture key={index} className="space-y-4">
                    {/* make an id for svg clip and ref the id */}
                    <img src={member.img} alt={member.name} />
                    <caption className="px-4">
                      <h2 className="text-left">{member.name}</h2>
                      <p className="w-max">{member.role}</p>
                    </caption>
                  </picture>
                ))}
              </div>
              <div className="absolute top-1/2 left-0 flex justify-between w-full z-0">
                <button
                  className="blaze-prev"
                  aria-label="Go to previous slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                {/* <div className="blaze-pagination"></div> */}
                <button className="blaze-next" aria-label="Go to next slide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
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
