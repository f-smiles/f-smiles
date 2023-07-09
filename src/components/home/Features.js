import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";

function Section({ children, color }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    // once: true,
    amount: 0.75,
  });

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: isInView ? color : "#ffffff",
        transition: "all 0.5s linear 0.5s",
        // opacity: isInView ? 1 : 0,
        // transform: isInView ? "none" : "translateX(-200px)",
        // transition: "background-color 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {children}
    </div>
  );
}

export default function Features() {
  return (
    <>
      <Section color="#c2c2a6">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-center items-center">
          <div className="text-center flex flex-col gap-6 justify-center items-center w-1/2 ">
            <h3 className="text-4xl">Invisalign</h3>
            <p className="md:px-8">
              As part of the top 1% of Invisalign providers in the US, we have
              the experience to deliver the smile you deserve.
            </p>
            <button className="rounded-full border border-black px-6 py-4 hover:bg-black hover:text-white">
              <Link to="/invisalign">How Invisalign Works</Link>
            </button>
          </div>
          <figure className="w-1/2">
            <img
              className="aspect-video object-contain"
              src="../images/aligner.png"
              alt="invisalign"
            />
          </figure>
        </div>
      </Section>
      <Section color="#E0E7FF">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row-reverse justify-center items-center">
          <div className="text-center flex flex-col gap-6 justify-center items-center w-1/2">
            {" "}
            {/*ref={damonRef}*/}
            <img
              className="w-3/4 aspect-video object-contain"
              src="../images/damontech.png"
              alt="damon braces"
            />
            <h3 className="text-4xl">Damon Braces</h3>
            <p className="md:px-8">
              Combining self-ligating braces with advanced archwires clinically
              proven to move teeth quickly and comfortably.
            </p>
            <button className="rounded-full border border-black px-6 py-4   hover:bg-black hover:text-white">
              <Link to="/braces">Damon System </Link>
            </button>
          </div>
          <figure className="w-1/2 flex justify-center items-center">
            <img
              className="scale-75 aspect-video object-contain"
              src="../images/damonfull.png"
              alt="invis"
            />
          </figure>
        </div>
      </Section>
      <Section color="#e8c7ab">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-center items-center">
          <div className="text-center flex flex-col gap-6 justify-center items-center w-1/2">
            <h3 className="text-4xl">Advanced Technology</h3>
            <p className="md:px-8">
              We offer Invisalign without Impressions. Say goodbye to goopy
              impressions with our iTero digital scanner.
            </p>
            <img
              className="aspect-video object-scale-down"
              src="../images/technology.png"
              alt="itero"
            />
            <button className="rounded-full hover:bg-black hover:text-white border border-black px-6 py-4">
              <Link to="/invisalign">Learn More</Link>
            </button>
          </div>
          <figure className="w-1/2 flex justify-center items-center">
            <img className="w-1/2" src="../images/itero2.png" alt="itero" />
          </figure>
        </div>
      </Section>
    </>
  );
}

// export default function Features() {
//   return (
//     <section className='min-h-screen'>
//     <Parallax pages={1} className='overflow-hidden'>
//       <ParallaxLayer offset={0} speed={2.5}>
//         <p>Parallax</p>
//       </ParallaxLayer>
//       </Parallax>
//     </section>

//   )
// }
