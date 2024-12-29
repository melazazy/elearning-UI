import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface MobileNavProps {
  items: Array<{
    labelEn: string;
    labelAr: string;
    href: string;
  }>;
}

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        aria-label={language === 'en' ? 'Open menu' : 'فتح القائمة'}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsOpen(false)} />
          <div className="relative bg-white h-full w-64 p-6">
            <nav className="space-y-2">
              {items.map((item) => (
                <a
                  key={item.labelEn}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {language === 'en' ? item.labelEn : item.labelAr}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}