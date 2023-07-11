import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const DoctorsMembers = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [inViewElements, setInViewElements] = useState([]);
  const toggleAccordion = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };
  const membersRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      const inView = membersRef.current.map((element, index) => {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
      });

      setInViewElements(inView);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const transitionDuration = 2000;

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
      img: "../../images/team_members/Grace_blob.png",
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
      <section className="bg-gradient-to-r from-f1dfd1  via-purple-300 to-f6f0ea  max-w-screen-xl mx-auto pt-32 p-16 md:mt-32 md:pt-0">
        <h1 className="text-center text-5xl font-bold text-violet-700 pt-8">
          Our Doctors
        </h1>
        <section className="mt-10">
          Our doctors are specialists in the treatment of Orthodontic problems.
          They have gone the extra 3 years after dental school to earn this
          educational expertise. The first in the Lehigh Valley to use low-dose
          3D Digital Radiographs, offer digital orthodontics using 3D iTero
          scanning, and 3D printing for appliance fabrication.
        </section>
        <dl className="doctors-list flex flex-col space-y-12 md:space-y-0 md:flex-row my-12">
          {Doctors &&
            Doctors.map((doctor, index) => (
              <div className="doctors-list-container" key={index}>
                <dt
                  className="static relative w-full text-lg font-medium text-violet-700 cursor-pointer focus:outline-none content-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <img
                    src={doctor.img}
                    className="inline-block mx-auto w-3/4 h-auto"
                    alt={doctor.name}
                  />
                  <div className="relative flex justify-between items-center p-8">
                    <span
                      className={`absolute top-0 left-0 h-full w-1 bg-violet-300 transition-all duration-500 ${
                        activeAccordion === index
                          ? "bg-violet-500 h-full"
                          : "h-0"
                      }`}
                    ></span>
                    <h2 className="text-2xl">{doctor.name}</h2>
                    {activeAccordion === index ? (
                      <MinusIcon className="w-6 h-6" />
                    ) : (
                      <PlusIcon className="w-6 h-6" />
                    )}
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
                    <span
                      className={`absolute top-0 left-0 h-full w-1 bg-violet-300 transition-all duration-500 ${
                        activeAccordion === index
                          ? "bg-violet-500 h-full"
                          : "h-0"
                      }`}
                    ></span>
                    {doctor.bio}
                  </dd>
                </Transition>
              </div>
            ))}
        </dl>
      </section>

      <section
        className=" py-24"
        style={{
          background: "#C4AEAD",
          backgroundImage:
            "linear-gradient(to bottom, #C4AEAD 0%, #B59F9E 100%)",
          WebkitBackgroundImage:
            "-webkit-linear-gradient(top, #C4AEAD 0%, #B59F9E 100%)",
          MozBackgroundImage:
            "-moz-linear-gradient(top, #C4AEAD 0%, #B59F9E 100%)",
          OBackgroundImage: "-o-linear-gradient(top, #C4AEAD 0%, #B59F9E 100%)",
          msBackgroundImage:
            "-ms-linear-gradient(top, #C4AEAD 0%, #B59F9E 100%)",
          WebkitBoxShadow: "inset 0 1px 0 #D3BDBC",
          MozBoxShadow: "inset 0 1px 0 #D3BDBC",
          border: "1px solid #A6908F",
        }}
      >
        {/* {//alternative green color* style={{ backgroundImage: 'url("/../../images/greenblue.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#8B5CF6' }}> */}
        <div className="container max-w-screen-xl mx-auto">
          <div className="member-heading w-full text-center">
            <h2 className="text-5xl font-bold pb-16 text-white">Our Team</h2>
            <section className="text-amber-700 text-lg mb-10">
              Our members are X-ray certified, trained in CPR and first aid and
              most of them have received the designation of Specialized
              Orthodontic Assistant{" "}
              <Link
                className="underline hover:text-red-100"
                to="https://www.trapezio.com/training-resources/course-outlines/soa-prep-course-outline/"
              >
                (SOA)
              </Link>
              . This is a voluntary certification program started by the
              American Association of Orthodontists to recognize those in the
              profession for their knowledge and experience.
            </section>
          </div>
          <div className="member-container grid gap-16 grid-cols-3">
            {Members.map((member, index) => (
              <figure
                key={index}
                className={`member-card ${
                  inViewElements[index] ? "in-view" : ""
                }`}
                ref={(element) => (membersRef.current[index] = element)}
                style={{
                  transitionDuration: `${transitionDuration}ms`,
                }}
              >
                <img
                  className={`mx-auto h-72 w-auto ${
                    inViewElements[index] ? "blur-in" : "blur-out"
                  }`}
                  src={member.img}
                  alt={member.name}
                  style={{
                    opacity: inViewElements[index] ? 1 : 0,
                    transform: inViewElements[index]
                      ? "scale(1)"
                      : "scale(0.8)",
                    transition: `opacity ${transitionDuration}ms ease-in-out, transform ${transitionDuration}ms ease-in-out`,
                  }}
                />
                <figcaption className="w-full py-8 text-center">
                  <h3 className="text-3xl text-white">{member.name}</h3>
                  <span className="text-white text-md">{member.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DoctorsMembers;
