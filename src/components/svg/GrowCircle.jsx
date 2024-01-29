import React, { useEffect } from "react";
import { gsap } from "gsap-trial";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GrowCircle = () => {
  const sectionRef = React.useRef(null);
  const dotRef = React.useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const dot = dotRef.current;

    gsap.set(dot, {
      width: "10vmin",
      height: "10vmin",
      xPercent: -50,
      yPercent: -50,
      top: "50%",
      left: "50%",
      transformOrigin: "center center",
      backgroundColor: "black",
      borderRadius: "50%",
      position: "absolute",
    });

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    tl1.fromTo(
      dot,
      {
        scale: 1,
      },
      {
        scale: 10,
      }
    );

    console.log("ScrollTrigger initialized");
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        ref={dotRef}
        className="dot"

      ></div>
    </section>
  );
};

export default GrowCircle;

