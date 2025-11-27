
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, MapPin, Phone, Instagram, ArrowRight, Zap } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t-4 border-teal-500 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Logo dark={false} />
            <p className="text-slate-400 text-sm leading-relaxed">
              Energy Pool specializes in specialized building maintenance, offering premium waterproofing, epoxy flooring, painting, and security installations across Zimbabwe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-teal-500 inline-block"></span> Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-teal-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> About Us</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Our Services</Link></li>
              <li><Link to="/projects" className="hover:text-teal-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Recent Projects</Link></li>
              <li><Link to="/waterproofing" className="hover:text-teal-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Torch-on Systems</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Request Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-teal-500 inline-block"></span> Core Trades
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="hover:text-white transition-colors">Building Construction</li>
              <li className="hover:text-white transition-colors">Roof Waterproofing (Torch-on)</li>
              <li className="hover:text-white transition-colors">Epoxy Flooring & Painting</li>
              <li className="hover:text-white transition-colors">Plumbing & Guttering</li>
              <li className="hover:text-white transition-colors">Ceilings & Partitioning</li>
              <li className="hover:text-white transition-colors">Razor Wire Installation</li>
              <li className="hover:text-white transition-colors">General Maintenance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-teal-500 inline-block"></span> Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="w-5 h-5 mr-3 text-teal-500 flex-shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">8278 Kirkman Gardens,<br />Westlea, Harare, Zimbabwe</span>
              </li>
              <li className="flex items-center group">
                <Phone className="w-5 h-5 mr-3 text-teal-500 flex-shrink-0 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">+263 773 768 592</span>
              </li>
              <li className="flex items-center group">
                <Mail className="w-5 h-5 mr-3 text-teal-500 flex-shrink-0 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">obertmandigo10@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center text-sm text-slate-500 gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
             <p>&copy; {new Date().getFullYear()} Energy Pool Investments (Pvt) Ltd.</p>
             <div className="hidden md:block w-px h-4 bg-slate-700"></div>
             <div className="flex items-center gap-4">
                <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Registered with NSSA</span>
             </div>
          </div>
          
          <div className="flex items-center gap-3">
             <span className="text-xs font-medium text-slate-600">Designed by</span>
             <a 
                href="https://skyboltlabs.co.za" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs font-bold shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 hover:-translate-y-0.5 transition-all"
             >
                <Zap className="w-3 h-3 fill-white" />
                Skybolt Labs
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
