import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const card = cards[currentIndex];

  return (
    <div className="relative w-full px-4 sm:px-28">
      <div className={`p-4 rounded-[20px] shadow-card border border-black flex flex-col ${card.bgClass} ${card.textColor} relative overflow-hidden`}>
        <div className="z-10">
          <h3 className="text-xl font-bold mb-2">{card.title}</h3>
          {card.content && <p className="text-xs mb-2">{card.content}</p>}
          <ul className="list-disc pl-4 text-xs space-y-1">
            {card.listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={`absolute bottom-0 right-6 text-4xl font-bold ${card.textColor} z-0`}>{card.number}</div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
    </div>
  );
};