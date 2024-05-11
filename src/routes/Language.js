import React, { useState } from 'react';
import translateText from './Translate';
import './Language.css';

function Language() {
  const [inputText, setInputText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es'); // Default: Spanish

  const handleTranslate = async () => {
    if (inputText) {
      const translatedText = await translateText(inputText, targetLanguage);
      // Do something with the translatedText, e.g., display it on the page.
    }
  };

  const handleLanguageSelect = async () => {
    if (inputText) {
      const translatedText = await translateText(inputText, targetLanguage);
      // Do something with the translatedText, e.g., display it on the page.
    }
  };

  return (
    <div className='.select-container'>
      <select
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
        onClick={handleLanguageSelect}
      >
        <option value="en">  English</option>
        <option value="om">Afan Oromo</option>
        <option value="am">Amharic</option>
        {/* Add more language options */}
      </select>
    </div>
  );
}

export default Language;