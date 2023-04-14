import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Emergency = () => {
  return (
    <div className="w-full px-4 pt-16 ">
      <h2>Emergnecies</h2>
      <p>
        If you’re experiencing problems with your orthodontic appliances we are
        here to help! Dental emergencies while wearing braces or other
        orthodontic appliances generally fall into two categories – emergencies
        related to orthodontic appliances, and direct injuries to the mouth and
        teeth.
      </p>
      <div
        data-headlessui-state="open"
        className="mx-auto w-full max-w-screen-lg rounded-2xl bg-white p-2"
      >
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Emergencies Related to Orthodontic Appliances</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div data-headlessui-state="open">
                  Sometimes, appliances might be broken or bent during your
                  orthodontic care. If there are any disturbances, such as loose
                  bands, loose brackets, broken or poking wires, please call our
                  office for an appointment during patient hours. For your
                  convenience and the convenience of scheduled patients, it is
                  not possible to handle emergencies on a walk-in basis. In the
                  meantime, here are some helpful hints to remedy some of the
                  problems you may encounter until our office can see you.
                  <ul>
                    <li>
                      If a tie wire is irritating your mouth, cover it with bees
                      wax or tuck it under the arch wire with a blunt object
                      like a pencil eraser or Q-tip.
                    </li>
                    <li>
                      A broken or loose bracket can generally be left in place
                      until you are seen in our office. If you notice a loose
                      bracket, call us during our normal business hours and we
                      will get you scheduled to repair it.
                    </li>
                    <li>
                      A broken or poking archwire can often be bent in with a
                      pencil eraser or cut with nail clippers. Call our office
                      if you do not feel the problem has been resolved properly.
                    </li>
                    <li>
                      Watch the video below that explains how to handle an
                      orthodontic emergency.
                    </li>
                  </ul>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Direct Injuries to the Mouth and Teeth</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div data-headlessui-state="open">
                  Following a direct injury to your mouth or teeth, whether
                  undergoing orthodontic care or not, immediately ice the
                  injured area and you should contact your regular dentist as
                  soon as possible. Usually an x-ray of the involved tooth or
                  teeth is needed to determine the extent of injury. If a tooth
                  has been displaced, knocked out, or fractured, it is best to
                  contact your family dentist first, since we may not have the
                  necessary materials or anesthesia required to treat these
                  injuries. If the appliances are dislodged or displaced, we
                  will need to replace or adjust the appliances as soon as
                  possible, after you have seen your general dentist, depending
                  upon the comfort level of the patient.
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <h3>After Office Hours</h3>
        <p>
          If an orthodontic emergency arises where the patient is in extreme
          discomfort or pain after hours, tap the number below to place a call
          to our emergency line: (610) 910-9811
        </p>
      </div>
    </div>
  );
};

export default Emergency