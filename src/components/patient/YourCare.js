import React, { useState } from "react";

const YourCare = () => {
  const [activeAccordion, setActiveAccordion] = useState([false, false, false, false]);

  const toggleAccordion = (index) => {
    setActiveAccordion((prevState) =>
      prevState.map((isActive, i) => (i === index ? !isActive : isActive))
    );
  };
  return (
    <div className="mt-20 max-w-xl">
      <div className="flex flex-col justify-start">
        <div
          className={`border-t-2 border-gray-300 py-3 px-4 flex justify-between items-center cursor-pointer select-none ${
            activeAccordion[0] ? "bg-white" : ""
          }`}
          onClick={() => toggleAccordion(0)}
        >
          <h2 className="text-lg font-medium">Who You'll Be Meeting</h2>
          <svg
            className={`h-6 w-6 transform ${
              activeAccordion[0] ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={activeAccordion[0] ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
            />
          </svg>
        </div>
        <div
          className={`overflow-hidden transition-all duration-1000 ${
            activeAccordion[0] ? "max-h-96" : "max-h-0"
          }`}
        >
          <p>
            During your first visit you’ll get to know some of the friendly
            faces of the FreySmiles orthodontic team and see what makes us
            unique. We are always excited about meeting new patients. Your first
            appointment will consist of a thorough orthodontic examination
            including photos, a digital radiograph of your teeth, and a
            discussion of your options. This important 60-90 minute visit will
            give us a picture of your orthodontic needs.
          </p>
        </div>
        <div
          className={`border-t-2 border-gray-300 py-3 px-4 flex justify-between items-center cursor-pointer select-none ${
            activeAccordion[1]  ? "bg-white" : ""
          }`}
          onClick={() => toggleAccordion(1)}
        >
          <h2 className="text-lg font-medium">Accordion Item #2</h2>
          <svg
            className={`h-6 w-6 transform ${
              activeAccordion[1]  ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={activeAccordion[1]  ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
            />
          </svg>
        </div>
        <div
          className={`overflow-hidden transition-all duration-1000 ${
            activeAccordion[1] ? "max-h-96" : "max-h-0"
          }`}
        >
          <p>
            Many times we are able to save you a return trip back to office and
            can start treatment at your first visit. We know you’ll be excited
            to see your new FreySmile!
          </p>
        </div>
        <div
          className={`border-t-2 border-gray-300 py-3 px-4 flex justify-between items-center cursor-pointer select-none ${
            activeAccordion[2]  ? "bg-white" : ""
          }`}
          onClick={() => toggleAccordion(2)}
        >
          <h2 className="text-lg font-medium">Growth And Guidance</h2>
          <svg
            className={`h-6 w-6 transform ${
              activeAccordion[2]  ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={activeAccordion[2]  ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
            />
          </svg>
        </div>
        <div
          className={`overflow-hidden transition-all duration-1000 ${
            activeAccordion[2] ? "max-h-96" : "max-h-0"
          }`}
        >
          <p>
            {" "}
            If braces are not needed right away, you will be enrolled in our
            complementary growth and guidance program, called our Future
            FreySmiles Club, where we will see you every 6-12 months to monitor
            your progress. Timing is extremely important for us to be able to
            provide the best results and to deliver your new smile as quickly as
            possible. These visits for a “peace of mind policy” cost you
            nothing! We’ll also be working with your family dentist before and
            during braces to provide you with the highest level of care.
          </p>
        </div>
        <div
          className={`border-t-2 border-gray-300 py-3 px-4 flex justify-between items-center cursor-pointer select-none ${
            activeAccordion[3] ? "bg-white" : ""
          }`}
          onClick={() => toggleAccordion(3)}
        >
          <h2 className="text-lg font-medium">What To Bring</h2>
          <svg
            className={`h-6 w-6 transform ${
              activeAccordion[3]  ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={activeAccordion[3] ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
            />
          </svg>
        </div>
        <div
          className={`overflow-hidden transition-all duration-1000 ${
            activeAccordion[3] ? "max-h-96" : "max-h-0"
          }`}
        >
          <p>
            {" "}
            Since treatment plans and payment options may be discussed, we ask
            that a parent or guardian be present for the first visit. Including
            everyone who will be making this important decision helps us
            communicate thoroughly. We are an insurance friendly office so
            please assist us by bringing your insurance card if you have
            orthodontic coverage. We want our patients to leave the office with
            a clear understanding of their specific treatment plan, so don’t
            hesitate to ask questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default YourCare;

