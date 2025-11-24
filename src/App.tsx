import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import Profile from './features/Profile/Profile';
import Education from './features/Education/Education';
import Skills from './features/Skills/Skills';
import FavoriteLanguages from './features/FavoriteLanguages/FavoriteLanguages';
import Passtime from './features/Passtime/Passtime';
import BlogList from './features/Blog/BlogList';
import BlogPost from './features/Blog/BlogPost';

function Home() {
  return (
    <div className="space-y-8">
      <Profile />
      <Education />
      <Skills />
      <FavoriteLanguages />
      <Passtime />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <SiteHeader />
        <main className="pt-20 container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}