import React from "react";
import { Link } from "react-router-dom";
import BookNow from "../BookNow";

const Schnecksville = () => {
  return (
    <main className="mt-40 grid grid-cols-2 gap-4">
      <div className="ml-2 bg-stone-200">
        <section className="w-full p-8 transition-all duration-500 linear">
          <div className="max-w-screen-xl mx-auto md:px-8 md:grid gap-4 space-y-4">
            <div className="md:col-span-1">
              <figure className="h-full w-full">
                <img
                  className="object-cover w-full h-full"
                  src="../../images/sch.png"
                  alt="view of interior office"
                />
              </figure>
            </div>
          </div>
        </section>
      </div>
      <div>
    <section className="w-full py-8 cursor-pointer hover:bg-stone-200 transition-all duration-500 linear">
      <div className="max-w-screen-xl mx-auto md:px-8 md:grid md:grid-cols-3 gap-4 space-y-4">
        <div className="flex flex-col justify-center items-center md:col-span-2">
      
        <div>
  <div className="text-3xl mb-10">Schnecksville</div>
  <div>     4155 Independence Drive</div>
  <div className="mb-5">  Schnecksville, PA 18078</div>
  <div>610.437.4748</div>
  <div>
    <a
      className="underline hover:text-purple-900"
      href="https://goo.gl/maps/Z7C7Z7BPzHgcJmUr6"
      target="_blank"
      rel="noopener noreferrer"
    >
      Get Directions
    </a>
  </div>
  <div className="mt-10 italic">
  *Hours may vary weekly. For accurate times, please call us.
  </div>
</div>


          <div className="py-4 space-y-2">
            <span className="flex gap-2 items-center">
       
         
            </span>
            <span className="flex gap-2 items-center transition-colors duration-500 linear">
      
              <Link
                className="underline hover:text-purple-900"
                to="https://goo.gl/maps/jeFprQaeMQwUzwPx8"
                target="_blank"
              >
              
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
    <p>
            Our second location features a salt water fish tank and video game alcove. Clinic features stunning views of the eastern horizon.
          </p>
  </div>
      <div>
        <div>
         
        </div>
        <BookNow />
      </div>
    </main>
  );
};

export default Schnecksville;
