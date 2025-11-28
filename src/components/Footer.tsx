'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative background elements - lighter and more subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="transform transition-all duration-300 hover:translate-y-[-4px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2.5 rounded-xl shadow-lg">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">ProDuct Clean</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional duct cleaning services for a healthier home and business environment. Quality you can trust, service you deserve.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors duration-300 relative group">
                  <span className="relative">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors duration-300 relative group">
                  <span className="relative">
                    About Us
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors duration-300 relative group">
                  <span className="relative">
                    Services
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/coverage" className="hover:text-blue-400 transition-colors duration-300 relative group">
                  <span className="relative">
                    Coverage Areas
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative pb-2">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors duration-300 relative group">
                  <span className="relative">
                    AC Duct Cleaning
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors duration-300 relative group">
                  <span className="relative">
                    Dryer Vent Cleaning
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors duration-300 relative group">
                  <span className="relative">
                    Chimney Cleaning
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/promotions" className="hover:text-blue-400 transition-colors duration-300 relative group">
                  <span className="relative">
                    Special Offers
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative pb-2">
              Contact Info
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                <Phone size={18} className="text-blue-400 mt-1 flex-shrink-0 group-hover:text-cyan-400 transition-colors duration-300" />
                <div>
                  <p className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300 cursor-pointer">(555) 123-4567</p>
                  <p className="text-gray-600 text-xs">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                <Mail size={18} className="text-blue-400 mt-1 flex-shrink-0 group-hover:text-cyan-400 transition-colors duration-300" />
                <div>
                  <p className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300 cursor-pointer">info@productclean.com</p>
                  <p className="text-gray-600 text-xs">Fast Response</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0 group-hover:text-cyan-400 transition-colors duration-300" />
                <div>
                  <p className="text-gray-400">Service Area</p>
                  <p className="text-gray-600 text-xs">Metro Region Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 p-2 rounded-lg hover:bg-slate-800"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 p-2 rounded-lg hover:bg-slate-800"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 p-2 rounded-lg hover:bg-slate-800"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Links and Copyright */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors duration-300 relative group">
                <span className="relative">
                  Privacy Policy
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300 relative group">
                <span className="relative">
                  Terms of Service
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © {currentYear} ProDuct Clean. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
