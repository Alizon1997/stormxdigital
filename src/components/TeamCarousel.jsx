import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TeamMember = ({ title, description, name, link, profile }) => (
  <div className="h-full w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[340px] md:max-w-[380px] 
                  lg:max-w-[420px] xl:max-w-[400px] mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 
                  py-4 xs:py-5 sm:py-6 md:py-7 lg:py-8 bg-white rounded-[15px] xs:rounded-[20px] 
                  sm:rounded-[25px] md:rounded-[30px] lg:rounded-[35px] border border-zinc-900 border-b-4 
                  sm:border-b-6 md:border-b-8 flex-col justify-start items-start gap-2 xs:gap-3 sm:gap-4 
                  md:gap-5 lg:gap-6 inline-flex text-black transition-all duration-300 ease-in-out 
                  hover:shadow-lg hover:-translate-y-1">
    <div className="flex-col justify-start items-start gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-7 flex w-full">
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <div className="h-[50px] xs:h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] relative">
            <img src={profile} alt={name} className="h-full w-auto object-contain rounded-full"/>
          </div>
          <div className="flex-col justify-end items-start inline-flex">
            <div className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold">{title}</div>
            <div className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium">{name}</div>
          </div>
        </div>
        <a className="top-0 right-0 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200" href={link}>
          <img src="/team/lng.svg" alt="vector" className="w-3 xs:w-4 sm:w-5 md:w-6 lg:w-7"/>
        </a>
      </div>
      <hr className="w-full border border-zinc-200"/>
      <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg line-clamp-3 sm:line-clamp-4">{description}</p>
    </div>
  </div>
);

const TeamCarousel = ({ teamData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.team.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamData.team.length) % teamData.team.length);
  };

  return (
    <div className="relative w-full px-6 xs:px-8 sm:px-10 md:px-12 lg:px-14 xl:hidden">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {teamData.team.map((member, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-center">
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 shadow-md hover:bg-gray-100 transition-colors duration-200">
        <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 shadow-md hover:bg-gray-100 transition-colors duration-200">
        <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
      </button>
    </div>
  );
};

const TeamGrid = ({ teamData }) => (
  <div className="hidden xl:grid grid-cols-3 gap-8 px-10">
    {teamData.team.map((member, index) => (
      <TeamMember key={index} {...member} />
    ))}
  </div>
);

const ResponsiveTeamComponent = ({ teamData }) => (
  <div className="flex-col items-center py-6 xs:py-8 sm:py-10 md:py-12 lg:py-14" id="team">
    <TeamCarousel teamData={teamData} />
    <TeamGrid teamData={teamData} />
  </div>
);

export default ResponsiveTeamComponent;