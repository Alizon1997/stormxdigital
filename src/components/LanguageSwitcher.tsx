import React, { useEffect, useState } from 'react';

const LanguageSwitcher: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<string>('en');

  useEffect(() => {
    const path = window.location.pathname;
    const lang = path.split('/')[1];
    if (lang === 'en' || lang === 'it') {
      setCurrentLang(lang);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${lang}`);
    window.location.href = newPath;
  };

  const oppositeLanguage = currentLang === 'en' ? 'it' : 'en';

  return (
    <div className="ml-4 flex items-center">
      <button 
        onClick={() => changeLanguage(oppositeLanguage)} 
        className="flex items-center space-x-1 px-3 py-1 rounded hover:bg-gray-100"
      >
        <img 
          src={`/flags/${oppositeLanguage}.svg`} 
          alt={oppositeLanguage === 'en' ? 'English' : 'Italiano'} 
          className={`${oppositeLanguage === 'en' ? 'w-5 h-4' : 'w-4 h-3'}`} 
        />
        <span>{oppositeLanguage.toUpperCase()}</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;