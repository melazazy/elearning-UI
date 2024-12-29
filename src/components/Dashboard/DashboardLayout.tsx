import React from 'react';
import { Sidebar } from './Sidebar';
import { Stats } from './Stats';
import { useLanguage } from '../../contexts/LanguageContext';

interface DashboardLayoutProps {
  role: 'student' | 'teacher' | 'admin';
  children?: React.ReactNode;
}

export function DashboardLayout({ role, children }: DashboardLayoutProps) {
  const { dir } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role={role} activePath="dashboard" />
      <div className={`transition-all duration-200 ${
        dir === 'ltr' ? 'ml-64' : 'mr-64'
      } p-8`}>
        <Stats role={role} />
        <div className="mt-8">
          {children}
        </div>
      </div>
    </div>
  );
}