import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Invisalign = () => {
  return (
    
    <main className=" w-full px-4 pt-16">
      <div className="flex justify-center items-center">
            <img src="../../images/invisaligngradient.png" alt="invisalign" style={{ maxWidth: "40%", maxHeight: "40%" }}/>
            </div>
      <div className="mx-auto w-full max-w-screen-lg rounded-2xl bg-white p-2">       
        <Disclosure as="section" defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Invisible Braces for Adults and Teens in Allentown, Bethlehem, Schnecksville and Lehighton, PA</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>Have you ever wished for a straighter, healthier smile, but not looked forward to all the metal wires and bands that often go along with braces? Since <a className="text-blue-500 hover:text-indigo-500" href="https://www.invisalign.com">Invisalign</a> is nearly invisible, you can straighten your teeth without anyone knowing.</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="section" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>FreySmiles Orthodontics is one of the TOP 1% Providers in the US</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>Invisalign has worked for over a million smiles across the country. Some dentists and orthodontists may not feel comfortable recommending Invisalign to their patients, but as Diamond Plus providers of Invisalign and Invisalign Teen (top 1% of Invisalign providers in the US) we have the experience to deliver the smile you deserve. Dr. Gregg Frey and Dr. Daniel Frey have treated many hundreds of patients with this leading-edge appliance system. Their expertise shows in the smile results of their satisfied patients. The cost of Invisalign treatment is comparable to the cost of braces.</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="section" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is Invisalign?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>Invisalign uses a series of customized, clear aligners to straighten teeth faster and with fewer office visits than traditional braces. Thousands of orthodontists in the United States and Canada use Invisalign to accurately and effectively treat their patients. This type of treatment in the hands of experts delivers fantastic results. Aligners are:</p>
                <ul>
                  <li>Completely invisible - aligners cannot be seen while you are wearing them! Friends, family members and co-workers may never even know you are wearing aligners, unless of course, you tell them!</li>
                  <li>Comfortable to wear - The aligners are made from a special plastic that has smooth, rounded edges so they won't irritate your mouth and tissues like traditional braces often can.</li>
                  <li>Customized just for you - Your aligners are customized to fit your mouth. Dr. Frey and Dr. Frey uses advanced 3-D computer imaging technology to replicate an exact impression of your mouth and teeth, then our doctors customize each aligner treatment plan specific to your needs. This RX is sent to the lab that fabricates a series of your custom aligners so that they fit your mouth, and over time they move your teeth into the proper position.</li>
                  <li>Removable - Unlike traditional metal braces, you can remove your aligners to eat, drink, brush your teeth, floss and for special occasions. There's no need to change your lifestyle with Invisalign!</li>
                  <li>Effective - You will begin to notice a significant difference even before your treatment is complete! Most treatments are completed within one year; however, this can vary from patient to patient.</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="section" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Why Consider Invisalign</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>People everywhere are beginning to experience the benefits of treatment. Here's why people just like you are choosing Invisalign over traditional braces:</p>
                <ul>
                  <li>You can have a straighter, healthier smile without all the noticeable wires and brackets of traditional braces.</li>
                  <li>Aligners are removable making it easy for you to enjoy the foods you love without worrying about breaking or bending your brackets and wires. You can also remove your Invisalign aligners to brush and floss regularly.</li>
                  <li>You don't need to change anything about your current lifestyle! With Invisalign, you can continue participating in day-to-day activities without changing a thing. Invisalign is great for professionals, athletes, brides, and parents.</li>
                  <li>Office visits and checkups are easy, quick, and painless. Fewer appointments are required throughout your entire treatment.</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="section" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Choose Experience for Your Invisalign Treatment</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>The science of Invisalign is not in the clear aligners, but in overall design and prescription for tooth movement by our doctors based on the full facial evaluation to craft the smile that is perfect for you. Our experienced doctors are top experts and providers in clear aligner treatment. Beware of mail-order aligner companies. Your smile and health is nothing to take lightly. An orthodontic, on-site evaluation with full digital x-rays and records is necessary to prescribe the correct path to a safe and healthy result. Dr. Gregg Frey and Dr. Daniel Frey have the expert tools and experience in Invisalign treatment to give you a fantastic FreySmile!</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

    </main>
  );
};

export default Invisalign;