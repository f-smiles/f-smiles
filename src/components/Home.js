import React from "react";

const Home = () => {
  return (
    <>
      <section className="flex gap-8 justify-center">
        <div className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-purple-100 via-slate-300 to-purple-100 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl width max-w-xs h-48 max-h-full p-12 flex justify-center items-center">
          <p>
            {" "}
            <strong>Damon Braces</strong>
            <p>
              {" "}
              Combining self-ligating braces with advanced archwires clinically proven to move teeth quickly and comfortably.
            </p>
          </p>
        </div>
        <div className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl width max-w-xs h-48 max-h-full p-12 flex justify-center items-center">
          <p>
            {" "}
            <strong>Invisalign</strong>
            <p>
              {" "}
              As part of the top 1% of Invisalign providers in the US, we have
              the experience to deliver the smile you deserve.
            </p>
          </p>
        </div>
        <div className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-purple-100 via-slate-300 to-purple-100 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl width max-w-xs h-48 max-h-full p-12 flex justify-center items-center">
          <p>
            {" "}
            <strong>Advanced Technology</strong>
            <p>
              {" "}
              We offer Invisalign without Impressions. Say goodbye to goopy
              impressions with our iTero digital scanner.
            </p>
          </p>
        </div>
      </section>
      {/* <img alt="doctors" src="../../images/Doctor-Photo-Homepage-1.jpg"></img> */}
      <h1>
        {" "}
        <strong className="flex gap-8 justify-center">Our Locations</strong>
      </h1>

      <section className="flex gap-8 justify-center">
      <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl width h-48 max-h-full items-center">
          <h1> <strong className="ml-8">Allentown</strong></h1>
          <h4 className="px-2">1251 South Cedar Crest Blvd Suite 210</h4>
          <h4 className="px-16">Allentown, PA 18103</h4>
          <button className="bg-stone-400 p-2 text-white hover:text-white px-4 py-2 w-full rounded-bl-3xl rounded-br-3xl">Book Now</button>
        </div>
        <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl width h-48 max-h-full items-center">
          <h1><strong className="ml-8">Bethlehem</strong></h1>
          <h4 className="px-2">2901 Emrick Boulevard</h4>
          <h4 className="px-3">Bethlehem, PA 18020</h4>
          <button className="bg-stone-400 p-2 text-white hover:text-white px-4 py-2 w-full rounded-bl-3xl rounded-br-3xl">Book Now</button>
        </div>
        <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl width h-48 max-h-full items-center">
          <h1><strong className="ml-8">Schnecksville</strong></h1>
          <h4>4155 Independence Drive</h4>
          <h4>Schnecksville, PA 18078</h4>
          <button className="bg-stone-400 p-2 text-white hover:text-white px-4 py-2 w-full rounded-bl-3xl rounded-br-3xl">Book Now</button>
        </div>
        <div className="flex flex-col justify-between bg-f7f5f2 rounded-bl-3xl rounded-br-3xl width h-48 max-h-full items-center">
          <h1><strong className="ml-8">Lehighton</strong></h1>
          <h4>1080 Blakeslee Blvd Dr E</h4>
          <h4>Lehighton, PA 18235</h4>
          <button className="bg-stone-400 p-2 text-white hover:text-white px-4 py-2 w-full rounded-bl-3xl rounded-br-3xl">Book Now</button>
        </div>
      </section>
    </>
  );
};

export default Home;
