'use client';

import { Check, Wind, Zap, Shield, AlertCircle } from 'lucide-react';

export default function Services() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold mb-4 heading-reveal">Our Services</h1>
          <p className="text-xl text-blue-100">
            Comprehensive cleaning solutions for healthier indoor air
          </p>
        </div>
      </section>

      {/* AC Duct Cleaning */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Wind className="text-blue-600" size={32} />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">AC Duct Cleaning</h2>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Over time, your air conditioning ducts accumulate dust, allergens, pet dander, and other contaminants. Our professional AC duct cleaning service removes these particles, improving air quality and system efficiency.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Benefits:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Improved air quality and reduced allergens',
                  'Enhanced HVAC system efficiency',
                  'Lower energy bills',
                  'Extended system lifespan',
                  'Elimination of musty odors',
                  'Reduced dust in your home'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Process:</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                  <span>Inspection of your entire duct system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
                  <span>Professional cleaning with state-of-the-art equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
                  <span>Sanitization to eliminate bacteria and mold</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
                  <span>Final inspection and testing</span>
                </li>
              </ol>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
              <div className="bg-white rounded-lg p-6 shadow-lg mb-4">
                <h4 className="text-lg font-bold text-blue-600 mb-4">Service Includes:</h4>
                <ul className="space-y-3">
                  {[
                    'Supply duct cleaning',
                    'Return air duct cleaning',
                    'Main trunk line cleaning',
                    'Furnace/AC unit inspection',
                    'Accessibility vent cleaning',
                    'Deodorization'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <Check className="text-green-600" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-bold text-blue-600 mb-2">Frequency:</h4>
                <p className="text-gray-700 mb-4">
                  We recommend professional duct cleaning every 3-5 years, or more frequently if you have pets or allergies.
                </p>
                <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>💡 Tip:</strong> Replace your HVAC filters monthly for optimal system performance between cleanings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dryer Vent Cleaning */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-8">
                <div className="bg-white rounded-lg p-6 shadow-lg mb-4">
                  <h4 className="text-lg font-bold text-orange-600 mb-4">⚠️ Safety Alert:</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Clogged dryer vents are the leading cause of home dryer fires. Professional cleaning is essential for safety.
                  </p>
                  <div className="bg-red-100 border-l-4 border-red-600 p-3 rounded text-sm text-gray-700">
                    The NFPA estimates nearly 15,000 home fires annually are caused by dryer fires.
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-orange-600 mb-4">Signs You Need Service:</h4>
                  <ul className="space-y-2">
                    {[
                      'Clothes take longer to dry',
                      'Dryer gets extremely hot',
                      'Visible lint around vent area',
                      'Burning smell during operation',
                      'Humidity buildup in laundry room'
                    ].map((sign, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                        <AlertCircle className="text-red-600" size={16} />
                        {sign}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Zap className="text-orange-600" size={32} />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Dryer Vent Cleaning</h2>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Lint accumulation in dryer vents is a serious fire hazard. Our professional cleaning service removes blockages, improves dryer efficiency, and keeps your home safe.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Benefits:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Prevents dryer fires and safety hazards',
                  'Reduces drying time significantly',
                  'Lowers energy costs',
                  'Extends dryer lifespan',
                  'Eliminates moisture buildup',
                  'Improves home safety'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Process:</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-600 flex-shrink-0">1.</span>
                  <span>Complete vent system inspection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-600 flex-shrink-0">2.</span>
                  <span>Professional lint removal and vacuuming</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-600 flex-shrink-0">3.</span>
                  <span>Vent line clearing and cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-600 flex-shrink-0">4.</span>
                  <span>Performance testing and verification</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Chimney Cleaning */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Shield className="text-red-600" size={32} />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Chimney Cleaning</h2>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Regular chimney cleaning is essential for safe fireplace and wood stove operation. Creosote buildup can lead to dangerous fires. Our certified professionals provide comprehensive chimney maintenance.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Benefits:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Prevents dangerous chimney fires',
                  'Improves draft and heating efficiency',
                  'Removes creosote and blockages',
                  'Reduces smoke and odors',
                  'Ensures safe operation',
                  'Extends chimney lifespan'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Process:</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-red-600 flex-shrink-0">1.</span>
                  <span>Professional chimney inspection and camera inspection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-red-600 flex-shrink-0">2.</span>
                  <span>Creosote removal with specialized brushes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-red-600 flex-shrink-0">3.</span>
                  <span>Chimney sweep and debris removal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-red-600 flex-shrink-0">4.</span>
                  <span>Final inspection and safety certification</span>
                </li>
              </ol>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-8">
              <div className="bg-white rounded-lg p-6 shadow-lg mb-4">
                <h4 className="text-lg font-bold text-red-600 mb-4">Service Includes:</h4>
                <ul className="space-y-3">
                  {[
                    'Creosote removal',
                    'Blockage clearing',
                    'Chimney sweep',
                    'Damper inspection',
                    'Cap inspection',
                    'Flue inspection',
                    'Safety certification'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <Check className="text-green-600" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-bold text-red-600 mb-2">Frequency:</h4>
                <p className="text-gray-700 mb-4">
                  We recommend professional chimney cleaning annually before fireplace season, or more frequently if used regularly.
                </p>
                <div className="bg-red-100 border-l-4 border-red-600 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>🔥 Safety Tip:</strong> Never use your fireplace without annual professional inspection and cleaning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">All Services at a Glance</h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow rounded-lg">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 text-left">Service</th>
                  <th className="p-4 text-left">Frequency</th>
                  <th className="p-4 text-left">Time Required</th>
                  <th className="p-4 text-left">Starting Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold text-blue-600">AC Duct Cleaning</td>
                  <td className="p-4 text-blue-600">Every 3-5 years</td>
                  <td className="p-4 text-blue-600">2-4 hours</td>
                  <td className="p-4 text-blue-600 font-bold">$299</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold text-blue-600">Dryer Vent Cleaning</td>
                  <td className="p-4 text-blue-600">Annually</td>
                  <td className="p-4 text-blue-600">1-2 hours</td>
                  <td className="p-4 text-blue-600 font-bold">$149</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-blue-600">Chimney Cleaning</td>
                  <td className="p-4 text-blue-600">Annually</td>
                  <td className="p-4 text-blue-600">1-2 hours</td>
                  <td className="p-4 text-blue-600 font-bold">$199</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded">
            <p className="text-gray-700">
              <strong>💰 Special Offers:</strong> Combo packages available! Get 20% off when booking 2 or more services. Contact us for a custom quote.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
