'use client';

import { useEffect, useState } from 'react';
import { Check, Award, Users, MapPin } from 'lucide-react';

interface AboutData {
  title: string;
  body: string;
}

export default function About() {
  const [about, setAbout] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await fetch('/api/about');
        const data = await res.json();
        setAbout(data.data);
      } catch (err) {
        console.error('Failed to fetch about:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold mb-4 heading-reveal">
            {about?.title || 'About ProDuct Clean'}
          </h1>
          <p className="text-xl text-blue-100">
            Serving your community with excellence
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              {loading ? (
                <div className="text-gray-600">Loading about information...</div>
              ) : about ? (
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
                  {about.body}
                </p>
              ) : (
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  ProDuct Clean was founded with a simple mission: to help families and businesses breathe cleaner, healthier air. What started as a small local operation has grown into a trusted name in professional duct cleaning services.
                </p>
              )}
            </div>
            <div className="bg-blue-100 rounded-lg p-12 space-y-6">
              <div>
                <div className="text-4xl font-bold text-blue-600">15+</div>
                <p className="text-gray-700 font-semibold">Years of Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">10,000+</div>
                <p className="text-gray-700 font-semibold">Happy Customers</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">5,000+</div>
                <p className="text-gray-700 font-semibold">Properties Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Core Values</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <Award className="mx-auto text-blue-600 mb-4" size={48} />
              <h3 className="text-xl text-black font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We commit to the highest standards in every job we undertake
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <Users className="mx-auto text-green-600 mb-4" size={48} />
              <h3 className="text-xl text-black font-bold mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction and safety are our top priorities
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <Check className="mx-auto text-yellow-600 mb-4" size={48} />
              <h3 className="text-xl text-black font-bold mb-3">Reliability</h3>
              <p className="text-gray-600">
                We show up on time and deliver results, every single time
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <MapPin className="mx-auto text-red-600 mb-4" size={48} />
              <h3 className="text-xl text-black font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                We&apos;re invested in the health and happiness of our community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Expert Team</h2>

          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Our team consists of certified professionals with extensive training and experience in all aspects of duct cleaning and ventilation services. Every member is background-checked and fully insured.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-linear-to-r from-blue-500 to-blue-600 h-40"></div>
                <div className="p-6 text-center">
                  <h3 className="text-xl text-black font-bold mb-2">Lead Technician</h3>
                  <p className="text-gray-600 mb-4">
                    Certified professional with 10+ years of specialized experience in HVAC and duct cleaning systems.
                  </p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>✓ NADCA Certified</p>
                    <p>✓ EPA Air Quality Certified</p>
                    <p>✓ Fully Insured</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Certifications & Affiliations</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
              <h3 className="text-xl text-black font-bold mb-3 flex items-center gap-2">
                <Check className="text-green-600" size={24} />
                NADCA Certified
              </h3>
              <p className="text-gray-600">
                Member of the National Air Duct Cleaners Association, maintaining the highest industry standards.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600">
              <h3 className="text-xl text-black font-bold mb-3 flex items-center gap-2">
                <Check className="text-green-600" size={24} />
                EPA Certified
              </h3>
              <p className="text-gray-600">
                Licensed and certified by the Environmental Protection Agency for air quality standards.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-600">
              <h3 className="text-xl text-black font-bold mb-3 flex items-center gap-2">
                <Check className="text-green-600" size={24} />
                Fully Insured & Bonded
              </h3>
              <p className="text-gray-600">
                Comprehensive insurance coverage and bonding for complete peace of mind.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-600">
              <h3 className="text-xl text-black font-bold mb-3 flex items-center gap-2">
                <Check className="text-green-600" size={24} />
                BBB Accredited
              </h3>
              <p className="text-gray-600">
                Better Business Bureau accredited with consistent A+ rating and excellent customer reviews.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
