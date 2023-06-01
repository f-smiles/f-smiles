import React, { useRef } from "react";

const LogoSlider = () => {
  const sliderRef = useRef(null);
  const minImageSize = "50px";
  const maxImageSize = "100px";

  const logoSliderStyle = {
    overflow: "hidden",
    width: "200vw",
    margin: "0 auto",
    position: "relative",
    display: "flex",
    animation: "marquee 30s linear infinite",
    lineHeight: "0",
  };

  const imgStyle = {
    display: "block",
    minWidth: `var(--image-size, ${maxImageSize})`,
    height: "200px",
    objectFit: "contain",
    margin: "0 1vw",
    boxSizing: "border-box",
  };

  const afterStyle = {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
    background:
      "linear-gradient(to right, white, rgba(white, 0) 80px, rgba(white, 0) calc(100% - 80px), white)",
  };

  const mediaQueryStyle = {
    "--image-size": `min(max(${minImageSize}, 10vw), ${maxImageSize})`,
  };

  const handleMouseEnter = () => {
    sliderRef.current.style.animationPlayState = "paused";
  };

  const handleMouseLeave = () => {
    sliderRef.current.style.animationPlayState = "running";
  };

  return (
    <div
      className="mt-20 bg-rose-200"
      style={logoSliderStyle}
      ref={sliderRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {[...Array(2)].map((_, index) => (
        <React.Fragment key={index}>
          <img
            src="../../images/movingbannerfiles/damonlogo.png"
            style={imgStyle}
            alt="damon"
          />
          <img
            src="../../images/movingbannerfiles/invis-logo.png"
            style={imgStyle}
            alt="invisalign"
          />
          <img
            src="../../images/movingbannerfiles/invis.png"
            style={imgStyle}
            alt="invisalign"
          />
          <img
            src="../../images/movingbannerfiles/readers.png"
            style={imgStyle}
            alt="readers choice"
          />
          <img
            src="../../images/movingbannerfiles/Top-Dentist.png"
            style={imgStyle}
            alt="top-dentist"
          />
          <img
            src="../../images/movingbannerfiles/aao.png"
            style={imgStyle}
            alt="Image"
          />
          <img
            src="../../images/movingbannerfiles/ABO.png"
            style={imgStyle}
            alt="ABO"
          />
          <img
            src="../../images/movingbannerfiles/valley.jpg"
            style={imgStyle}
            alt="valley"
          />
          <img
            src="../../images/movingbannerfiles/top-dentists.png"
            style={imgStyle}
            alt="dentists"
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default LogoSlider;
