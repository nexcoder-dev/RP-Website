import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const location = useLocation();

  return (
    <nav className={`fixed w-full z-50 p-4 transition-all duration-300 ${isScrolled ? 'bg-[#1a1a1a]/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div>
            <h1 className="text-xl font-bold text-white tracking-wide group-hover:text-yellow-400 transition-colors">
              IntrovertIRL
            </h1>
            <p className="text-xs text-white/80 font-medium tracking-wider uppercase">Roleplay</p>
          </div>
          <img
            src="https://i.ibb.co/ks6DhNM2/flag.png"
            alt="Indian Flag"
            className="w-14 h-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className={`text-sm ${location.pathname === '/' ? 'text-yellow-500' : 'text-white hover:text-gray-300'}`}>
            Home
          </Link>
          <Link to="/sponsors" className={`text-sm ${location.pathname === '/sponsors' ? 'text-yellow-500' : 'text-white hover:text-gray-300'}`}>
            Sponsors
          </Link>
          <Link to="/rules" className={`text-sm ${location.pathname === '/rules' ? 'text-yellow-500' : 'text-white hover:text-gray-300'}`}>
            Rules
          </Link>
          <Link to="/donate" className={`text-sm ${location.pathname === '/donate' ? 'text-yellow-500' : 'text-white hover:text-gray-300'}`}>
            Donate
          </Link>
          <Link to="/how-to-start" className={`text-sm ${location.pathname === '/how-to-start' ? 'text-yellow-500' : 'text-white hover:text-gray-300'}`}>
            How To Start playing?
          </Link>
          <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all">
            CONNECT →
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all">
            STORE
            <span className="bg-orange-500 text-[10px] px-2 py-0.5 rounded-full">New</span>
          </button>
          <Link to="/media" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all">
            IIRP MEDIAS
          </Link>
          <Link to="/subscription" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all">
            Subscription
            <span className="bg-white/20 text-[10px] px-2 py-0.5 rounded-full">Premium</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}