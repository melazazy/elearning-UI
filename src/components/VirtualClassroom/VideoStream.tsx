import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export function VideoStream() {
  const { language } = useLanguage();

  const translations = {
    noVideo: {
      en: 'Video stream will appear here',
      ar: 'سيظهر البث المباشر هنا'
    }
  };

  return (
    <div className="flex-1 bg-black relative">
      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
        {translations.noVideo[language]}
      </div>
      
      {/* Grid of video streams would be rendered here */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {/* Video components would be dynamically added here */}
      </div>
    </div>
  );
}