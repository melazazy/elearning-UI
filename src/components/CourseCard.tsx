import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={course.thumbnail} 
        alt={course.title[language]} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {course.title[language]}
        </h3>
        <p className="text-gray-600 mb-4">
          {course.description[language]}
        </p>
        {course.progress !== undefined && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                {language === 'en' ? 'Progress' : 'التقدم'}
              </span>
              <span className="text-sm font-medium text-indigo-600">
                {course.progress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-indigo-600 h-2 rounded-full" 
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}