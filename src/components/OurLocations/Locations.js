import React from "react";
import { Link } from "react-router-dom";

const Locations = () => {
  return (
    <main className=" mt-40 grid grid-cols-2 gap-4">
    <div className="ml-2">
      <h1 className="pb-10 text-4xl border-b text-teal-900" >  Choose location</h1>
 <ul>
 <a href="/allentown">
  <li className="flex items-center text-2xl pb-10 border-b pt-10">
    Allentown
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 ml-auto"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  </li>
</a>

<a href="/bethlehem">
        <li className="flex items-center text-2xl  pt-10 pb-10 border-b">Bethlehem  <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-auto"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg></li>

          </a>
          <a href="lehighton">
        <li className="flex items-center text-2xl pt-10 pb-10 border-b">Lehighton  <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-auto"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg></li>
          </a>
<a href="schnecksville">
        <li className="flex-items-center text-2xl pt-10 pb-10 border-b">Schnecksville  <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-auto"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg></li>
          </a>
 </ul>
    </div>
    <div>
    <img
                className="object-cover w-full h-full opacity-90"
                src="../../images/entrance.jpg"
                alt="view of interior office"
              />
    </div>
  </main>
  );
};
// console.log('\x1Bc')

export default Locations;
  // <main
    //   className="w-full mt-20 relative"
    //   style={{
    //     backgroundImage: `url("../../images/landscape.png")`,
    //     backgroundSize: "100%",
    //     backgroundPosition: "top center",
    //     backgroundRepeat: "no-repeat",
    //   }}
    // >
    //   <section className="mt-32">
    //     <a
    //       href="#"
    //       className="max-w-screen-sm h-auto go-down-btn inline-block flex flex-col justify-center items-center mx-auto"
    //       title="Scroll down"
    //     >
    //       <svg
    //         version="1.1"
    //         xmlns="http://www.w3.org/2000/svg"
    //         xmlnsXlink="http://www.w3.org/1999/xlink"
    //         x="0px"
    //         y="0px"
    //         viewBox="0 0 100 100"
    //         enableBackground="new 0 0 100 100"
    //         xmlSpace="preserve"
    //         className="w-64 h-64 z-10"
    //         style={{
    //           position: "relative",
    //           margin: "auto",
    //           // transform: "translate(0, 50%)"
    //         }}
    //       >
    //         <defs>
    //           <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
    //             <stop
    //               offset="0%"
    //               style={{ stopColor: "#AA98A9", stopOpacity: 1 }}
    //             />
    //             <stop
    //               offset="100%"
    //               style={{ stopColor: "#D8BFD8", stopOpacity: 1 }}
    //             />
    //           </linearGradient>
    //         </defs>
    //         <circle cx="50" cy="50" r="25" fill="url(#grad)" />
    //         <image
    //           xlinkHref="../images/logo.png"
    //           x="-20"
    //           y="-20"
    //           width="140"
    //           height="140"
    //         />
    //         <image
    //           xlinkHref="../images/logo_short.png"
    //           x="38"
    //           y="38"
    //           width="50%"
    //           height="25%"
    //         />
    //         <path
    //           id="textPath"
    //           fill="none"
    //           d="M89.322,50.197c0,22.09-17.91,40-40,40c-22.089,0-40-17.91-40-40 c0-22.089,17.911-40,40-40C71.412,10.197,89.322,28.108,89.322,50.197z"
    //         />
    //         <text style={{ fontSize: "6px" }}>
    //           <textPath xlinkHref="#textPath">
    //             <tspan style={{ letterSpacing: "1px" }} x="10">
    //               Lehighton
    //             </tspan>
    //             <tspan style={{ letterSpacing: "1px" }} x="42" dx="30">
    //               Bethlehem
    //             </tspan>
    //             <tspan style={{ letterSpacing: "1px" }} x="72" dx="60">
    //               Schnecksville
    //             </tspan>
    //             <tspan style={{ letterSpacing: "1px" }} x="107" dx="90">
    //               Allentown
    //             </tspan>
    //           </textPath>
    //         </text>
    //       </svg>
    //     </a>
    //   </section>

      {/* <div id="container">
        <div id="circle">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="300px"
            height="300px"
            viewBox="0 0 300 300"
            enableBackground="new 0 0 300 300"
            xmlSpace="preserve"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <g transform="rotate(30, 150, 150)">
              <circle cx="150" cy="100" r="75" fill="none" />
              <g>
                <use xlinkHref="#circlePath" fill="none" />
                <text fill="#000">
                  <textPath
                    className="space-evenly"
                    xlinkHref="#circlePath"
                  >
                    | Allentown | Lehighton | Schnecksville |{" "}
                    <tspan dx="-4">Bethlehem</tspan>{" "}
                  </textPath>
                </text>
              </g>
            </g>
            <foreignObject x="125" y="125" width="50" height="50" >
  <div className="bg-indigo-50">
    <img className="w-full h-full object-contain" src="../images/logo_short.png" alt="logo"></img>
  </div>
</foreignObject>
          </svg>
        </div>
      </div> */}
    //   <div className="max-w-screen-lg mx-auto py-4 my-32">
    //     <p className="flex text-center  text-teal-600 bg-white bg-opacity-30 p-4 rounded-md backdrop-filter backdrop-blur-lg">
    //       Request an appointment with one of our orthodontists at FreySmiles.
    //       Virtual consultations are also available if you prefer. You may also
    //       request a Smile Evaluation if this is your first trip to the
    //       orthodontist. During this no-obligation consultation, we can determine
    //       whether braces or Invisalign would be best for you. During this
    //       consultation, one of our award-winning orthodontists will talk to you
    //       about your lifestyle, examine your smile, and make recommendations for
    //       orthodontic treatment. The orthodontists at FreySmiles are Diamond
    //       Plus Invisalign providers.
    //     </p>
    //   </div>

    //   <section className="w-full py-8 cursor-pointer hover:bg-stone-200 transition-all duration-500 linear">
    //     <div className="max-w-screen-xl mx-auto md:px-8 md:grid md:grid-cols-3 gap-4 space-y-4">
    //       <div>
    //         <h2 className="py-4">Allentown</h2>
    //         <address style={{ fontStyle: "normal" }}>
    //           1251 South Cedar Crest Blvd, Suite 210
    //           <br />
    //           Allentown, PA 18103
    //         </address>

    //         <div className="py-4 space-y-2">
    //           <span className="flex gap-2 items-center">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 24 24"
    //               fill="currentColor"
    //               className="w-6 h-6 z-0"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //             610.437.4748
    //           </span>
    //           <span className="flex gap-2 items-center transition-colors duration-500 linear text-amber-800">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 24 24"
    //               fill="currentColor"
    //               className="w-6 h-6 z-0"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //             <Link
    //               className="underline"
    //               to="https://goo.gl/maps/jeFprQaeMQwUzwPx8"
    //               target="_blank"
    //             >
    //               Get Directions
    //             </Link>
    //           </span>
    //         </div>
    //       </div>
    //       <div>
    //         <p>
    //           Our original location situated within the Cedar Crest Plaza across
    //           from the Lehigh Valley Hospital
    //         </p>
    //       </div>
    //       <div>
    //         <figure className="h-full w-full">
    //           <img
    //             className="object-cover w-full h-full"
    //             src="../../images/office_interior.jpg"
    //             alt="view of interior office"
    //           />
    //         </figure>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="w-full p-8 cursor-pointer hover:bg-stone-200 transition-all duration-500 linear">
    //     <div className="max-w-screen-xl mx-auto md:px-8 md:grid md:grid-cols-3 gap-4 space-y-4">
    //       <div>
    //         <h2 className="py-4">Lehighton</h2>
    //         <address style={{ fontStyle: "normal" }}>
    //           1080 Blakeslee Blvd Dr E<br />
    //           Lehighton, PA 18235
    //         </address>
    //         <div className="py-4 space-y-2">
    //           <span className="flex gap-2 items-center">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 24 24"
    //               fill="currentColor"
    //               className="w-6 h-6 z-0"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>{" "}
    //             610.437.4748
    //           </span>
    //           <span className="flex gap-2 transition-colors duration-500 linear text-amber-800">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 24 24"
    //               fill="currentColor"
    //               className="w-6 h-6 z-0"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //             <Link
    //               className="underline"
    //               to="https://goo.gl/maps/rcoLbjXmATgQn2t47"
    //               target="_blank"
    //             >
    //               Get Directions
    //             </Link>
    //           </span>
    //         </div>
    //         <div className=""></div>
    //       </div>
    //       <div>
    //         <p>
    //           Our newly renovated office in Lehighton is located adjacent to
    //           Rita's Italian Ice. State of the art sterilization.
    //         </p>
    //       </div>
    //       <div>
    //         <figure className="h-full w-full">
    //           <img
    //             className="object-cover w-full h-full"
    //             src="../../images/office_interior.jpg"
    //             alt="view of interior office"
    //           />
    //         </figure>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="w-full p-8 cursor-pointer hover:bg-stone-200 transition-all duration-500 linear">
    //     <div className="max-w-screen-xl mx-auto md:px-8 md:grid md:grid-cols-3 gap-4 space-y-4">
    //       <div>
    //         <h2 className="py-4">Bethlehem</h2>
    //         <address style={{ fontStyle: "normal" }}>
    //           2901 Emrick Boulevard
    //           <br />
    //           Bethlehem, PA 18020
    //           <div className="py-4 space-y-2">
    //             <span className="flex gap-2 items-center">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 24 24"
    //                 fill="currentColor"
    //                 className="w-6 h-6 z-0"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>{" "}
    //               (610) 437-4748
    //             </span>
    //             <span className="flex gap-2 transition-colors duration-500 linear text-amber-800">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 24 24"
    //                 fill="currentColor"
    //                 className="w-6 h-6 z-0"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //               <Link
    //                 className="underline"
    //                 to="https://goo.gl/maps/QjaBN2q5nmC7Vvmp8"
    //                 target="_blank"
    //               >
    //                 Get Directions
    //               </Link>
    //             </span>
    //           </div>
    //         </address>

    //         <Link
    //           to=""
    //           className="text-amber-800 transition-colors duration-500 linear"
    //         >
    //           <h3>Bethlehem Office Virtual Tour</h3>
    //         </Link>
    //       </div>
    //       <div>
    //         <p>
    //           We invite you to take a virtual tour of the FreySmiles orthodontic
    //           office in Bethlehem, PA. Our largest office equipped with our
    //           lions den cafe, with instant coffee machine and a fridge fully
    //           stocked with cold beverages.
    //         </p>
    //       </div>
    //       <div>
    //         <figure className="h-full w-full">
    //           <img
    //             className="object-cover w-full h-full opacity-90"
    //             src="../../images/beth.jpeg"
    //             alt="view of interior office"
    //           />
    //         </figure>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="w-full p-8 cursor-pointer hover:bg-stone-200 transition-all duration-500 linear">
    //     <div className="max-w-screen-xl mx-auto md:px-8 md:grid md:grid-cols-3 gap-4 space-y-4">
    //       <div>
    //         <h2 className="py-4">Schnecksville</h2>
    //         <address style={{ fontStyle: "normal" }}>
    //           4155 Independence Drive
    //           <br />
    //           Schnecksville, PA 18078
    //           <div className="py-4 space-y-2">
    //             <span className="flex gap-2 items-center">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 24 24"
    //                 fill="currentColor"
    //                 className="w-6 h-6 z-0"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>{" "}
    //               (610) 437-4748
    //             </span>
    //             <span className="flex gap-2 transition-colors duration-500 linear text-amber-800">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 24 24"
    //                 fill="currentColor"
    //                 className="w-6 h-6 z-0"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //               <Link
    //                 className="underline"
    //                 to="https://goo.gl/maps/Z7C7Z7BPzHgcJmUr6"
    //                 target="_blank"
    //               >
    //                 Get Directions
    //               </Link>
    //             </span>
    //           </div>
    //         </address>
    //       </div>
    //       <div>
    //         <p>
    //           Our second location features a salt water fish tank and video game
    //           alcove. Clinic features stunning views of the eastern horizon.
    //         </p>
    //       </div>
    //       <div>
    //         <figure className="h-full w-full">
    //           <img
    //             className="object-cover w-full h-full"
    //             src="../../images/sch.png"
    //             alt="view of interior office"
    //           />
    //         </figure>
    //       </div>
    //     </div>
    //   </section>
    // </main>