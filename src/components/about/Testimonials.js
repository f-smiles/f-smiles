

import React, {useEffect,useRef, useState} from "react";
import LocomotiveScroll from 'locomotive-scroll';
import classNames from "classnames";
const Testimonial = () => {


  const reviews1 =[
    {
      id: 1,
      img: "../../images/reviews/ajo.jpg",
    },
    {
      id: 2,
      img: "../../images/reviews/ajo2.jpg",
    },
    {
      id: 3,
      img: "../../images/reviews/ajo3.jpg",
    },
    {
      id: 4,
      img: "../../images/reviews/ajo4.jpg",
    },
    {
      id: 5,
      img: "../../images/reviews/ajo5.jpg",
    },
    {
      id: 6,
      img: "../../images/reviews/ajo6.jpg",
    },
    {
      id: 7,
      img: "../../images/reviews/ajo7.jpg",
    },
    {
      id: 8,
      img: "../../images/reviews/ajo8.jpg",
    },
   
    {
      id: 10,
      img: "../../images/reviews/ajo10.jpg",
    },
    {
      id: 8,
      img: "../../images/reviews/ajo11.jpg",
    },
    {
      id: 12,
      img: "../../images/reviews/ajo12.png",
    },
    {
      id: 13,
      img: "../../images/reviews/ajo13.jpg",
    },
    {
      id: 14,
      img: "../../images/reviews/ajo14.jpg",
    },
    {
      id: 15,
      img: "../../images/reviews/ajo15.png",
    },
    {
      id: 16,
      img: "../../images/reviews/review1.jpg",
    },
    {
      id: 17,
      img: "../../images/reviews/reviews2.jpg",
    },
    {
      id: 18,
      img: "../../images/reviews/reviews3.jpg",
    },
    {
      id: 19,
      img: "../../images/reviews/reviews4.jpg",
    },
  ]
  const reviews2=[
    {
      id: 20,
      img: "../../images/reviews/reviews5.jpg",
    },
    {
      id: 21,
      img: "../../images/reviews/reviews6.jpg",
    },
    {
      id: 22,
      img: "../../images/reviews/reviews7.jpg",
    },
    {
      id: 23,
      img: "../../images/reviews/reviews8.jpg",
    },
    {
      id: 24,
      img: "../../images/reviews/reviews9.jpg",
    },
    {
      id: 25,
      img: "../../images/reviews/reviews10.jpg",
    },
    {
      id: 26,
      img: "../../images/reviews/reviews11.jpg",
    },
    {
      id: 27,
      img: "../../images/reviews/reviews12.jpg",
    },
    {
      id: 28,
      img: "../../images/reviews/reviews13.jpg",
    },
    {
      id: 29,
      img: "../../images/reviews/reviews14.jpg",
    },
    {
      id: 30,
      img: "../../images/reviews/reviews15.jpg",
    },
    {
      id: 31,
      img: "../../images/reviews/reviews16.jpg",
    },
    {
      id: 32,
      img: "../../images/reviews/reviews17.jpg",
    },
    {
      id: 33,
      img: "../../images/reviews/reviews18.jpg",
    },
    {
      id: 34,
      img: "../../images/reviews/reviews19.jpg",
    },
    {
      id: 35,
      img: "../../images/reviews/reviews20.jpg",
    },
    {
      id: 36,
      img: "../../images/reviews/reviews21.jpg",
    },
    {
      id: 37,
      img: "../../images/reviews/reviews22.jpg",
    },
    {
      id: 38,
      img: "../../images/reviews/reviews23.jpg",
    },
    {
      id: 39,
      img: "../../images/reviews/reviews24.jpg",
    },
    {
      id: 40,
      img: "../../images/reviews/reviews25.jpg",
    },

  ]

const reviews3=[
    {
      id: 41,
      img: "../../images/reviews/reviews26.jpg",
    },
    {
      id: 42,
      img: "../../images/reviews/reviews27.jpg",
    },
    {
      id: 43,
      img: "../../images/reviews/reviews28.jpg",
    },
    {
      id: 44,
      img: "../../images/reviews/reviews29.jpg",
    },
    {
      id: 45,
      img: "../../images/reviews/reviews30.jpg",
    },
    {
      id: 46,
      img: "../../images/reviews/reviews31.jpg",
    },

    {
      id: 47,
      img: "../../images/reviews/reviews33.jpg",
    },
    {
      id: 48,
      img: "../../images/reviews/reviews34.jpg",
    },
    {
      id: 49,
      img: "../../images/reviews/reviews35.jpg",
    },
    {
      id: 50,
      img: "../../images/reviews/reviews36.jpg",
    },
    {
      id: 51,
      img: "../../images/reviews/reviews37.jpg",
    },
    {
      id: 52,
      img: "../../images/reviews/reviews38.jpg",
    },
    {
      id: 53,
      img: "../../images/reviews/reviews39.jpg",
    },
    {
      id: 54,
      img: "../../images/reviews/reviews40.jpg",
    },
    {
      id: 55,
      img: "../../images/reviews/reviews41.jpg",
    },
    {
      id: 56,
      img: "../../images/reviews/reviews42.jpg",
    },

    {
      id: 57,
      img: "../../images/reviews/reviews43.jpg",
    },
    {
      id: 58,
      img: "../../images/reviews/reviews44.jpg",
    },
    {
      id: 59,
      img: "../../images/reviews/reviews45.jpg",
    },
    {
      id: 60,
      img: "../../images/reviews/reviews46.jpg",
    }, 
  ]

  const column1Ref = useRef(null);
  const column2Ref = useRef(null);
  const column3Ref = useRef(null);

  useEffect(() => {
    const column1 = column1Ref.current;
    const column2 = column2Ref.current;
    const column3 = column3Ref.current;

    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 0.13,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    scroll.on("scroll", (obj) => {
      const scrollPosition = obj.scroll.y;
      column1.style.transform = `translateY(${scrollPosition*3}px)`;
      column2.style.transform = `translateY(${-scrollPosition *2}px)`;
      column3.style.transform = `translateY(${scrollPosition*5}px)`;
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container>
      <div className="bg-B7B19F flex">
        <div ref={column1Ref} className="overflow-y-scroll w-1/3">
          {reviews1.map((review) => (
            <img
              key={review.id}
              src={review.img}
              alt="Review"
              className="rounded-lg block mb-4 w-1/2"
            />
          ))}
        </div>
        <div ref={column2Ref} className="overflow-y-scroll w-1/3">
          {reviews2.map((review) => (
            <img
              key={review.id}
              src={review.img}
              alt="Review"
              className="rounded-lg block mb-4 w-1/2"
            />
          ))}
        </div>
        <div ref={column3Ref} className="overflow-y-scroll w-1/3">
          {reviews3.map((review) => (
            <img
              key={review.id}
              src={review.img}
              alt="Review"
              className="rounded-lg block mb-4 w-1/2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial

// import React, {useEffect, useState} from "react";

// const Testimonial = () => {
//   const ajo = [
//     {
//       id: 1,
//       img: "../../images/reviews/ajo.jpg",
//     },
//     {
//       id: 2,
//       img: "../../images/reviews/ajo2.jpg",
//     },
//     {
//       id: 3,
//       img: "../../images/reviews/ajo3.jpg",
//     },
//     {
//       id: 4,
//       img: "../../images/reviews/ajo4.jpg",
//     },
//     {
//       id: 5,
//       img: "../../images/reviews/ajo5.jpg",
//     },
//     {
//       id: 6,
//       img: "../../images/reviews/ajo6.jpg",
//     },
//     {
//       id: 7,
//       img: "../../images/reviews/ajo7.jpg",
//     },
//     {
//       id: 8,
//       img: "../../images/reviews/ajo8.jpg",
//     },
   
//     {
//       id: 10,
//       img: "../../images/reviews/ajo10.jpg",
//     },
//     {
//       id: 8,
//       img: "../../images/reviews/ajo11.jpg",
//     },
//     {
//       id: 12,
//       img: "../../images/reviews/ajo12.png",
//     },
//     {
//       id: 13,
//       img: "../../images/reviews/ajo13.jpg",
//     },
//     {
//       id: 14,
//       img: "../../images/reviews/ajo14.jpg",
//     },
//     {
//       id: 15,
//       img: "../../images/reviews/ajo15.png",
//     },

//   ];

//   const reviews =[
//     {
//       id: 1,
//       img: "../../images/reviews/review1.jpg",
//     },
//     {
//       id: 2,
//       img: "../../images/reviews/reviews2.jpg",
//     },
//     {
//       id: 3,
//       img: "../../images/reviews/reviews3.jpg",
//     },
//     {
//       id: 4,
//       img: "../../images/reviews/reviews4.jpg",
//     },
//     {
//       id: 5,
//       img: "../../images/reviews/reviews5.jpg",
//     },
//     {
//       id: 6,
//       img: "../../images/reviews/reviews6.jpg",
//     },
//     {
//       id: 7,
//       img: "../../images/reviews/reviews7.jpg",
//     },
//     {
//       id: 8,
//       img: "../../images/reviews/reviews8.jpg",
//     },
//     {
//       id: 9,
//       img: "../../images/reviews/reviews9.jpg",
//     },
//     {
//       id: 10,
//       img: "../../images/reviews/reviews10.jpg",
//     },
//     {
//       id: 11,
//       img: "../../images/reviews/reviews11.jpg",
//     },
//     {
//       id: 12,
//       img: "../../images/reviews/reviews12.jpg",
//     },
//     {
//       id: 13,
//       img: "../../images/reviews/reviews13.jpg",
//     },
//     {
//       id: 14,
//       img: "../../images/reviews/reviews14.jpg",
//     },
//     {
//       id: 15,
//       img: "../../images/reviews/reviews15.jpg",
//     },
//     {
//       id: 16,
//       img: "../../images/reviews/reviews16.jpg",
//     },
//     {
//       id: 17,
//       img: "../../images/reviews/reviews17.jpg",
//     },
//     {
//       id: 18,
//       img: "../../images/reviews/reviews18.jpg",
//     },
//     {
//       id: 19,
//       img: "../../images/reviews/reviews19.jpg",
//     },
//     {
//       id: 20,
//       img: "../../images/reviews/reviews20.jpg",
//     },
//     {
//       id: 21,
//       img: "../../images/reviews/reviews21.jpg",
//     },
//     {
//       id: 22,
//       img: "../../images/reviews/reviews22.jpg",
//     },
//     {
//       id: 23,
//       img: "../../images/reviews/reviews23.jpg",
//     },
//     {
//       id: 24,
//       img: "../../images/reviews/reviews24.jpg",
//     },
//     {
//       id: 25,
//       img: "../../images/reviews/reviews25.jpg",
//     },
//     {
//       id: 26,
//       img: "../../images/reviews/reviews26.jpg",
//     },
//     {
//       id: 27,
//       img: "../../images/reviews/reviews27.jpg",
//     },
//     {
//       id: 28,
//       img: "../../images/reviews/reviews28.jpg",
//     },
//     {
//       id: 29,
//       img: "../../images/reviews/reviews29.jpg",
//     },
//     {
//       id: 30,
//       img: "../../images/reviews/reviews30.jpg",
//     },
//     {
//       id: 31,
//       img: "../../images/reviews/reviews31.jpg",
//     },

//     {
//       id: 33,
//       img: "../../images/reviews/reviews33.jpg",
//     },
//     {
//       id: 34,
//       img: "../../images/reviews/reviews34.jpg",
//     },
//     {
//       id: 35,
//       img: "../../images/reviews/reviews35.jpg",
//     },
//     {
//       id: 36,
//       img: "../../images/reviews/reviews36.jpg",
//     },
//     {
//       id: 37,
//       img: "../../images/reviews/reviews37.jpg",
//     },
//     {
//       id: 38,
//       img: "../../images/reviews/reviews38.jpg",
//     },
//     {
//       id: 39,
//       img: "../../images/reviews/reviews39.jpg",
//     },
//     {
//       id: 40,
//       img: "../../images/reviews/reviews40.jpg",
//     },
//     {
//       id: 41,
//       img: "../../images/reviews/reviews41.jpg",
//     },
//     {
//       id: 42,
//       img: "../../images/reviews/reviews42.jpg",
//     },

//     {
//       id: 43,
//       img: "../../images/reviews/reviews43.jpg",
//     },
//     {
//       id: 44,
//       img: "../../images/reviews/reviews44.jpg",
//     },
//     {
//       id: 45,
//       img: "../../images/reviews/reviews45.jpg",
//     },
//     {
//       id: 46,
//       img: "../../images/reviews/reviews46.jpg",
//     }, 
//   ]

//   const [animationDirection, setAnimationDirection] = useState("up");

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "ArrowDown") {
//         setAnimationDirection("down");
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);
//   return (
//     <div
//       className="bg-gradient-to-r from-pink-100 to-purple-300 relative"
//       style={{
//         background: "linear-gradient(315deg, #f3e6e8 0%, #d5d0e5 74%)",
//         height: "100vh", 
//         overflow: "hidden",
//       }}
//     >
//       <h1
//         className="text-center mt-20 text-5xl text-indigo-900 absolute top-0 left-0 right-0 z-10"
//         style={{ paddingTop: "50px" }}
//       >
//         We're Blushing
//       </h1>
//       <div
//         className={`flex flex-wrap justify-center absolute top-0 left-0 right-0 animate-film-reel animate-${
//           animationDirection === "down" ? "film-reel-down" : "film-reel-up"
//         }`}
//         style={{ animationDuration: `${(ajo.length + reviews.length) * 5}s` }}
//       >
//         {ajo.map((ajo) => (
//           <div key={ajo.id} className="w-1/3 p-4">
//             <img
//               src={ajo.img}
//               alt={`Ajo ${ajo.id}`}
//               className="block mx-auto max-w-full h-auto mt-4"
//               style={{ maxWidth: "100%", maxHeight: "300px" }}
//             />
//           </div>
//         ))}
//         {reviews.map((reviews) => (
//           <div key={reviews.id} className="w-1/3 p-4">
//             <img
//               src={reviews.img}
//               alt={`Review ${reviews.id}`}
//               className="block mx-auto max-w-full h-auto mt-4"
//               style={{ maxWidth: "100%", maxHeight: "300px" }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

// <div
// className="bg-gradient-to-r from-pink-100 to-purple-300"
// style={{
//   background: "linear-gradient(315deg, #f3e6e8 0%, #d5d0e5 74%)",
// }}
// >
//   <h1 className="text-center mt-20 text-5xl text-indigo-900">
//     We're Blushing
//   </h1>
//   <div className="flex flex-wrap justify-center">
//     {ajo.map((ajo) => (
//      <div key={ajo.id} className="w-1/3 p-4">
//      <img
//        src={ajo.img}
//        alt={`Ajo ${ajo.id}`}
//        className="block mx-auto max-w-full h-auto mt-4"
//        style={{ maxWidth: "100%", maxHeight: "300px" }}
//      />
//    </div>
//     ))}
//   </div>
// <div className="flex flex-wrap justify-center">
//     {reviews.map((reviews) => (
//      <div key={ajo.id} className="w-1/3 p-4">
//      <img
//        src={reviews.img}
//        alt={`Ajo ${ajo.id}`}
//        className="block mx-auto max-w-full h-auto mt-4"
//        style={{ maxWidth: "100%", maxHeight: "300px" }}
//      />
//    </div>
//     ))}
//   </div>
// </div>
// );
// };

// export default Testimonial;


//   const [animationDirection, setAnimationDirection] = useState("up");

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "ArrowDown") {
//         setAnimationDirection("down");
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);
//   useEffect(() => {
//     let scrollPosition = 0;

//     const handleScroll = () => {
//       const currentScroll = window.scrollY || window.pageYOffset;
//       const scrollDelta = currentScroll - scrollPosition;
//       const column = columnRef.current;

//       if (column) {
//         column.style.transform = `translateY(${scrollDelta}px)`;
//       }

//       scrollPosition = currentScroll;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   useEffect(() => {
//     let scrollPosition = 0;

//     const handleScroll = () => {
//       const currentScroll = window.scrollY || window.pageYOffset;
//       const scrollDelta = currentScroll - scrollPosition;
//       const column = columnRef.current;

//       if (column) {
//         column.style.transform = `translateY(${scrollDelta}px)`;
//       }

//       scrollPosition = currentScroll;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className="bg-gradient-to-r from-pink-100 to-purple-300 relative"
//       style={{
//         background: "linear-gradient(315deg, #f3e6e8 0%, #d5d0e5 74%)",
//         height: "100vh",
//         overflow: "hidden",
//       }}
//     >
//       <h1
//         className="text-center mt-20 text-5xl text-indigo-900 absolute top-0 left-0 right-0 z-10"
//         style={{ paddingTop: "50px" }}
//       >
//         We're Blushing
//       </h1>
//       <div
//         className={`flex flex-wrap justify-center absolute top-0 left-0 right-0 animate-film-reel animate-${
//           animationDirection === "down" ? "film-reel-down" : "film-reel-up"
//         }`}
//         style={{ animationDuration: `${(ajo.length + reviews.length) * 5}s` }}
//         ref={columnRef}
//       >
//         {ajo.map((ajo) => (
//           <div key={ajo.id} className="w-1/3 p-4">
//             <img
//               src={ajo.img}
//               alt={`Ajo ${ajo.id}`}
//               className="block mx-auto max-w-full h-auto mt-4"
//               style={{ maxWidth: "100%", maxHeight: "300px" }}
//             />
//           </div>
//         ))}
//        {reviews.map((review) => (
//   <div key={review.id} className="w-1/3 p-4 rounded-lg">
//     <img
//       src={review.img}
//       alt={`Review ${review.id}`}
//       className="block mx-auto max-w-full h-auto mt-4"
//       style={{ maxWidth: "100%", maxHeight: "300px" }}
//     />
//   </div>
// ))}

//       </div>
//     </div>
//   );
// };

// export default Testimonial;

// useEffect(() => {
//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   );
//   camera.position.z = 5;
//   const renderer = new THREE.WebGLRenderer();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
//   const material = new THREE.MeshPhongMaterial({ color: 999999 });
//   const ambientLight = new THREE.AmbientLight("violet", 2);
//   const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
//   //  mesh with torus geometry and material
//   const torus = new THREE.Mesh(geometry, material);

//   scene.add(torus, directionalLight, ambientLight);

//   function animate() {
//     requestAnimationFrame(animate);

//     // rotate torus
//     torus.rotation.x += 0.005;
//     torus.rotation.y += 0.005;

//     // render scene w/ camera
//     renderer.render(scene, camera);
//   }

//   animate();
// }, []);