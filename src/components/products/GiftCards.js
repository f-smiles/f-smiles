import React from 'react';
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import { FreeMode, Navigation, Thumbs } from "swiper/modules";


export default function GiftCards() {

  // const giftCards = [
  //   { 
  //     style: "Purple lavender tooth paper cutout",
  //     path: "../../images/giftcards/gift_card_a_4x.png",
  //   },
  //   { 
  //     style: "Blue tooth gradient mesh",
  //     path: "../../images/giftcards/gift_card_b_4x.png",
  //   },
  //   { 
  //     style: "Purple, pink, white, gradient",
  //     path: "../../images/giftcards/gift_card_c_4x.png",
  //   },
  //   { 
  //     style: "Red, blue, yellow, purple, geometric shapes pattern",
  //     path: "../../images/giftcards/gift_card_d_1_4x.png",
  //   },
  // ];

  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="py-32 mx-auto text-center">
      <div className="grid grid-cols-3">
        <div>
          <h4 className="text-primary50">Give the Gift of Happiness:</h4>
          <h2 className="text-primary40">Dental Treatments for Brighter Days!</h2>
          <ul className="text-gray-500 steps steps-vertical">
            <li className="step step-primary">Choose a design and gift amount</li>
            <li className="step step-primary">Address it to a family member, friend, or yourself</li>
            <li className="step step-primary">Checkout</li>
          </ul>
        </div>

        <div>
          <Link to={`${process.env.REACT_APP_SQUARE_GIFT_CARDS_URL}`} className="px-8 py-6 mx-auto mt-6 uppercase transition-colors duration-300 ease-in-out rounded-full w-max bg-secondary50 text-secondary98 hover:bg-primary30 hover:text-primary98" target="_blank">
            Shop Gift Cards
          </Link>
        </div>

        {/* <div className="w-full mx-auto mt-6 md:w-2/3 lg:w-2/5">
          <Swiper
            style={{
              "--swiper-navigation-color": "#262626",
              "--swiper-pagination-color": "#262626",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {giftCards.map((image, i) => (
                <SwiperSlide key={i} className="my-auto">
                  <img className="mx-auto" src={image.path} alt={`${image.style} with freySmiles orthodontics logo overlayed in corner`} />
                </SwiperSlide>
              ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mt-6 thumbnails"
          >
            {giftCards.map((image, i) => (
                <SwiperSlide key={i} className="my-auto">
                  <img src={image.path} alt={`${image.style} with freySmiles orthodontics logo overlayed in corner`} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div> */}
      </div>
    </ section>
  );
}
