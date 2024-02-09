import React, { useEffect, useRef } from 'react';

const sections = [
  {
      title: "Brush and floss",
      content: "Brushing and flossing during orthodontic treatment is more important than ever. Orthodontic appliances such as clear aligners, brackets, and wires interfere with normal self-cleansing mechanisms of the mouth. Research shows that only 10% of patients brush and floss consistently during active treatment. We're here to ensure you don't just get lost in the statistics."
  },

  {
      title: "General Soreness",
      content: "When you get your braces on, you may feel general soreness in your mouth and teeth may be tender to biting pressures for 3 –5 days. Take Tylenol or whatever you normally take for headache or discomfort. The lips, cheeks and tongue may also become irritated for one to two weeks as they toughen and become accustomed to the braces. We will supply wax to put on the braces in irritated areas to lessen discomfort."
  },

  {
    title: "Loose Wire or Band",
    content: "When crowding and/or significant dental rotations is the case initially, a new wire placed at the office may eventually slide longer than the last bracket. In this case, depending on the orientation of the last tooth, it may poke into your cheek or gums. If irritation to the lips or You  can place orthodontic wax on the wire to reduce prevent stabbing. If the wire doesn't settle in on its own, it will benefit from being clipped within two weeks. Call our office to schedule an appointment."
},

{
  title: "Loosening of Teeth",
  content: "This is to be expected throughout treatment. The teeth must loosen first so they can move. The teeth will settle into the bone and soft tissue in their desired position after treatment is completed if retainers are worn correctly."
},
{
  title: "Rubberband wear",
  content: "To successfully complete orthodontic treatment, the patient              must work together with the orthodontist. If the doctor has prescribed rubber bands it will be necessary for you to follow the prescription for an ideal result. Failure to follow protocol will lead to a less than ideal treatment result. Excessive broken brackets will delay treatment and lead to an incomplete result. Compromised results due to lack of compliance is not grounds for financial reconciliation. "
},
{
  title: "Athletics",
  content: "Braces and mouthguards typically don't mix. Molded mouthguards will prevent planned tooth movement. If you require a mouthguard for contact sports, we stock ortho-friendly mouthguards which may work. "
},
{
  title: "How long will I be in braces",
  content: "Every year hundreds of parents trust our experience to provide beautiful, healthy smiles for their children. Deepending on case complexity and compliance, your time in braces may vary, but at FreySmiles Orthodontics case completion may only be typically only 12-22 months away."
},

  {
    title: "Eating with braces",
    content: "Something to keep in mind with braces is to take caution when eating hard foods, i.e., tough meats,hard breads, granola, and the like.  But you’ll need to protect yourorthodontic appliances when you eat for as long as you’re wearing braces."
},


];
const SplitScrollComponent = () => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        let scrollingImages = scrollContainer.querySelectorAll('.image-wrapper');

        scrollingImages = Array.from(scrollingImages);
        scrollingImages.forEach((e, i) => {
            e.style.zIndex = `${scrollingImages.length - i}`;
        });

        const setScrollHeight = () => {
            const offset = scrollContainer.getBoundingClientRect().top + window.scrollY;
            const scrollHeight = window.innerHeight;
            return { offset, scrollHeight };
        }

        const updateImages = () => {
            const { offset, scrollHeight } = setScrollHeight();

            scrollingImages.forEach((e, i) => {
                let scrollPct = ((window.scrollY - offset - scrollHeight * i) / scrollHeight) * 100;
                scrollPct = 100 - scrollPct; // For 'reverse' effect
                scrollPct = Math.min(Math.max(scrollPct, 0), 100);

                let clipPath = `polygon(0% 0%, 100% 0%, 100% ${scrollPct}%, 0% ${scrollPct}%)`;
                e.style.clipPath = clipPath;
                e.style.webkitClipPath = clipPath;
            });
        };

        window.addEventListener('scroll', updateImages);
        window.addEventListener('resize', () => {
            setScrollHeight();
            updateImages();
        });


        return () => {
            window.removeEventListener('scroll', updateImages);
            window.removeEventListener('resize', updateImages);
        };
    }, []);

    return (
      <div ref={scrollContainerRef} className="flex flex-row items-stretch">
      {/* Column for images */}
      <div className="flex flex-col w-1/2 sticky top-0 h-screen">
          {/* Images here */}
          <div className="absolute w-full h-full top-0 left-0 image-wrapper">
      <iframe
        className="w-full h-full"
        src="/images/Brushing_And_Flossing.mp4"
        allowFullScreen
      ></iframe>
    </div>
          <div className="absolute w-full h-full top-0 left-0 image-wrapper" style={{ zIndex: 3 }}>
              <img src="https://picsum.photos/1600/1600?random21" style={{ objectFit: 'cover' }} className="w-full h-full" />
          </div>
          <div className="absolute w-full h-full top-0 left-0 image-wrapper" style={{ zIndex: 3 }}>
              <img src="https://picsum.photos/1600/1600?random2" style={{ objectFit: 'cover' }} className="w-full h-full" />
          </div>
      </div>
  
      {/* Column for text */}
      <div className="w-1/2 overflow-auto">
                {sections.map((section, index) => (
                    <section key={index} className="p-20 min-h-[75vh] flex flex-col justify-center mb-5">
                        <h1 className="text-center font-bold text-5xl mb-4">{section.title}</h1>
                        <p className="text-center">{section.content}</p>
                    </section>
                ))}
            </div>
  </div>
  
    );
};

