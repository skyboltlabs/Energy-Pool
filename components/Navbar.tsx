
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  // Force solid navbar if not on home page OR if scrolled
  const showSolidNav = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        showSolidNav
          ? 'bg-white/95 backdrop-blur-md border-slate-200 py-3 shadow-sm' 
          : 'bg-transparent border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0 relative z-50">
            <Logo dark={showSolidNav} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold tracking-wide transition-all ${
                  showSolidNav 
                    ? (location.pathname === link.path ? 'text-teal-600' : 'text-slate-600 hover:text-teal-600') 
                    : (location.pathname === link.path ? 'text-white' : 'text-white/80 hover:text-white')
                }`}
              >
                {link.name}
              </Link>
            ))}
             <Link
                to="/waterproofing"
                className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm border transition-all ${
                    showSolidNav 
                    ? 'border-teal-600 text-teal-600 hover:bg-teal-50' 
                    : 'border-white/50 text-white hover:bg-white/10'
                }`}
              >
                Waterproofing
              </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
             <div className={`hidden lg:flex flex-col items-end ${showSolidNav ? 'text-slate-900' : 'text-white'}`}>
                <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 text-teal-500" />
                    <span className="text-xs font-bold tracking-wide">24/7 SUPPORT</span>
                </div>
                <span className="text-sm font-bold font-serif">+263 773 109 447</span>
             </div>
            <Link
              to="/contact"
              className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-sm font-bold text-sm transition-all shadow-lg shadow-teal-900/20 hover:shadow-teal-900/40 flex items-center gap-2"
            >
              Get Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                showSolidNav ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 transform transition-transform duration-300 origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-4 py-3 rounded-md text-base font-bold text-slate-700 hover:text-teal-600 hover:bg-slate-50 border-l-4 border-transparent hover:border-teal-500"
              >
                {link.name}
              </Link>
            ))}
             <Link
                to="/waterproofing"
                className="block px-4 py-3 rounded-md text-base font-bold text-teal-600 bg-teal-50/50 border-l-4 border-teal-500"
              >
                Roof Waterproofing
              </Link>
            <Link
              to="/contact"
              className="block mt-6 px-4 py-4 bg-teal-900 text-white rounded-sm text-center font-bold hover:bg-teal-800"
            >
              Request a Quote
            </Link>
          </div>
      </div>
    </nav>
  );
};
