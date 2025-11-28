'use client';

import Link from 'next/link';
import { Check, Wind, Zap, Shield, Users, Star, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 text-white py-24 px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp page-fade">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight heading-reveal">
                Breathe <span className="text-fancy">Cleaner Air</span> Today
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Professional duct cleaning, dryer vent cleaning, and chimney services for your home and business. Experience the difference clean air makes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-2xl text-center transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  Get Free Quote <ArrowRight size={20} />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-center"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="bg-white/95 text-slate-900 rounded-2xl p-8 backdrop-blur-md border border-slate-200 shadow-xl animate-scaleIn transform hover:shadow-2xl hover:bg-white/97 transition-all duration-300 dark:bg-slate-900/80 dark:text-white">
              <div className="space-y-5">
                {[
                  { icon: '✓', text: '24/7 Emergency Services' },
                  { icon: '✓', text: 'Licensed & Insured Professionals' },
                  { icon: '✓', text: 'Same-Day Appointments Available' },
                  { icon: '✓', text: '100% Satisfaction Guaranteed' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer">
                    <div className="bg-green-400 text-green-900 w-8 h-8 rounded-full flex items-center justify-center font-bold group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-lg font-medium group-hover:translate-x-2 transition-transform duration-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fadeInDown">
            <h2 className="text-5xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive cleaning solutions for healthier indoor air
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AC Duct Cleaning */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl border-t-4 border-blue-600 group transform transition-all duration-300 hover:-translate-y-1">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <Wind className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">AC Duct Cleaning</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Remove dust, allergens, and contaminants from your HVAC system for better air quality and efficiency.
              </p>
              <ul className="space-y-3 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2 group/item">
                  <Check size={16} className="text-green-500 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="group-hover/item:text-gray-900 transition-colors duration-300">Professional equipment</span>
                </li>
                <li className="flex items-center gap-2 group/item">
                  <Check size={16} className="text-green-500 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="group-hover/item:text-gray-900 transition-colors duration-300">Energy savings</span>
                </li>
                <li className="flex items-center gap-2 group/item">
                  <Check size={16} className="text-green-500 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="group-hover/item:text-gray-900 transition-colors duration-300">Allergy relief</span>
                </li>
              </ul>
              <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 group/link">
                Learn More <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>

            {/* Dryer Vent Cleaning */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl border-t-4 border-orange-600 group transform transition-all duration-300 hover:-translate-y-1">
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-300">
                <Zap className="text-orange-600 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Dryer Vent Cleaning</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Improve dryer efficiency and prevent fires with professional vent cleaning services.
              </p>
              <ul className="space-y-3 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2 group/item">
                  <Check size={16} className="text-green-500 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="group-hover/item:text-gray-900 transition-colors duration-300">Fire prevention</span>
                </li>
                <li className="flex items-center gap-2 group/item">
                  <Check size={16} className="text-green-500 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="group-hover/item:text-gray-900 transition-colors duration-300">Faster drying</span>
                </li>
                <li className="flex items-center gap-2 group/item">
                  <Check size={16} className="text-green-500 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="group-hover/item:text-gray-900 transition-colors duration-300">Lower energy bills</span>
                </li>
              </ul>
              <Link href="/services" className="text-orange-600 font-semibold hover:text-orange-800 flex items-center gap-2 group/link">
                Learn More <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>

            {/* Chimney Cleaning */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl border-t-4 border-red-600 group transform transition-all duration-300 hover:-translate-y-1">
              <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                <Shield className="text-red-600 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Chimney Cleaning</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Safe and thorough chimney cleaning to ensure proper ventilation and prevent hazards.
              </p>
              <ul className="space-y-3 text-sm text-gray-600 mb-6">
                <li className="flex items-center gap-2 group/item">
                  <Check size={16} className="text-green-500 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="group-hover/item:text-gray-900 transition-colors duration-300">Safety inspection</span>
                </li>
                <li className="flex items-center gap-2 group/item">
                  <Check size={16} className="text-green-500 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="group-hover/item:text-gray-900 transition-colors duration-300">Creosote removal</span>
                </li>
                <li className="flex items-center gap-2 group/item">
                  <Check size={16} className="text-green-500 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="group-hover/item:text-gray-900 transition-colors duration-300">Certified professionals</span>
                </li>
              </ul>
              <Link href="/services" className="text-red-600 font-semibold hover:text-red-800 flex items-center gap-2 group/link">
                Learn More <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fadeInDown heading-reveal text-gray-900">Why Choose ProDuct Clean?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, color: 'yellow', title: '15+ Years Experience', desc: 'Trusted by thousands' },
              { icon: Users, color: 'blue', title: 'Expert Team', desc: 'Certified professionals' },
              { icon: Shield, color: 'green', title: 'Fully Licensed', desc: 'Insured & certified' },
              { icon: Zap, color: 'orange', title: 'Quick Service', desc: 'Same-day available' }
            ].map((item, i) => {
              const Icon = item.icon;
              const colorMap: Record<string, string> = {
                yellow: 'text-yellow-500',
                blue: 'text-blue-600',
                green: 'text-green-600',
                orange: 'text-orange-600'
              };
              return (
                <div key={i} className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 group cursor-pointer">
                  <Icon className={`mx-auto mb-4 ${colorMap[item.color]} group-hover:scale-125 transition-transform duration-300`} size={48} />
                  <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Promotions */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fadeInDown text-gray-900">Special Offers</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">AC Duct + Dryer Vent Combo</h3>
                <span className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold transform group-hover:scale-110 transition-transform duration-300">
                  Save 20%
                </span>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Bundle both services and get an exclusive discount on your first visit.
              </p>
              <Link
                href="/promotions"
                className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 group/link"
              >
                View All Promotions <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">First-Time Customer</h3>
                <span className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold transform group-hover:scale-110 transition-transform duration-300">
                  15% Off
                </span>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                New customers get 15% off their first service. No hidden fees, guaranteed!
              </p>
              <Link
                href="/promotions"
                className="text-green-600 font-semibold hover:text-green-800 flex items-center gap-2 group/link"
              >
                View All Promotions <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        </div>
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">Ready to Improve Your Air Quality?</h2>
          <p className="text-xl text-blue-100 mb-10 animate-fadeInUp">
            Contact us today for a free quote and let our professionals get your ducts and vents cleaned.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-700 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-2xl inline-block transform hover:scale-105 active:scale-95 animate-fadeInUp"
          >
            Get Free Quote Today
          </Link>
        </div>
      </section>
    </div>
  );
}
