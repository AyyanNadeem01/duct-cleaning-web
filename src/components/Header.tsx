'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Our Services' },
    { href: '/coverage', label: 'Coverage Areas' },
    { href: '/why-duct-cleaning', label: 'Why Duct Cleaning' },
    { href: '/promotions', label: 'Promotions' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact Us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-gradient-to-r from-slate-800/90 to-slate-800/90 text-white shadow-md shadow-blue-900/10 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-5'
      }`}
    >
<nav className="mx-auto max-w-full px-2 md:px-4 flex justify-between items-center transition-all duration-300">
  {/* Logo */}
  <Link href="/" className="flex items-center gap-2">
    <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 p-3 rounded-lg shadow-md group-hover:shadow-xl group-hover:shadow-blue-500/40 transition-all duration-400 transform group-hover:scale-105">
      <svg
        className="w-6 h-6 transition-transform duration-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
      </svg>
    </div>
    <div className="flex flex-col leading-tight">
      <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
        ProDuct
      </span>
      <span className="text-xs font-semibold text-blue-300 tracking-wide">
        CLEAN AIR
      </span>
    </div>
  </Link>

  {/* Desktop Menu */}
  <div className="hidden md:flex items-center gap-2">
    {navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className="text-gray-200 hover:text-blue-300 px-2 py-2 rounded-md transition-all duration-300 font-medium whitespace-nowrap relative group text-sm"
      >
        {link.label}
        <span className="absolute bottom-1 left-4 w-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-[calc(100%-32px)] transition-all duration-500 rounded-full"></span>
      </Link>
    ))}

    <Link
      href="/contact"
      className="ml-6 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-600 hover:from-blue-600 hover:via-blue-700 hover:to-cyan-700 px-6 py-2 rounded-lg font-bold transition-all duration-400 shadow-md hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 active:scale-95 text-white"
    >
      Get Quote
    </Link>
  </div>

  {/* Mobile Menu Button */}
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="md:hidden p-2 hover:bg-slate-700/40 rounded-md transition-colors duration-200"
  >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
</nav>


      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-slate-800/85 via-slate-800/85 to-slate-900/90 px-5 py-5 space-y-3 border-t border-slate-700/30 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 rounded-lg font-semibold text-gray-300 hover:bg-slate-700/60 hover:text-blue-300 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-white text-center mt-4 shadow-lg"
          >
            Get Quote
          </Link>
        </div>
      )}
    </header>
  );
}
