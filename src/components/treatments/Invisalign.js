import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const Invisalign = () => {
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
    <main style={sectionStyle} className="w-full px-4 pt-16 bg-F8F6F1">
{/* <svg
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
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{ stopColor: '#AA98A9', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: '#D8BFD8', stopOpacity: 1 }} />
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="25" fill="url(#grad)" />
  <path
    id="textPath"
    fill="none"
    d="M89.322,50.197c0,22.09-17.91,40-40,40c-22.089,0-40-17.91-40-40 c0-22.089,17.911-40,40-40C71.412,10.197,89.322,28.108,89.322,50.197z"
  />
<text style={{ fontSize: '12px' }}>
  <textPath xlinkHref="#textPath">
    <tspan x="10">Frey</tspan>
    <tspan x="40">Smiles</tspan>
    <tspan x="80">Top</tspan>
    <tspan x="100">Of</tspan>
    <tspan x="130">Invisalign</tspan>
    <tspan x="200">Providers</tspan>

  </textPath>
</text>

</svg>
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
    position: 'absolute',
    left: '50%',
    top: '58%',
    fontSize: '9px',
  }}
>
  <text x="50" y="0" fill="white" fontSize="12px" textAnchor="middle">
    1%
  </text>
</svg> */}



      <div className="flex flex-col md:flex-row">
        
        <div className="md:w-1/2 md:pr-6">
          <div  className="text-white mt-40">
          <div className="relative w-full pb-full overflow-hidden">
      <svg
        className="absolute left-0 top-0 w-full h-full animation-spin"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="circlePath"
            d="M 150, 150 m -75, 0 a 75,75 0 0,1 150,0 a 75,75 0 0,1 -150,0"
          />
        </defs>
        <circle cx="150" cy="100" r="75" fill="none" />
        <g>
          <use xlinkHref="#circlePath" fill="none" />
          <text fill="#000" className="font-bold text-lg">
            <textPath xlinkHref="#circlePath">Top Of Invisalign Providers</textPath>
          </text>
        </g>
      </svg>
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
        <img
      src="../../images/elizabethpatient.jpeg"
      alt="invisalign"
      className="w-full md:max-w-1/2 relative z-0"
      style={imageStyle}
    />
      </div>
      <section className="mt-10 flex justify-between">
      <div className="w-72 bg-red-200 p-2 flex flex-col items-center mx-2">
    <div className="h-64">
      <img
        src="../../images/beforeafter1.png"
        alt="invisalign"
        className="h-full w-auto object-cover"
      />
    </div>
    <p className="mt-2">Joel</p>
  </div>
  <div className="w-72 bg-lime-100 p-2 flex flex-col items-center mx-2">
    <div className="h-64">
      <img
        src="../../images/beforeafter2.png"
        alt="Image 2"
        className="h-full w-auto object-cover"
      />
    </div>
    <p className="mt-2">Sean</p>
  </div>
  <div className="w-72 bg-indigo-200 p-2 flex flex-col items-center mx-2">
    <div className="h-64">
      <img
        src="../../images/beforeafter3.png"
        alt="Image 3"
        className="h-full w-auto object-cover"
      />
    </div>
    <p className="mt-2">London</p>
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