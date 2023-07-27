import React, { useState, useEffect } from "react";

const Invisalign = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress >= 100 ? 100 : prevProgress + 2; 
        return nextProgress;
      });
    }, 25);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const progressBarStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    position: "relative",
  };

  const borderStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    clipPath: `polygon(50% 50%, 100% 0, 100% 100%, ${(100 - progress) / 100 * 50}% 100%, 50% 50%, 50% 0)`,
    borderWidth: "4px",
    borderStyle: "solid",
    borderColor: "#9F7AEA",
    boxSizing: "border-box",
  };

  const numberStyle = {
    fontSize: "24px",
    color: "#369",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: progress >= 100 ? 1 : 0,
    transition: "opacity 1s ease-in-out",
  };

  const topTextStyle = {
    fontSize: "18px",
    color: "#369",
    position: "absolute",
    top: "50%",
    left: "15%", 
    transform: `translate(-50%, -50%) ${progress >= 100 ? "translateX(-100%)" : "translateX(0)"}`,
    opacity: progress >= 100 ? 1 : 0,
    transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
  };

  return (
    <main className="w-full px-4 pt-16 bg-F8F6F1">
      <div className="flex justify-center items-center">
        <div style={progressBarStyle}>
          <div style={borderStyle}></div>
          <div style={numberStyle}>1</div>
          <div style={topTextStyle}>Top</div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-5xl my-10">
          How <span className="font-light italic">Invisalign</span> Works
        </h1>
      </div>
    </main>
  );
};

export default Invisalign;




{/* <div className="mx-auto w-full max-w-screen-lg rounded-2xl bg-white p-2">
<span>
  FreySmiles Orthodontics is one of the TOP 1% Providers in the US
</span>

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

<span>What is Invisalign?</span>

<p>
  Invisalign uses a series of customized, clear aligners to straighten
  teeth faster and with fewer office visits than traditional braces.
  Thousands of orthodontists in the United States and Canada use
  Invisalign to accurately and effectively treat their patients. This
  type of treatment in the hands of experts delivers fantastic results.
  Aligners are:
</p>
<ul>
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
  <li>
    Customized just for you - Your aligners are customized to fit your
    mouth. Dr. Frey and Dr. Frey uses advanced 3-D computer imaging
    technology to replicate an exact impression of your mouth and teeth,
    then our doctors customize each aligner treatment plan specific to
    your needs. This RX is sent to the lab that fabricates a series of
    your custom aligners so that they fit your mouth, and over time they
    move your teeth into the proper position.
  </li>
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
</div> */}