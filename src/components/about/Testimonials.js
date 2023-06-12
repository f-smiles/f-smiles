import React from "react";

const Testimonial = () => {
  const ajo = [
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

  ];

  const reviews =[
    {
      id: 1,
      img: "../../images/reviews/review1.jpg",
    },
    {
      id: 2,
      img: "../../images/reviews/reviews2.jpg",
    },
    {
      id: 3,
      img: "../../images/reviews/reviews3.jpg",
    },
    {
      id: 4,
      img: "../../images/reviews/reviews4.jpg",
    },
    {
      id: 5,
      img: "../../images/reviews/reviews5.jpg",
    },
    {
      id: 6,
      img: "../../images/reviews/reviews6.jpg",
    },
    {
      id: 7,
      img: "../../images/reviews/reviews7.jpg",
    },
    {
      id: 8,
      img: "../../images/reviews/reviews8.jpg",
    },
    {
      id: 9,
      img: "../../images/reviews/reviews9.jpg",
    },
    {
      id: 10,
      img: "../../images/reviews/reviews10.jpg",
    },
    {
      id: 11,
      img: "../../images/reviews/reviews11.jpg",
    },
    {
      id: 12,
      img: "../../images/reviews/reviews12.jpg",
    },
    {
      id: 13,
      img: "../../images/reviews/reviews13.jpg",
    },
    {
      id: 14,
      img: "../../images/reviews/reviews14.jpg",
    },
    {
      id: 15,
      img: "../../images/reviews/reviews15.jpg",
    },
    {
      id: 16,
      img: "../../images/reviews/reviews16.jpg",
    },
    {
      id: 17,
      img: "../../images/reviews/reviews17.jpg",
    },
    {
      id: 18,
      img: "../../images/reviews/reviews18.jpg",
    },
    {
      id: 19,
      img: "../../images/reviews/reviews19.jpg",
    },
    {
      id: 20,
      img: "../../images/reviews/reviews20.jpg",
    },
    {
      id: 21,
      img: "../../images/reviews/reviews21.jpg",
    },
    {
      id: 22,
      img: "../../images/reviews/reviews22.jpg",
    },
    {
      id: 23,
      img: "../../images/reviews/reviews23.jpg",
    },
    {
      id: 24,
      img: "../../images/reviews/reviews24.jpg",
    },
    {
      id: 25,
      img: "../../images/reviews/reviews25.jpg",
    },
    {
      id: 26,
      img: "../../images/reviews/reviews26.jpg",
    },
    {
      id: 27,
      img: "../../images/reviews/reviews27.jpg",
    },
    {
      id: 28,
      img: "../../images/reviews/reviews28.jpg",
    },
    {
      id: 29,
      img: "../../images/reviews/reviews29.jpg",
    },
    {
      id: 30,
      img: "../../images/reviews/reviews30.jpg",
    },
    {
      id: 31,
      img: "../../images/reviews/reviews31.jpg",
    },

    {
      id: 33,
      img: "../../images/reviews/reviews33.jpg",
    },
    {
      id: 34,
      img: "../../images/reviews/reviews34.jpg",
    },
    {
      id: 35,
      img: "../../images/reviews/reviews35.jpg",
    },
    {
      id: 36,
      img: "../../images/reviews/reviews36.jpg",
    },
    {
      id: 37,
      img: "../../images/reviews/reviews37.jpg",
    },
    {
      id: 38,
      img: "../../images/reviews/reviews38.jpg",
    },
    {
      id: 39,
      img: "../../images/reviews/reviews39.jpg",
    },
    {
      id: 40,
      img: "../../images/reviews/reviews40.jpg",
    },
    {
      id: 41,
      img: "../../images/reviews/reviews41.jpg",
    },
    {
      id: 42,
      img: "../../images/reviews/reviews42.jpg",
    },

    {
      id: 43,
      img: "../../images/reviews/reviews43.jpg",
    },
    {
      id: 44,
      img: "../../images/reviews/reviews44.jpg",
    },
    {
      id: 45,
      img: "../../images/reviews/reviews45.jpg",
    },
    {
      id: 46,
      img: "../../images/reviews/reviews46.jpg",
    },
    
  ]
  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100 relative">
      <h1 className="text-center mt-20 text-5xl text-indigo-900">
        We're Blushing
      </h1>
      <div className="flex flex-wrap justify-center">
        {ajo.map((ajo) => (
         <div key={ajo.id} className="w-1/3 p-4">
         <img
           src={ajo.img}
           alt={`Ajo ${ajo.id}`}
           className="block mx-auto max-w-full h-auto mt-4"
           style={{ maxWidth: "100%", maxHeight: "300px" }}
         />
       </div>
        ))}
      </div>
    <div className="flex flex-wrap justify-center">
        {reviews.map((reviews) => (
         <div key={ajo.id} className="w-1/3 p-4">
         <img
           src={reviews.img}
           alt={`Ajo ${ajo.id}`}
           className="block mx-auto max-w-full h-auto mt-4"
           style={{ maxWidth: "100%", maxHeight: "300px" }}
         />
       </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;


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