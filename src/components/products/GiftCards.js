import React from 'react';
import { Link } from "react-router-dom";


export default function GiftCards({props}) {

  return (
    <section className="relative max-w-screen-lg mx-auto my-24 group">
      <Link to={`${process.env.REACT_APP_SQUARE_GIFT_CARDS_URL}`} target='_blank'>
        <div className="absolute inset-0 w-full h-full bg-primary30 bg-opacity-80 text-white motion-safe:transition-[clip-path] motion-safe:duration-[2s] ease-out [clip-path:circle(50%_at_0%_0%)] lg:[clip-path:circle(35%_at_0%_0%)] group-hover:[clip-path:circle(75%_at_0%_0%)] group-hover:bg-opacity-100 flex justify-start items-start">
          <span className='block my-[12%] mx-[6%] md:mx-[12%] md:my-[16%] lg:my-[8%] lg:mx-[4%] lg:px-12 lg:py-8 group-hover:mx-16 group-hover:my-24 transition-all group-hover:duration-[2s] ease-out md:group-hover:my-[20%] md:group-hover:mx-[16%]'>View Gift Cards</span>
        </div>
        <img src="../../images/giftcards/gift_cards_mockup.jpg" alt="gift cards mockup" />
      </Link>
    </section>
  );
}
