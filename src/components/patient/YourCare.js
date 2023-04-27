import React, { useState } from "react";

const YourCare = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col">
        <div
          className={`border-t-2 border-gray-300 py-3 px-4 flex justify-between items-center cursor-pointer select-none ${
            activeAccordion === 0 ? "bg-gray-100" : ""
          }`}
          onClick={() => toggleAccordion(0)}
        >
          <h2 className="text-lg font-medium">Accordion Item #1</h2>
          <svg
            className={`h-6 w-6 transform ${
              activeAccordion === 0 ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={activeAccordion === 0 ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
            />
          </svg>
        </div>
        <div
          className={`${
            activeAccordion === 0 ? "" : "hidden"
          } bg-gray-100 py-3 px-4 transition duration-2500`}
        >
          <p>
            Placeholder content for this accordion, which is intended to
            demonstrate the Tailwind CSS implementation.
          </p>
        </div>
        <div
          className={`border-t-2 border-gray-300 py-3 px-4 flex justify-between items-center cursor-pointer select-none ${
            activeAccordion === 1 ? "bg-gray-100" : ""
          }`}
          onClick={() => toggleAccordion(1)}
        >
          <h2 className="text-lg font-medium">Accordion Item #2</h2>
          <svg
            className={`h-6 w-6 transform ${
              activeAccordion === 1 ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={activeAccordion === 1 ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
            />
          </svg>
        </div>
        <div
          className={`${
            activeAccordion === 1 ? "" : "hidden"
          } bg-gray-100 py-3 px-4 transition duration-2500`}
        >
          <p>
            Placeholder content for this accordion, which is intended to
            demonstrate the Tailwind CSS implementation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default YourCare;


  //   <div className="w-full px-4 pt-16 ">
  //     <h2>Your First Visit</h2>
  //     <div
  //       data-headlessui-state="open"
  //       className="mx-auto w-full max-w-screen-lg rounded-2xl bg-white p-2"
  //     >
  //       <Disclosure defaultOpen={true}>
  //         {({ open }) => (
  //           <>
  //             <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
  //               <span>Who You'll Be Meeting</span>
  //               <ChevronUpIcon
  //                 className={`${
  //                   open ? "rotate-180 transform" : ""
  //                 } h-5 w-5 text-purple-500`}
  //               />
  //             </Disclosure.Button>
  //             <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
  //               <div data-headlessui-state="open">
  //                 During your first visit you’ll get to know some of the
  //                 friendly faces of the FreySmiles orthodontic team and see what
  //                 makes us unique. We are always excited about meeting new
  //                 patients. Your first appointment will consist of a thorough
  //                 orthodontic examination including photos, a digital radiograph
  //                 of your teeth, and a discussion of your options. This
  //                 important 60-90 minute visit will give us a picture of your
  //                 orthodontic needs.
  //               </div>
  //             </Disclosure.Panel>
  //           </>
  //         )}
  //       </Disclosure>
  //       <Disclosure as="div" className="mt-2">
  //         {({ open }) => (
  //           <>
  //             <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
  //               <span>Starting Treatment</span>
  //               <ChevronUpIcon
  //                 className={`${
  //                   open ? "rotate-180 transform" : ""
  //                 } h-5 w-5 text-purple-500`}
  //               />
  //             </Disclosure.Button>
  //             <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
  //               <div data-headlessui-state="open">
  //                 Many times we are able to save you a return trip back to
  //                 office and can start treatment at your first visit. We know
  //                 you’ll be excited to see your new FreySmile!
  //               </div>
  //             </Disclosure.Panel>
  //           </>
  //         )}
  //       </Disclosure>
  //       <Disclosure as="div" className="mt-2">
  //         {({ open }) => (
  //           <>
  //             <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
  //               <span>Growth And Guidance</span>
  //               <ChevronUpIcon
  //                 className={`${
  //                   open ? "rotate-180 transform" : ""
  //                 } h-5 w-5 text-purple-500`}
  //               />
  //             </Disclosure.Button>
  //             <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
  //               <div data-headlessui-state="open">
  //                 If braces are not needed right away, you will be enrolled in
  //                 our complementary growth and guidance program, called our
  //                 Future FreySmiles Club, where we will see you every 6-12
  //                 months to monitor your progress. Timing is extremely important
  //                 for us to be able to provide the best results and to deliver
  //                 your new smile as quickly as possible. These visits for a
  //                 “peace of mind policy” cost you nothing! We’ll also be working
  //                 with your family dentist before and during braces to provide
  //                 you with the highest level of care.
  //               </div>
  //             </Disclosure.Panel>
  //           </>
  //         )}
  //       </Disclosure>
  //       <Disclosure as="div" className="mt-2">
  //         {({ open }) => (
  //           <>
  //             <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
  //               <span>Things To Bring</span>
  //               <ChevronUpIcon
  //                 className={`${
  //                   open ? "rotate-180 transform" : ""
  //                 } h-5 w-5 text-purple-500`}
  //               />
  //             </Disclosure.Button>
  //             <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
  //               <div data-headlessui-state="open">
  //                 Since treatment plans and payment options may be discussed, we
  //                 ask that a parent or guardian be present for the first visit.
  //                 Including everyone who will be making this important decision
  //                 helps us communicate thoroughly. We are an insurance friendly
  //                 office so please assist us by bringing your insurance card if
  //                 you have orthodontic coverage. We want our patients to leave
  //                 the office with a clear understanding of their specific
  //                 treatment plan, so don’t hesitate to ask questions.
  //               </div>
  //             </Disclosure.Panel>
  //           </>
  //         )}
  //       </Disclosure>
  //     </div>
  //   </div>

//   );
// };

// export default YourCare;
