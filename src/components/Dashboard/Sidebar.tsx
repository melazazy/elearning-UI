import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Settings, 
  BarChart,
  Video,
  MessageSquare,
  Home
} from 'lucide-react';

const navigation = {
  student: [
    { icon: Home, labelEn: 'Home', labelAr: 'الرئيسية', href: '/' },
    { icon: BookOpen, labelEn: 'My Courses', labelAr: 'دوراتي', href: '#courses' },
    { icon: Calendar, labelEn: 'Schedule', labelAr: 'الجدول', href: '#schedule' },
    { icon: Video, labelEn: 'Live Sessions', labelAr: 'الجلسات المباشرة', href: '#live' },
    { icon: MessageSquare, labelEn: 'Messages', labelAr: 'الرسائل', href: '#messages' }
  ],
  teacher: [
    { icon: Home, labelEn: 'Home', labelAr: 'الرئيسية', href: '/' },
    { icon: Users, labelEn: 'My Students', labelAr: 'طلابي', href: '#students' },
    { icon: BookOpen, labelEn: 'Courses', labelAr: 'الدورات', href: '#courses' },
    { icon: Video, labelEn: 'Live Sessions', labelAr: 'الجلسات المباشرة', href: '#live' },
    { icon: BarChart, labelEn: 'Analytics', labelAr: 'التحليلات', href: '#analytics' }
  ],
  admin: [
    { icon: Home, labelEn: 'Home', labelAr: 'الرئيسية', href: '/' },
    { icon: Users, labelEn: 'Users', labelAr: 'المستخدمين', href: '#users' },
    { icon: BookOpen, labelEn: 'Courses', labelAr: 'الدورات', href: '#courses' },
    { icon: BarChart, labelEn: 'Analytics', labelAr: 'التحليلات', href: '#analytics' },
    { icon: Settings, labelEn: 'Settings', labelAr: 'الإعدادات', href: '#settings' }
  ]
};

interface SidebarProps {
  role: 'student' | 'teacher' | 'admin';
  activePath: string;
}

export function Sidebar({ role, activePath }: SidebarProps) {
  const { language, dir } = useLanguage();
  const items = navigation[role];

  return (
    <div className={`h-screen w-64 bg-indigo-900 text-white fixed transition-all duration-200 ${
      dir === 'ltr' ? 'left-0' : 'right-0'
    }`}>
      <div className="p-6">
        <nav className={`space-y-2 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activePath === item.labelEn.toLowerCase();
            return (
              <a
                key={item.labelEn}
                href={item.href}
                className={`flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-indigo-800 text-white' 
                    : 'text-indigo-100 hover:bg-indigo-800'
                } ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
              >
                <Icon className={`h-5 w-5 ${dir === 'ltr' ? 'mr-3' : 'ml-3'}`} />
                <span>{language === 'en' ? item.labelEn : item.labelAr}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}