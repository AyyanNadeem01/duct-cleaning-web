'use client';

import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

export default function Coverage() {
  const regions = [
    {
      title: 'Downtown Metro Area',
      neighborhoods: ['Downtown', 'Riverside', 'Midtown', 'Arts District'],
      description: 'Full coverage with same-day service available'
    },
    {
      title: 'North County',
      neighborhoods: ['Northside', 'Oak Park', 'Forest Hills', 'Greenwood'],
      description: 'Serving residential and commercial properties'
    },
    {
      title: 'South County',
      neighborhoods: ['Southend', 'Meadowbrook', 'Valley View', 'Hillside'],
      description: 'Professional service with flexible scheduling'
    },
    {
      title: 'East Region',
      neighborhoods: ['Eastside', 'Parkside', 'Riverside', 'Lakewood'],
      description: 'Coverage available with advance scheduling'
    },
    {
      title: 'West Suburbs',
      neighborhoods: ['Westwood', 'Oak Valley', 'Sunset Hills', 'Spring Valley'],
      description: 'Suburban service area expansion ongoing'
    },
    {
      title: 'Industrial Areas',
      neighborhoods: ['Commerce Park', 'Business District', 'Tech Park', 'Industrial Plaza'],
      description: 'Commercial and industrial property services'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold mb-4 heading-reveal">Our Service Coverage Areas</h1>
          <p className="text-xl text-blue-100">
            Serving a wide range of residential and commercial properties in the region
          </p>
        </div>
      </section>

      {/* Main Coverage Info */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <MapPin className="mx-auto text-blue-600 mb-4" size={48} />
              <h3 className="text-2xl text-blue-600 font-bold mb-2">Extensive Coverage</h3>
              <p className="text-gray-700">
                We service hundreds of neighborhoods across the metro area and surrounding regions
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-8 text-center">
              <Phone className="mx-auto text-green-600 mb-4" size={48} />
              <h3 className="text-2xl text-blue-600 font-bold mb-2">Quick Response</h3>
              <p className="text-gray-700">
                Same-day appointments available in main service areas and emergency services 24/7
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-8 text-center">
              <CheckCircle className="mx-auto text-orange-600 mb-4" size={48} />
              <h3 className="text-2xl text-blue-600 font-bold mb-2">Service Guarantee</h3>
              <p className="text-gray-700">
                Professional service guaranteed for all properties within our coverage area
              </p>
            </div>
          </div>

          <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
            <p className="text-gray-800 text-lg">
              <strong>📍 Not sure if we service your area?</strong> Give us a call at <strong>(555) 123-4567</strong> or submit your address on our contact page. We're expanding constantly and may be able to help you!
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Regions Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Service Regions & Neighborhoods</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <h3 className="text-2xl text-black font-bold">{region.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{region.description}</p>
                <div className="space-y-2 mb-6 pb-6 border-b">
                  {region.neighborhoods.map((neighborhood, j) => (
                    <p key={j} className="text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      {neighborhood}
                    </p>
                  ))}
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Schedule Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details by Type */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Coverage Details by Service</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-blue-600 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">AC Duct Cleaning</h3>
              <p className="text-gray-700 mb-4">
                Available throughout our entire service area for both residential and commercial properties.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-green-600" size={18} />
                  Single family homes
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-green-600" size={18} />
                  Apartment complexes
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-green-600" size={18} />
                  Commercial buildings
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-green-600" size={18} />
                  Industrial facilities
                </li>
              </ul>
            </div>

            <div className="border-2 border-orange-600 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Dryer Vent Cleaning</h3>
              <p className="text-gray-700 mb-4">
                Emergency services available 24/7 for safety concerns and regular maintenance scheduling.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-green-600" size={18} />
                  Residential dryer vents
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-green-600" size={18} />
                  Laundromat systems
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-green-600" size={18} />
                  Commercial facilities
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-green-600" size={18} />
                  Emergency fire prevention
                </li>
              </ul>
            </div>

            <div className="border-2 border-red-600 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-red-600 mb-6">Chimney Cleaning</h3>
              <p className="text-gray-700 mb-4">
                Specialized service for fireplaces and wood stoves with safety certification.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-green-600" size={18} />
                  Residential chimneys
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-green-600" size={18} />
                  Wood stove chimneys
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-green-600" size={18} />
                  Fireplace systems
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="text-green-600" size={18} />
                  Safety inspections
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Check Coverage */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">How to Check Your Area</h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl text-black font-bold mb-6">Three Easy Ways:</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg mb-2">Visit Our Contact Page</h4>
                    <p className="text-gray-700">
                      Enter your zip code or address to instantly check coverage availability and get a quote.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg mb-2">Call Us Directly</h4>
                    <p className="text-gray-700">
                      Speak with our team at <strong>(555) 123-4567</strong> • Available 24/7 for emergency services.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg mb-2">Email Your Request</h4>
                    <p className="text-gray-700">
                      Send us your address and service request to <strong>info@productclean.com</strong> for a response within 2 hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-50 border-l-4 border-green-600 rounded">
                <p className="text-gray-700">
                  <strong>✓ Good News:</strong> Even if your exact address isn't listed, we likely still service your area. Contact us to confirm!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
