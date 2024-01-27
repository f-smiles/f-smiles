

import React, { useEffect } from 'react';
import  gsap  from "gsap";
import  ScrollTrigger  from "gsap/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar';

const YourComponent = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    let bodyScrollBar = Scrollbar.init(document.querySelector('.scroller'), {
        damping: 0.1,
        delegateTo: document,
    });


    ScrollTrigger.scrollerProxy(".scroller", {
        scrollTop(value) {
            if (arguments.length) {
                bodyScrollBar.scrollTop = value;
            }
            return bodyScrollBar.scrollTop;
        },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

 
    gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

    
    gsap.utils.toArray('.panel:not(.purple)').forEach((image, i) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".black",
                scroller: ".scroller",
                start: () => "top -" + (window.innerHeight * (i + 0.5)),
                end: () => "+=" + window.innerHeight,
                scrub: true,
                invalidateOnRefresh: true,
            }
        })
        .to(image, { height: 0 });
    });


    gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

   
    gsap.utils.toArray('.panel-text').forEach((text, i) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".black",
                scroller: ".scroller",
                start: () => "top -" + (window.innerHeight * i),
                end: () => "+=" + window.innerHeight,
                scrub: true,
                invalidateOnRefresh: true,
            }
        })
        .to(text, { duration: 0.33, opacity: 1, y: "50%" })
        .to(text, { duration: 0.33, opacity: 0, y: "0%" }, 0.66);
    });

   
    ScrollTrigger.create({
        trigger: ".black",
        scroller: ".scroller",
        start: "top top",
        end: () => "+=" + ((gsap.utils.toArray('.panel').length + 1) * window.innerHeight),
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
  
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      bodyScrollBar.destroy();
  };
}, []);

    return (
        <div className="scroller h-screen overflow-hidden">
            <section className="black flex justify-around items-center h-screen  sticky top-0 z-10">
                <div className="text-wrap relative overflow-hidden w-[450px] h-[80vh]">
                    <div className="panel-text blue-text absolute inset-0 z-10 w-full h-full text-4xl uppercase font-bold text-center  text-blue-500">Blue</div>
                    <div className="panel-text red-text absolute inset-0 z-10 w-full h-full text-4xl uppercase font-bold text-center  text-red-500">Red</div>
                    <div className="panel-text orange-text absolute inset-0 z-10 w-full h-full text-4xl uppercase font-bold text-center  text-orange-500">Orange</div>

                </div>
                <div className="p-wrap relative overflow-hidden w-[450px] h-[80vh]">
                <div className="panel blue absolute inset-0">
    <img src="../images/kinzie.jpg" alt="Blue" className="object-cover w-full h-full" />
</div>
<div className="panel red absolute inset-0">
    <img src="../images/narvaez.jpg" alt="Red" className="object-cover w-full h-full" />
</div>
                    <div className="panel orange absolute inset-0 bg-orange-600"></div>

                </div>
            </section>
        
        </div>
    );
};

export default YourComponent;

