import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";

function Section({ children, color }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.1,
  });

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center min-h-screen text-primary95"
      style={{
        backgroundColor: isInView ? color : "",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s ease-in-out",
        transitionDelay: "150ms",
      }}
    >
      {children}
    </div>
  );
}


export default function Features() {
  
  return (
    <section id="features" className="z-40">
  <Section color="#fae1ee" className="relative overflow-hidden">
  <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto lg:flex-row">
    <div className="gap-6 space-y-4 text-gray-700 md:w-1/3">
      <h3 className="text-4xl text-[#e67fb4] font-gilroy-light">Invisalign</h3>
      <p className="pb-4">
        As part of the top 1% of Invisalign providers in the US, we have the experience to deliver the smile you deserve.
      </p>
      <Link className="inline-block px-6 py-4 transition-colors duration-300 ease-linear border rounded-full border-[#e67fb4] hover:bg-gray-800 hover:border-0 hover:text-white" to="/invisalign">How Invisalign Works</Link>
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
      <Section color="#e0f0ff">
        <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto lg:flex-row">
          <div className="gap-6 space-y-4 text-gray-700 md:w-1/3">
            <h3 className="text-4xl text-[#7781d9]">Damon Braces</h3>
            <p className="pb-4">
              Combining self-ligating braces with advanced archwires clinically proven to move teeth quickly and comfortably.
            </p>
            <Link className="inline-block px-6 py-4 transition-colors duration-300 ease-linear border rounded-full border-[#7781d9] hover:bg-gray-800 hover:border-0 hover:text-white" to="/braces">Damon System</Link>
          </div>
          <figure className="flex flex-col items-center justify-center w-1/2">
            <img
              className="w-auto h-32 md:h-40"
              src="../images/damonfull.png"
              alt="invis"
            />
            <img
              className="w-auto h-40 md:h-48"
              src="../images/damontech.png"
              alt="damon braces"
            />
          </figure>
        </div>
      </Section>
      <Section color="#ffede0">
        <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto lg:flex-row">
          <div className="gap-6 space-y-4 text-gray-700 md:w-1/3">
            <h3 className="text-4xl text-[#f2ab79]">Advanced Technology</h3>
            <p className="pb-4">
              We offer Invisalign without Impressions. Say goodbye to goopy
              impressions with our iTero digital scanner.
            </p>
            <Link className="inline-block px-6 py-4 transition-colors duration-300 ease-linear border rounded-full border-[#f2ab79] hover:bg-gray-800 hover:border-0 hover:border-secondary50 hover:text-white" to="/invisalign">Learn More</Link>
          </div>
          <figure className="flex items-center justify-center w-1/2">
            <img className="w-auto h-96" src="../images/itero2.png" alt="itero" />
          </figure>
        </div>
      </Section>
    </section>
  );
}

