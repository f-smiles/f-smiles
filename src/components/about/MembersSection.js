import React, { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";

export default function MembersSection() {
  let memberCardRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: memberCardRef,
    offset: ["start start", "end start"]
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <div className="flex flex-col items-center justify-center px-0 py-0 md:px-14 xl:px-8">
      <div className="max-w-screen-lg px-12 text-primary30">
        <h1 className="text-3xl leading-10 tracking-wide text-center md:text-4xl xl:text-4xl xl:font-medium">
          Our Members
        </h1>
        <p className="mt-6 md:mt-8 text-md md:text-lg xl:text-xl xl:font-medium sm:text-left md:text-center">
          Our members are X-ray certified, trained in CPR and first aid and most
          of them have received the designation of Specialized Orthodontic
          Assistant{" "}
          <a
            className="underline transition duration-200 underline-offset-4 text-secondary40 hover:text-secondary50"
            href="https://www.trapezio.com/training-resources/course-outlines/soa-prep-course-outline/"
          >
            (SOA)
          </a>
          . This is a voluntary certification program started by the American
          Association of Orthodontists to recognize those in the profession for
          their knowledge and experience.
        </p>
      </div>
      <div className="relative flex items-center justify-center px-12 mt-8 xl:mt-14 md:px-10 2xl:px-14">
        <img
          className="absolute top-0 left-0 z-0 object-cover lg:w-72 h-44 xl:h-60"
          src="../../images/team_members/cross_background_blush.svg"
          alt="pattern"
        />
        <img
          className="absolute bottom-0 right-0 z-0 object-cover lg:w-72 h-44 xl:h-60"
          src="../../images/team_members/cross_background_blush.svg"
          alt="pattern"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full space-y-4 sm:space-y-6 xl:space-y-0 xl:flex-row xl:space-x-6">
          <section className="flex flex-col items-center justify-center sm:justify-start sm:flex-row sm:items-start">
            <m.div
              style={{ y }}
              className="flex flex-col items-center justify-center w-64 px-6 py-10 mb-4 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 hover:shadow-xl "
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Alyssa_blob.png"
                alt="Alyssa"
              />
              <div className="flex flex-col items-center justify-center space-y-1 text-primary20">
                <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5">
                  Alyssa
                </p>
                <p className="leading-4.5 text-center">
                  Treatment Coordinator
                </p>
              </div>
            </m.div>
            <m.div
              style={{ y }}
              className="flex flex-col items-center justify-center w-64 px-6 py-10 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 sm:mt-14 xl:mt-32 hover:shadow-xl"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Lexi_blob.png"
                alt="Lexi"
              />
              <div className="flex flex-col items-center justify-center space-y-1 text-primary20">
                <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5">
                  Lexi
                </p>
                <p className="leading-4.5 text-center ">
                  Treatment Coordinator
                </p>
              </div>
            </m.div>
          </section>
          <section className="flex flex-col items-center justify-center sm:justify-start sm:flex-row sm:items-start ">
            <m.div
              style={{ y }}
              className="flex flex-col items-center justify-center w-64 px-6 py-10 mb-4 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 hover:shadow-xl"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Dana_blob.png"
                alt="Dana"
              />
              <div className="flex flex-col items-center justify-center space-y-1 text-primary20">
                <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5">
                  Dana
                </p>
                <p className="leading-4.5 text-center">
                  Marketing Operations
                </p>
              </div>
            </m.div>
            <m.div
              style={{ y }}
              className="flex flex-col items-center justify-center w-64 px-6 py-10 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 sm:mt-14 xl:mt-32 hover:shadow-xl"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Lizzie_blob.png"
                alt="avatar 4"
              />
              <div className="flex flex-col items-center justify-center space-y-1 text-primary20">
                <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5">
                  Lizzie
                </p>
                <p className="leading-4.5 text-center ">
                  Patient Services
                </p>
              </div>
            </m.div>
          </section>
        </div>
      </div>
      <div className="relative flex items-center justify-center px-12 mt-8 xl:mt-14 md:px-10 2xl:px-14">
        <img
          className="absolute top-0 left-0 z-0 object-cover lg:w-72 h-44 xl:h-60"
          src="../../images/team_members/cross_background_blush.svg"
          alt="pattern"
        />
        <img
          className="absolute bottom-0 right-0 z-0 object-cover lg:w-72 h-44 xl:h-60"
          src="../../images/team_members/cross_background_blush.svg"
          alt="pattern"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full space-y-4 sm:space-y-6 xl:space-y-0 xl:flex-row xl:space-x-6">
          <section className="flex flex-col items-center justify-center sm:justify-start sm:flex-row sm:items-start">
            <m.div
              style={{ y }}
              className="flex flex-col items-center justify-center w-64 px-6 py-10 mb-4 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 hover:shadow-xl"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Kayli_blob.png"
                alt="Kayli"
              />
              <div className="flex flex-col items-center justify-center space-y-1 text-primary20">
                <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5">
                  Kayli
                </p>
                <p className="leading-4.5 text-center ">
                  Financial Coordinator
                </p>
              </div>
            </m.div>
            <m.div
              style={{ y }}
              className="flex flex-col items-center justify-center w-64 px-6 py-10 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 sm:mt-14 xl:mt-32 hover:shadow-xl"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Adriana_blob.png"
                alt="Adriana"
              />
              <div className="flex flex-col items-center justify-center space-y-1 text-primary20">
                <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5 ">
                  Adriana
                </p>
                <p className="leading-4.5 text-center ">
                  Insurance Coordinator
                </p>
              </div>
            </m.div>
          </section>
          <section className="flex flex-col items-center justify-center sm:justify-start sm:flex-row sm:items-start">
            <m.div
              style={{ y }}
              className="flex flex-col items-center justify-center w-64 px-6 py-10 mb-4 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 hover:shadow-xl"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Ibis_blob.png"
                alt="Ibis"
              />
              <div className="flex flex-col items-center justify-center space-y-1 text-primary20">
                <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5 ">
                  Ibis
                </p>
                <p className="leading-4.5 text-center ">Lab Manager</p>
              </div>
            </m.div>
            <m.div
              style={{ y }}
              className="flex flex-col items-center justify-center w-64 px-6 py-10 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 sm:mt-14 xl:mt-32 hover:shadow-xl"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Aleah_blob.png"
                alt="avatar 4"
              />
              <div className="flex flex-col items-center justify-center space-y-2 text-primary20">
                <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5">
                  Aleah
                </p>
                <p className="leading-4.5 text-center">
                  Specialized Orthodontic Assistant
                </p>
              </div>
            </m.div>
          </section>
        </div>
      </div>
      <div className="relative flex items-center justify-center px-12 mt-8 xl:mt-14 md:px-10 2xl:px-14">
        <img
          className="absolute top-0 left-0 z-0 object-cover lg:w-72 h-44 xl:h-60"
          src="../../images/team_members/cross_background_blush.svg"
          alt="pattern"
        />
        <img
          className="absolute bottom-0 right-0 z-0 object-cover lg:w-72 h-44 xl:h-60"
          src="../../images/team_members/cross_background_blush.svg"
          alt="pattern"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full space-y-4 sm:space-y-6 xl:space-y-0 xl:flex-row xl:space-x-6">
          <section className="flex flex-col items-center justify-center sm:justify-start sm:flex-row sm:items-start">
            <m.div
              style={{ y }}
              className="flex flex-col items-center justify-center w-64 px-6 py-10 mb-4 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 hover:shadow-xl"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Nicolle_blob.png"
                alt="Nicolle"
              />
              <div className="flex flex-col items-center justify-center space-y-2 text-primary20">
                <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5">
                  Nicolle
                </p>
                <p className="leading-4.5 text-center">
                  Specialized Orthodontic Assistant
                </p>
              </div>
            </m.div>
            <m.div
              style={{ y }}
              className="flex flex-col items-center justify-center w-64 px-6 py-10 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 sm:mt-14 xl:mt-32 hover:shadow-xl"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Grace_blob.png"
                alt="Grace"
              />
              <div className="flex flex-col items-center justify-center space-y-2 text-primary20">
                <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5">
                  Grace
                </p>
                <p className="leading-4.5 text-center">
                  Specialized Orthodontic Assistant
                </p>
              </div>
            </m.div>
          </section>
          <section className="flex flex-col items-center justify-center sm:justify-start sm:flex-row sm:items-start">
            <m.div
              style={{ y }}
              className="flex flex-col items-center justify-center w-64 px-6 py-10 mb-4 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8 hover:shadow-xl"
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Samantha_blob.png"
                alt="Samantha"
              />
              <div className="flex flex-col items-center justify-center space-y-1 text-primary20">
                <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5">
                  Samantha
                </p>
                <p className="leading-4.5 text-center ">
                  Patient Services
                </p>
              </div>
            </m.div>
            <m.div
              style={{ y }}
              className="flex flex-col items-center justify-center w-64 px-6 py-10 space-y-8 transition duration-500 ease-in-out rounded-lg cursor-pointer xl:w-72 md:py-14 sm:mt-14 xl:mt-32 hover:shadow-xl "
            >
              <img
                className="w-3/4 xl:w-48 2xl:w-48"
                src="../../images/team_members/Elizabeth_blob.png"
                alt="Elizabeth"
              />
              <div className="flex flex-col items-center justify-center space-y-1 text-primary20">
                <p className="text-lg font-medium leading-none text-center xl:text-xl xl:leading-5">
                  Elizabeth
                </p>
                <p className="leading-4.5 text-center">
                  Patient Services
                </p>
              </div>
            </m.div>
          </section>
        </div>
      </div>
    </div>
  );
}
//a18072
