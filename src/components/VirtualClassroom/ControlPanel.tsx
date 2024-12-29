import React from 'react';
import { Mic, MicOff, Video, VideoOff, Share, MessageSquare, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function ControlPanel() {
  const { language, dir } = useLanguage();

  const controls = [
    { icon: Mic, activeIcon: MicOff, label: { en: 'Mute', ar: 'كتم الصوت' } },
    { icon: Video, activeIcon: VideoOff, label: { en: 'Video', ar: 'الفيديو' } },
    { icon: Share, label: { en: 'Share Screen', ar: 'مشاركة الشاشة' } },
    { icon: MessageSquare, label: { en: 'Chat', ar: 'الدردشة' } },
    { icon: Users, label: { en: 'Participants', ar: 'المشاركون' } }
  ];

  return (
    <div className="bg-gray-800 p-4">
      <div className="flex justify-center space-x-4 rtl:space-x-reverse">
        {controls.map((control) => (
          <button
            key={control.label.en}
            className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors"
            title={language === 'en' ? control.label.en : control.label.ar}
          >
            <control.icon className="h-6 w-6" />
          </button>
        ))}
      </div>
    </div>
  );
}