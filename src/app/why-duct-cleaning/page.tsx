'use client';

import { Heart, Home, DollarSign, AlertTriangle, CheckCircle } from 'lucide-react';

export default function WhyDuctCleaning() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold mb-4 heading-reveal">Why Duct Cleaning Matters</h1>
          <p className="text-xl text-blue-100">
            Discover the health, safety, and financial benefits of professional duct cleaning
          </p>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Health & Air Quality Benefits</h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
            Americans spend about 90% of their time indoors, making indoor air quality crucial for health
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Contaminants in Dirty Ducts</h3>
              <ul className="space-y-4">
                {[
                  { icon: '🦠', text: 'Bacteria and viruses that cause illness' },
                  { icon: '💨', text: 'Dust mites and their allergens' },
                  { icon: '🐾', text: 'Pet dander and hair' },
                  { icon: '🍃', text: 'Pollen and outdoor allergens' },
                  { icon: '⚫', text: 'Mold spores and mildew' },
                  { icon: '🚬', text: 'Smoke particles and odors' },
                  { icon: '🧬', text: 'Dead skin cells' },
                  { icon: '🛢️', text: 'Chemical residues' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-600 mb-6">Health Benefits of Clean Ducts</h3>
              <ul className="space-y-4">
                {[
                  'Reduced allergies and allergy symptoms',
                  'Fewer respiratory infections',
                  'Relief from asthma triggers',
                  'Better sleep quality',
                  'Improved overall indoor air quality',
                  'Reduced headaches and fatigue',
                  'Lower risk of serious illness',
                  'Healthier environment for children and elderly'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits Most */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl text-black font-bold text-center mb-12">Who Benefits Most from Duct Cleaning?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
              <div className="flex items-start gap-3 mb-4">
                <Heart className="text-red-600 flex-shrink-0" size={28} />
                <h3 className="text-2xl text-black font-bold">People with Allergies</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                If you or family members suffer from allergies, asthma, or respiratory issues, clean ducts can significantly reduce symptoms and medication needs. Dust and allergens circulate through your home every time the HVAC system runs.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
              <div className="flex items-start gap-3 mb-4">
                <Home className="text-blue-600 flex-shrink-0" size={28} />
                <h3 className="text-2xl text-black font-bold">Pet Owners</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Pet hair and dander accumulate heavily in ducts. Even with regular pet grooming, these particles settle in your HVAC system and circulate throughout your home, causing odors and allergies.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="text-orange-600 flex-shrink-0" size={28} />
                <h3 className="text-2xl text-black font-bold">Recent Renovations</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Home renovations, construction, or painting projects create dust that gets drawn into your ducts. Professional cleaning removes construction debris and dust for a cleaner home.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
              <div className="flex items-start gap-3 mb-4">
                <DollarSign className="text-green-600 flex-shrink-0" size={28} />
                <h3 className="text-2xl text-black font-bold">New Homeowners</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                You never know what's in the ducts of a newly purchased home. Professional cleaning provides peace of mind and ensures your family starts with clean air.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Efficiency */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl text-black font-bold text-center mb-12">Energy Efficiency & Cost Savings</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl text-black font-bold mb-6">How Clean Ducts Save Money</h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                When your ducts accumulate dust and debris, your HVAC system has to work harder to push air through. This increases energy consumption and your utility bills.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-600 mb-2">💡 Energy Savings</h4>
                  <p className="text-gray-700">
                    Clean ducts improve system efficiency by 15-25%, reducing your monthly energy bills.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-600 mb-2">🔧 Extended Equipment Life</h4>
                  <p className="text-gray-700">
                    Your HVAC system lasts longer when it doesn't have to work as hard, saving you thousands in replacement costs.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold text-orange-600 mb-2">📊 Lower Maintenance</h4>
                  <p className="text-gray-700">
                    Clean systems require fewer repairs and maintenance visits throughout the year.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-bold text-red-600 mb-2">⚡ Reduced Peak Demand</h4>
                  <p className="text-gray-700">
                    Your system doesn't need to run as long or as often, reducing peak energy usage.
                  </p>
                </div>
              </div>

              <div className="bg-blue-600 text-white p-6 rounded-lg">
                <p className="text-lg">
                  <strong>Average Savings:</strong> Many homeowners save $100-$300 per year on energy bills after duct cleaning.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-12">
              <h4 className="text-2xl font-bold text-blue-600 mb-8">Energy Impact Summary</h4>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700">System Efficiency</span>
                    <span className="text-blue-600 font-bold">+15-25%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700">Energy Savings</span>
                    <span className="text-green-600 font-bold">15-25%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700">Equipment Lifespan</span>
                    <span className="text-orange-600 font-bold">+5-10 years</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700">Maintenance Issues</span>
                    <span className="text-red-600 font-bold">-50%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Concerns */}
      <section className="py-16 px-4 bg-red-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl text-black font-bold text-center mb-12">Safety Concerns & Prevention</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-red-600">
              <h3 className="text-2xl font-bold text-red-600 mb-6">⚠️ Mold Growth Risks</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Moisture in ducts creates the perfect environment for mold growth. Mold spores circulate through your home, causing respiratory issues and serious health problems.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Can trigger asthma attacks
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Weakens immune system
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Creates musty odors
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Damages structural components
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-red-600">
              <h3 className="text-2xl font-bold text-red-600 mb-6">🔥 Fire Risk from Lint</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Dryer vents and HVAC ducts can accumulate lint which is highly flammable. This poses serious fire risks if not professionally cleaned.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  15,000+ home fires annually caused by dryers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Lint buildup reduces safety
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Professional cleaning prevents disasters
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Insurance may not cover fire damage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-blue-700 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Schedule Your Professional Duct Cleaning Today</h2>
          <p className="text-xl text-blue-100 mb-8">
            Improve your home's air quality, boost efficiency, and protect your family's health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
