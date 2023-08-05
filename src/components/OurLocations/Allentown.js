import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookNow from "../BookNow";

export default function Allentown() {
  
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    setShowText(true);
  }, []);
  return (
    <main className="mt-40 grid grid-cols-2 gap-4">
      <div>
        <figure className="h-96 w-auto">
          <img
            className="rounded-lg object-cover aspect-square w-full h-full"
            src="../../images/office_interior.jpg"
            alt="view of interior office"
          />
        </figure>
      </div>
      <div>
        <div>
          <section
            className={`w-full py-8 cursor-pointer hover:bg-stone-200 ${
              showText ? "transition-all duration-500 ease-in" : ""
            }`}
            style={
              showText
                ? { opacity: 1, transform: "translateY(0)" }
                : { opacity: 0, transform: "translateY(20px)" }
            }
          >
            <div className="max-w-screen-xl mx-auto md:px-8 md:grid md:grid-cols-3 gap-4 space-y-4">
              <div className="flex flex-col justify-center items-center md:col-span-2">
                <div>
                  <div className="text-3xl mb-10">Allentown</div>
                  <div>1251 South Cedar Crest Blvd, Suite 210</div>
                  <div className="mb-5">Allentown, PA 18103</div>
                  <div>610.437.4748</div>
                  <div>
                    <a
                      className="underline hover:text-purple-900"
                      href="https://goo.gl/maps/jeFprQaeMQwUzwPx8"
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
                  <span className="flex gap-2 items-center"></span>
                  <span className="flex gap-2 items-center transition-colors duration-500 linear"></span>
                </div>
              </div>
            </div>
          </section>
          <p
            className={`text-center ${
              showText ? "transition-all duration-500 ease-in" : ""
            }`}
            style={
              showText
                ? { opacity: 1, transform: "translateY(0)" }
                : { opacity: 0, transform: "translateY(20px)" }
            }
          >
            Our original location situated within the Cedar Crest Plaza across
            from the Lehigh Valley Hospital
          </p>
        </div>
        <BookNow />
      </div>
    </main>
  );
}

  
// const Allentown = () => {

//   return (
//     <main className="mt-40 grid grid-cols-2 gap-4">
//     <div className="ml-2">
//     <div>
//             <figure className="h-full w-full">
//               <img
//                 className="object-cover aspect-square w-full h-full"
//                 src="../../images/office_interior.jpg"
//                 alt="view of interior office"
//               />
//             </figure>
//           </div>
   
//       <section className="w-full py-8 cursor-pointer hover:bg-stone-200 transition-all duration-500 linear">
//         <div className="max-w-screen-xl mx-auto md:px-8 md:grid md:grid-cols-3 gap-4 space-y-4">
//           <div>
//             <h2 className="py-4">Allentown</h2>
//             <address style={{ fontStyle: "normal" }}>
//               1251 South Cedar Crest Blvd, Suite 210
//               <br />
//               Allentown, PA 18103
//             </address>
  
//             <div className="py-4 space-y-2">
//               <span className="flex gap-2 items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-6 h-6 z-0"
//                 >
//                   {/* SVG path */}
//                 </svg>
//                 610.437.4748
//               </span>
//               <span className="flex gap-2 items-center transition-colors duration-500 linear">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-6 h-6 z-0"
//                 >
//                   {/* SVG path */}
//                 </svg>
//                 <Link
//                   className="underline hover:text-purple-900"
//                   to="https://goo.gl/maps/jeFprQaeMQwUzwPx8"
//                   target="_blank"
//                 >
//                   Get Directions
//                 </Link>
//               </span>
//             </div>
//           </div>
         
   
//         </div>
//       </section>
//     </div>
//     <div>
//     <div>
//             <p className="text-center">
//               Our original location situated within the Cedar Crest Plaza across
//               from the Lehigh Valley Hospital
//             </p>
//           </div>
//       <BookNow />
//     </div>
//   </main>
//   )
// };


// export default Allentown