import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const IframeCarousel = () => {
  const iframes = [
    "https://open.spotify.com/embed/episode/6fxMbcIWA9c4w3wBHJFuo7?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/episode/26JOoMn45NqaHR7u4xFrAo?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/episode/5L4jsahzEkt7ESerYKqxNv?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/episode/14j1fHAjTPBvRtauGclnF3?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/episode/4BanA2btpSKSWE2y6lhc9k?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/episode/1CYTIHBjhOijtZjLl8A3i4?utm_source=generator&theme=0"
  ];

  return (
    <div className="py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {[0, 3].map((startIndex) => (
          <SwiperSlide key={startIndex} className="pb-12">
            <div className="flex space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5">
              {iframes.slice(startIndex, startIndex + 3).map((src, index) => (
                <div key={index} className="w-full">
                  <iframe
                    className="rounded-xl shadow-lg w-full h-20 sm:h-24 md:h-28 lg:h-32 xl:h-[352px]"
                    style={{ borderRadius: '12px' }}
                    src={src}
                    frameBorder="0"
                    allowFullScreen={false}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     
    </div>
  );
};

export default IframeCarousel;