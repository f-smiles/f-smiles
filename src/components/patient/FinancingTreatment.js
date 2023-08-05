//       {/* <img
//         src="/images/twoquads.png"
//         alt="halfcircles"
//         className="absolute top-0 left-0 object-cover w-full h-full opacity-20"
//         style={{
//           clip: "rect(0, 120vw, 100vh, 0)",
//           filter: "hue-rotate(190deg)",
//         }}
//       /> */}
//       <p>
//         {" "}
//         Orthodontic treatment is a worthwhile investment in both your appearance
//         and oral health, and should be a one-time experience. With recent
//         advancements in orthodontics, treatment options extend beyond
//         straightening teeth to enhancing facial features. The cost of treatment
//         varies depending on the extent of correction required and the prescribed
//         treatment plan by Dr. Gregg Frey and Dr. Daniel Frey.
//       </p>
//       <p>
//         Schedule an initial consultation where we can learn about your
//         orthodontic needs. We will then come up with monthly payments that fit
//         into your budget comfortably.
//       </p>

//       <div data-headlessui-state="open">
//         At FreySmiles Orthodontics, we provide excellent orthodontic care at an
//         affordable cost. Our payment options include no-interest, extended
//         financing, tailored to suit your treatment plan. During your initial
//         consultation, we will discuss your payment plan options, which cover all
//         fees for diagnostic records, treatment visits, appliances, retainers and
//         retention visits for one year post-treatment.
//       </div>
//       <div data-headlessui-state="open">
//         We understand the importance of working within your family budget and
//         offer interest-free payment plans. Our practice provides courtesies for
//         full payments and multiple family members seeking treatment. We strive
//         to help you maximize your lifetime orthodontic insurance benefits, and
//         if you have an FSA (Flexible Spending Account), we can assist you in
//         planning and utilizing reimbursements for orthodontic care to achieve
//         your desired smile.
//       </div>
// ========================================================
// const [scrollPosition, setScrollPosition] = useState(0);
//   const [showLine, setShowLine] = useState(false);

//   const dots = [
//     { id: 1, label: 'Complimentary Consultation', description: 'Initial consultations are always free of charge' },
//     { id: 2, label: 'Payment Plans Are Available', description: 'We offer a variety of payment plans at no interest' },
//     { id: 3, label: "No Hidden Costs", description: 'Fees for diagnostic records, treatment visits, appliances' },
//     { id: 3, label: "One Year Post-Treatment Follow Up", description: 'Retainers and retention visits for one year post-treatment included' },
//   ];
// const isDotVisible = (index) => {
//   if (showLine) {
//     const linePosition = scrollPosition - dots[0].id * 100;
//     const dotPosition = index * 100;
//     return linePosition >= 0 && linePosition >= dotPosition;
//   }
//   return false;
// };

// useEffect(() => {
//   const handleScroll = () => {
//     setScrollPosition(window.scrollY);
//     setShowLine(true);
//   };

//   window.addEventListener('scroll', handleScroll);
//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, []);


// import { motion, useScroll, useSpring } from "framer-motion"
// const ref = useRef(null);
// const { scrollYProgress } = useScroll({
//   target: ref,
//   offset: ["end end", "start start"]
// });
// const scaleY = useSpring(scrollYProgress, {
//   stiffness: 100,
//   damping: 30,
//   restDelta: 0.001
// });
// <motion.span
//  className="absolute md:w-1 w-full h-1 md:h-full top-0 left-0 bottom-24 origin-[0%] bg-red-700"
//  style={{ scaleY }}
//></motion.span>


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll } from "framer-motion";

function DesktopContentSection({ children, step }) {
  return (
    <section
      id="desktopContentSection"
      className="relative flex flex-col justify-center min-h-screen"
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

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
      <div id="gallery" className="flex justify-center">
        <div id="left" className="hidden md:w-1/3 md:block">
          {/* desktop content */}
          <div id="desktopContent" className="m-auto w-[80%] relative">
            <DesktopContentSection step={"1."}>
                <h1 className="leading-10">Complimentary Consultation</h1>
                <p className="mt-2">
                  Initial consultations are always free of charge.
                </p>
            </DesktopContentSection>
            <DesktopContentSection step={"2."}>
              <h1 className="leading-10">Payment plans are available</h1>
              <p className="mt-2">
                We offer a variety of payment plans at no interest.
              </p>
            </DesktopContentSection>
            <DesktopContentSection step={"3."}>
              <h1 className="leading-10">No hidden costs</h1>
              <p className="mt-2">
                Fees for diagnostic records, treatment visits, appliances.
              </p>
            </DesktopContentSection>
            <DesktopContentSection step={"4."}>
              <h1 className="leading-10">
                One Year Post-Treatment Follow Up
              </h1>
              <p className="mt-2">
                Retainers and retention visits for one year post-treatment included.
              </p>
            </DesktopContentSection>
            <motion.span ref={ref} style={{ scrollYProgress }} className="absolute top-0 left-0 z-0 hidden h-full border-l-2 md:block border-primary50"></motion.span>
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