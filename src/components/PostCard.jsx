import React, { useState, useEffect } from 'react';
import { FileText, Video, ChevronLeft, ChevronRight } from 'lucide-react';

const PostCard = ({ $id, type, title, publish_date, brief }) => (
  <article className="bg-white rounded-3xl border border-black shadow-card m-2 p-3 sm:p-4 lg:p-6 flex flex-col h-full w-full">
    <div className="flex justify-between items-center mb-2 sm:mb-3 lg:mb-5 text-gray-500">
      <span className="bg-[#F95C04] text-white text-xs font-medium inline-flex items-center px-1.5 sm:px-2.5 py-0.5 rounded">
        {type === 'Article' ? <FileText size={14} className="mr-1 sm:mr-2" /> : <Video size={14} className="mr-1 sm:mr-2" />}
        <span className="hidden xs:inline">{type}</span>
      </span>
      <span className="text-xs sm:text-sm">{publish_date}</span>
    </div>
    <h2 className="mb-2 text-base sm:text-lg lg:text-xl font-bold tracking-tight text-gray-900">{title}</h2>
    <p className="mb-2 sm:mb-3 lg:mb-5 font-light text-gray-500 text-xs sm:text-sm lg:text-base flex-grow" style={{ whiteSpace: 'pre-line' }}>
      {brief.length > 100 ? brief.slice(0, 100) + '...' : brief}
    </p>
    <div className="flex justify-end items-end mt-auto">
      <a href={`/blogs/${$id}`} className="inline-flex items-center font-bold text-[#F95C04] hover:text-black text-sm sm:text-base lg:text-lg">
        Leggi Di Più
        <ChevronRight className="ml-1 sm:ml-2" size={18} />
      </a>
    </div>
  </article>
);

const PostCarousel = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Limit the number of posts to 4
  const limitedPosts = posts.slice(0, 4);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth >= 1280 ? 2 : 1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + slidesPerView;
      return nextIndex >= limitedPosts.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - slidesPerView;
      return nextIndex < 0 ? Math.max(limitedPosts.length - slidesPerView, 0) : nextIndex;
    });
  };

  return (
    <div className="relative py-4 sm:py-8 max-w-screen-xl mx-auto lg:py-16 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)` }}
        >
          {limitedPosts.map((post, index) => (
            <div key={post.id} className="w-full xl:w-1/2 flex-shrink-0 px-2 xl:px-4">
              <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto xl:mx-0">
                <PostCard {...post} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {limitedPosts.length > slidesPerView && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 xl:-left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-md z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 xl:-right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-md z-10"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  );
};

export default PostCarousel;