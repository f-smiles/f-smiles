import {React, Fragment} from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Transition } from '@headlessui/react'

const OurTeam = () => {
  return (
    <main className="w-full px-4 pt-16">
      <div
        data-headlessui-state="open"
        className="mx-auto w-full max-w-screen-lg rounded-2xl bg-white p-2 mt-16"
      >
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className={`bar ${open ? 'active' : ''} flex w-full justify-between px-4 py-2 text-left text-sm font-medium text-purple-900`}>
                <span>Our Orthodontists</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500 z-0`}
                />
              </Disclosure.Button>
              <Transition
                as={Fragment}
                // enter="transition ease-in duration-100"
                // enterFrom="transform opacity-0 scale-95"
                // enterTo="transform opacity-100 scale-100"
                // leave="transition ease-out duration-75"
                // leaveFrom="transform opacity-100 scale-100"
                // leaveTo="transform opacity-0 scale-95"
                enter="transition linear duration-300 transform"
                enterFrom="-translate-y-1/2 opacity-0"
                enterTo="translate-y-0 opacity-100"
                leave="transition linear duration-300 transform"
                leaveFrom="translate-y-0 opacity-100"
                leaveTo="-translate-y-1/2 opacity-0"
              >
                <Disclosure.Panel className={`bar ${open ? 'active' : ''} px-4 pt-4 pb-2 text-sm text-gray-500`}>
                  <h2 className="text-lg font-medium">Dr.Gregg Frey</h2>
                  <img alt="Dr.Gregg Frey" src="" />
                  <div data-headlessui-state="open">
                    Dr. Gregg Frey is an orthodontist based in Pennsylvania, who
                    graduated from Temple University School of Dentistry with
                    honors and served in the U.S. Navy Dental Corps before
                    establishing his practice in the Lehigh Valley. He is a
                    Diplomat of the American Board of Orthodontics and has
                    received numerous distinctions, accreditations, and honors,
                    including being named one of "America's Top Orthodontists" by
                    the Consumer Review Council of America. This distinction is
                    held by fewer than 25% of orthodontists nationwide. ABO
                    certification represents the culmination of 5-10 years of
                    written and oral examinations and independent expert review of
                    actual treated patients. Recently Dr. Frey voluntarily
                    re-certified. Dr. Frey enjoys coaching soccer, vintage car
                    racing, and playing the drums. He is joined by his son, Dr.
                    Daniel Frey, at FreySmiles Orthodontics.
                  </div>

                  <h2 className="text-lg font-medium">Dr. Daniel Frey</h2>
                  <img alt="Dr.Daniel Frey" src="" />
                  <div data-headlessui-state="open">
                    Raised in the Lehigh Valley, Dr. Daniel Frey had a passion for
                    youth soccer and explored his creative interests in music and
                    film production during his adolescence. He graduated from
                    Blair Academy in Blairstown, NJ in 2005. He then pursued his
                    pre-dental requisites at the University of Pittsburgh,
                    majoring in Biology. Dr. Frey excelled in his studies and was
                    admitted to Temple University's dental school, graduating at
                    the top of his class with the prestigious Summa Cum Laude
                    designation.Continuing his education, Dr. Frey was admitted to
                    the esteemed orthodontic residency program at the University
                    of the Pacific in San Francisco, CA, where he worked with
                    faculty from around the world and utilized cutting-edge
                    orthodontic techniques. During his time in San Francisco, he
                    conducted research in three-dimensional craniofacial analysis
                    and earned his Master of Science degree. Dr. Frey is a member
                    of the American Association of Orthodontists and the American
                    Dental Association. In his leisure time, he enjoys staying
                    active outdoors, camping, playing music, cooking, and spending
                    time with loved ones.
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Our Team</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <h2>Team</h2>
                <img alt="Team" src="" />
                <h2>Team</h2>
                <img alt="Tean" src="" />
                <h2>Team</h2>
                <img alt="Team" src="" />
                <h2>Team</h2>
                <img alt="Team" src="" />
                <h2>Team</h2>
                <img alt="Team" src="" />
                <h2>Team</h2>
                <img alt="Team" src="" />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </main>
  );
};

export default OurTeam;
