'use client';

import { useEffect, useState } from 'react';
import { Wind } from 'lucide-react';

interface Service {
  _id: string;
  name: string;
  slug: string;
  summary: string;
  content: string;
  price?: string;
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('/api/services');
        const data = await res.json();
        setServices(data.data || []);
      } catch (err) {
        console.error('Failed to fetch services:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold mb-4 heading-reveal">Our Services</h1>
          <p className="text-xl text-blue-100">
            Comprehensive cleaning solutions for healthier indoor air
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          {loading ? (
            <div className="text-center py-12 text-gray-600">Loading services...</div>
          ) : services.length === 0 ? (
            <div className="text-center py-12 text-gray-600">
              No services available yet. Check back soon!
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service._id}
                  className="bg-linear-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <div className="bg-linear-to-r from-blue-500 to-blue-600 p-6">
                    <div className="flex items-center gap-3">
                      <Wind className="text-white" size={32} />
                      <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 text-sm">{service.summary}</p>
                    {service.content && (
                      <p className="text-gray-600 text-xs mb-4 line-clamp-3">
                        {service.content}
                      </p>
                    )}
                    {service.price && (
                      <div className="mb-4 p-3 bg-white rounded border-l-4 border-blue-600">
                        <p className="text-lg font-bold text-blue-600">{service.price}</p>
                      </div>
                    )}
                    <a
                      href="/contact"
                      className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition"
                    >
                      Get Service
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="container mx-auto max-w-6xl text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Breathe Cleaner Air?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free consultation and quote
          </p>
          <a
            href="/contact"
            className="inline-block bg-white hover:bg-blue-50 text-blue-600 font-bold py-3 px-8 rounded-lg transition"
          >
            Schedule Service Today
          </a>
        </div>
      </section>
    </div>
  );
}
