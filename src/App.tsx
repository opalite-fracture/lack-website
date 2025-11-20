import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import Footer from './components/Footer';
import MouseFollowBackground from './components/MouseFollowBackground';
import { LanguageProvider } from './contexts/LanguageContext';
import Docs from './pages/Docs';

import UseCases from './components/UseCases';
import WhyChooseLack from './components/WhyChooseLack';


const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <WhyChooseLack />
        <Download />
        <Download />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <MouseFollowBackground />

          <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/docs/:slug" element={<Docs />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
