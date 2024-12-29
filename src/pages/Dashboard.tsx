import React from 'react';
import { DashboardLayout } from '../components/Dashboard/DashboardLayout';
import { useLanguage } from '../contexts/LanguageContext';
import type { User } from '../types';

interface DashboardProps {
  user: User;
}

export function Dashboard({ user }: DashboardProps) {
  const { language, dir } = useLanguage();

  const welcomeText = {
    en: `Welcome back, ${user.name}!`,
    ar: `!${user.name} مرحباً بعودتك`
  };

  const quickLinks = {
    student: [
      { en: 'My Courses', ar: 'دوراتي', href: '#courses' },
      { en: 'Upcoming Sessions', ar: 'الجلسات القادمة', href: '#sessions' },
      { en: 'My Progress', ar: 'تقدمي', href: '#progress' }
    ],
    teacher: [
      { en: 'My Classes', ar: 'فصولي', href: '#classes' },
      { en: 'Student Reports', ar: 'تقارير الطلاب', href: '#reports' },
      { en: 'Schedule', ar: 'الجدول', href: '#schedule' }
    ],
    admin: [
      { en: 'User Management', ar: 'إدارة المستخدمين', href: '#users' },
      { en: 'System Analytics', ar: 'تحليلات النظام', href: '#analytics' },
      { en: 'Settings', ar: 'الإعدادات', href: '#settings' }
    ]
  };

  return (
    <DashboardLayout role={user.role}>
      <div className={`text-${dir === 'rtl' ? 'right' : 'left'}`}>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          {welcomeText[language]}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {quickLinks[user.role].map((link) => (
            <a
              key={link.en}
              href={link.href}
              className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {language === 'en' ? link.en : link.ar}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}