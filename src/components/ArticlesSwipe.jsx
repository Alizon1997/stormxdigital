import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FileText, Video, ChevronLeft, ChevronRight } from 'lucide-react';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });
};

const ArticlesSwiper = ({ articles }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: { 
          el: '.swiper-pagination',
          clickable: true 
        },
        breakpoints: {
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });
    }
  }, []);

  return (
    <div className="w-full overflow-hidden py-8 px-4 sm:px-6 lg:px-8 relative">
      <div className="swiper-container" ref={swiperRef}>
        <div className="swiper-wrapper">
          {articles.map(({ $id, type, title, publish_date, brief }) => (
            <div key={$id} className="swiper-slide">
              <article className="bg-white rounded-3xl border border-black shadow-card flex flex-col h-full">
                <div className="p-3 sm:p-4 lg:p-5 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-2 sm:mb-3 text-gray-500">
                    <span className="bg-[#F95C04] text-white text-xs font-medium inline-flex items-center px-2 py-0.5 rounded">
                      {type === 'Article' ? <FileText size={14} /> : <Video size={14} />}
                      <span className="ml-1 text-xs">{type}</span>
                    </span>
                    <span className="text-xs">{formatDate(publish_date)}</span>
                  </div>
                  <h2 className="mb-2 text-sm sm:text-base font-bold tracking-tight text-gray-900 line-clamp-2">{title}</h2>
                  <p className="mb-3 text-xs sm:text-sm text-gray-500 flex-grow line-clamp-3">{brief}</p>
                  <div className="mt-auto">
                    <a href={`/blogs/${$id}`} className="inline-flex items-center text-xs sm:text-sm font-bold text-[#F95C04] hover:text-black transition-colors duration-200">
                      Leggi Di Più
                      <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
      
      {/* Navigation Arrows */}
      <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2  rounded-full p-2 sm:p-3 shadow-md z-10">
        <ChevronLeft size={20} className="text-[#F95C04]" />
      </div>
      <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2  rounded-full p-2 sm:p-3 shadow-md z-10">
        <ChevronRight size={20} className="text-[#F95C04]" />
      </div>
    </div>
  );
};

export default ArticlesSwiper;