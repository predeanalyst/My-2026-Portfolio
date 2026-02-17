
import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-slate-900">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Cpu size={24} />
          </div>
          <span>PI<span className="text-blue-600">.</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://www.linkedin.com/in/precious-iyekeoretin-sap-fico-bw-cpm-9b473b24a/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-all"
          >
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-bold text-slate-900 p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://www.linkedin.com/in/precious-iyekeoretin-sap-fico-bw-cpm-9b473b24a/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-center"
          >
            LinkedIn Profile
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
