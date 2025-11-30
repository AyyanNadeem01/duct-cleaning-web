'use client';

import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';

interface CoverageArea {
  _id: string;
  areaName: string;
  description?: string;
}

export default function Coverage() {
  const [areas, setAreas] = useState<CoverageArea[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const res = await fetch('/api/coverage');
        const data = await res.json();
        setAreas(data.data || []);
      } catch (err) {
        console.error('Failed to fetch coverage areas:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAreas();
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold mb-4 heading-reveal">Our Service Coverage Areas</h1>
          <p className="text-xl text-blue-100">
            Serving a wide range of residential and commercial properties
          </p>
        </div>
      </section>

      {/* Main Coverage Info */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          {loading ? (
            <div className="text-center py-12 text-gray-600">Loading coverage areas...</div>
          ) : areas.length === 0 ? (
            <div className="text-center py-12 text-gray-600">
              No coverage areas listed yet. Contact us for service availability!
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area) => (
                <div
                  key={area._id}
                  className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-500 transition"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="text-blue-600" size={28} />
                    <h3 className="text-2xl font-bold text-gray-900">{area.areaName}</h3>
                  </div>
                  {area.description && (
                    <p className="text-gray-700">{area.description}</p>
                  )}
                  <a
                    href="/contact"
                    className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
                  >
                    Request Service
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Don&apos;t see your area?</h2>
          <p className="text-xl text-gray-700 mb-8">
            We&apos;re constantly expanding! Contact us to discuss service availability in your location.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
