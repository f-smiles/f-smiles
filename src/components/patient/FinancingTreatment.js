


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";

function DesktopContentSection({ children, step, }) {
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
    offset: ["start center", "end end"]
  });
  let height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const details = gsap.utils.toArray("#desktopContentSection:not(:first-child)");
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
    <main className="w-full min-h-screen mt-24 bg-white">
      <section className="bg-no-repeat bg-cover bg-[url(/public/images/backgrounds/purple-debora-pilati-dOG0z4-gqp0-unsplash-orig.jpg)]">
        <div className="max-w-screen-lg mx-auto md:h-[40vh] px-12 py-6 flex flex-col justify-center">
          <h1 className="mb-2 leading-normal text-primary20">Financing Treatment at FreySmiles Orthodontics</h1>
          <p className="text-primary10">While cost may be a factor in choosing an orthodontist, it's crucial to prioritize finding one who can achieve the best treatment result for you or your child.</p>
        </div>
      </section>
      <div id="gallery"className="flex justify-center">
        <div ref={ref} id="left" className="hidden md:w-1/3 md:block">
          {/* desktop content */}
          <div id="desktopContent" className="m-auto w-[80%] relative">
            <DesktopContentSection step={"1."}>
                <h1 className="leading-10 text-primary40">Complimentary Consultation</h1>
                <p className="mt-2 text-gray-700">
                  Initial consultations are always free of charge.
                </p>
            </DesktopContentSection>
            <DesktopContentSection step={"2."}>
              <h1 className="leading-10 text-primary40">Payment plans are available</h1>
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
                Retainers and retention visits for one year post-treatment included.
              </p>
            </DesktopContentSection>
            <motion.span style={{ height }} className="absolute top-0 left-0 z-0 hidden h-full border-l-2 md:block border-primary50"></motion.span>
          </div>
        </div>
        <div
          id="right"
          className="items-center w-full md:h-screen md:w-1/2 md:flex md:flex-col md:justify-center"
        >
          {/* mobile content */}
          <div id="mobileContent" className="h-auto block mx-auto md:hidden md:w-[80vw] my-12">
            <MobileContentSection
              src={"../../images/firstmeeting.jpg"}
              alt={"woman greeting a patient and shaking their hand"}
            >
              <h1 className="leading-normal text-primary40">1. Complimentary Consultation</h1>
              <p className="leading-7 text-gray-700">Initial consultations are always free of charge.</p>
            </MobileContentSection>
            <MobileContentSection
              src={"../../images/firstmeeting.jpg"}
              alt={"woman greeting a patient and shaking their hand"}
            >
              <h1 className="leading-normal text-primary40">2. Payment plans are available</h1>
              <p className="leading-7 text-gray-700">We offer a variety of payment plans at no interest.</p>
            </MobileContentSection>
            <MobileContentSection
              src={"../../images/firstmeeting.jpg"}
              alt={"woman greeting a patient and shaking their hand"}
            >
              <h1 className="leading-normal text-primary40">3. No hidden costs</h1>
              <p className="leading-7 text-gray-700">Fees for diagnostic records, treatment visits, appliances.</p>
            </MobileContentSection>
            <MobileContentSection
              src={"../../images/firstmeeting.jpg"}
              alt={"woman greeting a patient and shaking their hand"}
            >
              <h1 className="leading-normal text-primary40">4. One Year Post-Treatment Follow Up</h1>
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
            <div id="desktopPhoto" className="absolute w-full h-full bg-red-500">
            </div>
            <div id="desktopPhoto" className="absolute w-full h-full bg-green-500">
            </div>
            <div id="desktopPhoto" className="absolute w-full h-full bg-blue-500">
            </div>
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