import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookNow from "../BookNow";

const Lehighton = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <main className="mt-40 grid grid-cols-2 gap-4">
      <div>
        <figure className="h-full w-full">
          <img
            className="object-cover h-96 w-auto"
            src="../../images/office_interior.jpg"
            alt="view of interior office"
          />
        </figure>
      </div>
      <div>
        <section
          className={`w-full py-8 cursor-pointer hover:bg-stone-200 ${
            showText ? "transition-all duration-500 ease-in" : ""
          }`}
          style={showText ? { opacity: 1, transform: "translateY(0)" } : { opacity: 0, transform: "translateY(20px)" }}
        >
          <div className="max-w-screen-xl mx-auto md:px-8 md:grid md:grid-cols-3 gap-4 space-y-4">
            <div className="flex flex-col justify-center items-center md:col-span-2">
              <div>
                <div className="text-3xl mb-10">Lehighton</div>
                <div>1080 Blakeslee Blvd Dr E</div>
                <div className="mb-5">Lehighton, PA 18235</div>
                <div>610.437.4748</div>
                <div>
                  <a
                    className="underline hover:text-purple-900"
                    href="https://goo.gl/maps/rcoLbjXmATgQn2t47"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </div>
                <div className="mt-10 italic">
                  *Hours may vary weekly. For accurate times, please call us.
                </div>
              </div>

              <div className="py-4 space-y-2">
                <span className="flex gap-2 items-center"></span>
                <span className="flex gap-2 items-center transition-colors duration-500 linear"></span>
              </div>
            </div>
          </div>
        </section>
        <p className={`text-center ${showText ? "transition-all duration-500 ease-in" : ""}`} style={showText ? { opacity: 1, transform: "translateY(0)" } : { opacity: 0, transform: "translateY(20px)" }}>
          Our newly renovated office in Lehighton is located adjacent to Rita's Italian Ice. State of the art sterilization.
        </p>
      </div>
    </main>
  );
};

export default Lehighton;
