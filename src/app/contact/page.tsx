'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to submit form');
      
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error submitting form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold mb-4 heading-reveal">Contact Us</h1>
          <p className="text-xl text-blue-100">
            Get your free quote or reach out with any questions
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-600 text-center">
              <Phone className="mx-auto text-blue-600 mb-4" size={48} />
              <h3 className="text-black text-2xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600 mb-4 text-lg">
                <a href="tel:(555)123-4567" className="text-blue-600 font-semibold hover:underline">
                  (555) 123-4567
                </a>
              </p>
              <p className="text-gray-600 text-sm">
                Available 24/7 for emergency services<br />
                Mon-Fri: 7am-8pm | Sat-Sun: 8am-6pm
              </p>
            </div>


            {/* Email */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-600 text-center">
              <Mail className="mx-auto text-green-600 mb-4" size={48} />
              <h3 className="text-black text-2xl font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-4 text-lg">
                <a href="mailto:info@productclean.com" className="text-blue-600 font-semibold hover:underline">
                  info@productclean.com
                </a>
              </p>
              <p className="text-gray-600 text-sm">
                Response within 24 hours
              </p>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-orange-600 text-center">
              <MapPin className="mx-auto text-orange-600 mb-4" size={48} />
              <h3 className="text-black text-2xl font-bold mb-2">Location</h3>
              <p className="text-gray-600 text-sm">
                Serving multiple regions<br />
                Check coverage areas for details
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl text-black font-bold mb-6">Send us a Message</h2>

              {success && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
                  Thank you! Your message has been sent. We&apos;ll contact you shortly.
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded">
                  {error}
                </div>
              )}              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
                    placeholder="John Smith"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 resize-none text-black"
                    placeholder="Tell us about your cleaning needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-gray-600 text-sm text-center">
                  * Required fields. We&apos;ll respond within 2 hours during business hours.
                </p>
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                  <Clock size={28} />
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">7:00 AM - 8:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">8:00 AM - 5:00 PM</span>
                  </p>
                  <div className="mt-4 pt-4 border-t-2 border-blue-200">
                    <p className="font-bold text-red-600">
                      Emergency Services: Available 24/7
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-8 border-l-4 border-green-600">
                <h3 className="text-2xl font-bold text-green-600 mb-4">Response Times</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                    <span>Online form: Response within 2 hours</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                    <span>Phone call: Immediate assistance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                    <span>Email: Response within 24 hours</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                    <span>Same-day service: Available Mon-Sat</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-8 border-l-4 border-orange-600">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">What to Expect</h3>
                <ol className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-orange-600 shrink-0">1.</span>
                    <span>Quick response to your inquiry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-orange-600 shrink-0">2.</span>
                    <span>Free quote with no obligation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-orange-600 shrink-0">3.</span>
                    <span>Flexible scheduling options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-orange-600 shrink-0">4.</span>
                    <span>Professional service delivery</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Verification */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-blue-100 border-l-4 border-blue-600 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">
              Not sure if we service your area?
            </h3>
            <p className="text-gray-700 mb-4">
              Use the zip code field in our contact form to verify coverage, or call us directly.
            </p>
            <a
              href="tel:(555)123-4567"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
