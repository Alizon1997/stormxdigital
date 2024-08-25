import React from 'react';

const LanguageSwitcher: React.FC = () => {
  const changeLanguage = (lang: string) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${lang}`);
    window.location.href = newPath;
  };

  return (
    <div className="ml-4 flex items-center space-x-2">
      <button 
        onClick={() => changeLanguage('en')} 
        className="flex items-center space-x-1 px-3 py-1 rounded hover:bg-gray-100"
      >
        <img src="/flags/en.svg" alt="English" className="w-5 h-4" />
        <span>EN</span>
      </button>
      <button 
        onClick={() => changeLanguage('it')} 
        className="flex items-center space-x-1 px-2 py-1 rounded hover:bg-gray-100"
      >
        <img src="/flags/it.svg" alt="Italiano" className="w-4 h-3" />
        <span>IT</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;