import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";

const OurTeam = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const teamMembers = [
    {
      name: "Dr.Gregg Frey",
      img: "",
      bio:
        "Dr. Gregg Frey is an orthodontist based in Pennsylvania, who graduated from Temple University School of Dentistry with honors and served in the U.S. Navy Dental Corps before establishing his practice in the Lehigh Valley.",
    },
    {
      name: "Dr. Daniel Frey",
      img: "",
      bio:
        "Raised in the Lehigh Valley, Dr. Daniel Frey had a passion for youth soccer and explored his creative interests in music and film production during his adolescence. He graduated from Blair Academy in Blairstown, NJ in 2005.",
    },
  ];

  return (
    <main className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-screen-lg rounded-2xl bg-white p-2 mt-16">
        <h1 className="text-xl font-bold text-purple-900 relative mb-4">
          <span className="pl- -ml-3 bg-red-500 h-full w-1 absolute top-0 left-0"></span>
          Our Team
        </h1>
        <dl className="space-y-8">
          {teamMembers.map((member, index) => (
            <Fragment key={index}>
              <dt
                className="text-lg font-medium text-purple-900 cursor-pointer relative pl-4"
                onClick={() => toggleAccordion(index)}
              >
                <ChevronUpIcon
                  className={`${
                    activeAccordion === index ? "transform rotate-180" : ""
                  } h-5 w-5 text-purple-500 mr-2`}
                />
                <span className="bg-red-500 h-full w-1 absolute top-0 left-0"></span>
                {member.name}
              </dt>

              <Transition
  show={activeAccordion === index}
  enter="transition ease-out duration-500"
  enterFrom="transform opacity-0 scale-95 -translate-y-8"
  enterTo="transform opacity-100 scale-100 translate-y-0"
  leave="transition ease-out duration-500"
  leaveFrom="transform opacity-100 scale-100 translate-y-0"
  leaveTo="transform opacity-0 scale-95 -translate-y-9"
>
  <dd className="text-sm text-gray-500 mt-2 pl-7">
    {member.bio}
  </dd>
</Transition>
            </Fragment>
          ))}
        </dl>
      </div>
    </main>
  );
};

export default OurTeam;


