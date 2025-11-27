import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import ProfileHero from './components/ProfileHero';
import AboutSection from './components/AboutSection';
import TimelineSection from './components/TimelineSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Simple animation class for transitioning
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (tabId: string) => {
    if (tabId === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsTransitioning(false);
    }, 200);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <ProfileHero onNavigate={handleNavigate} />;
      case 'about': return <AboutSection />;
      case 'journey': return <TimelineSection />;
      case 'life': return <GallerySection />;
      case 'contact': return <ContactSection />;
      default: return <ProfileHero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-200/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-200/20 rounded-full blur-[100px]" />
      </div>

      <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-40 pointer-events-none">
        <span className="font-bold text-xl text-primary pointer-events-auto cursor-pointer" onClick={() => handleNavigate('home')}>
          IKARUS
        </span>
        <span className="text-sm font-medium text-gray-400 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm">
           Ver 1.0
        </span>
      </header>

      <main className={`transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'} pt-16`}>
        {renderContent()}
      </main>

      <Navigation activeTab={activeTab} setActiveTab={handleNavigate} />
      
      {/* Footer */}
      <footer className="w-full text-center py-6 text-gray-400 text-xs mb-20 md:mb-0">
        © 2024 Samhwa Paint IKARUS Team. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
