import React from "react";
import {Link} from "react-router-dom"
import BookNow from "../BookNow";
const Bethlehem = () => {

  return (
    <main className="mt-40 grid grid-cols-2 gap-4">
    <div className="ml-2">
      <div>
        <figure className="h-full w-full">
          <img
            className="object-cover w-full h-full opacity-90"
            src="../../images/beth.jpeg"
            alt="view of interior office"
          />
        </figure>
      </div>
    </div>
    <div>
      <div>
        <section className="w-full p-8 cursor-pointer hover:bg-stone-200 transition-all duration-500 linear">
          <div className="max-w-screen-xl mx-auto md:px-8 md:grid md:grid-cols-3 gap-4 space-y-4">
            <div>
              <h2 className="py-4">Bethlehem</h2>
              <address style={{ fontStyle: "normal" }}>
                2901 Emrick Boulevard
                <br />
                Bethlehem, PA 18020
                <div className="py-4 space-y-2">
                  <span className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 z-0"
                    >
                       <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 z-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                    </svg>{" "}
                    (610) 437-4748
                  </span>
                  <span className="flex gap-2 transition-colors duration-500 linear">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 z-0"
                    >
                     <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 z-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                    </svg>
                    <Link
                      className="underline hover:text-purple-900"
                      to="https://goo.gl/maps/QjaBN2q5nmC7Vvmp8"
                      target="_blank"
                    >
                      Get Directions
                    </Link>
                  </span>
                </div>
              </address>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Link to="" className="transition-colors duration-500 linear ">
          <h3>Bethlehem Office Virtual Tour</h3>
        </Link>
        <p>
          We invite you to take a virtual tour of the FreySmiles orthodontic
          office in Bethlehem, PA. Our largest office equipped with our lions den
          cafe, with an instant coffee machine and a fridge fully stocked with cold
          beverages.
        </p>
      </div>
      <BookNow />
    </div>
  </main>
  )
};


export default Bethlehem;

