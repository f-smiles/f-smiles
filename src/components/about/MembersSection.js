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
  });
  let y = useTransform(scrollYProgress, [0, 5], ["0%", "100%"]);
  return (
    <div className="py-0 px-0 md:px-14 xl:px-8 flex justify-center items-center flex-col">
      <h1 className="text-xl md:text-2xl xl:text-6xl tracking-wider leading-5 md:leading-6 xl:leading-9 xl:font-medium text-center text-gray-800">
        Our Members
      </h1>
      <div className="mt-8 xl:mt-14 px-12 md:px-10 2xl:px-14 flex relative justify-center items-center">
        <img
          className="object-cover lg:w-72 h-44 xl:h-60 absolute z-0 left-0 top-0"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/team_6_svg.svg"
          alt="pattern"
        />
        <img
          className="object-cover lg:w-72 h-44 xl:h-60 absolute z-0 right-0 bottom-0"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/team_6_svg.svg"
          alt="pattern"
        />
        <div className="flex justify-center items-center space-y-4 sm:space-y-6 xl:space-y-0 xl:flex-row flex-col w-full xl:space-x-6 relative z-10">
          <section className="flex sm:justify-start items-center justify-center  flex-col sm:flex-row sm:items-start">
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 px-14 mb-4 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 space-y-8 bg-white flex justify-center items-center flex-col shadow-md hover:shadow-xl transition duration-500 ease-in-out cursor-pointer rounded-lg"
            >
              <img
                className="w-20 xl:w-32 2xl:w-48"
                src="../../images/team_members/Alyssa_blob.png"
                alt="Alyssa"
              />
              <div className="flex flex-col jusitfy-center items-center space-y-2">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center text-gray-800">
                  Alyssa
                </p>
                <p className="text-sm leading-none text-center text-white-600">
                  Treatment Coordinator
                </p>
              </div>
            </motion.div>
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 sm:mt-14 xl:mt-32  space-y-8 bg-white flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-gray-100"
            >
              <img
                className="w-20 xl:w-32 2xl:w-48"
                src="../../images/team_members/Lexi_blob.png"
                alt="Lexi"
              />
              <div className="flex flex-col jusitfy-center items-center space-y-2">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center text-gray-800">
                  Lexi
                </p>
                <p className="text-sm leading-none text-center text-gray-600">
                  Treatment Coordinator
                </p>
              </div>
            </motion.div>
          </section>
          <section className="flex sm:justify-start items-center justify-center flex-col sm:flex-row sm:items-start">
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 px-14 mb-4 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 space-y-8 bg-white flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-gray-100"
            >
              <img
                className="w-20 xl:w-32 2xl:w-48"
                src="../../images/team_members/Dana_blob.png"
                alt="Dana"
              />
              <div className="flex flex-col jusitfy-center items-center space-y-2">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center text-gray-800">
                  Dana
                </p>
                <p className="text-sm leading-none text-center text-gray-600">
                  Marketing Operations
                </p>
              </div>
            </motion.div>
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 xl:mt-32  space-y-8 bg-white flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-gray-100"
            >
              <img
                className="w-20 xl:w-32 2xl:w-48"
                src="../../images/team_members/Lizzie_blob.png"
                alt="avatar 4"
              />
              <div className="flex flex-col jusitfy-center items-center space-y-2">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center text-gray-800">
                  Lizzie
                </p>
                <p className="text-sm leading-none text-center text-gray-600">
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
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/team_6_svg.svg"
          alt="pattern"
        />
        <img
          className="object-cover lg:w-72 h-44 xl:h-60 absolute z-0 right-0 bottom-0"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/team_6_svg.svg"
          alt="pattern"
        />
        <div className="flex justify-center items-center space-y-4 sm:space-y-6 xl:space-y-0 xl:flex-row flex-col w-full xl:space-x-6 relative z-10">
          <section className="flex sm:justify-start items-center justify-center  flex-col sm:flex-row sm:items-start">
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 px-14 mb-4 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 space-y-8 bg-white flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-gray-100"
            >
              <img
                className="w-20 xl:w-32 2xl:w-48"
                src="../../images/team_members/Kayli_blob.png"
                alt="Kayli"
              />
              <div className="flex flex-col jusitfy-center items-center space-y-2">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center text-gray-800">
                  Kayli
                </p>
                <p className="text-sm leading-none text-center text-gray-600">
                  Financial Coordinator
                </p>
              </div>
            </motion.div>
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 sm:mt-14 xl:mt-32  space-y-8 bg-white flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-gray-100"
            >
              <img
                className="w-20 xl:w-32 2xl:w-48"
                src="../../images/team_members/Adriana_blob.png"
                alt="Adriana"
              />
              <div className="flex flex-col jusitfy-center items-center space-y-2">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center text-gray-800">
                  Adriana
                </p>
                <p className="text-sm leading-none text-center text-gray-600">
                  Insurance Coordinator
                </p>
              </div>
            </motion.div>
          </section>
          <section className="flex sm:justify-start items-center justify-center flex-col sm:flex-row sm:items-start">
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 px-14 mb-4 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 space-y-8 bg-white flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-gray-100"
            >
              <img
                className="w-20 xl:w-32 2xl:w-48"
                src="../../images/team_members/Ibis_blob.png"
                alt="Ibis"
              />
              <div className="flex flex-col jusitfy-center items-center space-y-2">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center text-gray-800">
                  Ibis
                </p>
                <p className="text-sm leading-none text-center text-gray-600">
                  Lab Manager
                </p>
              </div>
            </motion.div>
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 xl:mt-32  space-y-8 bg-white flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-gray-100"
            >
              <img
                className="w-20 xl:w-32 2xl:w-48"
                src="../../images/team_members/Aleah_blob.png"
                alt="avatar 4"
              />
              <div className="flex flex-col jusitfy-center items-center space-y-2">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center text-gray-800">
                  Aleah
                </p>
                <p className="text-sm leading-none text-center text-gray-600">
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
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/team_6_svg.svg"
          alt="pattern"
        />
        <img
          className="object-cover lg:w-72 h-44 xl:h-60 absolute z-0 right-0 bottom-0"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/team_6_svg.svg"
          alt="pattern"
        />
        <div className="flex justify-center items-center space-y-4 sm:space-y-6 xl:space-y-0 xl:flex-row flex-col w-full xl:space-x-6 relative z-10">
          <section className="flex sm:justify-start items-center justify-center  flex-col sm:flex-row sm:items-start">
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 px-14 mb-4 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 space-y-8 bg-white flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-gray-100"
            >
              <img
                className="w-20 xl:w-32 2xl:w-48"
                src="../../images/team_members/Nicolle_blob.png"
                alt="Nicolle"
              />
              <div className="flex flex-col jusitfy-center items-center space-y-2">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center text-gray-800">
                  Nicolle
                </p>
                <p className="text-sm leading-none text-center text-gray-600">
                  Specialized Orthodontic Assistant
                </p>
              </div>
            </motion.div>
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 sm:mt-14 xl:mt-32  space-y-8 bg-white flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-gray-100"
            >
              <img
                className="w-20 xl:w-32 2xl:w-48"
                src="../../images/team_members/Grace_blob.png"
                alt="Grace"
              />
              <div className="flex flex-col jusitfy-center items-center space-y-2">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center text-gray-800">
                  Grace
                </p>
                <p className="text-sm leading-none text-center text-gray-600">
                  Specialized Orthodontic Assistant
                </p>
              </div>
            </motion.div>
          </section>
          <section className="flex sm:justify-start items-center justify-center flex-col sm:flex-row sm:items-start">
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 px-14 mb-4 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 space-y-8 bg-white flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-gray-100"
            >
              <img
                className="w-20 xl:w-32 2xl:w-48"
                src="../../images/team_members/Samantha_blob.png"
                alt="Samantha"
              />
              <div className="flex flex-col jusitfy-center items-center space-y-2">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center text-gray-800">
                  Samantha
                </p>
                <p className="text-sm leading-none text-center text-gray-600">
                  Patient Services
                </p>
              </div>
            </motion.div>
            <motion.div
              style={{ y }}
              className="w-64 xl:w-72 py-10 xl:mt-32  space-y-8 bg-white flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer border rounded-lg border-gray-100"
            >
              <img
                className="w-20 xl:w-32 2xl:w-48"
                src="../../images/team_members/Elizabeth_blob.png"
                alt="Elizabeth"
              />
              <div className="flex flex-col jusitfy-center items-center space-y-2">
                <p className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center text-gray-800">
                  Elizabeth
                </p>
                <p className="text-sm leading-none text-center text-gray-600">
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
