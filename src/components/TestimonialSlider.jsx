import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="bg-white p-6 sm:p-8 rounded-[45px] shadow-lg border-[0.5px] border-b-[8px] border-black h-full">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 mb-4 rounded-full overflow-hidden">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#F95C04] text-center">{testimonial.name}</h3>
                  <p className="text-base sm:text-lg font-semibold text-center">{testimonial.company}</p>
                </div>
                <p className="text-[#F95C04] text-base sm:text-lg font-bold text-center mb-4">"{testimonial.quote}"</p>
                <p className="text-center text-sm sm:text-base">{testimonial.content}</p>
                {testimonial.additionalContent && (
                  <p className="text-center text-sm sm:text-base mt-2">{testimonial.additionalContent}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button 
        onClick={prevSlide} 
        className="absolute top-1/2 -left-4 sm:-left-6 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-md"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-md"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
};

export default TestimonialSlider;