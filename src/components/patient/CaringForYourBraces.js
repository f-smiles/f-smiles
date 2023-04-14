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
