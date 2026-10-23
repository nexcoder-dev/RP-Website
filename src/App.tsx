import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sponsors from './pages/Sponsors';
import Rules from './pages/Rules';
import Donate from './pages/Donate';
import Media from './pages/Media';
import Subscription from './pages/Subscription';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#1a1a1a] text-white overflow-x-hidden">
        <Navbar isScrolled={isScrolled} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/media" element={<Media />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;