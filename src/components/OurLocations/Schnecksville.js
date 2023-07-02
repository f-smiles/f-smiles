import React from "react";
import {Link} from "react-router-dom";
import BookNow from "../BookNow";
const Schnecksville = () => {

  return (
    <main className=" mt-40 grid grid-cols-2 gap-4">
    <div className="ml-2 bg-stone-200 ">

    <section className="w-full p-8 transition-all duration-500 linear">
  <div className="max-w-screen-xl mx-auto md:px-8 md:grid gap-4 space-y-4">
    <div>
      <figure className="h-full w-full">
        <img
          className="object-cover w-full h-full"
          src="../../images/sch.png"
          alt="view of interior office"
        />
      </figure>
    </div>
    <div className="mt-40 grid grid-cols-2 gap-4">
      <div className="ml-2">
        <h2 className="py-4">Schnecksville</h2>
        <address style={{ fontStyle: "normal" }}>
          4155 Independence Drive
          <br />
          Schnecksville, PA 18078
        </address>
        <div className="py-4 space-y-2">
          <span className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 z-0"
            >
              {/* Phone icon SVG path */}
            </svg>{" "}
            (610) 437-4748
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <span className="flex gap-2 transition-colors duration-500 linear justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 z-0"
          >
            {/* Map icon SVG path */}
          </svg>
          <Link
            className="underline hover:text-purple-900"
            to="https://goo.gl/maps/Z7C7Z7BPzHgcJmUr6"
            target="_blank"
          >
            Get Directions
          </Link>
        </span>
      </div>
    </div>
  </div>
</section>

      </div>
      <div className="-mt-20"> <div>
            <p>
              Our second location features a salt water fish tank and video game
              alcove. Clinic features stunning views of the eastern horizon.
            </p>
          </div>
        <BookNow /></div></main>)
};


export default Schnecksville