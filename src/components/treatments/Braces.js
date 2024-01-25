import React, { useEffect, useState } from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap-trial/SplitText';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Braces = () => {
  const [slideID, setSlideID] = useState(0); 
  useEffect(() => {
    // Place your code for initializing animations, such as gsap animations, inside this useEffect
    const select = (e) => document.querySelector(e);
    const selectAll = (e) => document.querySelectorAll(e);
    
    const slides = selectAll('.slide'); 
    const links = selectAll('.slide__scroll-link');
    

    
    function initIntro() {
      let tl = gsap.timeline({ delay: 1.2 });
      
      tl.from('.intro-line', {
        y: 400,
        ease: 'power4',
        duration: 3
      })
      .from('.intro__txt', {
        x: -100,
        opacity: 0,
        ease: 'power4',
        duration: 3
      }, 0.7)
      .from('.intro__img--1', {
        y: 50,
        opacity: 0,
        ease: 'power2',
        duration: 10
      }, 1)
      .from('.intro__img--2', {
        y: -50,
        opacity: 0,
        ease: 'power2',
        duration: 10
      }, 1);
      
      let stl = gsap.timeline({
        scrollTrigger: {
          trigger: '.intro',
          scrub: 1,
          start: "top bottom",
          end: "bottom top"
        }
      });
      
      stl.to('.intro__title', {
        x: 400,
        ease: 'power4.in',
        duration: 3,
      })
      .to('.intro__txt', {
        y: 100,
        ease: 'power4.in',
        duration: 3,
      }, 0);
    }
    function initLinks() {
      links.forEach((link, index, e) => {     
        let linkST = link.querySelector('.slide__scroll-line');
        
        link.addEventListener("click", (e) => {
          e.preventDefault();
          gsap.to(window, {
            duration: 2, 
            scrollTo:{
              y: "#slide-" + (index + 2)
            },
            ease: "power2.inOut"
          });
          slideID++;
        });
        
        link.addEventListener("mouseover", (e) => {
          gsap.to(linkST, {
            y: 40,
            transformOrigin: "bottom center",
            duration: 0.6, 
            ease: "power4"
          });
        });
        
        link.addEventListener("mouseout", (e) => {
          gsap.to(linkST, {
            y: 0,
            transformOrigin: "bottom center",
            duration: 0.6, 
            ease: "power4"
          });
        });
        
      });
    

      
   
      let slideLinks = selectAll('.slide-link');
      
      slideLinks.forEach((slideLink, index, e) => {
          
        let slideL = slideLink.querySelector('.slide-link__line');
        
        slideLink.addEventListener("mouseover", (e) => {
          gsap.to(slideL, {
            x: 20,
            scaleX: 0.3,
            transformOrigin: "right center",
            duration: 0.8, 
            ease: "power4"
          });
        });
        slideLink.addEventListener("mouseout", (e) => {
          gsap.to(slideL, {
            x: 0,
            scaleX: 1,
            transformOrigin: "right center",
            duration: 0.8, 
            ease: "power4"
          });
        });
      })
    }
    
   
    function initSlides() {
      slides.forEach((slide, i) => {   
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: slide,
                start: "40% 50%",
            }
        });
    

        tl.from(slide.querySelectorAll('.col__content-title'), {
            ease: "power4",
            y: "+=5vh",
            duration: 2.5,
        })
        .from(slide.querySelectorAll('.line__inner'), {
            y: 200,
            duration: 2,
            ease: "power4",
            stagger: 0.1
        }, 0)
        .from(slide.querySelectorAll('.col__content-txt'), {
            x: 100,
            y: 50,
            opacity: 0,
            duration: 2,
            ease: "power4"
        }, 0.4)
        .from(slide.querySelectorAll('.slide-link'), {
            x: -100,
            y: 100,
            opacity: 0,
            duration: 2,
            ease: "power4"
        }, 0.3)
        .from(slide.querySelectorAll('.slide__scroll-link'), {
            y: 200,
            duration: 3,
            ease: "power4"
        }, 0.4)
        .to(slide.querySelectorAll('.slide__scroll-line'), {
            scaleY: 0.6,
            transformOrigin: "bottom left",
            duration: 2.5, 
            ease: "elastic(1,0.5)"
        }, 1.4);
    
        // Parallax animation for .col__image-wrap
        let imageWrappers = slide.querySelectorAll('.col__image-wrap');
        gsap.fromTo(imageWrappers, {
            y: "-50vh"
        }, {
            y: "50vh",
            scrollTrigger: {
                trigger: slide,
                scrub: true,
                start: "top bottom",
                snap: {
                    snapTo: 0.1,
                    duration: 1,
                    ease: 'power4.inOut'
                }
            },
            ease: 'none'
        });
    });
    
      gsap.from('.footer__link', {
        scrollTrigger: {
          trigger: '.footer',
          scrub: 2,
          start: "50% 100%",
          end: "0% 0%",
        },
        y: "20vh",
        ease: 'sine'
      })
    }
    

    function initParallax() {
      console.log("initParallax function called"); 
      slides.forEach((slide, i) => {
        let imageWrappers = slide.querySelectorAll('.col__image-wrap');
        
        gsap.fromTo(imageWrappers, {
          y: "-50vh"
        },{
          y: "50vh",
          scrollTrigger: {
            trigger: slide,
            scrub: true,
            start: "top bottom",
            snap: {
              snapTo: 0.1,
              duration: 1,
              ease: 'power4.inOut'
            }
          },
          ease: 'none'
        })
      });
    }
    
   
    function scrollTop() {
      gsap.to(window, {
        duration: 2, 
        scrollTo: {
          y: "#slide-0"
        },
        ease: "power2.inOut"
      });
      gsap.to('.footer__link-top-line', {
        scaleY: 1,
        transformOrigin: "bottom center",
        duration: 0.6, 
        ease: "power4"
      });
    }
    

    function initKeys() {
      document.addEventListener('keydown', (e) => {
        e.preventDefault();
        if(e.keyCode == 40) { 
          if(slideID <= slides.length) {
            slideID++;
            gsap.to(window, {
              duration: 2, 
              scrollTo:{
                y: "#slide-" + slideID 
              },
              ease: "power2.inOut"
            });
          }
        }
        else if(e.keyCode == 38) {
          slideID = 0;
          scrollTop();
        }
      });
    }
    initIntro(); 
    initParallax();
    initKeys();
    initSlides(); 
  }, []); 
  

  return (
<div className="stage min-h-screen"  >
<div className="stage" >

    <section className="slide slide--1" id="slide-1" >
      <div className="col col--1">
        <div className="col__content col__content--1">
          <h2 className="col__content-title"><span className="line__inner">Mono</span><br /><span className="line__inner">No. 1</span></h2>
          <div className="col__content-wrap">
            <p className="col__content-txt">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod.</p>
            <a href="#" className="slide-link">
              <div className="slide-link__circ"></div>
              <div className="slide-link__line"></div>
            </a>
          </div>
        </div>
      </div>
      <div className="col col--2">
        <div className="col__image-wrap">
          <img className="img img--1" src="https://assets.codepen.io/61488/duda-1.jpg" alt="Slide 1" />
        </div>
      </div>
    </section>

    {/* Slide 2 */}
    <section className="slide slide--2" id="slide-2" >
      <div className="col col--1">
        <div className="col__content col__content--2">
          <h2 className="col__content-title"><span className="line__inner">Look</span><br /><span className="line__inner">No. 2</span></h2>
          <div className="col__content-wrap">
            <p className="col__content-txt">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod.</p>
            <a href="#" className="slide-link">
              <div className="slide-link__circ"></div>
              <div className="slide-link__line"></div>
            </a>
          </div>
        </div>
      </div>
      <div className="col col--2">
        <div className="col__image-wrap">
          <img className="img img--1" src="https://assets.codepen.io/61488/duda-2.jpg" alt="Slide 2" />
        </div>
      </div>
    </section>
  </div>
</div>

  );
};

