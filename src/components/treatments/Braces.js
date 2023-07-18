import React, { useEffect, useState } from "react";
import gsap from 'gsap';

const sectionsData = [

  {
    bgImage: '../../images/i-cat.png',
    heading: 'i-cat',
    backgroundSize: 'contain',
    imageSize: 'w-96 h-96'
  },
  {
    bgImage: '../../images/laser',
    heading: 'laser therapy'
  },
  {
    bgImage: 'https://images.unsplash.com/photo-1617141636403-f511e2d5dc17?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxODAzMjc4Mw&ixlib=rb-1.2.1&q=75w=1920',
    heading: 'Fifth Section'
  },
];

const Braces = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(0);
  const [listening, setListening] = useState(true);
  const [direction, setDirection] = useState('down');

  const [touch, setTouch] = useState({
    startX: 0,
    startY: 0,
    dx: 0,
    dy: 0,
    startTime: 0,
    dt: 0,
  });

  const handleDirection = () => {
    setListening(false);

    if (direction === 'down') {
      setNext((prevNext) => (prevNext + 1 >= sectionsData.length ? 0 : prevNext + 1));
    } else if (direction === 'up') {
      setNext((prevNext) => (prevNext - 1 < 0 ? sectionsData.length - 1 : prevNext - 1));
    }
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (!listening) return;
      setDirection(e.deltaY > 0 ? 'down' : 'up');
      handleDirection();
    };

    const handleTouchStart = (e) => {
      if (!listening) return;
      const t = e.changedTouches[0];
      setTouch((prev) => ({ ...prev, startX: t.pageX, startY: t.pageY }));
    };

    const handleTouchMove = (e) => {
      if (!listening) return;
      e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      if (!listening) return;
      const t = e.changedTouches[0];
      const dx = t.pageX - touch.startX;
      const dy = t.pageY - touch.startY;
      if (dy > 10) setDirection('up');
      if (dy < -10) setDirection('down');
      handleDirection();
    };

    document.addEventListener('wheel', handleWheel);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [listening, touch, direction]);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.5 },
      onComplete: () => {
        setListening(true);
        setCurrent(next);
      },
    });

    tl.set(sectionsData[next], { visibility: 'visible', opacity: 0 });
    tl.from(sectionsData[next], { opacity: 0 })

  }, [next]);

  return (
    <div>
      {sectionsData.map((section, index) => (
        <section
          key={index}
          style={{
            height: "100%",
            width: "100%",
            top: 0,
            position: "fixed",
            visibility: current === index ? "visible" : "hidden", // Show current section, hide others
            opacity: current === index ? 1 : 0, // Show current section, hide others
            zIndex: current === index ? 1 : 0,
            willChange: "transform"
          }}
        >
          <div
            className="bg"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%), url(${section.bgImage})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              height: "100%",
              width: "100%",
              top: 0,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <h2
              className="section-heading"
              style={{
                fontSize: "clamp(1rem, 5vw, 5rem)",
                fontWeight: 400,
                textAlign: "center",
                letterSpacing: "0.5em",
                marginRight: "-0.5em",
                color: "hsl(0, 0, 80%)",
                width: "90vw",
                maxWidth: "1200px",
                zIndex: 2
              }}
            >
              {section.heading}
            </h2>
          </div>
        </section>
      ))}
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
    //       Lehighton PA areas.
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