import React, { useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const Invisalign = () => {
  const ref = useRef(null);
  const aligner1Ref = useRef(null);
  const aligner2Ref = useRef(null);
  const aligner3Ref = useRef(null);
  const aligner4Ref = useRef(null);
  const aligner5Ref = useRef(null);
  const aligner6Ref = useRef(null);

  useEffect(() => {
    const parallaxScroll = () => {
      const scrolled = window.scrollY;

      if (aligner1Ref.current) {
        aligner1Ref.current.style.top = `${400 - scrolled * 0.3}px`;
      }
      if (aligner2Ref.current) {
        aligner2Ref.current.style.top = `${600 - scrolled * 0.4}px`;
      }
      if (aligner3Ref.current) {
        aligner3Ref.current.style.top = `${500 - scrolled * 0.1}px`;
      }
      if (aligner4Ref.current) {
        aligner4Ref.current.style.top = `${600 - scrolled * 0.6}px`;
      }
      if (aligner5Ref.current) {
        aligner5Ref.current.style.top = `${600 - scrolled * 0.4}px`;
      }
      if (aligner6Ref.current) {
        aligner6Ref.current.style.top = `${400 - scrolled * 0.2}px`;
      }
    };

    window.addEventListener("scroll", parallaxScroll);

    return () => {
      window.removeEventListener("scroll", parallaxScroll);
    };
  }, []);
  
  const [progress, setProgress] = useState(0);
  const [topRightProgress, setTopRightProgress] = useState(0);
  const [bottomLeftProgress, setBottomLeftProgress] = useState(0);
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress >= 100 ? 100 : prevProgress + 2;
        return nextProgress;
      });

      setTopRightProgress((prevProgress) => {
        const nextProgress = prevProgress >= 100 ? 100 : prevProgress + 2;
        return nextProgress;
      });

      setBottomLeftProgress((prevProgress) => {
        const nextProgress = prevProgress >= 100 ? 100 : prevProgress + 2;
        return nextProgress;
      });
    }, 40);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const circleSize = 300;
  const countdownValue = 10 - Math.ceil((100 - progress) / 100 * 10);

  const arcSize = 100;
  const arcRadius = circleSize / 2 - arcSize / 2;
  const arcStrokeWidth = 2;
  const arcStrokeColor = "white";

  const arcStyle = {
    fill: "none",
    strokeWidth: arcStrokeWidth,
    stroke: arcStrokeColor,
  };

  const arcTopRightPath = `M${circleSize / 2} ${circleSize / 2 - arcRadius} A${arcRadius} ${arcRadius} 0 0 1 ${circleSize / 2 + arcRadius} ${circleSize / 2}`;

  const arcBottomLeftPath = `M${circleSize / 2} ${circleSize / 2 + arcRadius} A${arcRadius} ${arcRadius} 0 0 1 ${circleSize / 2 - arcRadius} ${circleSize / 2}`;

  const progressBarStyle = {
    width: `${circleSize}px`,
    height: `${circleSize}px`,
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-200%, -50%)",
  };



  const numberStyle = {
    fontSize: `${circleSize / 4}px`,
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: progress >= 100 ? 1 : 0,
    transition: "opacity .5s ease-in-out",
    transitionDelay: progress >= 100 ? "0s" : "0.1s", 
  };

  const topTextStyle = {
    fontSize: `${circleSize / 5}px`,
    color: "white",
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: `translate(-200%, -50%)`,
    opacity: progress >= 100 ? 1 : 0,
    transition: "opacity .5s ease-in-out",
    transitionDelay: progress >= 100 ? "0s" : "0.1s", 
  };

  const textStyle = {
    position: "absolute",
    top: "80%",
    left: "10%",
    transform: "translateY(-50%)",
    fontSize: `${circleSize / 5}px`,
    color: "white",
    opacity: progress >= 100 ? 1 : 0, 
    transitionDelay: progress >= 100 ? "0s" : "0.1s", 
 
  };

  const imageStyle = {
    maxWidth: '50%',
    maxHeight: '50%',
    marginLeft: 'auto', 
  };
  const sectionStyle = {
    background: `#C3BEE6`,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };

  return (
    <main >




<section style={sectionStyle} className="w-full px-4 pt-16 bg-F8F6F1">
      <div className="flex flex-col md:flex-row">
      <div className="w-1/3">
                <motion.div ref={ref} className="min-h-screen">
                  <div
                    className="container relative flex"
                    style={{ overflow: "hidden" }}
                  >
                    <img
                      ref={aligner1Ref}
                      className="aligner-1 absolute"
                      src="/images/invisalign.svg"
                      alt="aligner"
                      style={{
                        width: "100px",
                        height: "100px",
                        left: "10%",
                        top: "50%",
                      }}
                    />
                    <img
                      ref={aligner2Ref}
                      className="aligner-2 absolute"
                      src="/images/invisalignleft.svg"
                      alt="aligner"
                      style={{
                        width: "120px",
                        height: "120px",
                        left: "20%",
                        top: "10%",
                      }}
                    />
                    <img
                      ref={aligner3Ref}
                      className="aligner-3 absolute"
                      src="/images/aligner4.png"
                      alt="aligner"
                      style={{
                        width: "200px",
                        height: "auto",
                        left: "10%",
                        bottom: "20%",
                      }}
                    />
                    <img
                      ref={aligner4Ref}
                      className="aligner-4 absolute"
                      src="/images/invisalign-tray.png"
                      alt="aligner"
                      style={{
                        width: "140px",
                        height: "auto",
                        bottom: "0%",
                        left: "31%",
                      }}
                    />
                    <img
                      ref={aligner5Ref}
                      className="aligner-5 absolute"
                      src="/images/clearalign.png"
                      alt="aligne"
                      style={{
                        width: "140px",
                        height: "auto",
                        bottom: "20%",
                        left: "5%",
                      }}
                    />
                    <img
                      ref={aligner6Ref}
                      className="aligner-6 absolute"
                      src="/images/alignersilver.png"
                      alt="aligner"
                      style={{
                        width: "180px",
                        height: "auto",
                        bottom: "10%",
                        left: "20%",
                      }}
                    />
                  </div>
             

                </motion.div>
              </div>
        <div className="md:w-1/2 md:pr-6">
          <div  className="text-white mt-40">
          <div className="relative w-full pb-full overflow-hidden">
   
    </div>
          <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>          <span className="text-2xl font-normal">What is Invisalign?</span></AccordionHeader>
        <AccordionBody>
        <p>
            Invisalign uses a series of customized, clear aligners to
            straighten teeth faster and with fewer office visits than
            traditional braces. Thousands of orthodontists in the United
            States and Canada use Invisalign to accurately and effectively
            treat their patients. This type of treatment in the hands of
            experts delivers fantastic results. Aligners are:
            <li>
    Completely invisible - aligners cannot be seen while you are wearing
    them! Friends, family members and co-workers may never even know you
    are wearing aligners, unless of course, you tell them!
  </li>
  <li>
    Comfortable to wear - The aligners are made from a special plastic
    that has smooth, rounded edges so they won't irritate your mouth and
    tissues like traditional braces often can.
  </li>
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        <span className="text-2xl font-normal"> Benefits of Invisalign </span>
        </AccordionHeader>
        <AccordionBody>
        <li>
    Removable - Unlike traditional metal braces, you can remove your
    aligners to eat, drink, brush your teeth, floss and for special
    occasions. There's no need to change your lifestyle with Invisalign!
  </li>
  <li>
    Effective - You will begin to notice a significant difference even
    before your treatment is complete! Most treatments are completed
    within one year; however, this can vary from patient to patient.
  </li>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        <span className="text-2xl font-normal">Why Choose Us</span>
        </AccordionHeader>
        <AccordionBody className="max-h-48 overflow-y-auto">
        <p>
  Invisalign has worked for over a million smiles across the country.
  Some dentists and orthodontists may not feel comfortable recommending
  Invisalign to their patients, but as Diamond Plus providers of
  Invisalign and Invisalign Teen (top 1% of Invisalign providers in the
  US) we have the experience to deliver the smile you deserve. Dr. Gregg
  Frey and Dr. Daniel Frey have treated many hundreds of patients with
  this leading-edge appliance system. Their expertise shows in the smile
  results of their satisfied patients. The cost of Invisalign treatment
  is comparable to the cost of braces.
</p>
<p>
  The science of Invisalign is not in the clear aligners, but in overall
  design and prescription for tooth movement by our doctors based on the
  full facial evaluation to craft the smile that is perfect for you. Our
  experienced doctors are top experts and providers in clear aligner
  treatment. Beware of mail-order aligner companies. Your smile and
  health is nothing to take lightly. An orthodontic, on-site evaluation
  with full digital x-rays and records is necessary to prescribe the
  correct path to a safe and healthy result. Dr. Gregg Frey and Dr.
  Daniel Frey have the expert tools and experience in Invisalign
  treatment to give you a fantastic FreySmile!
</p>
        </AccordionBody>
      </Accordion>


    
          </div>
        </div>
        <div style={{ position: "absolute", top: "160px", left: "50%", transform: "translateX(-50%)", zIndex: 20 }}>
         <svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  width="1600px"
  height="200px"
  viewBox="0 0 100 100"
  enableBackground="new 0 0 100 100"
  xmlSpace="preserve"
  className="z-10"
  style={{
    position: 'relative',
    margin: 'auto',
    transform: 'translate(0, 50%)',
    animation: 'rotate 10s linear infinite',
  }}
>
  
  <circle cx="50" cy="50" r="25" fill="url(#grad)" />
  <path
    id="textPath"
    fill="none"
    d="M89.322,50.197c0,22.09-17.91,40-40,40c-22.089,0-40-17.91-40-40 c0-22.089,17.911-40,40-40C71.412,10.197,89.322,28.108,89.322,50.197z"
  />
<text style={{ fontSize: '12px', fill: '#fff', letterSpacing: '1px' }} >
  <textPath xlinkHref="#textPath">

    <tspan x="10">Diamond</tspan>
    <tspan x="80">Plus</tspan>
    <tspan x="120">Invisalign</tspan>
    <tspan x="200">Providers</tspan>
  </textPath>
</text>



</svg>
</div>
        <div style={{ position: "absolute", top: "200px", left: "50%", transform: "translateX(-50%)", zIndex: 20 }}>
<svg width="160" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_103_15)"> <path d="M93.6797 5.15479C97.359 2.15401 102.641 2.15401 106.32 5.15479L114.253 11.625C116.75 13.6608 120.074 14.3696 123.183 13.5291L133.039 10.8652C137.616 9.62811 142.432 11.775 144.572 16.0058L149.229 25.2154C150.679 28.0814 153.416 30.0768 156.588 30.5793L166.717 32.184C171.384 32.9234 174.897 36.829 175.139 41.5483L175.672 51.9384C175.836 55.133 177.519 58.0565 180.199 59.8033L188.865 65.452C192.811 68.0247 194.427 73.0033 192.743 77.4035L189.015 87.1465C187.874 90.1271 188.225 93.4731 189.958 96.1526L195.618 104.899C198.175 108.852 197.629 114.053 194.306 117.389L186.976 124.748C184.722 127.011 183.684 130.214 184.184 133.369L185.815 143.668C186.552 148.327 183.933 152.868 179.531 154.564L169.921 158.264C166.93 159.416 164.672 161.931 163.849 165.029L161.188 175.047C159.973 179.623 155.716 182.719 150.989 182.466L140.78 181.92C137.567 181.748 134.468 183.132 132.452 185.639L126.014 193.647C123.04 197.346 117.876 198.445 113.653 196.277L104.567 191.612C101.7 190.141 98.2999 190.141 95.4331 191.612L86.3465 196.277C82.1243 198.445 76.9601 197.346 73.9862 193.647L67.548 185.639C65.5321 183.132 62.433 181.748 59.2203 181.92L49.0111 182.466C44.284 182.719 40.0271 179.623 38.8119 175.047L36.1507 165.029C35.3279 161.931 33.0702 159.416 30.0792 158.264L20.4691 154.564C16.0666 152.868 13.4477 148.327 14.1855 143.668L15.8162 133.369C16.3157 130.214 15.2781 127.011 13.024 124.748L5.69367 117.389C2.37113 114.053 1.82509 108.852 4.38248 104.899L10.0415 96.1526C11.7752 93.4731 12.1257 90.1271 10.9851 87.1465L7.25661 77.4035C5.57276 73.0033 7.18856 68.0247 11.1354 65.452L19.8014 59.8033C22.4812 58.0565 24.1636 55.133 24.3275 51.9384L24.8607 41.5483C25.1029 36.829 28.6155 32.9234 33.2828 32.184L43.4118 30.5793C46.5838 30.0768 49.3214 28.0814 50.7708 25.2154L55.4283 16.0058C57.5679 11.775 62.3844 9.6281 66.9613 10.8652L76.8169 13.5291C79.9264 14.3696 83.2504 13.6608 85.7465 11.625L93.6797 5.15479Z" fill="url(#paint0_linear_103_15)"/> </g> <defs> <linearGradient id="paint0_linear_103_15" x1="177" y1="-9.23648e-06" x2="39.5" y2="152.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#B0B9FF"/> <stop offset="1" stop-color="#E7E9FF"/> </linearGradient> <clipPath id="clip0_103_15"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
  </div>
  <div style={{ position: "absolute", top: "220px", left: "50%", transform: "translateX(-50%)", zIndex: 20, color: "#D6E69E", fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>
  Top
</div>
<div style={{ position: "absolute", top: "250px", left: "50%", transform: "translateX(-50%)", zIndex: 20, color: "#D6E69E", fontSize: "28px", fontWeight: "bold", textAlign: "center" }}>
  1%
</div>



        <img
      src="../../images/elizabethpatient.jpeg"
      alt="invisalign"
      className="w-full md:max-w-1/2 relative z-0"
      style={imageStyle}
    />
      </div>
      </section>
      <section className="mt-10 mb-10">
  <div className="text-center text-3xl mb-4">Before & After</div>
  <div className="text-center">Thousands of our patients are loving their new smile!</div>
  <div className="flex justify-center mt-6">
 <div className="w-72 border border-lime-300 p-2 flex flex-col items-center mx-1">   
      <div className="h-64">
      <img src="images/inviskit.png" alt="kit" />
        <img
          src="../../images/beforeafter1.png"
          alt="joel"
          className="rounded-lg h-full w-auto object-cover"
        />
      </div>
      <p className="mt-2 italic ">- Joel</p>
    </div>
    <div className="w-72 border border-lime-300 p-2 flex flex-col items-center mx-1">
      <div className="h-64">
        <img
          src="../../images/beforeafter2.png"
          alt="sean"
          className="rounded-lg h-full w-auto object-cover"
        />
      </div>
      <p className="mt-2 italic">- Sean</p>
    </div>
    <div className="w-72 border border-lime-300 p-2 flex flex-col items-center mx-1">
      <div className="h-64">
        <img
          src="../../images/beforeafter3.png"
          alt="london"
          className="rounded-lg h-full w-auto object-cover"
        />
      </div>
      <p className="mt-2 italic">- London</p>
    </div>
  </div>
</section>







    </main>
  );
};

export default Invisalign;

{/* <div style={progressBarStyle}>
        
<div className="relative inset-0 mt-20 w-full min-h-screen md:fixed md:w-7/12">

  </div>
  <svg width={circleSize} height={circleSize} style={{ position: "absolute" }}>
    <path
      style={arcStyle}
      d={arcTopRightPath}
      strokeDasharray={`${(topRightProgress / 100) * arcRadius * Math.PI * 2} ${arcRadius * Math.PI * 2}`}
    />
    <path
      style={arcStyle}
      d={arcBottomLeftPath}
      strokeDasharray={`${(bottomLeftProgress / 100) * arcRadius * Math.PI * 2} ${arcRadius * Math.PI * 2}`}
    />
  </svg>
  <div style={numberStyle}>{progress >= 100 ? 1 : countdownValue}%</div>
  <div style={topTextStyle}>Top</div>
</div>
<div style={textStyle}>Of Invisalign Providers</div>
<div className="flex justify-center items-center">
  <h1 className="text-5xl my-10">
    How <span className="font-light italic">Invisalign</span> Works
  </h1>
</div> */}


{/* <div className="mx-auto w-full max-w-screen-lg rounded-2xl bg-white p-2">





<ul>

  <li>
    Customized just for you - Your aligners are customized to fit your
    mouth. Dr. Frey and Dr. Frey uses advanced 3-D computer imaging
    technology to replicate an exact impression of your mouth and teeth,
    then our doctors customize each aligner treatment plan specific to
    your needs. This RX is sent to the lab that fabricates a series of
    your custom aligners so that they fit your mouth, and over time they
    move your teeth into the proper position.
  </li>
 
</ul>

<span>Why Consider Invisalign</span>

<p>
  People everywhere are beginning to experience the benefits of
  treatment. Here's why people just like you are choosing Invisalign
  over traditional braces:
</p>
<ul>
  <li>
    You can have a straighter, healthier smile without all the
    noticeable wires and brackets of traditional braces.
  </li>
  <li>
    Aligners are removable making it easy for you to enjoy the foods you
    love without worrying about breaking or bending your brackets and
    wires. You can also remove your Invisalign aligners to brush and
    floss regularly.
  </li>
  <li>
    You don't need to change anything about your current lifestyle! With
    Invisalign, you can continue participating in day-to-day activities
    without changing a thing. Invisalign is great for professionals,
    athletes, brides, and parents.
  </li>
  <li>
    Office visits and checkups are easy, quick, and painless. Fewer
    appointments are required throughout your entire treatment.
  </li>
</ul>

<span>Choose Experience for Your Invisalign Treatment</span>


</div> */}