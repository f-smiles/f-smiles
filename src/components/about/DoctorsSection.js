import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import useEmblaCarousel from "embla-carousel-react";

// DOCTORS

const Doctors = [
  {
    name: "Gregg Frey, DDS",
    img: "../../images/team_members/GreggFrey.jpg",
    bio: "Dr. Gregg Frey is an orthodontist based in Pennsylvania, who graduated from Temple University School of Dentistry with honors and served in the U.S. Navy Dental Corps before establishing his practice in the Lehigh Valley. He is a Diplomat of the American Board of Orthodontics and has received numerous distinctions, accreditations, and honors,including being named one of America's Top Orthodontists by the Consumer Review Council of America. This distinction is held by fewer than 25% of orthodontists nationwide. ABO certification represents the culmination of 5-10 years of written and oral examinations and independent expert review of actual treated patients. Recently Dr. Frey voluntarily re-certified. Dr. Frey enjoys coaching soccer, vintage car racing, and playing the drums.",
  },
  {
    name: "Daniel Frey, DMD, MSD",
    img: "../../images/team_members/DanFrey.jpg",
    bio: "Dr. Daniel Frey graduated from Blair Academy in Blairstown, NJ in 2005. He then pursued his pre-dental requisites at the University of Pittsburgh,majoring in Biology. Dr. Frey excelled in his studies and was admitted to Temple University's dental school, graduating at the top of his class with the prestigious Summa Cum Laude designation.Continuing his education, Dr. Frey was admitted to the esteemed orthodontic residency program at the University of the Pacific in San Francisco, CA, where he worked with faculty from around the world and utilized cutting-edge orthodontic techniques. During his time in San Francisco, he conducted research in three-dimensional craniofacial analysis and earned his Master of Science degree. Dr. Frey is a member of the American Association of Orthodontists and the American Dental Association. In his leisure time, he enjoys staying active outdoors, camping, playing music, cooking, and spending time with loved ones.",
  },
];

const media = [Doctors[0].img, Doctors[1].img];
const mediaByIndex = (index) => media[index % media.length];

//  EMBLA CAROUSEL

const PARALLAX_FACTOR = 1.2;

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: false,
    dragFree: true,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [parallaxValues, setParallaxValues] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  const onScroll = useCallback(() => {
    if (!embla) return;

    const engine = embla.internalEngine();
    const scrollProgress = embla.scrollProgress();

    const styles = embla.scrollSnapList().map((scrollSnap, index) => {
      if (!embla.slidesInView().includes(index)) return 0;
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.getTarget();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      return diffToTarget * (-1 / PARALLAX_FACTOR) * 100;
    });
    setParallaxValues(styles);
  }, [embla, setParallaxValues]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    onScroll();
    embla.on("select", onSelect);
    embla.on("scroll", onScroll);
    embla.on("resize", onScroll);
  }, [embla, onSelect, onScroll]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <div
                  className="embla__slide__parallax"
                  style={{ transform: `translateX(${parallaxValues[index]}%)` }}
                >
                  <img
                    className="embla__slide__img"
                    src={mediaByIndex(index)}
                    alt="A cool cat."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

const PrevButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
      <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
    </svg>
  </button>
);

const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
      <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
    </svg>
  </button>
);

export default function DoctorsSection({ slides }) {
  return <EmblaCarousel slides={slides} />;
}

/* <AnimatePresence initial={false}>
        {index > 0 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            exit={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="bg-white"
            onClick={() => setIndex(index - 1)}
          >
            <ArrowLeftCircleIcon className='w-8 h-8' />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {index + 1 < Doctors.length && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            exit={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="bg-white"
            onClick={() => setIndex(index + 1)}
          >
            <ArrowRightCircleIcon className='w-8 h-8' />
          </motion.button>
        )}
      </AnimatePresence> */

// const Page = ({ offset, gradient, onClick }) => {
//   return (
//     <>
//       <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
//         <div className="slopeBegin" />
//       </ParallaxLayer>

//       <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
//         <div className={`slopeEnd ${[gradient]}`} />
//       </ParallaxLayer>

//       <ParallaxLayer className='text number' offset={offset} speed={0.3}>
//         <span>0{offset + 1}</span>
//       </ParallaxLayer>
//     </>
//   )
// };

// export default function DoctorsSection() {
//   const parallax = useRef(null);

//   const scroll = (to) => {
//     if (parallax.current) {
//       parallax.current.scrollTo(to);
//     }
//   };

//   return (
//     <div style={{ background: '#dfdfdf' }}>
//       <Parallax ref={parallax} className='container' pages={3} horizontal>
//         <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
//         <Page offset={1} gradient="teal"  onClick={() => scroll(2)} />
//         <Page offset={2} gradient="tomato"  onClick={() => scroll(0)} />
//       </Parallax>
//     </div>
//   );
// }
