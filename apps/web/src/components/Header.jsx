import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import hindiLogo from '../assets/hindi.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/plans', label: 'Plans' },
    { path: '/about', label: 'About Us' },
    { path: '/shop', label: 'Shop' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-secondary/50 shadow-[0_4px_20px_rgba(0,255,202,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-secondary/10 rounded-lg border border-secondary/30 group-hover:glow-cyan transition-all duration-300">
              <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
            </div>
            <img src={hindiLogo} alt="Akhada Hindi Logo" className="h-8 object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:text-primary hover:text-glow-blue ${
                  isActive(link.path)
                    ? 'text-primary border-b-2 border-primary pb-1 text-glow-blue'
                    : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-secondary hover:text-primary hover:bg-secondary/10 rounded-lg transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t border-secondary/20 bg-background animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-primary/20 text-primary border-l-4 border-primary glow-blue'
                    : 'text-white hover:bg-secondary/10 hover:text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}