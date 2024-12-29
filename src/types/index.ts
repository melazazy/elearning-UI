export type Language = 'en' | 'ar';

export interface User {
  id: string;
  role: 'student' | 'teacher' | 'admin';
  name: string;
  email: string;
  preferredLanguage: Language;
}

export interface Course {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  instructor: string;
  progress?: number;
  thumbnail: string;
}