import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Users, Mic, MicOff } from 'lucide-react';

export function ParticipantsList() {
  const { language, dir } = useLanguage();

  const translations = {
    title: {
      en: 'Participants',
      ar: 'المشاركون'
    }
  };

  // Mock participants data
  const participants = [
    { id: 1, name: 'John Doe', isMuted: false, isHost: true },
    { id: 2, name: 'Jane Smith', isMuted: true },
    { id: 3, name: 'Ahmed Hassan', isMuted: false }
  ];

  return (
    <div className={`flex-1 border-b border-gray-700 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-gray-400" />
          <h2 className="text-white font-medium">
            {translations.title[language]} ({participants.length})
          </h2>
        </div>
      </div>
      
      <div className="overflow-y-auto h-48">
        {participants.map((participant) => (
          <div
            key={participant.id}
            className="flex items-center justify-between p-3 hover:bg-gray-700"
          >
            <div className="flex items-center gap-2">
              <span className="text-white">{participant.name}</span>
              {participant.isHost && (
                <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded">
                  {language === 'en' ? 'Host' : 'المضيف'}
                </span>
              )}
            </div>
            {participant.isMuted ? (
              <MicOff className="h-4 w-4 text-gray-400" />
            ) : (
              <Mic className="h-4 w-4 text-green-400" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}