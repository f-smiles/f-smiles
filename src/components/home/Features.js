import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";

function Section({ children, color }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    // once: true,
    amount: 0.6,
  });

  return (
    <div
      ref={ref}
      style={{
        height: "50vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isInView ? color : "#ffffff",
        transition: "all 0.5s linear 0.5s",
        opacity: isInView ? 1 : 0,
        // transform: isInView ? "none" : "translateX(-200px)",
        transition: "background-color 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
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
        <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto lg:flex-row">
          <div className="flex flex-col items-center justify-center w-1/2 gap-6 text-center ">
            <h3 className="text-4xl">Invisalign</h3>
            <p className="md:px-8">
              As part of the top 1% of Invisalign providers in the US, we have
              the experience to deliver the smile you deserve.
            </p>
            <button className="px-6 py-4 border border-black rounded-full hover:bg-black hover:text-white">
              <Link to="/invisalign">How Invisalign Works</Link>
            </button>
          </div>
          <figure className="w-1/2">
            <img
              className="object-contain aspect-video"
              src="../images/aligner.png"
              alt="invisalign"
            />
          </figure>
        </div>
      </Section>
      <Section color="#E0E7FF">
        <div className="flex flex-col items-center justify-center max-w-screen-xl min-h-screen mx-auto lg:flex-row-reverse">
          <div className="flex flex-col items-center justify-center w-1/2 gap-6 text-center">
            {" "}
            {/*ref={damonRef}*/}
            <img
              className="object-contain w-3/4 aspect-video"
              src="../images/damontech.png"
              alt="damon braces"
            />
            <h3 className="text-4xl">Damon Braces</h3>
            <p className="md:px-8">
              Combining self-ligating braces with advanced archwires clinically
              proven to move teeth quickly and comfortably.
            </p>
            <button className="px-6 py-4 border border-black rounded-full hover:bg-black hover:text-white">
              <Link to="/braces">Damon System </Link>
            </button>
          </div>
          <figure className="flex items-center justify-center w-1/2">
            <img
              className="object-contain scale-75 aspect-video"
              src="../images/damonfull.png"
              alt="invis"
            />
          </figure>
        </div>
      </Section>
      <Section color="#e8c7ab">
        <div className="flex flex-col items-center justify-center max-w-screen-xl min-h-screen mx-auto lg:flex-row">
          <div className="flex flex-col items-center justify-center w-1/2 gap-6 text-center">
            <h3 className="text-4xl">Advanced Technology</h3>
            <p className="md:px-8">
              We offer Invisalign without Impressions. Say goodbye to goopy
              impressions with our iTero digital scanner.
            </p>
            <img
              className="object-scale-down aspect-video"
              src="../images/technology.png"
              alt="itero"
            />
            <button className="px-6 py-4 border border-black rounded-full hover:bg-black hover:text-white">
              <Link to="/invisalign">Learn More</Link>
            </button>
          </div>
          <figure className="flex items-center justify-center w-1/2">
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
