import React from 'react';
import SiteHeader from './components/SiteHeader';
import Profile from './features/Profile/Profile';
import Skills from './features/Skills/Skills';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />
      <main className="pt-20 container mx-auto p-4 space-y-8">
        <Profile />
        <Skills />
      </main>
    </div>
  );
}