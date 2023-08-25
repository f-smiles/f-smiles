import React, { useState, useEffect } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function DoctorsSection() {
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

  return (
    <div className="container px-6 py-10 mx-auto">
      <div className="xl:flex xl:items-start xl:-mx-4">
        <div className="xl:w-1/2 xl:mx-4">
          <h1 className="text-2xl font-light capitalize text-primary50 lg:text-4xl dark:text-white">
            Our Doctors
          </h1>

          {/* slider controls */}
          <div
            id="controls"
            className="flex items-center justify-start mt-6 space-x-4 text-gray-700 dark:text-white"
          >
            <button
              className="p-2 transition duration-300 ease-in-out border-2 rounded-full border-secondary90 hover:border-secondary70 hover:cursor-pointer"
              onClick={toggleSwitchDoctor}
            >
              <ArrowLeftIcon className="z-0 w-5 h-5 text-secondary50" />
            </button>
            <span>0{!switchDoctor ? index : index + 1} - 02</span>
            <button
              className="p-2 transition duration-300 ease-in-out border-2 rounded-full border-secondary90 hover:border-secondary70 hover:cursor-pointer"
              onClick={toggleSwitchDoctor}
            >
              <ArrowRightIcon className="z-0 w-5 h-5 text-secondary50" />
            </button>
          </div>

          {/* doctor bio */}
          <div className="max-w-2xl mt-6 text-gray-500 dark:text-gray-300">
            {showParagraph && (
              <p
                className={`transition-opacity duration-500 ${
                  showParagraph ? "opacity-100 animate-fade-in" : "opacity-0"
                }`}
              >
                {switchDoctor
                  ? "Dr. Daniel Frey graduated from high school in 2005. He then pursued his pre-dental requisites at the University of Pittsburgh, majoring in Biology. Dr. Frey excelled in his studies and was admitted to Temple University's dental school, graduating at the top of his class with the prestigious Summa Cum Laude designation. Continuing his education, Dr. Frey was admitted to the esteemed orthodontic residency program at the University of the Pacific in San Francisco where he worked with students and faculty from around the world and utilized cutting-edge orthodontic techniques. During his time in San Francisco, he conducted research in three-dimensional craniofacial analysis and earned his Master of Science degree. Dr. Frey is a member of the American Association of Orthodontists and the American Dental Association. In his leisure time, he enjoys staying active outdoors, camping, playing music, and spending time with loved ones."
                  : "Dr. Gregg Frey is an orthodontist based in Pennsylvania, who graduated from Temple University School of Dentistry with honors and served in the U.S. Navy Dental Corps before establishing his practice in the Lehigh Valley. He is a Diplomat of the American Board of Orthodontics and has received numerous distinctions, accreditations, and honors, including being named one of America's Top Orthodontists by the Consumer Review Council of America. This distinction is held by fewer than 25% of orthodontists nationwide. ABO certification represents the culmination of 5-10 years of written and oral examinations and independent expert review of actual treated patients. Recently Dr. Frey voluntarily re-certified. Dr. Frey enjoys coaching soccer, vintage car racing, and playing the drums."}
              </p>
            )}
          </div>
        </div>

        {/* doctor images */}
        <div className="grid grid-cols-1 gap-8 mt-8 place-items-stretch xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
          <div>
            <figure className="parent">
              <img
                className={`${
                  switchDoctor ? "right" : "switch-right"
                } object-contain aspect-[2/3] transition-all duration-2000`}
                src="../../images/team_members/GreggFrey.jpg"
                alt="Dr. Gregg Frey"
              />
              <img
                className={`${
                  switchDoctor ? "left" : "switch-left"
                } object-contain aspect-[2/3] transition-all duration-2000`}
                src="../../images/team_members/DanFrey.jpg"
                alt="Dr. Daniel Frey"
              />
            </figure>
            <figcaption>
              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                {!switchDoctor ? "Dr. Gregg Frey" : "Dr. Daniel Frey"}
              </h1>

              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
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
        </div>
      </div>
    </div>
  );
}
