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
      className="relative flex flex-col items-center justify-center h-96 text-primary95"
      style={{
        padding: "16rem 0 16rem 0",
        backgroundColor: isInView ? color : "#ffffff",
        transition: "all 0.5s linear 0.5s",
        opacity: isInView ? 1 : 0,
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
      <Section color="#5f2b92">
        <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto lg:flex-row">
          <div className="flex flex-col items-center justify-center w-1/2 gap-6 text-center ">
            <h3 className="text-4xl">Invisalign</h3>
            <p className="md:px-8">
              As part of the top 1% of Invisalign providers in the US, we have the experience to deliver the smile you deserve.
            </p>
            <Link className="inline-block px-6 py-4 transition-colors duration-300 ease-linear border rounded-full border-primary80 hover:bg-secondary50 hover:border-secondary50 hover:text-white text-primary90" to="/invisalign">How Invisalign Works</Link>
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
      <Section color="#7845ac">
        <div className="flex flex-col items-center justify-center max-w-screen-xl min-h-screen mx-auto lg:flex-row-reverse">
          <div className="flex flex-col items-center justify-center w-1/2 gap-6 text-center">
            <img
              className="object-contain h-24 md:h-48 aspect-video"
              src="../images/damontech.png"
              alt="damon braces"
            />
            <h3 className="text-4xl">Damon Braces</h3>
            <p className="md:px-8">
              Combining self-ligating braces with advanced archwires clinically proven to move teeth quickly and comfortably.
            </p>
            <Link className="inline-block px-6 py-4 transition-colors duration-300 ease-linear border rounded-full border-primary80 hover:bg-secondary50 hover:border-secondary50 hover:text-white text-primary90" to="/braces">Damon System</Link>
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
      <Section color="#925fc7">
        <div className="flex flex-col items-center justify-center max-w-screen-xl min-h-screen mx-auto lg:flex-row">
          <div className="flex flex-col items-center justify-center w-1/2 gap-6 text-center">
            <h3 className="text-4xl">Advanced Technology</h3>
            <p className="md:px-8">
              We offer Invisalign without Impressions. Say goodbye to goopy
              impressions with our iTero digital scanner.
            </p>
            <img
              className="object-scale-down aspect-video mix-blend-color-burn"
              src="../images/technology.png"
              alt="itero"
            />
            <Link className="inline-block px-6 py-4 transition-colors duration-300 ease-linear border rounded-full border-primary80 hover:bg-secondary50 hover:border-secondary50 hover:text-white text-primary90" to="/invisalign">Learn More</Link>
          </div>
          <figure className="flex items-center justify-center w-1/2">
            <img className="w-1/2" src="../images/itero2.png" alt="itero" />
          </figure>
        </div>
      </Section>
    </>
  );
}

