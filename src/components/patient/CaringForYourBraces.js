import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const CaringForYourBraces = () => {
  return (
    <div className="w-full px-4 pt-16 ">
      <h2>Caring for Your Braces</h2>
      <div
        data-headlessui-state="open"
        className="mx-auto w-full max-w-screen-lg rounded-2xl bg-white p-2"
      >
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Brushing and Flossing</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div data-headlessui-state="open">
                  It’s more important than ever to brush and floss regularly
                  when you have braces, so the teeth and gums are healthy during
                  orthodontic treatment. Patients who do not keep their teeth
                  clean may require more frequent visits to the dentist for a
                  professional cleaning. Adults who have a history of gum
                  disease should also see a periodontist during orthodontic
                  treatment. Watch the two videos below on the proper care of
                  braces during orthodontic treatment.
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Eating with Braces</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div data-headlessui-state="open">
                  What can you eat? Let’s talk about what you shouldn’t eat! For
                  the first day or so, stick to soft foods. Avoid tough meats,
                  hard breads, and raw vegetables. Before long, you’ll be able
                  to bite a cucumber again. But you’ll need to protect your
                  orthodontic appliances when you eat for as long as you’re
                  wearing braces.
                </div>
                <h3>Food To Avoid</h3>
                <p>
                  <ul>
                    <li>Chewy foods: bagels, hard rolls, licorice.</li>
                    <li>Crunchy foods: popcorn, ice.</li>
                    <li>Sticky foods: caramels, gum.</li>
                    <li>Hard foods: nuts, candy.</li>
                    <li>
                      Foods you have to bite into: corn on the cob, apples,
                      carrots.
                    </li>
                  </ul>
                  Chewing on hard things (for example, pens, pencils or
                  fingernails) can damage the braces. Damaged braces will cause
                  treatment to take longer.
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>General Soreness</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div data-headlessui-state="open">
                  When you get your braces on, you may feel general soreness in
                  your mouth and teeth may be tender to biting pressures for 3 –
                  5 days. Take Tylenol or whatever you normally take for
                  headache or discomfort. The lips, cheeks and tongue may also
                  become irritated for one to two weeks as they toughen and
                  become accustomed to the braces. We will supply wax to put on
                  the braces in irritated areas to lessen discomfort.
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Loosening of Teeth</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div data-headlessui-state="open">
                  This is to be expected throughout treatment. Don’t worry! It’s
                  normal. Teeth must loosen first so they can move. The teeth
                  will firm up in their new — corrected — positions after
                  treatment is completed.
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Loose Wire or Band</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div data-headlessui-state="open">
                  Don’t be alarmed if a wire or band comes loose. This happens
                  occasionally. If a wire sticks out and is irritating, use a
                  blunt instrument (eraser end of a pencil) and carefully,
                  gently push the irritating wire back under the archwire.
                  Simply get it out of the way. If irritation to the lips or
                  mouth continues, place wax or wet cotton on the wire to reduce
                  the annoyance. Call our office as soon as possible for an
                  appointment to check and repair the problem.
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Rubber Band Wear</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div data-headlessui-state="open">
                  To successfully complete orthodontic treatment, the patient
                  must work together with the orthodontist. The teeth and jaws
                  can only move toward their corrected positions if the patient
                  consistently wears the rubber bands or other appliances as
                  prescribed. Lack of cooperation following instructions and
                  damaged appliances lengthen the treatment time… so please …
                  follow instructions.
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Athletics</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div data-headlessui-state="open">
                  If you play sports, it’s important you let us know. A
                  protective mouthguard is provided for playing contact sports.
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>How Long Will I Wear Braces?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div data-headlessui-state="open">
                  Every year hundreds of parents trust our experience to provide
                  beautiful, healthy smiles for their children. Obviously,
                  depending on case complexity and compliance, your time in
                  braces may vary, but at FreySmiles Orthodontics a stunning
                  smile is typically only 12-22 months away.
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default CaringForYourBraces
// import React, { useEffect } from 'react';
// import { gsap } from "gsap-trial";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Scrollbar from 'smooth-scrollbar';

// const YourComponent = () => {

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Initialize custom scrollbar
//     let bodyScrollBar = Scrollbar.init(document.querySelector('.scroller'), {
//         damping: 0.1,
//         delegateTo: document,
//     });

//     // Proxy scroller for ScrollTrigger
//     ScrollTrigger.scrollerProxy(".scroller", {
//         scrollTop(value) {
//             if (arguments.length) {
//                 bodyScrollBar.scrollTop = value;
//             }
//             return bodyScrollBar.scrollTop;
//         },
//     });

//     bodyScrollBar.addListener(ScrollTrigger.update);

//     // Set zIndex for panels
//     gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

//     // Animating panels
//     gsap.utils.toArray('.panel:not(.purple)').forEach((image, i) => {
//         gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".black",
//                 scroller: ".scroller",
//                 start: () => "top -" + (window.innerHeight * (i + 0.5)),
//                 end: () => "+=" + window.innerHeight,
//                 scrub: true,
//                 invalidateOnRefresh: true,
//             }
//         })
//         .to(image, { height: 0 });
//     });

//     // Set zIndex for panel texts
//     gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

//     // Animating panel texts
//     gsap.utils.toArray('.panel-text').forEach((text, i) => {
//         gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".black",
//                 scroller: ".scroller",
//                 start: () => "top -" + (window.innerHeight * i),
//                 end: () => "+=" + window.innerHeight,
//                 scrub: true,
//                 invalidateOnRefresh: true,
//             }
//         })
//         .to(text, { duration: 0.33, opacity: 1, y: "50%" })
//         .to(text, { duration: 0.33, opacity: 0, y: "0%" }, 0.66);
//     });

//     // Create ScrollTrigger for pinning
//     ScrollTrigger.create({
//         trigger: ".black",
//         scroller: ".scroller",
//         start: "top top",
//         end: () => "+=" + ((gsap.utils.toArray('.panel').length + 1) * window.innerHeight),
//         pin: true,
//         scrub: true,
//         invalidateOnRefresh: true,
//         markers: true
//     });

//     return () => {
//         ScrollTrigger.kill();
//         bodyScrollBar.destroy();
//     };
// }, []);

//     return (
//         <div className="scroller h-screen overflow-hidden">
//             <section className="black flex justify-around items-center h-screen bg-black sticky top-0 z-10">
//                 <div className="text-wrap relative overflow-hidden w-[450px] h-[80vh]">
//                     <div className="panel-text blue-text absolute inset-0 z-10 w-full h-full text-4xl uppercase font-bold text-center bg-black text-blue-500">Blue</div>
//                     <div className="panel-text red-text absolute inset-0 z-10 w-full h-full text-4xl uppercase font-bold text-center bg-black text-red-500">Red</div>
//                     <div className="panel-text orange-text absolute inset-0 z-10 w-full h-full text-4xl uppercase font-bold text-center bg-black text-orange-500">Orange</div>
//                     <div className="panel-text purple-text absolute inset-0 z-10 w-full h-full text-4xl uppercase font-bold text-center bg-black text-purple-500">Purple</div>
//                 </div>
//                 <div className="p-wrap relative overflow-hidden w-[450px] h-[80vh]">
//                     <div className="panel blue absolute inset-0 bg-blue-800"></div>
//                     <div className="panel red absolute inset-0 bg-red-500"></div>
//                     <div className="panel orange absolute inset-0 bg-orange-600"></div>
//                     <div className="panel purple absolute inset-0 bg-purple-700"></div>
//                 </div>
//             </section>
//             <section className="h-screen bg-blue-800"></section>
//         </div>
//     );
// };

// export default YourComponent;
