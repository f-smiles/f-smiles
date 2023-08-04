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


import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function FinancingTreatment() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // making arrays of the respective sections in order
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

    //create scrolltrigger for each details section
    //trigger photo animation when headline of each details section reaches 80% of window height
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

    // return () => details.revert();
  }, []);

  return (
    <main className="w-full min-h-screen bg-white md:mt-24">
      <div className="hidden max-w-2xl mx-auto">
        <h1>Investing In Your Health and Appearance</h1>
        <p>
          While cost may be a factor in choosing an orthodontist, it's crucial
          to prioritize findind one who can achieve the best treatment result
          for you or your child.
        </p>
      </div>
      <div id="gallery" className="flex">
        <div id="left" className="hidden md:w-1/2 md:block">
          <div
            id="desktopContent"
            className="m-auto w-[80%] border-l-2 border-purple-500"
          >
            <section
              id="desktopContentSection"
              className="relative flex flex-col justify-center min-h-screen"
            >
              <div className="md:pl-10">
                <h1 className="leading-10">Complimentary Consultation</h1>
                <p className="mt-2">
                  Initial consultations are always free of charge.
                </p>
              </div>
              <div className="absolute rounded-full top-[45vh] -left-5 bg-primary50 text-white">
                <div className="px-3.5 py-2">1.</div>
              </div>
            </section>
            <section
              id="desktopContentSection"
              className="relative flex flex-col justify-center min-h-screen"
            >
              <div className="md:pl-10">
                <h1 className="leading-10">Payment plans are available</h1>
                <p className="mt-2">
                  We offer a variety of payment plans at no interest.
                </p>
              </div>
              <div className="absolute rounded-full top-[45vh] -left-5 bg-primary50 text-white">
                <div className="px-3.5 py-2">2.</div>
              </div>
            </section>
            <section
              id="desktopContentSection"
              className="relative flex flex-col justify-center min-h-screen"
            >
              <div className="md:pl-10">
                <h1 className="leading-10">No hidden costs</h1>
                <p className="mt-2">
                  Fees for diagnostic records, treatment visits, appliances.
                </p>
              </div>
              <div className="absolute rounded-full top-[45vh] -left-5 bg-primary50 text-white">
                <div className="px-3.5 py-2">3.</div>
              </div>
            </section>
            <section
              id="desktopContentSection"
              className="relative flex flex-col justify-center min-h-screen"
            >
              <div className="md:pl-10">
                <h1 className="leading-10">
                  One Year Post-Treatment Follow Up
                </h1>
                <p className="mt-2">
                  Retainers and retention visits for one year post-treatment
                  included.
                </p>
              </div>
              <div className="absolute rounded-full top-[45vh] -left-5 bg-primary50 text-white">
                <div className="px-3.5 py-2">4.</div>
              </div>
            </section>
          </div>
        </div>
        <div
          id="right"
          className="items-center w-full md:h-screen md:w-1/2 md:flex md:flex-col md:justify-center"
        >
          {/* mobile content */}
          <section
            id="mobileContent"
            className="h-screen block mx-auto md:hidden md:w-[80vw]"
          >
            {/* <div
              id="mobilePhoto"
              className="aspect-square w-[80vw] h-[80vh] mt-20 rounded-[8vw] bg-red-500 m-auto"
            ></div> */}
            <div id="mobilePhoto" className="aspect-square mt-20 rounded-[8vw]">
              <img
                className="object-cover w-full h-full"
                src="../../images/firstmeeting.jpg"
                alt="woman greeting a patient and shaking their hand"
              />
            </div>
            <h1>Complimentary Consultation</h1>
            <p>Initial consultations are always free of charge.</p>
            <div id="mobilePhoto" className="aspect-square mt-20 rounded-[8vw]">
              <img
                className="object-cover w-full h-full"
                src="../../images/firstmeeting.jpg"
                alt="woman greeting a patient and shaking their hand"
              />
            </div>
            <h1>Payment plans are available</h1>
            <p>We offer a variety of payment plans at no interest.</p>
            <div id="mobilePhoto" className="aspect-square mt-20 rounded-[8vw]">
              <img
                className="object-cover w-full h-full"
                src="../../images/firstmeeting.jpg"
                alt="woman greeting a patient and shaking their hand"
              />
            </div>
            <h1>No hidden costs</h1>
            <p>Fees for diagnostic records, treatment visits, appliances.</p>
            <div id="mobilePhoto" className="aspect-square mt-20 rounded-[8vw]">
              <img
                className="object-cover w-full h-full"
                src="../../images/firstmeeting.jpg"
                alt="woman greeting a patient and shaking their hand"
              />
            </div>
            <h1>One Year Post-Treatment Follow Up</h1>
            <p>
              Retainers and retention visits for one year post-treatment
              included.
            </p>
          </section>
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
            <div id="desktopPhoto" className="absolute w-full h-full">
              <img
                className="z-10 object-cover w-full h-full"
                src="../../images/firstmeeting.jpg"
                alt="woman greeting a patient and shaking their hand"
              />
            </div>
            <div id="desktopPhoto" className="absolute w-full h-full">
              <img
                className="z-10 object-cover w-full h-full"
                src="../../images/firstmeeting.jpg"
                alt="woman greeting a patient and shaking their hand"
              />
            </div>
            <div id="desktopPhoto" className="absolute w-full h-full">
              <img
                className="z-10 object-cover w-full h-full"
                src="../../images/firstmeeting.jpg"
                alt="woman greeting a patient and shaking their hand"
              />
            </div>
          </section>
        </div>
      </div>
      <div className="w-full h-[100vh] md:hidden"></div>
      <div className="w-full h-[80vh] md:hidden"></div>
    </main>
  );
}
