import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const EarlyOrthodontics = () => {
  return (
    <main className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-screen-lg rounded-2xl bg-white p-2">
        <Disclosure as="section" defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Ideal Age for First Visit</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>The American Association of Orthodontics recommends every child have their first orthodontic screening at age 7. Why so early? Even though early treatment is rarely indicated, assessing dental development, the health of the airway, and evaluating the growth of the face and jaws through key developmental periods is essential to providing the best orthodontic outcomes. We want your child to have every opportunity for a healthy smile.</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="section" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Growth & Guidance Exams</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>They are always free of charge. Patients who are not yet ready for orthodontic treatment are enrolled in our Future FreySmiles Club. This includes a special treat on their birthday and spinning our prize wheel! At the guidance visit, our doctors will evaluate your child's facial and dental development and will notify you of any changes. We will also tell you, as accurately as possible; the estimated age of orthodontic treatment will begin so that you can plan accordingly. These easy and fun visits allow patients to become familiar with our friendly office and provide families with peace of mind. Generally, these appointments are scheduled every six to twelve months.</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="section" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Early Interceptive Orthodontics</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>Early treatment can begin the correction of significant problems, prevent more severe problems from developing, and simplify future treatment.</p>
                <p>Because all of the permanent teeth have not yet erupted when early treatment is performed, their final alignment may not have been corrected. Typically, a shortened comprehensive phase of treatment (Phase II - full braces) in the teen years, after all the permanent teeth have erupted, completes the correction. However, in some circumstances, further orthodontic treatment may not be indicated.</p>
                <p>Patients with braces and other orthodontic appliances require more effort to keep their teeth and gums clean. Because we want to ensure the highest level of dental health, we recommend you see your family dentist for regular check-ups and cleanings every 6 months during treatment.</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="section" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>In addition to a beautiful new smile, what are some other benefits of orthodontic treatment?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>Braces can improve the function of the bite and teeth, improve the ability to clean the teeth, prevent wear on the teeth, and increase the longevity of natural teeth over a lifetime.</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="section" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>If a child has treatment early, will this prevent the need for braces as an adolescent?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>Early treatment can begin the correction of significant problems, prevent more severe problems from developing, and simplify future treatment. Because all of the permanent teeth have not yet erupted when early treatment is performed, their final alignment may not have been corrected. Typically, a shortened comprehensive phase of treatment (Phase II - full braces) in the teen years, after all the permanent teeth have erupted, completes the correction. However, in some circumstances, further orthodontic treatment may not be indicated.</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="section" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do we still need to see our family dentist during orthodontic treatment?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>Patients with braces and other orthodontic appliances require more effort to keep their teeth and gums clean. Because we want to ensure the highest level of dental health, we recommend you see your family dentist for regular check-ups and cleanings every 6 months during treatment.</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </main>
  );
};

export default EarlyOrthodontics;