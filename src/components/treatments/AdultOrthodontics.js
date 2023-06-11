import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const AdultOrthodontics = () => {
  return (
    <main className=" pt-20">
      <h1 className="py-40 bg-indigo-100 text-6xl">How Does Invisalign Work</h1>
            <div className="flex justify-center items-center">
            <img src="../../images/invisalignlady.jpg" alt="invisalign" style={{ maxWidth: "60%", maxHeight: "60%" }}/>
            </div>
      <div className="mx-auto w-full max-w-screen-lg rounded-2xl bg-white p-2">
       <Disclosure as="section" defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Are You Looking for Adult Orthodontics in Bethlehem, Allentown, Schnecksville, or Lehighton PA Areas?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>It is a big step to invest in straighter teeth and a better bite for yourself, but truthfully many adults are taking the plunge these days. Whether you have grown up with crooked teeth and are looking for the smile you have always wanted, or some of your teeth have slowly crowded with age there is no better time to start than now with adult orthodontics.</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="section" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>The Lehigh Valley's Top Invisalign Provider</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>We deliver the best in orthodontic care available today and an affordable cost. Our goal is to provide state-of-the-art orthodontic treatment, including Invisalign, the “braceless” alternative.</p>
                <p>Our office is among the top Invisalign providers in the US, ensuring you a comfortable, effective way to straighten your teeth in less time. With an average treatment time of just 12 to 16 months, we can help you achieve your desired smile in half the time. Check out our Invisalign solutions.</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="section" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Invisalign Without Impressions</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>Come experience a beautiful smile without goopy, gagging impressions. We became the first orthodontic practice in the Lehigh Valley to begin using an iTero digital scanner to take impressions for Invisalign treatment. Digital impressions are not only far more convenient than traditional impressions needed for Invisalign, but because scans are sent at light-speed directly to Align Technologies you will get your aligners sooner. Learn More about Impressionless Invisalign.</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="section" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Get a Damon Bracelift</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>Braces are not what they used to be. Many remember the pain of traditional braces and the dreaded headgear; however, advances in orthodontic technology have made improving your smile faster, more comfortable, and more discreet today than ever before.</p>
                <p>If a mouthful of braces makes you nervous, don't sweat it. We have Damon braces and Invisalign and can give you a beautiful healthy smile without interfering with your lifestyle or work.</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="section" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>4 Convenient Location</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>Schedule and appointment one of our four convenient locations for adult orthodontics in Bethlehem, Allentown, Schnecksville, and Lehighton PA.  We look forward to creating your new smile!</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </main>
  );
};

export default AdultOrthodontics;