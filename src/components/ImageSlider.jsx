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

// product images
import productImage1 from "../assets/product-images/image-product-1.jpg";
import productImage2 from "../assets/product-images/image-product-2.jpg";
import productImage3 from "../assets/product-images/image-product-3.jpg";
import productImage4 from "../assets/product-images/image-product-4.jpg";

// product thumbnails
import thumbnail1 from "../assets/product-images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/product-images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/product-images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/product-images/image-product-4-thumbnail.jpg";

const productImages = [
  productImage1,
  productImage2,
  productImage3,
  productImage4,
];
const productThumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

export default function ImageSlider() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="">
      <Swiper
        id="main-image-slider"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        slidesPerView={"auto"}
        className="mySwiper2 w-full md:rounded-xl"
      >
        {productImages.map((image) => (
          <SwiperSlide>
            <img
              className="md:rounded-xl"
              src={image}
              onClick={() => handleImageClick(image)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* {isLightboxOpen && } */}

    
        <Swiper
          id="thumbnails"
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={4}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper mt-4 "
        >
          {productThumbnails.map((image) => (
            <SwiperSlide>
              <img src={image} className="md:rounded-xl" />
            </SwiperSlide>
          ))}
        </Swiper>

    </div>
  );
}
