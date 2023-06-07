import React from "react";
import { Disclosure } from "@headlessui/react";

const FinancingTreatment = () => {
  return (
    <div className="bg-rose-50 mt-20 w-full px-4 pt-16">
      <img
        src="/images/twoquads.png"
        alt="halfcircles"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        style={{
          clip: "rect(0, 120vw, 100vh, 0)",
          filter: "hue-rotate(190deg)",
        }}
      />
      <p>
        {" "}
        Orthodontic treatment is a worthwhile investment in both your appearance
        and oral health, and should be a one-time experience. With recent
        advancements in orthodontics, treatment options extend beyond
        straightening teeth to enhancing facial features. The cost of treatment
        varies depending on the extent of correction required and the prescribed
        treatment plan by Dr. Gregg Frey and Dr. Daniel Frey. While cost may be
        a factor in choosing an orthodontist, it's crucial to prioritize finding
        one who can achieve the best treatment result for you or your child. If
        necessary, affordable financing options are available.
      </p>
      <p>
        Schedule an initial consultation where we can learn about your
        orthodontic needs. We will then come up with monthly payments that fit
        into your budget comfortably.
      </p>

      <div data-headlessui-state="open">
        At FreySmiles Orthodontics, we provide excellent orthodontic care at an
        affordable cost. Our payment options include no-interest, extended
        financing, tailored to suit your treatment plan. During your initial
        consultation, we will discuss your payment plan options, which cover all
        fees for diagnostic records, treatment visits, appliances, retainers and
        retention visits for one year post-treatment.
      </div>
      <div data-headlessui-state="open">
        We understand the importance of working within your family budget and
        offer interest-free payment plans. Our practice provides courtesies for
        full payments and multiple family members seeking treatment. We strive
        to help you maximize your lifetime orthodontic insurance benefits, and
        if you have an FSA (Flexible Spending Account), we can assist you in
        planning and utilizing reimbursements for orthodontic care to achieve
        your desired smile.
      </div>

      <div className="grid grid-cols-3 mt-4">
        <div className="col-span-1 text-purple-900 px-4 py-20 border border-purple-200 flex flex-col justify-center items-center">
          <span className="text-3xl">FSA/HSA</span>
          <img
            src="/images/twohalves.svg"
            alt="halfcircles"
            className="w-10 h-10"
          />
          <p>
            We strive to help you maximize your lifetime orthodontic insurance
            benefits. If you have an FSA, we can assist you in planning and
            utilizing reimbursements for orthodontic care.
          </p>
        </div>
        <div className="col-span-1 text-purple-900 px-4 py-20 border-t border-b border-purple-200 flex flex-col justify-center items-center">
          <span className="text-3xl">Loyalty Discounts</span>
          <img
            src="/images/organicshapes.svg"
            alt="halfcircles"
            className="w-20 h-20 transform -rotate-90"
          />
        </div>
        <div className="col-span-1 text-purple-900 px-4 py-20 border border-purple-200">
          <span>Easy Payments & No Hidden Costs</span>
          <img
            src="/images/half.png"
            alt="halfcircles"
            className="w-10 h-10 transform rotate-270"
          />
        </div>
      </div>
      <div className="mt-4"></div>
    </div>
  );
};
export default FinancingTreatment;
