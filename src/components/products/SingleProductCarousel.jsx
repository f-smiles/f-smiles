import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function SingleProductCarousel({ product }) {
  let carouselImages;
  if (product.metadata.images) {
    carouselImages = product.images.concat(product.metadata.images.split(", "));
  } else {
    carouselImages = product.images;
  }

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#888888",
          "--swiper-pagination-color": "#888888",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {carouselImages.length > 0 &&
          carouselImages.map((image, i) => (
            <SwiperSlide key={i} className="my-auto">
              <img src={image} />
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
        className="thumbnails mt-6"
      >
        {carouselImages.length > 0 &&
          carouselImages.map((image, i) => (
            <SwiperSlide key={i} className="my-auto">
              <img src={image} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
