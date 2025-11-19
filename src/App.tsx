import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import Footer from './components/Footer';
import MouseFollowBackground from './components/MouseFollowBackground';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <MouseFollowBackground />
        <Header />
        <main>
          <Hero />
          <Features />
          <Download />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
