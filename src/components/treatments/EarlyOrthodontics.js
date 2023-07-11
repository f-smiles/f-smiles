import React, {useState,Fragment} from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useTrail, animated } from "@react-spring/web";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const words = [
  "E",
  "x",
  "p",
  "e",
  "r",
  "t",
  " ",
  "C",
  "a",
  "r",
  "e",
  " ",
  "R",
  "o",
  "o",
  "t",
  "e",
  "d",
  " ",
  "i",
  "n",
  " ",
  "E",
  "x",
  "c",
  "e",
  "l",
  "l",
  "e",
  "n",
  "c",
  "e",
];

const EarlyOrthodontics = () => {
  const trail = useTrail(words.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: { duration: 1000 },
  });
  const [open, setOpen] = useState(1);
  const [alwaysOpen, setAlwaysOpen] = useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (

    <main className="bg-F2F2F2 w-full pt-20">

      <section className="bg-F2F2F2 max-w-screen-lg mx-auto mt-10 py-20 p-10">
        <div className="relative">
          <h1 className="-ml-20 absolute top-0 mt-20 z-10 text-4xl text-indigo-200">
            <span className="text-stone-700">
              {trail.map((props, index) => (
                <animated.span key={index} style={props}>
                  {words[index]}
                </animated.span>
              ))}
            </span>
          </h1>
          <img
            src="../../images/sisters.jpg"
            alt="invisalign"
            className="rounded-full"
            style={{
              maxWidth: "50%",
              maxHeight: "50%",
              float: "right",
              position: "relative",
              marginLeft: "20px",
              opacity: 0,
              transition: "opacity 4s ease-in-out",
            }}
            onLoad={(event) => {
              event.target.style.opacity = 1;
            }}
          />
        </div>
        <div>
        <p className="-ml-20 mt-40 relative">
  <span className="py-2 block">The American Association of Orthodontics recommends every child have their first orthodontic screening at age 7.</span>{" "}
  <span className="py-2 block">Why so early?</span>{" "}
  <span className="py-2 block">Even though early treatment is rarely indicated, assessing dental development, the health of the airway, and evaluating the growth of the face and jaws through key developmental periods is essential to providing the best orthodontic outcomes.</span>{" "}
  <span>We want your child to have every opportunity for a healthy smile.</span>
</p>

        </div>
      </section>

      <section className="bg-EAE8E1 pt-10 pb-10">
  <div className="py-2 flex">
    <img
      src="../../images/redhalf.svg"
      alt="invisalign"
      className="rounded-md"
      style={{
        maxWidth: "60%",
        maxHeight: "60%",
        transform: "rotate(270deg)",
        position: "relative",
        marginLeft: "-10px",
        opacity: 0,
        transition: "opacity 4s ease-in-out",
      }}
      onLoad={(event) => {
        event.target.style.opacity = 1;
      }}
    />
    <div className="flex-1">
      <h1 className="text-4xl mb-6 text-center">Growth and Guidance</h1>

      <p className="text-center">
         Patients who are not yet ready for orthodontic treatment are enrolled in our Future FreySmiles Club. Guidance visits are free of charge. This includes a special treat on their birthday and spinning our prize wheel! At the guidance visit, our doctors will evaluate your child's facial and dental development and will notify you of any changes. We will also tell you, as accurately as possible, the estimated age when orthodontic treatment will begin so that you can plan accordingly. These easy and fun visits allow patients to become familiar with our friendly office and provide families with peace of mind. Generally, these appointments are scheduled every six to twelve months.
      </p>
    </div>

    <div className="flex-1">

      <p className="text-center">
         find icons
      </p>
    </div>
  </div>
</section>
<section className="bg-F2F2F2 pt-10 pb-10">
  <div className="py-2 flex">
    <img
      src="../../images/drfreywithyoungpatient.jpg"
      alt="invisalign"
      className="rounded"
      style={{
        maxWidth: "30%",
        maxHeight: "40%",
marginLeft: "10px",
        position: "relative",

        opacity: 0,
        transition: "opacity 4s ease-in-out",
      }}
      onLoad={(event) => {
        event.target.style.opacity = 1;
      }}
    />
    <div className="flex-1">
      <h1 className="text-4xl mb-6 text-center">Early Interceptive Orthodontics</h1>

                <p>Early treatment can begin the correction of significant problems, prevent more severe problems from developing, and simplify future treatment.</p>
                <p>Because all of the permanent teeth have not yet erupted when early treatment is performed, their final alignment may not have been corrected. Typically, a shortened comprehensive phase of treatment (Phase II - full braces) in the teen years, after all the permanent teeth have erupted, completes the correction. However, in some circumstances, further orthodontic treatment may not be indicated.</p>
                <p>Patients with braces and other orthodontic appliances require more effort to keep their teeth and gums clean. Because we want to ensure the highest level of dental health, we recommend you see your family dentist for regular check-ups and cleanings every 6 months during treatment.</p>

    </div>


  </div>
</section>
<section className="bg-C7AF97 pt-10 pb-10">
  <div className="py-2 ">
<h1 className="text-center text-4xl">Find answers to the most commonly asked questions</h1>
<div
            style={{ display: "flex", flexDirection: "column" }}
            className="mt-10 text-violet-800"
          >
            <Fragment>
              <Accordion open={open === 1}>
                <h1>

                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="text-xl border-b-0"
                  >
                    <span style={{ whiteSpace: "nowrap" }}>
                    In addition to a beautiful new smile, what are some other benefits of orthodontic treatment?
                    </span>
                  </AccordionHeader>
                </h1>
                <AccordionBody>
                  <ul>

                  <p className="text-center">Braces can improve the function of the bite and teeth, improve the ability to clean the teeth, prevent wear on the teeth, and increase the longevity of natural teeth over a lifetime.</p>
                  </ul>
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 2}>
                <h1>
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="text-xl border-b-0"
                  >
                    <span style={{ whiteSpace: "nowrap" }}>If a child has treatment early, will this prevent the need for braces as an adolescent?</span>
                  </AccordionHeader>
                </h1>
                <AccordionBody>
                <p className="">Early treatment can begin the correction of significant problems, prevent more severe problems from developing, and simplify future treatment. Because all of the permanent teeth have not yet erupted when early treatment is performed, their final alignment may not have been corrected. Typically, a shortened comprehensive phase of treatment (Phase II - full braces) in the teen years, after all the permanent teeth have erupted, completes the correction. However, in some circumstances, further orthodontic treatment may not be indicated.</p>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3}>
                <h1>
                  <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className="text-xl border-b-0"
                  >
                    <span style={{ whiteSpace: "nowrap" }}>Do we still need to see our family dentist during orthodontic treatment?</span>
                  </AccordionHeader>
                </h1>
                <AccordionBody>
                <p>Patients with braces and other orthodontic appliances require more effort to keep their teeth and gums clean. Because we want to ensure the highest level of dental health, we recommend you see your family dentist for regular check-ups and cleanings every 6 months during treatment.</p>
                </AccordionBody>
              </Accordion>
            </Fragment>
          </div>
  </div>
</section>
    </main>
  );
};

export default EarlyOrthodontics;