export default SplitScrollComponent;


//                 <h3>Food To Avoid</h3>
//                 <p>
//                   <ul>
//                     <li>Chewy foods: dense baked goods, such as bagels and baguettes, licorice.</li>
//                     <li>Crunchy foods: popcorn, ice.</li>
//                     <li>Sticky foods: caramels, gum.</li>
//                     <li>Hard foods: nuts, candy.</li>
//                     <li>
//                       Foods you have to bite into: corn on the cob, apples,
//                       carrots.
//                     </li>
//                   </ul>
//                   Chewing on hard things (for example, pens, pencils or
//                   fingernails) can damage the braces. Damaged braces will cause
//                   treatment to take longer.
//                 </p>


// export default CaringForYourBraces
// import React, { useEffect } from 'react';
// import { gsap } from "gsap-trial";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Scrollbar from 'smooth-scrollbar';

// const YourComponent = () => {

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Initialize custom scrollbar
//     let bodyScrollBar = Scrollbar.init(document.querySelector('.scroller'), {
//         damping: 0.1,
//         delegateTo: document,
//     });

//     // Proxy scroller for ScrollTrigger
//     ScrollTrigger.scrollerProxy(".scroller", {
//         scrollTop(value) {
//             if (arguments.length) {
//                 bodyScrollBar.scrollTop = value;
//             }
//             return bodyScrollBar.scrollTop;
//         },
//     });

//     bodyScrollBar.addListener(ScrollTrigger.update);

//     // Set zIndex for panels
//     gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

//     // Animating panels
//     gsap.utils.toArray('.panel:not(.purple)').forEach((image, i) => {
//         gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".black",
//                 scroller: ".scroller",
//                 start: () => "top -" + (window.innerHeight * (i + 0.5)),
//                 end: () => "+=" + window.innerHeight,
//                 scrub: true,
//                 invalidateOnRefresh: true,
//             }
//         })
//         .to(image, { height: 0 });
//     });

//     // Set zIndex for panel texts
//     gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

//     // Animating panel texts
//     gsap.utils.toArray('.panel-text').forEach((text, i) => {
//         gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".black",
//                 scroller: ".scroller",
//                 start: () => "top -" + (window.innerHeight * i),
//                 end: () => "+=" + window.innerHeight,
//                 scrub: true,
//                 invalidateOnRefresh: true,
//             }
//         })
//         .to(text, { duration: 0.33, opacity: 1, y: "50%" })
//         .to(text, { duration: 0.33, opacity: 0, y: "0%" }, 0.66);
//     });

//     // Create ScrollTrigger for pinning
//     ScrollTrigger.create({
//         trigger: ".black",
//         scroller: ".scroller",
//         start: "top top",
//         end: () => "+=" + ((gsap.utils.toArray('.panel').length + 1) * window.innerHeight),
//         pin: true,
//         scrub: true,
//         invalidateOnRefresh: true,
//         markers: true
//     });

//     return () => {
//         ScrollTrigger.kill();
//         bodyScrollBar.destroy();
//     };
// }, []);

//     return (
//         <div className="scroller h-screen overflow-hidden">
//             <section className="black flex justify-around items-center h-screen bg-black sticky top-0 z-10">
//                 <div className="text-wrap relative overflow-hidden w-[450px] h-[80vh]">
//                     <div className="panel-text blue-text absolute inset-0 z-10 w-full h-full text-4xl uppercase font-bold text-center bg-black text-blue-500">Blue</div>
//                     <div className="panel-text red-text absolute inset-0 z-10 w-full h-full text-4xl uppercase font-bold text-center bg-black text-red-500">Red</div>
//                     <div className="panel-text orange-text absolute inset-0 z-10 w-full h-full text-4xl uppercase font-bold text-center bg-black text-orange-500">Orange</div>
//                     <div className="panel-text purple-text absolute inset-0 z-10 w-full h-full text-4xl uppercase font-bold text-center bg-black text-purple-500">Purple</div>
//                 </div>
//                 <div className="p-wrap relative overflow-hidden w-[450px] h-[80vh]">
//                     <div className="panel blue absolute inset-0 bg-blue-800"></div>
//                     <div className="panel red absolute inset-0 bg-red-500"></div>
//                     <div className="panel orange absolute inset-0 bg-orange-600"></div>
//                     <div className="panel purple absolute inset-0 bg-purple-700"></div>
//                 </div>
//             </section>
//             <section className="h-screen bg-blue-800"></section>
//         </div>
//     );
// };

// export default YourComponent;
