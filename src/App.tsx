import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Dashboard } from './pages/Dashboard';
import { VirtualClassroom } from './pages/VirtualClassroom';

// Temporary user for testing
const tempUser = {
  id: '1',
  role: 'student' as const,
  name: 'John Doe',
  email: 'john@example.com',
  preferredLanguage: 'en' as const
};

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard user={tempUser} />} />
          <Route path="/classroom" element={<VirtualClassroom />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}