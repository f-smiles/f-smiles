import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-screen-lg rounded-2xl bg-white p-2">
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <div className="mt-10  bg-gradient-to-b from-violet-100 to-stone-50 py-4 border border-violet-100 rounded-lg px-4 pt-4 pb-2 space-y-4 text-gray-500 text-center">
                <h1 className=" px-4 py-2 mx-auto text-3xl text-purple-900  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  Why Choose Us
                  </h1>
                <p>
                  FreySmiles Orthodontics is a family-owned practice providing
                  unparalleled orthodontic experience to the Lehigh Valley
                  community for over four decades. At FreySmiles Orthodontics,
                  our orthodontists Dr. Gregg Frey and Dr. Daniel Frey are board
                  certified by the American Board of Orthodontics, which
                  demonstrates their highest commitment to excellence in
                  orthodontics. The FreySmiles community revolves around
                  advancing the Industry through repeated and extended use of
                  the specialty's newest technology.
                </p>
                <p>
                  Board certification is a voluntary achievement that only one
                  in three orthodontists choose to pursue, and it requires a
                  thorough evaluation of an orthodontist's knowledge base and
                  clinical skills. In addition, FreySmiles Orthodontics is the
                  #1 provider of Invisalign and Invisalign Teen in the region.
                  As Diamond Plus Invisalign providers, our doctors have
                  achieved this level of experience through treating thousands
                  of patients with Invisalign. Their care over the many years
                  has contributed to the research and advancement of this
                  specialized orthodontic treatment modality.
                </p>
                <p>
                  Experts in Invisalign, Damon Braces, Accelerated Orthodontic
                  Treatment, and low-dose 3D Digital Radiographs, FreySmiles
                  also believes in accessible orthodontic care for everyone and
                  offers flexible, zero-interest payment options with low down
                  payments. They established a non-profit organization called{" "}
                  <span>
                    {" "}
                    <a
                      href="https://morethansmiles.org/"
                      className="underline cursor-pointer text-indigo-500 hover:text-indigo-700"
                    >
                      More Than Smiles
                    </a>{" "}
                  </span>{" "}
                  in 2011, providing orthodontic treatment to deserving young
                  individuals who may not have access to world-class orthodontic
                  care or cannot afford it. If you know someone that could
                  benefit of this gift, please visit the website for the details on how to nominate a deserving
                  individual. FreySmiles has four convenient locations in the
                  Allentown, Bethlehem, Easton, Schnecksville, and Lehighton
                  communities.
                </p>
              </div>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <div className="bg-center bg-cover ">

  <table className="mx-auto" style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  <tr>
                 
                    <td className="p-2"></td>
                    <td className="p-2 text-lg text-indigo-700 text-center">
                    <div className="border border-indigo-700">FreySmiles Orthodontics</div>
                    </td>
                    <td className="p-2 text-lg text-indigo-700 text-center">Other Practitioners</td>
                  </tr>
                  <tr>
                    <td
                      className="p-2 py-8 text-violet-700 text-center"
                      style={{ border: "1px solid purple" }}
                    >
                      CUTTING-EDGE TECHNOLOGY
                    </td>
                    <td className="mb-2" style={{ border: "1px solid purple" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#B17CFF"
                        className="w-6 h-6 mx-auto z-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td className="mb-2" style={{ border: "1px solid purple" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mx-auto stroke-red-500 z-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="p-2 py-8 text-center"
                      style={{ border: "1px solid purple" }}
                    >
                      LEADERS IN THE INDUSTRY
                    </td>
                    <td className="mb-2" style={{ border: "1px solid purple" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#B17CFF"
                        className="w-6 h-6 mx-auto z-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td className="mb-2" style={{ border: "1px solid purple" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mx-auto stroke-red-500 z-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="p-2 py-8 text-center"
                      style={{ border: "1px solid purple" }}
                    >
                      INDIVIDUALIZE CARE
                    </td>
                    <td className="mb-2" style={{ border: "1px solid purple" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#B17CFF"
                        className="w-6 h-6 mx-auto z-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td className="mb-2" style={{ border: "1px solid purple" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mx-auto stroke-red-500 z-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="p-2 py-8 text-center"
                      style={{ border: "1px solid purple" }}
                    >
                      ABO CERTIFIED
                    </td>
                    <td className="mb-2" style={{ border: "1px solid purple" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#B17CFF"
                        className="w-6 h-6 mx-auto z-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td className="mb-2" style={{ border: "1px solid purple" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mx-auto stroke-red-500 z-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="p-2 py-8 text-center"
                      style={{ border: "1px solid purple" }}
                    >
                      OVER 45+ YEARS OF EXPERIENCE
                    </td>
                    <td className="mb-2" style={{ border: "1px solid purple" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#B17CFF"
                        className="w-6 h-6 mx-auto z-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td className="mb-2" style={{ border: "1px solid purple" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mx-auto stroke-red-500 z-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="p-2 py-8 text-center"
                      style={{ border: "1px solid purple" }}
                    >
                      FINANCIAL OPTIONS
                    </td>
                    <td className="mb-2" style={{ border: "1px solid purple" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#B17CFF"
                        className="w-6 h-6 mx-auto z-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                    <td className="mb-2" style={{ border: "1px solid purple" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#B17CFF"
                        className="w-6 h-6 mx-auto z-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default WhyChooseUs;
