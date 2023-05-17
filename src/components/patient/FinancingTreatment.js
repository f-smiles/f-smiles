import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const FinancingTreatment = () => {
  return (
    <div className="mt-20 w-full px-4 pt-16 ">
      <h2 className="">Financing Treatments</h2>
      <div
        data-headlessui-state="open"
        className="mx-auto w-full max-w-screen-lg rounded-2xl bg-white p-2"
      >
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Cost Of Treatments</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div data-headlessui-state="open">
                  Orthodontic treatment is a worthwhile investment in both your
                  appearance and oral health, and should be a one-time
                  experience. With recent advancements in orthodontics,
                  treatment options extend beyond straightening teeth to
                  enhancing facial features. The cost of treatment varies
                  depending on the extent of correction required and the
                  prescribed treatment plan by Dr. Gregg Frey and Dr. Daniel
                  Frey. While cost may be a factor in choosing an orthodontist,
                  it's crucial to prioritize finding one who can achieve the
                  best treatment result for you or your child. If necessary,
                  affordable financing options are available.
                </div>
                <p>
                  Schedule an initial consultation where we can learn about your
                  orthodontic needs. We will then come up with monthly payments
                  that fit into your budget comfortably.
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Payment Options For Your Budget</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div data-headlessui-state="open">
                  At FreySmiles Orthodontics, we provide excellent orthodontic
                  care at an affordable cost. Our payment options include
                  no-interest, extended financing, tailored to suit your
                  treatment plan. During your initial consultation, we will
                  discuss your payment plan options, which cover all fees for
                  diagnostic records, treatment visits, appliances, retainers
                  and retention visits for one year post-treatment.
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Easy Payments & No Hidden Costs</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div data-headlessui-state="open">
                  As a service to you, we offer payments through online,
                  automatic withdrawals. We can even work with you to coincide
                  our billing cycles with your pay periods, just to eliminate
                  any stress. We’re committed to providing the best value and
                  service to our patients and that is why we offer flexible,
                  zero-interest financing with low down payments and are very
                  insurance friendly to help with the cost of braces and the
                  cost of Invisalign. We do not up-charge for ceramic braces or
                  any “special braces,” and fees are all-inclusive.
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Easy Financing</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div data-headlessui-state="open">
                  We understand the importance of working within your family
                  budget and offer interest-free payment plans. Our practice
                  provides courtesies for full payments and multiple family
                  members seeking treatment. We strive to help you maximize your
                  lifetime orthodontic insurance benefits, and if you have an
                  FSA (Flexible Spending Account), we can assist you in planning
                  and utilizing reimbursements for orthodontic care to achieve
                  your desired smile.
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default FinancingTreatment;
