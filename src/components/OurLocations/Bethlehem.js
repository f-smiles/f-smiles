import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookNow from "../BookNow";

const Bethlehem = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <main className="mt-40 grid grid-cols-2 gap-4">
      <div className="ml-2">
        <div>
          <figure className="h-96 w-auto">
            <img
              className="object-cover w-full h-full opacity-90"
              src="../../images/beth.jpeg"
              alt="view of interior office"
            />
          </figure>
        </div>
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
                <div className="text-3xl mb-10">Bethlehem</div>
                <div>2901 Emrick Boulevard</div>
                <div className="mb-5">Bethlehem, PA 18020</div>
                <div>610.437.4748</div>
                <div>
                  <a
                    className="underline hover:text-purple-900"
                    href="https://goo.gl/maps/QjaBN2q5nmC7Vvmp8"
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
          We invite you to take a virtual tour of the FreySmiles orthodontic office in Bethlehem, PA. Our largest office equipped with our lions den cafe, with instant coffee machine and a fridge fully stocked with cold beverages.
        </p>
      </div>
    </main>
  );
};

export default Bethlehem;
