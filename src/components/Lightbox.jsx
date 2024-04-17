import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { X } from 'lucide-react';

export default function Lightbox({
  productImages,
  productThumbnails,
  imageIndex,
  thumbnailIndex,
  handleLightboxClose
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="lightbox-backdrop w-[100vw] h-[100vh] bg-paleOrange fixed top-0 left-0"></div>
      <div className="lightbox w-220 h-220 flex flex-col items-end absolute top-4">
        <X className="right-0" onClick={handleLightboxClose}/>
        <Swiper
          id="main-image-slider"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          initialSlide={imageIndex}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          slidesPerView={"auto"}
          className="lightboxSwiper w-full md:rounded-xl"
        >
          {productImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className="md:rounded-xl"
                src={image}
                onClick={() => handleImageClick(image)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
        id="lightbox-thumbnails"
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={4}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-4 "
      >
        {productThumbnails.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} className="md:rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
}
