import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const IframeCarousel = () => {
  const swiperRef = useRef(null);
  const iframes = [
    "https://open.spotify.com/embed/episode/6fxMbcIWA9c4w3wBHJFuo7?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/episode/26JOoMn45NqaHR7u4xFrAo?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/episode/5L4jsahzEkt7ESerYKqxNv?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/episode/14j1fHAjTPBvRtauGclnF3?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/episode/4BanA2btpSKSWE2y6lhc9k?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/episode/1CYTIHBjhOijtZjLl8A3i4?utm_source=generator&theme=0"
  ];

  return (
    <div className="py-4 sm:py-6 md:py-8 lg:py-10 xl:py-16 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        className="pb-16"
      >
        {iframes.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <iframe
                className="rounded-xl shadow-lg w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-[352px]"
                style={{ borderRadius: '12px' }}
                src={src}
                frameBorder="0"
                allowFullScreen={false}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-gray-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-gray-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default IframeCarousel;