import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { Link } from 'react-router-dom';

const navigationItems = [
  { labelEn: 'Home', labelAr: 'الرئيسية', href: '/' },
  { labelEn: 'Courses', labelAr: 'الدورات', href: '#courses' },
  { labelEn: 'Virtual Classroom', labelAr: 'الفصل الافتراضي', href: '/classroom' }
];

export function Header() {
  const { language, setLanguage, dir } = useLanguage();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <MobileNav items={navigationItems} />
            <div className="hidden lg:flex lg:items-center lg:space-x-8 lg:rtl:space-x-reverse">
              <nav className={`flex space-x-8 rtl:space-x-reverse ${dir === 'rtl' ? 'mr-8' : 'ml-8'}`}>
                {navigationItems.map((item) => (
                  <Link
                    key={item.labelEn}
                    to={item.href}
                    className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {language === 'en' ? item.labelEn : item.labelAr}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-indigo-600"
            >
              <Globe className="h-5 w-5 mr-2" />
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}