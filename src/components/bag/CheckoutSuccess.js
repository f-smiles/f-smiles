import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearBag } from "../../store/bagSlice";

function CheckoutSuccess() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get("session_id");
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionId) {
      dispatch(clearBag());
    }
  }, [sessionId, dispatch]);

  return (
    <div className="max-w-screen-lg px-6 mx-auto my-32">
      <section className="max-w-2xl mx-auto">
        <h2>Order Confirmation</h2>
        <p className="my-6 text-lg font-semibold leading-7">
          Thank you for your purchase!
        </p>
        <p className="leading-8 text-gray-500">
          Your order has been received and is being processed. <br />
          We'll be working
          diligently to ensure your items are carefully packaged and prepared
          for pickup at any of our office locations. <br></br>
          In case you have any questions or need further assistance, feel free
          to reach out to our customer support team{" "}
          <strong>
            by email at{" "}
            <span className="text-primary50">[Customer Support Email]</span>
          </strong>
          , or{" "}
          <strong>
            by phone at <span className="text-secondary50">(610)-437-4748</span>
          </strong>
          .
        </p>
      </section>

      <div className="max-w-2xl mx-auto mt-6">
        <section className="pt-6 border-t border-gray-200">
          <h5 className="font-normal leading-8 text-gray-700">
            Pickup Instructions:
          </h5>
          <p className="mt-2 leading-8 text-gray-500">
            Please bring a valid ID and show the email confirmation you
            received, which includes the order receipt number, as proof of
            purchase.
          </p>
        </section>
        <section className="pt-6">
          <h5 className="font-normal leading-8 text-gray-700">
            Pickup Locations:
          </h5>
          <dl className="divide-y divide-gray-200">
            <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
              <dt className="font-medium leading-6 text-gray-900">Allentown</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0">
                1251 South Cedar Crest Blvd, Suite 210 <br />
                Allentown, PA 18103 <br />
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
              <dt className="font-medium leading-6 text-gray-900">Bethlehem</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0">
              2901 Emrick Boulevard <br />
                Bethlehem, PA 18020 <br />
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
              <dt className="font-medium leading-6 text-gray-900">Lehighton</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0">
                1080 Blakeslee Blvd Dr E <br />
                Lehighton, PA 18235
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
              <dt className="font-medium leading-6 text-gray-900">Schnecksville</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0">
                4155 Independence Drive <br />
                Schnecksville, PA 18078
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
}

export default CheckoutSuccess;
