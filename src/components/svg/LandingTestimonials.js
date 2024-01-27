import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  // Animation for the title
  useEffect(() => {
    gsap.fromTo(
      '.testimonial-section .title',
      {
        y: -200,
        opacity: 0,
      },
      {
        duration: 1.6,
        y: 0,
        opacity: 1,
        ease: 'power2.inOut',
        yoyo: true,
        scrollTrigger: {
          trigger: '.testimonial-section',
          start: 'top center',
          end: 'center',
          markers: false,
        },
      }
    );
  }, []);


  useEffect(() => {
    gsap.fromTo(
      '.left-row',
      {
        opacity: 0,
        xPercent: -100,
      },
      {
        duration: 1.6,
        opacity: 1,
        xPercent: 0,
        ease: 'power2.inOut',
        yoyo: true,
        scrollTrigger: {
          trigger: '.testimonial-section',
          start: 'top center',
          end: 'center',
          markers: false,
        },
      }
    );
  }, []);


  useEffect(() => {
    gsap.fromTo(
      '.right-row',
      {
        opacity: 0,
        xPercent: 100,
      },
      {
        duration: 1.6,
        opacity: 1,
        xPercent: 0,
        ease: 'power2.inOut',
        yoyo: true,
        scrollTrigger: {
          trigger: '.testimonial-section',
          start: 'top center',
          end: 'center',
          markers: false,
        },
      }
    );
  }, []);

  return (
<section className="testimonial-section  relative overflow-hidden py-36"
>  <img
          src="../images/bluecircle.png"
          alt="Gradient Blur"
          className="absolute -top-40 left-0 z-0"
          style={{
            width: '50%',
            height: 'auto', 
            transform: 'rotate(250deg)',
          }}
        />
  <h2 className="title text-center text-4xl font-semibold mb-8">Testimonials</h2>

  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 left-row">
    
        <div className="content border-r-2 border-gray-400 p-10 w-full">
          <h3 className="font-semibold text-xl leading-tight mb-5 text-gray-800">Kinsie</h3>
          <p className="m-0 text-base leading-relaxed italic font-normal text-gray-800 border-2 border-gray-400 p-5">
            "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo.
            Quam elit ultrices urna, eget eleifend arcu risus id metus.
            Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien.
            Sed aliquam leo et semper vestibulum."
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 right-row">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="blobClip">
      <path d="M37.9,-46.1C50.6,-34.4,63.7,-24,64.4,-12.5C65,-1,53.4,11.6,43.1,20.6C32.8,29.7,23.8,35.2,14.1,38.8C4.3,42.4,-6.2,44.1,-21,44.5C-35.9,44.8,-55.1,43.9,-66.7,33.7C-78.3,23.6,-82.2,4.2,-78.9,-13.8C-75.6,-31.8,-65,-48.4,-50.7,-59.8C-36.3,-71.3,-18.2,-77.6,-2.8,-74.2C12.5,-70.9,25.1,-57.8,37.9,-46.1Z" transform="translate(100 100)" />
    </clipPath>
  </defs>
  <image clip-path="url(#blobClip)" href="../images/kinzie.jpg" x="0" y="0" height="200px" width="200px"/>
</svg>

      </div>
    </div>
    <div className="flex flex-wrap reverse-row right-row items-start">
      <div className="w-full md:w-1/2">
      <svg width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="clip0_221_10">

      <path d="M0 0H100C155.228 0 200 44.7715 200 100V200H100C44.7715 200 0 155.228 0 100V0Z"/>
    </clipPath>
    <linearGradient id="paint0_linear_221_10" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A7B5FF"/>
      <stop offset="1" stop-color="#F3ACFF"/>
    </linearGradient>
  </defs>

    <image href="../images/narvaez.jpg" width="200" height="200"/>


</svg>




      </div>
      <div className="w-full md:w-1/2">
   
      <div className="content border-l-2 border-gray-400 p-10 w-full relative">
  {/* <img
    src="../images/greencircle.svg"
    alt="Gradient Blur"
    className="absolute -top-40 left-0 z-[-1]" 
  /> */}
  <h3 className="font-semibold text-xl leading-tight mb-5 text-gray-800 z-10 relative">Narvaez</h3>
  <p className="m-0 text-base leading-relaxed italic font-normal text-gray-800 border-2 border-gray-400 p-5 z-10 relative">
    "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo.
    Quam elit ultrices urna, eget eleifend arcu risus id metus.
    Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien.
    Sed aliquam leo et semper vestibulum."
  </p>
</div>

      </div>
    </div>
  </div>
</section>

  );
};

export default TestimonialsSection;
