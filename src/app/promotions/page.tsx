'use client';

import { useState, useEffect } from 'react';
import { Gift } from 'lucide-react';
import Link from 'next/link';
import { useCompanyData } from '@/lib/use-company';
interface Promotion {
  _id: string;
  title: string;
  summary: string;
  startsAt?: string;
  endsAt?: string;
  active: boolean;
}

export default function Promotions() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const {company }= useCompanyData();
  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const res = await fetch('/api/promotions');
        if (!res.ok) throw new Error('Failed to fetch promotions');
        const data = await res.json();
        setPromotions(data.data || []);
      } catch (err) {
        console.error('Failed to fetch promotions:', err);
        setError('Unable to load promotions');
      } finally {
        setLoading(false);
      }
    };

    fetchPromotions();
  }, []);

  const isPromotionActive = (promo: Promotion) => {
    if (!promo.active) return false;
    
    const now = new Date();
    
    if (promo.startsAt) {
      const start = new Date(promo.startsAt);
      if (now < start) return false;
    }
    
    if (promo.endsAt) {
      const end = new Date(promo.endsAt);
      if (now > end) return false;
    }
    
    return true;
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    }
  };

  // Filter to show only active promotions
  const activePromotions = promotions.filter(p => isPromotionActive(p));

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold mb-4 flex items-center gap-3">
            <Gift size={48} />
            Special Offers & Promotions
          </h1>
          <p className="text-xl text-blue-100">
            Save money on professional duct cleaning services
          </p>
        </div>
      </section>

      {/* Current Promotions */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl text-gray-900 font-bold text-center mb-4">Current Promotions</h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Take advantage of these limited-time offers
          </p>

          {loading && (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading promotions...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {!loading && activePromotions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No promotions available at this time. Check back soon for new offers!</p>
            </div>
          )}

          {!loading && activePromotions.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activePromotions.map((promo, index) => {
                const colors = [
                  'from-green-500 to-green-600',
                  'from-blue-500 to-blue-600',
                  'from-purple-500 to-purple-600',
                  'from-pink-500 to-pink-600',
                  'from-orange-500 to-orange-600',
                  'from-cyan-500 to-cyan-600'
                ];
                const color = colors[index % colors.length];

                return (
                  <div
                    key={promo._id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105"
                  >
                    {/* Header with gradient */}
                    <div className={`bg-gradient-to-r ${color} text-white p-6`}>
                      <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                      {promo.summary && (
                        <p className="text-white text-opacity-90 text-sm">{promo.summary}</p>
                      )}
                    </div>

                    {/* Special Offer Badge */}
                    <div className="px-6 py-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-b-2 border-dashed border-orange-300">
                      <div className="text-center">
                        <span className="text-3xl font-bold text-orange-600">
                          Limited Time Offer
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-6">
                      {(promo.startsAt || promo.endsAt) && (
                        <div className="text-xs text-gray-500 mb-4 space-y-1">
                          {promo.startsAt && (
                            <p>
                              <strong>Starts:</strong> {formatDate(promo.startsAt)}
                            </p>
                          )}
                          {promo.endsAt && (
                            <p>
                              <strong>Ends:</strong> {formatDate(promo.endsAt)}
                            </p>
                          )}
                          <p>
                            <strong>Status:</strong>{' '}
                            <span className="text-green-600 font-semibold">Active Now</span>
                          </p>
                        </div>
                      )}

                      <Link
                        href="/contact"
                        className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
                      >
                        Claim This Offer
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* How to Use Promotions */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl text-gray-900 font-bold text-center mb-12">How to Use Your Promotion</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl text-gray-900 font-bold mb-4">Choose Your Offer</h3>
              <p className="text-gray-600">
                Select the promotion that best fits your needs from our current offers.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl text-gray-900 font-bold mb-4">Contact Us</h3>
              <p className="text-gray-600">
                Call us at (555) 123-4567 or fill out the contact form to book your service.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl text-gray-900 font-bold mb-4">Enjoy Savings</h3>
              <p className="text-gray-600">
                Discount is applied to your invoice. Our team will confirm all promotion details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl text-gray-900 font-bold mb-8">Promotion Terms & Conditions</h2>

          <div className="bg-gray-100 rounded-lg p-8 space-y-4 text-gray-700">
            <p>
              ✓ Promotions are valid for new and returning customers unless otherwise stated<br />
              ✓ Discounts cannot be combined unless explicitly stated<br />
              ✓ Offer must be mentioned at time of booking<br />
              ✓ Prices subject to change without notice<br />
              ✓ Promotions may be withdrawn at any time<br />
              ✓ Valid on residential and commercial services<br />
              ✓ Additional fees may apply for emergency or same-day services<br />
              ✓ Service areas and scheduling may affect eligibility
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-4">Get Exclusive Offers</h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for exclusive discounts and promotional alerts
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              onClick={handleSubscribe}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-bold transition"
            >
              Subscribe
            </button>
          </div>

          <p className="text-blue-100 text-sm mt-4">
            We promise not to spam. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Ready to Book */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Save?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Don&apos;t miss out on these incredible offers. Contact us today to claim your discount!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition text-center"
            >
              Book Now
            </Link>
            <a
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition text-center"
            >
              {company?.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
}