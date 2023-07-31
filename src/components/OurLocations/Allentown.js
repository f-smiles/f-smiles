import React from "react";
import { Link } from "react-router-dom";
import BookNow from "../BookNow";

export default function Allentown() {
  return (
    <main className="mt-40 grid grid-cols-2 gap-4">
      <div className="ml-2">
        <div>
          <figure className="h-full w-full">
            <img
              className="object-cover aspect-square w-full h-full"
              src="../../images/office_interior.jpg"
              alt="view of interior office"
            />
          </figure>
        </div>

        <section className="w-full py-8 cursor-pointer hover:bg-stone-200 transition-all duration-500 linear">
          <div className="max-w-screen-xl mx-auto md:px-8 md:grid md:grid-cols-3 gap-4 space-y-4">
            <div>
              <h2 className="py-4">Allentown</h2>
              <address style={{ fontStyle: "normal" }}>
                1251 South Cedar Crest Blvd, Suite 210
                <br />
                Allentown, PA 18103
              </address>

              <div className="py-4 space-y-2">
                <span className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 z-0"
                  >
                    {/* SVG path */}
                  </svg>
                  610.437.4748
                </span>
                <span className="flex gap-2 items-center transition-colors duration-500 linear">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 z-0"
                  >
                    {/* SVG path */}
                  </svg>
                  <Link
                    className="underline hover:text-purple-900"
                    to="https://goo.gl/maps/jeFprQaeMQwUzwPx8"
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
      <div>
        <div>
          <p className="text-center">
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