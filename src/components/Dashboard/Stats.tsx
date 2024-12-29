import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Users, 
  BookOpen, 
  Clock, 
  Award 
} from 'lucide-react';

interface StatCardProps {
  icon: React.ElementType;
  value: string | number;
  label: { en: string; ar: string };
  trend?: { value: number; positive: boolean };
}

function StatCard({ icon: Icon, value, label, trend }: StatCardProps) {
  const { language } = useLanguage();
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <Icon className="h-6 w-6 text-indigo-600" />
        </div>
        <div className="ml-4 rtl:mr-4 rtl:ml-0">
          <div className="text-2xl font-semibold text-gray-900">{value}</div>
          <div className="text-sm text-gray-500">{language === 'en' ? label.en : label.ar}</div>
        </div>
        {trend && (
          <div className={`ml-auto rtl:mr-auto rtl:ml-0 text-sm ${
            trend.positive ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend.positive ? '+' : '-'}{trend.value}%
          </div>
        )}
      </div>
    </div>
  );
}

interface StatsProps {
  role: 'student' | 'teacher' | 'admin';
}

export function Stats({ role }: StatsProps) {
  const stats = {
    student: [
      {
        icon: BookOpen,
        value: 5,
        label: { en: 'Active Courses', ar: 'الدورات النشطة' },
      },
      {
        icon: Clock,
        value: '12h',
        label: { en: 'Learning Time', ar: 'وقت التعلم' },
        trend: { value: 12, positive: true },
      },
      {
        icon: Award,
        value: 8,
        label: { en: 'Certificates', ar: 'الشهادات' },
      },
    ],
    teacher: [
      {
        icon: Users,
        value: 125,
        label: { en: 'Active Students', ar: 'الطلاب النشطون' },
        trend: { value: 8, positive: true },
      },
      {
        icon: BookOpen,
        value: 12,
        label: { en: 'Active Courses', ar: 'الدورات النشطة' },
      },
      {
        icon: Clock,
        value: '24h',
        label: { en: 'Teaching Hours', ar: 'ساعات التدريس' },
        trend: { value: 15, positive: true },
      },
    ],
    admin: [
      {
        icon: Users,
        value: '2.4k',
        label: { en: 'Total Users', ar: 'إجمالي المستخدمين' },
        trend: { value: 12, positive: true },
      },
      {
        icon: BookOpen,
        value: 85,
        label: { en: 'Total Courses', ar: 'إجمالي الدورات' },
        trend: { value: 5, positive: true },
      },
      {
        icon: Award,
        value: '95%',
        label: { en: 'Completion Rate', ar: 'معدل الإكمال' },
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats[role].map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}