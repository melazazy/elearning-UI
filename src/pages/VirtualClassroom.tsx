import React from 'react';
import { VideoStream } from '../components/VirtualClassroom/VideoStream';
import { ChatPanel } from '../components/VirtualClassroom/ChatPanel';
import { ParticipantsList } from '../components/VirtualClassroom/ParticipantsList';
import { ControlPanel } from '../components/VirtualClassroom/ControlPanel';
import { useLanguage } from '../contexts/LanguageContext';

export function VirtualClassroom() {
  const { language, dir } = useLanguage();

  const translations = {
    title: {
      en: 'Virtual Classroom',
      ar: 'الفصل الافتراضي'
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="h-screen flex flex-col">
        {/* Header */}
        <header className={`bg-gray-800 p-4 text-white ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
          <h1 className="text-xl font-semibold">{translations.title[language]}</h1>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Main Video Area */}
          <div className="flex-1 flex flex-col">
            <VideoStream />
            <ControlPanel />
          </div>

          {/* Sidebar */}
          <div className="w-80 bg-gray-800 flex flex-col">
            <ParticipantsList />
            <ChatPanel />
          </div>
        </div>
      </div>
    </div>
  );
}