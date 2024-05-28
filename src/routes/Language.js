import React, { useState, useEffect } from 'react';
import "../Components/Navbar.css"
const Language = ({ menuItems }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [translatedMenuItems, setTranslatedMenuItems] = useState(menuItems);

  const translations = {
      
    en: {
      heartbeat:"Hospital Information",
      home: 'Home',
      services: 'Services',
      hospitals: 'Hospital',
      book: 'Book',
      about: 'About Us',
      contact: 'Contact',
    },
    om: {
      
      home: 'Mana',
      services: 'Tajaajilaa',
      hospitals: 'Hospitaaloota',
      book: 'Fuula',
      about: 'Keenya',
      contact: 'Walii Galaa',
    },
    am: {
      home: 'ዋና ገጽ',
      services: 'አገልግሎቶች',
      hospitals: 'ሆስፒታሎች',
      book: 'ቅዳሜ',
      about: 'ስለ እኛ',
      contact: 'ግንኙነት',
    },
  };

  useEffect(() => {
    const updatedMenuItems = menuItems.map((item) => ({
      ...item,
      title: translations[currentLanguage][item.title.toLowerCase()],
    }));
    setTranslatedMenuItems(updatedMenuItems);
  }, [currentLanguage, menuItems, translations]);

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <nav>
      <ul>
        {translatedMenuItems.map((item, index) => (
          <li key={index}>
            <a href={item.url} className={item.cName}>
              {item.icon ? <i className={item.icon}></i> : null}
              {item.title}
            </a>
          </li>
        ))}
        <li>
          <div className="language-switcher">
            <span className="current-lang">{currentLanguage.toUpperCase()}</span>
            
  <a href="#" className="current-lang">
    {currentLanguage}
    <i className="fas fa-angle-down"></i>
  </a>
  <ul className="dropdown">
    <li><a href="#" onClick={() => handleLanguageChange('en')}>English</a></li>
    <li><a href="#" onClick={() => handleLanguageChange('om')}>Afaan Oromo</a></li>
    <li><a href="#" onClick={() => handleLanguageChange('am')}>አማርኛ</a></li>
  </ul>
 
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Language;