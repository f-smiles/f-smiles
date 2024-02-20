import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import * as PIXI from "pixi.js";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const AdultOrthodontics = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = 3;
  const spritesRef = useRef([]);
  const displacementFilterRef = useRef(null);

  useEffect(() => {
    let app = new PIXI.Application({
      width: 800,
      height: 600,
      transparent: true,
    });
    document.getElementById("pixi-canvas").appendChild(app.view);

    const imageUrls = [
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/j110.jpg",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/j104.jpg",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/j42.jpg",
    ];

    let sprites = imageUrls.map((url) => {
      let sprite = PIXI.Sprite.from(url);
      sprite.visible = false;
      app.stage.addChild(sprite);
      return sprite;
    });

    sprites[0].visible = true;

    let displacementSprite = PIXI.Sprite.from(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/disp5.jpg"
    );
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    displacementSprite.skew.x = 1;
    displacementSprite.skew.y = -1;
    displacementSprite.position.y = 380;
    displacementSprite.scale.y = 1.8;
    displacementSprite.scale.x = 1.8;
    app.stage.addChild(displacementSprite);

    let displacementFilter = new PIXI.filters.DisplacementFilter(
      displacementSprite
    );
    sprites.forEach((sprite) => (sprite.filters = [displacementFilter]));

    spritesRef.current = sprites;
    displacementFilterRef.current = displacementFilter;

    function onArrowKeyPress(e) {
      if (e.keyCode === 37 || e.keyCode === 39) {
        changeImage(
          (currentImageIndex + (e.keyCode === 39 ? 1 : -1) + totalImages) %
            totalImages
        );
      }
    }

    window.addEventListener("keydown", onArrowKeyPress);

    return () => {
      window.removeEventListener("keydown", onArrowKeyPress);
      app.destroy();
    };
  }, []);

  const changeImage = (newIndex) => {
    const sprites = spritesRef.current;
    const displacementFilter = displacementFilterRef.current;

    if (sprites.length === 0 || !displacementFilter) {
      return;
    }

    // Increase the intensity for the warble effect
    gsap.to(displacementFilter.scale, {
      x: 20,
      y: 20,
      duration: 0.5,
    });

    // After a brief moment, switch the image and reduce the intensity
    gsap.delayedCall(0.5, () => {
      sprites[currentImageIndex].visible = false;
      sprites[newIndex].visible = true;
      setCurrentImageIndex(newIndex);

      gsap.to(displacementFilter.scale, {
        x: 0,
        y: 0,
        duration: 0.5,
      });
    });
  };

  const handlePrevClick = () => {
    changeImage((currentImageIndex - 1 + totalImages) % totalImages);
  };

  const handleNextClick = () => {
    changeImage((currentImageIndex + 1) % totalImages);
  };
  const main = useRef();
  const smoother = useRef();
  const imageRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const wrapper = wrapperRef.current;

    gsap.to(image, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);
  useEffect(() => {
    const image = imageRef.current;

    gsap.set(image, { y: "10%" });

    ScrollTrigger.create({
      trigger: image,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(image, { y: `${(1 - progress) * 100}%` });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  useEffect(() => {
    gsap.to(".SVGref", {
      rotate: () => -360,
      ease: "none",
      scrollTrigger: {
        start: -100,
        end: "max",
        scrub: 1,
      },
    });

    smoother.current = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      smoother.current.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    const smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">

      <svg 
    className="absolute top-0 left-0 w-full h-full  z-[-1]" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ height: '100%' }}
  >
  <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
  <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
  <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
  <line x1="40%" y1="0" x2="40%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
  <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
  <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
  <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
  <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
  <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
  <line x1="100%" y1="0" x2="100%" y2="100%" stroke="#B2BEB5" stroke-width="1" />
</svg>
      <div className="slider-container">
        <div id="pixi-canvas" className="w-full h-full"></div>
        <button onClick={handlePrevClick} className="arrow-button left-arrow">
          Prev
        </button>
        <button onClick={handleNextClick} className="arrow-button right-arrow">
          Next
        </button>
      </div>
      {/* <div
        id="smooth-wrapper"
        ref={main}
        className="flex-grow items-center  justify-center"
      >
        <div id="smooth-content" className=" w-full">
          <section className="flex justify-between">
            <div className=" " data-speed=".4">
              <img
                ref={imageRef}
                src="/images/cloud16.jpg"
                alt=""
                className="image absolute left-0"
                style={{
                  height: "400px",
                  overflow: "hidden",
                  borderRadius: "400px",
                  position: "relative",
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "20px",
                }}
              />
            </div>
            <div
              className="image-wrapper"
              ref={wrapperRef}
              style={{
                // border: "1px solid black",
                height: "100vh",
              }}
            >
              <img
                ref={imageRef}
                src="/images/cloud19.jpg"
                alt=""
                className="image"
                style={{
                  height: "400px",
                  overflow: "hidden",
                  borderRadius: "400px",
                  position: "relative",
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
              <div
                className="font-HelveticaNowVar font-extralight text-white text-4xl"
                style={{
                  whiteSpace: "nowrap",
                  textAlign: "center",
                  lineHeight: "1",
                }}
              >
                <span style={{ fontSize: "4rem" }}>
                  Because{" "}
                  <div className="italic" style={{ display: "inline" }}>
                    Every
                  </div>{" "}
                  Smile
                </span>
                <br />
                <span style={{ fontSize: "4rem" }}>Is Unique</span>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 440 440"
                className="SVGref"
                data-speed="1.5"
                style={{ width: "204px", height: "204px" }}
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" style={{ stopColor: "#B8DBFC" }} />
                    <stop offset="100%" style={{ stopColor: "#F8FBFE" }} />
                  </linearGradient>
                </defs>
                <path
                  d="M440,211.9l-0.6-10.3l-208,15.9l200.9-56.3l-2.9-9.8L230.6,215l182.5-101.2l-5.1-8.9L229.3,212.6L383.6,72l-7-7.5
L227.4,210.7L345.2,38.2l-8.5-5.6L225.2,209.2l74.9-195l-9.6-3.5l-67.8,197.6l28-207.1L240.5,0L220,208L199.5,0l-10.2,1.2l28,207.1
L149.5,10.6l-9.6,3.5l74.9,195L103.3,32.6l-8.5,5.6l117.8,172.5L63.4,64.6l-7,7.5l154.3,140.6L32,104.9l-5.1,8.9L209.4,215
L10.6,151.4l-2.9,9.8l200.9,56.3l-208-15.9L0,211.9l208.5,8.4L2.4,252.8l1.8,10.1l204.7-40l-193,79.3l4,9.4L210,225.3L40.4,347.1
l6.1,8.2l165.1-127.8L74.6,385.1l7.8,6.6l131.2-162.5l-97,185l9.2,4.6L216,230.4l-51.8,202.4l10,2.4l44.4-204.1L214.9,440h10.2
l-3.8-208.9l44.4,204.2l10-2.4L224,230.5l90.2,188.4l9.2-4.6l-97-185l131.2,162.5l7.8-6.6L228.4,227.5l165.1,127.8l6.1-8.2
L230,225.3l190,86.2l4.1-9.4l-193-79.3l204.7,40l1.8-10.1l-206.1-32.6L440,211.9z"
                />
              </svg>
            </div>
          </section>
          <section className=" project__title text-center">
            <h1>…with ScrollSmoother.</h1>
          </section>
        </div>
      </div> */}
    </div>
  );
};

export default AdultOrthodontics;
