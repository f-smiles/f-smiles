import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

function DesktopContentSection({ children, step }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
  });

  return (
    <section
      ref={ref}
      id="desktopContentSection"
      className="relative flex flex-col justify-center min-h-screen"
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 1s ease-in-out",
        transitionDelay: "250ms",
      }}
    >
      <div className="md:pl-10">{children}</div>
      <div className="z-10 absolute rounded-full top-[45vh] -left-5 bg-primary50 text-white">
        <div className="px-3.5 py-2">{step}</div>
      </div>
    </section>
  );
}

function MobileContentSection({ children, src, alt }) {
  return (
    <section id="mobileContentSection" className="p-12 space-y-6">
      <div id="mobilePhoto" className="aspect-square">
        <img
          className="object-cover w-full h-full rounded-md"
          src={src}
          alt={alt}
        />
      </div>
      {children}
    </section>
  );
}

export default function FinancingTreatment() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });
  let height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const details = gsap.utils.toArray(
        "#desktopContentSection:not(:first-child)"
      );
      const photos = gsap.utils.toArray("#desktopPhoto:not(:first-child)");
      gsap.set(photos, { yPercent: 101 });
      const allPhotos = gsap.utils.toArray("#desktopPhoto");

      ScrollTrigger.create({
        trigger: "#gallery",
        start: "top top",
        end: "bottom bottom",
        pin: "#right",
      });

      details.forEach((detail, index) => {
        let headline = detail.querySelector("h1");
        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: false,
        });
      });
    });
  }, []);

  return (
    <main className="w-full min-h-screen  ">

     
 <div className="wavy-blob absolute right-0 top-0 w-[70%] z-[-1] overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 1436 693" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="linearGradient-1">
            <stop stopColor="#B3E6FC" offset="0%"></stop>
            <stop stopColor="#8CDAFF" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g fill="url(#linearGradient-1)">
          <path d="M713.5,406.099253 C1049.75,406.099253 1289,636.632812 1289,636.632812 C1433.85742,780.03125 1811.28125,636.632812 1791.71875,340.098987 C1772.15625,43.5651605 1949.4375,0 1949.4375,0 L569,0 C569,0 377.25,406.099253 713.5,406.099253 Z"></path>
        </g>
      </svg>
    </div> 
      {/* <section className="sectiontwo h-screen "></section> */}
      <div id="gallery" className="flex justify-center">
        <div ref={ref} id="left" className="hidden md:w-1/3 md:block">
          {/* desktop content */}
          <div id="desktopContent" className="m-auto w-[80%] relative">
            <DesktopContentSection step={"1."}>
              <h1 className="leading-10 text-primary40">
                Complimentary Consultation
              </h1>
              <p className="mt-2 text-gray-700">
                Initial consultations are always free of charge.
              </p>
            </DesktopContentSection>
            <DesktopContentSection step={"2."}>
              <h1 className="leading-10 text-primary40">
                Payment plans are available
              </h1>
              <p className="mt-2 text-gray-700">
                We offer a variety of payment plans at no interest.
              </p>
            </DesktopContentSection>
            <DesktopContentSection step={"3."}>
              <h1 className="leading-10 text-primary40">No hidden costs</h1>
              <p className="mt-2 text-gray-700">
                Fees for diagnostic records, treatment visits, appliances.
              </p>
            </DesktopContentSection>
            <DesktopContentSection step={"4."}>
              <h1 className="leading-10 text-primary40">
                One Year Post-Treatment Follow Up
              </h1>
              <p className="mt-2 text-gray-700">
                Retainers and retention visits for one year post-treatment
                included.
              </p>
            </DesktopContentSection>
            <motion.span
              style={{ height }}
              className="absolute top-0 left-0 z-0 hidden h-full border-l-2 md:block border-primary50"
            ></motion.span>
          </div>
        </div>
        <div
          id="right"
          className="items-center w-full md:h-screen md:w-1/2 md:flex md:flex-col md:justify-center"
        >
          {/* mobile content */}
          <div
            id="mobileContent"
            className="h-auto block mx-auto md:hidden md:w-[80vw] my-12"
          >
            <MobileContentSection
              src={"../../images/firstmeeting.jpg"}
              alt={"woman greeting a patient and shaking their hand"}
            >
              <h1 className="leading-normal text-primary40">
                1. Complimentary Consultation
              </h1>
              <p className="leading-7 text-gray-700">
                Initial consultations are always free of charge.
              </p>
            </MobileContentSection>
            <MobileContentSection
              src={"../../images/firstmeeting.jpg"}
              alt={"woman greeting a patient and shaking their hand"}
            >
              <h1 className="leading-normal text-primary40">
                2. Payment plans are available
              </h1>
              <p className="leading-7 text-gray-700">
                We offer a variety of payment plans at no interest.
              </p>
            </MobileContentSection>
            <MobileContentSection
              src={"../../images/firstmeeting.jpg"}
              alt={"woman greeting a patient and shaking their hand"}
            >
              <h1 className="leading-normal text-primary40">
                3. No hidden costs
              </h1>
              <p className="leading-7 text-gray-700">
                Fees for diagnostic records, treatment visits, appliances.
              </p>
            </MobileContentSection>
            <MobileContentSection
              src={"../../images/firstmeeting.jpg"}
              alt={"woman greeting a patient and shaking their hand"}
            >
              <h1 className="leading-normal text-primary40">
                4. One Year Post-Treatment Follow Up
              </h1>
              <p className="leading-7 text-gray-700">
                Retainers and retention visits for one year post-treatment
                included.
              </p>
            </MobileContentSection>
          </div>
          {/* desktop photos */}
          <section
            id="desktopPhotos"
            className="w-[40vw] h-[40vh] rounded-2xl relative overflow-hidden shadow-md hidden md:block"
          >
            <div id="desktopPhoto" className="absolute w-full h-full">
              <img
                className="z-10 object-cover w-full h-full"
                src="../../images/firstmeeting.jpg"
                alt="woman greeting a patient and shaking their hand"
              />
            </div>
            <div
              id="desktopPhoto"
              className="absolute w-full h-full bg-red-500"
            ></div>
            <div
              id="desktopPhoto"
              className="absolute w-full h-full bg-green-500"
            ></div>
            <div
              id="desktopPhoto"
              className="absolute w-full h-full bg-blue-500"
            ></div>
          </section>
        </div>
      </div>
      <section id="gift-cards">
        <div>
          <h1>Gift Card</h1>
        </div>
      </section>
    </main>
  );
}


      {/* <section className="relative w-full h-[30vw] bg-B9C1E2">
        <div className="text-white text-2xl p-12">
          <div className="max-w-screen-lg mx-auto md:h-[40vh] px-12 py-6 flex flex-col justify-center">
            <section className="mb-2 leading-normal text-white">
              Financing Treatment at FreySmiles Orthodontics
            </section>
            <p className="text-white">
              While cost may be a factor in choosing an orthodontist, it's
              crucial to prioritize finding one who can achieve the best
              treatment result for you or your child.
            </p>
          </div>
        </div>
        <svg
          className="absolute bottom-0 w-[100vw]"
          version="1.1"
          id="curved-border"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1600 116.19"
          xmlSpace="preserve"
        >
          <path
            className="fill-white"
            d="M0.1,119.43V67.45c0,0,99.87,71.51,322.45,8.12c5.56-1.66,92.01-26.52,125.74-35.72
          c77.28-21.08,219.28-41.4,311.28-38.34c233,7.77,323.98,82.1,469.23,96.61c149.64,14.94,288.45-12.46,371.26-36.99v55.34L0.1,119.43
          z"
          />
        </svg>
      </section> */}
 {/* <section className="wavydiv bg-gradient-to-r from-pink-300 to-blue-200 relative">
        <div className="wavydiv__content flex justify-center items-end h-[350px]">
        <div className="max-w-screen-lg mx-auto md:h-[40vh] px-12 py-6 flex flex-col justify-center">
            <section className="mb-2 leading-normal text-white">
              Financing Treatment at FreySmiles Orthodontics
            </section>
            <p className="text-white">
              While cost may be a factor in choosing an orthodontist, it's
              crucial to prioritize finding one who can achieve the best
              treatment result for you or your child.
            </p>
          </div>
        </div>
        <svg className="relative top-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="white" d="M0,128L60,112C120,96,240,64,360,64C480,64,600,96,720,138.7C840,181,960,235,1080,256C1200,277,1320,267,1380,261.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </section> */}