export default Braces;






    // <main className="w-full px-4 pt-16">
    //   <div className="mx-auto w-full max-w-screen-lg rounded-2xl bg-white p-2">
    //     <span>Different Types of Braces</span>
    //     <p>
    //       Thanks to today's advances in orthodontic technology, FreySmiles
    //       Orthodontics can provide our patients with more options than ever
    //       before when it comes to wearing different types of braces when
    //       undergoing treatment in Allentown, Bethlehem, Schnecksville and
    //       Lehighton PA areas.Not only do our doctors lessen your time in braces by combining clear aligners to finish your case we use most hygenic fasting moving brackets common misalignments such as major rotation
    //     </p>
    //     <p>
    //       As experts in various treatment types, our doctors will help you
    //       determine which treatment choice is right for you. Our goal is the
    //       best, most beautiful, healthy smile of your lifetime!
    //     </p>
    //     <span>Metal Braces</span>
    //     <p>
    //       Damon Braces are tieless braces that don't need to be tightened and
    //       are gentle to the teeth and tissues. Other style braces use elastic
    //       ties or active clips to bind archwires in place, which can slow down
    //       tooth movement and cause pain and are more difficult to keep clean.
    //       Our braces system also uses titanium wires. These type light,
    //       memory-shape wires have excellent formability and great efficiency
    //       range for gentle tooth movement. As the leader in the area for Damon
    //       Braces, we can give you a great smile, in less time and with more
    //       comfort.
    //     </p>
    //     <span>What is Invisalign?</span>
    //     <p>
    //       Invisalign uses a series of customized, clear aligners to straighten
    //       teeth faster and with fewer office visits than traditional braces.
    //       Thousands of orthodontists in the United States and Canada use
    //       Invisalign to accurately and effectively treat their patients. This
    //       type of treatment in the hands of experts delivers fantastic results.
    //       Aligners are:
    //     </p>
    //     <ul>
    //       <li>
    //         Completely invisible - aligners cannot be seen while you are wearing
    //         them! Friends, family members and co-workers may never even know you
    //         are wearing aligners, unless of course, you tell them!
    //       </li>
    //       <li>
    //         Comfortable to wear - The aligners are made from a special plastic
    //         that has smooth, rounded edges so they won't irritate your mouth and
    //         tissues like traditional braces often can.
    //       </li>
    //       <li>
    //         Customized just for you - Your aligners are customized to fit your
    //         mouth. Dr. Frey and Dr. Frey uses advanced 3-D computer imaging
    //         technology to replicate an exact impression of your mouth and teeth,
    //         then our doctors customize each aligner treatment plan specific to
    //         your needs. This RX is sent to the lab that fabricates a series of
    //         your custom aligners so that they fit your mouth, and over time they
    //         move your teeth into the proper position.
    //       </li>
    //       <li>
    //         Removable - Unlike traditional metal braces, you can remove your
    //         aligners to eat, drink, brush your teeth, floss and for special
    //         occasions. There's no need to change your lifestyle with Invisalign!
    //       </li>
    //       <li>
    //         Effective - You will begin to notice a significant difference even
    //         before your treatment is complete! Most treatments are completed
    //         within one year; however, this can vary from patient to patient.
    //       </li>
    //     </ul>
    //     <span>Why Consider Invisalign</span>
    //     <p>
    //       People everywhere are beginning to experience the benefits of
    //       treatment. Here's why people just like you are choosing Invisalign
    //       over traditional braces:
    //     </p>
    //     <ul>
    //       <li>
    //         You can have a straighter, healthier smile without all the
    //         noticeable wires and brackets of traditional braces.
    //       </li>
    //       <li>
    //         Aligners are removable making it easy for you to enjoy the foods you
    //         love without worrying about breaking or bending your brackets and
    //         wires. You can also remove your Invisalign aligners to brush and
    //         floss regularly.
    //       </li>
    //       <li>
    //         You don't need to change anything about your current lifestyle! With
    //         Invisalign, you can continue participating in day-to-day activities
    //         without changing a thing. Invisalign is great for professionals,
    //         athletes, brides, and parents.
    //       </li>
    //       <li>
    //         Office visits and checkups are easy, quick, and painless. Fewer
    //         appointments are required throughout your entire treatment.
    //       </li>
    //     </ul>
    //     <span>Choose Experience for Your Invisalign Treatment</span>
    //     <p>
    //       The science of Invisalign is not in the clear aligners, but in overall
    //       design and prescription for tooth movement by our doctors based on the
    //       full facial evaluation to craft the smile that is perfect for you. Our
    //       experienced doctors are top experts and providers in clear aligner
    //       treatment. Beware of mail-order aligner companies. Your smile and
    //       health is nothing to take lightly. An orthodontic, on-site evaluation
    //       with full digital x-rays and records is necessary to prescribe the
    //       correct path to a safe and healthy result. Dr. Gregg Frey and Dr.
    //       Daniel Frey have the expert tools and experience in Invisalign
    //       treatment to give you a fantastic FreySmile!
    //     </p>
    //   </div>
    // </main>