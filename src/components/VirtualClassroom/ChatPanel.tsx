import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Send } from 'lucide-react';

export function ChatPanel() {
  const { language, dir } = useLanguage();
  const [message, setMessage] = useState('');

  const translations = {
    title: {
      en: 'Chat',
      ar: 'الدردشة'
    },
    placeholder: {
      en: 'Type a message...',
      ar: 'اكتب رسالة...'
    }
  };

  // Mock chat messages
  const messages = [
    { id: 1, sender: 'John Doe', text: 'Hello everyone!', time: '10:00' },
    { id: 2, sender: 'Jane Smith', text: 'Hi John!', time: '10:01' }
  ];

  return (
    <div className={`flex-1 flex flex-col ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-white font-medium">{translations.title[language]}</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="text-white">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>{msg.sender}</span>
              <span>{msg.time}</span>
            </div>
            <p className="mt-1">{msg.text}</p>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={translations.placeholder[language]}
            className="flex-1 bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}