import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

export default function MembersSection() {
  let memberCardRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: memberCardRef,
    offset: ["start start", "end start"]
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  return (
    <div className="py-0 px-0 md:px-14 xl:px-8 flex justify-center items-center flex-col">
      <div className="px-12 max-w-screen-lg text-[#F9EDE7]">
        <h1 className="text-3xl md:text-4xl xl:text-4xl leading-10 tracking-wide xl:font-medium text-center">
          Our Members
        </h1>
        <p className="mt-6 md:mt-8 text-md md:text-lg xl:text-xl xl:font-medium sm:text-left md:text-center">
          Our members are X-ray certified, trained in CPR and first aid and most
          of them have received the designation of Specialized Orthodontic
          Assistant{" "}
          <a
            className="underline underline-offset-4 text-[#57433C] hover:text-[#74594E] transition duration-200"
            href="https://www.trapezio.com/training-resources/course-outlines/soa-prep-course-outline/"
          >
            (SOA)
          </a>
          . This is a voluntary certification program started by the American
          Association of Orthodontists to recognize those in the profession for
          their knowledge and experience.
        </p>
      </div>
      <div className="mt-8 xl:mt-14 px-12 md:px-10 2xl:px-14 flex relative justify-center items-center">
        <img
          className="object-cover lg:w-72 h-44 xl:h-60 absolute z-0 left-0 top-0"
          src="../../images/team_members/cross_background_blush.svg"
          alt="pattern"
        />
        <img
          className="object-cover lg:w-72 h-44 xl:h-60 absolute z-0 right-0 bottom-0"
          src="../../images/team_members/cross_background_blush.svg"
          alt="pattern"
        />
        <div className="flex justify-center items-center space-y-4 sm:space-y-6 xl:space-y-0 xl:flex-row flex-col w-full xl:space-x-6 relative z-10">
          <section className="flex sm:justify-start items-center justify-center  flex-col sm:flex-row sm:items-start">
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 px-6 md:py-14 mb-4 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 space-y-8 backdrop-blur-sm bg-white/30 flex justify-center items-center flex-col shadow-md hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-[#F9EDE7]/80"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Alyssa_blob.png"
                alt="Alyssa"
              />
              <div className="flex flex-col justify-center items-center space-y-2 text-gray-800">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center">
                  Alyssa
                </p>
                <p className="text-sm leading-4.5 text-center">
                  Treatment Coordinator
                </p>
              </div>
            </motion.div>
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 px-6 md:py-14 sm:mt-14 xl:mt-32 space-y-8 backdrop-blur-sm bg-white/30 flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-[#F9EDE7]/80"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Lexi_blob.png"
                alt="Lexi"
              />
              <div className="flex flex-col justify-center items-center space-y-2 text-gray-800">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center ">
                  Lexi
                </p>
                <p className="text-sm leading-4.5 text-center ">
                  Treatment Coordinator
                </p>
              </div>
            </motion.div>
          </section>
          <section className="flex sm:justify-start items-center justify-center flex-col sm:flex-row sm:items-start">
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 px-6 md:py-14 mb-4 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 space-y-8 backdrop-blur-sm bg-white/30 flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-[#F9EDE7]/80"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Dana_blob.png"
                alt="Dana"
              />
              <div className="flex flex-col justify-center items-center space-y-2 text-gray-800">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center">
                  Dana
                </p>
                <p className="text-sm leading-4.5 text-center">
                  Marketing Operations
                </p>
              </div>
            </motion.div>
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 px-6 md:py-14 sm:mt-14 xl:mt-32 space-y-8 backdrop-blur-sm bg-white/30 flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-[#F9EDE7]/80"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Lizzie_blob.png"
                alt="avatar 4"
              />
              <div className="flex flex-col justify-center items-center space-y-2 text-gray-800">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center">
                  Lizzie
                </p>
                <p className="text-sm leading-4.5 text-center ">
                  Patient Services
                </p>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
      <div className="mt-8 xl:mt-14 px-12 md:px-10 2xl:px-14 flex relative justify-center items-center">
        <img
          className="object-cover lg:w-72 h-44 xl:h-60 absolute z-0 left-0 top-0"
          src="../../images/team_members/cross_background_blush.svg"
          alt="pattern"
        />
        <img
          className="object-cover lg:w-72 h-44 xl:h-60 absolute z-0 right-0 bottom-0"
          src="../../images/team_members/cross_background_blush.svg"
          alt="pattern"
        />
        <div className="flex justify-center items-center space-y-4 sm:space-y-6 xl:space-y-0 xl:flex-row flex-col w-full xl:space-x-6 relative z-10">
          <section className="flex sm:justify-start items-center justify-center  flex-col sm:flex-row sm:items-start">
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 px-6 md:py-14 mb-4 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 space-y-8 backdrop-blur-sm bg-white/30 flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-[#F9EDE7]/80"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Kayli_blob.png"
                alt="Kayli"
              />
              <div className="flex flex-col justify-center items-center space-y-2 text-gray-800">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center">
                  Kayli
                </p>
                <p className="text-sm leading-4.5 text-center ">
                  Financial Coordinator
                </p>
              </div>
            </motion.div>
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 px-6 md:py-14 sm:mt-14 xl:mt-32  space-y-8 backdrop-blur-sm bg-white/30 flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-[#F9EDE7]/80"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Adriana_blob.png"
                alt="Adriana"
              />
              <div className="flex flex-col justify-center items-center space-y-2 text-gray-800">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center ">
                  Adriana
                </p>
                <p className="text-sm leading-4.5 text-center ">
                  Insurance Coordinator
                </p>
              </div>
            </motion.div>
          </section>
          <section className="flex sm:justify-start items-center justify-center flex-col sm:flex-row sm:items-start">
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 px-6 md:py-14 mb-4 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 space-y-8 backdrop-blur-sm bg-white/30 flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-[#F9EDE7]/80"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Ibis_blob.png"
                alt="Ibis"
              />
              <div className="flex flex-col justify-center items-center space-y-2 text-gray-800">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center ">
                  Ibis
                </p>
                <p className="text-sm leading-4.5 text-center ">Lab Manager</p>
              </div>
            </motion.div>
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 px-6 md:py-14 sm:mt-14 xl:mt-32 space-y-8 backdrop-blur-sm bg-white/30 flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-[#F9EDE7]/80"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Aleah_blob.png"
                alt="avatar 4"
              />
              <div className="flex flex-col justify-center items-center space-y-2 text-gray-800">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center">
                  Aleah
                </p>
                <p className="text-sm leading-4.5 text-center ">
                  Specialized Orthodontic Assistant
                </p>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
      <div className="mt-8 xl:mt-14 px-12 md:px-10 2xl:px-14 flex relative justify-center items-center">
        <img
          className="object-cover lg:w-72 h-44 xl:h-60 absolute z-0 left-0 top-0"
          src="../../images/team_members/cross_background_blush.svg"
          alt="pattern"
        />
        <img
          className="object-cover lg:w-72 h-44 xl:h-60 absolute z-0 right-0 bottom-0"
          src="../../images/team_members/cross_background_blush.svg"
          alt="pattern"
        />
        <div className="flex justify-center items-center space-y-4 sm:space-y-6 xl:space-y-0 xl:flex-row flex-col w-full xl:space-x-6 relative z-10">
          <section className="flex sm:justify-start items-center justify-center  flex-col sm:flex-row sm:items-start">
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 px-6 md:py-14 mb-4 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 space-y-8 backdrop-blur-sm bg-white/30 flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-[#F9EDE7]/80"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Nicolle_blob.png"
                alt="Nicolle"
              />
              <div className="flex flex-col justify-center items-center space-y-2 text-gray-800">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center">
                  Nicolle
                </p>
                <p className="text-sm leading-4.5 text-center ">
                  Specialized Orthodontic Assistant
                </p>
              </div>
            </motion.div>
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 px-6 md:py-14 sm:mt-14 xl:mt-32  space-y-8 backdrop-blur-sm bg-white/30 flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-[#F9EDE7]/80"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Grace_blob.png"
                alt="Grace"
              />
              <div className="flex flex-col justify-center items-center space-y-2 text-gray-800">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center">
                  Grace
                </p>
                <p className="text-sm leading-4.5 text-center ">
                  Specialized Orthodontic Assistant
                </p>
              </div>
            </motion.div>
          </section>
          <section className="flex sm:justify-start items-center justify-center flex-col sm:flex-row sm:items-start">
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 px-6 md:py-14 mb-4 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 space-y-8 backdrop-blur-sm bg-white/30 flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-[#F9EDE7]/80"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Samantha_blob.png"
                alt="Samantha"
              />
              <div className="flex flex-col justify-center items-center space-y-2 text-gray-800">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center">
                  Samantha
                </p>
                <p className="text-sm leading-4.5 text-center ">
                  Patient Services
                </p>
              </div>
            </motion.div>
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 px-6 md:py-14 sm:mt-14 xl:mt-32 space-y-8 backdrop-blur-sm bg-white/30 flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-[#F9EDE7]/80"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Elizabeth_blob.png"
                alt="Elizabeth"
              />
              <div className="flex flex-col justify-center items-center space-y-2 text-gray-800">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center">
                  Elizabeth
                </p>
                <p className="text-sm leading-4.5 text-center">
                  Patient Services
                </p>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}
//a18072
