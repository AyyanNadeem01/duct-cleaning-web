'use client';

import { Gift, TrendingDown, Clock, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function Promotions() {
  const promotions = [
    {
      id: 1,
      title: 'First-Time Customer Special',
      discount: '15% OFF',
      description: 'New customers receive 15% off any service',
      details: [
        'Valid for first-time customers only',
        'Applies to any service',
        'No hidden fees or charges',
        'Must mention when booking'
      ],
      icon: '🎉',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 2,
      title: 'Service Bundle Deal',
      discount: '20% OFF',
      description: 'Book 2 or more services together',
      details: [
        'AC Duct + Dryer Vent: Save $100+',
        'All 3 services: Save $200+',
        'Valid on same visit or separate dates',
        'Stackable with other promotions'
      ],
      icon: '📦',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      title: 'Senior & Military Discount',
      discount: '10% OFF',
      description: 'Special rates for seniors and military personnel',
      details: [
        'Valid for 65+ years old',
        'Applies to active/retired military',
        'Available year-round',
        'Must provide valid ID'
      ],
      icon: '🪖',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'Spring Cleaning Special',
      discount: '17% OFF',
      description: 'Perfect time to refresh your ducts',
      details: [
        'March through May offer',
        'AC Duct Cleaning special pricing',
        'Prepare for summer cooling season',
        'Early booking discount available'
      ],
      icon: '🌸',
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 5,
      title: 'Fall Maintenance Package',
      discount: '18% OFF',
      description: 'Chimney & heating prep for fall/winter',
      details: [
        'September through October offer',
        'Chimney Cleaning + HVAC combo',
        'Get ready for heating season',
        'Emergency prep discount'
      ],
      icon: '🍂',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 6,
      title: 'Referral Reward Program',
      discount: '$50 CREDIT',
      description: 'Earn credits for each successful referral',
      details: [
        'Refer a friend, get $50 credit',
        'Friend receives 10% discount',
        'Unlimited referrals allowed',
        'Credits never expire'
      ],
      icon: '👥',
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold mb-4 flex items-center gap-3 heading-reveal">
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
          <h2 className="text-4xl text-black font-bold text-center mb-4">Current Promotions</h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Take advantage of these limited-time offers
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promotions.map((promo) => (
              <div
                key={promo.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105"
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${promo.color} text-white p-6`}>
                  <div className="text-4xl mb-2">{promo.icon}</div>
                  <h3 className="text-2xl font-bold mb-1">{promo.title}</h3>
                  <p className="text-blue-100 text-sm">{promo.description}</p>
                </div>

                {/* Discount Badge */}
                <div className="px-6 py-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-b-2 border-dashed border-orange-300">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-orange-600">{promo.discount}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {promo.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span className="text-green-600 font-bold mt-1">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Claim Offer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Deals */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl text-black font-bold text-center mb-12">Best Value Combo Deals</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border-2 border-blue-600">
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Duo Package</h3>
              <p className="text-gray-700 mb-6 text-lg">
                AC Duct Cleaning + Dryer Vent Cleaning
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-2 border-b-2 border-blue-200">
                  <span className="text-gray-700">Regular Price:</span>
                  <span className="text-2xl font-bold text-gray-700">$448</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b-2 border-blue-200">
                  <span className="text-gray-700">Combo Price:</span>
                  <span className="text-3xl font-bold text-blue-600">$359</span>
                </div>
                <div className="flex justify-between items-center bg-green-100 p-3 rounded-lg">
                  <span className="font-bold text-green-700">You Save:</span>
                  <span className="text-2xl font-bold text-green-700">$89 (20%)</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition mb-4">
                Select Duo Package
              </button>

              <p className="text-gray-600 text-sm text-center">
                Limited time offer • Valid for new and existing customers
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8 border-2 border-purple-600">
              <h3 className="text-3xl font-bold text-purple-600 mb-4">Triple Package</h3>
              <p className="text-gray-700 mb-6 text-lg">
                AC Duct + Dryer Vent + Chimney Cleaning
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-2 border-b-2 border-purple-200">
                  <span className="text-gray-700">Regular Price:</span>
                  <span className="text-2xl font-bold text-gray-700">$647</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b-2 border-purple-200">
                  <span className="text-gray-700">Combo Price:</span>
                  <span className="text-3xl font-bold text-purple-600">$485</span>
                </div>
                <div className="flex justify-between items-center bg-green-100 p-3 rounded-lg">
                  <span className="font-bold text-green-700">You Save:</span>
                  <span className="text-2xl font-bold text-green-700">$162 (25%)</span>
                </div>
              </div>

              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition mb-4">
                Select Triple Package
              </button>

              <p className="text-gray-600 text-sm text-center">
                Best value available • Most popular choice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Promotions */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl text-black font-bold text-center mb-12">How to Use Your Promotion</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl text-blue-400 font-bold mb-4">Choose Your Offer</h3>
              <p className="text-gray-600">
                Select the promotion that best fits your needs from our current offers.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl text-blue-400 font-bold mb-4">Contact Us</h3>
              <p className="text-gray-600">
                Call us at (555) 123-4567 or fill out the contact form with your promotion code.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl text-blue-400 font-bold mb-4">Enjoy Savings</h3>
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
          <h2 className="text-3xl text-black font-bold mb-8">Promotion Terms & Conditions</h2>

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

          <form className=" bg-white flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-800 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-bold transition"
            >
              Subscribe
            </button>
          </form>

          <p className="text-blue-100 text-sm mt-4">
            We promise not to spam. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Ready to Book */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Save?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't miss out on these incredible offers. Contact us today to claim your discount!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition text-center"
            >
              Book Now
            </Link>
            <a
              href="tel:(555)123-4567"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition text-center"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
