'use client';

import { Briefcase, MapPin, DollarSign, Heart } from 'lucide-react';

export default function Careers() {
  const jobListings = [
    {
      id: 1,
      title: 'HVAC Duct Cleaning Technician',
      type: 'Full-Time',
      location: 'Metro Area',
      salary: '$45,000 - $65,000/year',
      description: 'Experienced technician needed for residential and commercial duct cleaning services.',
      requirements: [
        '2+ years of HVAC experience',
        'Valid driver\'s license',
        'Physical ability to work at heights',
        'Customer service skills',
        'Technical aptitude'
      ]
    },
    {
      id: 2,
      title: 'Dryer Vent Specialist',
      type: 'Full-Time',
      location: 'Metro Area',
      salary: '$40,000 - $55,000/year',
      description: 'Help homeowners prevent dryer fires with professional vent cleaning services.',
      requirements: [
        '1+ year of relevant experience',
        'Knowledge of dryer systems',
        'Physical fitness',
        'Safety consciousness',
        'Problem-solving skills'
      ]
    },
    {
      id: 3,
      title: 'Chimney Sweep',
      type: 'Full-Time',
      location: 'Various',
      salary: '$42,000 - $60,000/year',
      description: 'Professional chimney cleaning and maintenance specialist for residential properties.',
      requirements: [
        'Chimney cleaning certification preferred',
        '1+ year of chimney experience',
        'Fear of heights management ability',
        'Detail-oriented',
        'Safety certified'
      ]
    },
    {
      id: 4,
      title: 'Customer Service Representative',
      type: 'Full-Time',
      location: 'Office',
      salary: '$35,000 - $45,000/year',
      description: 'Handle customer inquiries, scheduling, and support via phone and email.',
      requirements: [
        'Excellent communication skills',
        'Phone etiquette',
        'Computer proficiency',
        '1+ year of customer service',
        'Problem-solving ability'
      ]
    },
    {
      id: 5,
      title: 'Scheduler/Dispatcher',
      type: 'Full-Time',
      location: 'Office',
      salary: '$38,000 - $50,000/year',
      description: 'Coordinate technician schedules and ensure optimal service delivery.',
      requirements: [
        'Organizational skills',
        'Computer skills',
        'Communication abilities',
        'Attention to detail',
        'Multitasking capability'
      ]
    },
    {
      id: 6,
      title: 'Sales Representative',
      type: 'Full-Time/Commission',
      location: 'Field-Based',
      salary: '$35,000 - $75,000+/year',
      description: 'Generate new business and manage customer relationships for service contracts.',
      requirements: [
        '2+ years of sales experience',
        'Networking skills',
        'Product knowledge eagerness',
        'Driving ability',
        'Target-oriented mindset'
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold mb-4 heading-reveal">Join Our Team</h1>
          <p className="text-xl text-blue-100">
            Build a rewarding career with ProDuct Clean
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl text-black font-bold text-center mb-12">Why Work With Us?</h2>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Heart className="mx-auto text-red-600 mb-4" size={48} />
              <h3 className="text-2xl text-black font-bold mb-3">Great Culture</h3>
              <p className="text-gray-600">
                We value our team members and foster a supportive, professional work environment.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <DollarSign className="mx-auto text-green-600 mb-4" size={48} />
              <h3 className="text-2xl text-black font-bold mb-3">Competitive Pay</h3>
              <p className="text-gray-600">
                Competitive salaries, bonuses, and commission opportunities based on performance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Briefcase className="mx-auto text-blue-600 mb-4" size={48} />
              <h3 className="text-2xl text-black font-bold mb-3">Growth Opportunities</h3>
              <p className="text-gray-600">
                Advancement paths and professional development training programs available.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <MapPin className="mx-auto text-orange-600 mb-4" size={48} />
              <h3 className="text-2xl text-black font-bold mb-3">Flexible Schedules</h3>
              <p className="text-gray-600">
                Work-life balance with flexible scheduling options for many positions.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Benefits Package</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Health Insurance
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Dental & Vision Coverage
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> 401(k) Retirement Plan
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Paid Time Off
                </li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Ongoing Training
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Equipment Provided
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Vehicle/Gas Allowance
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Bonuses & Incentives
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-black text-center mb-4">Current Openings</h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            {jobListings.length} positions available
          </p>

          <div className="space-y-6">
            {jobListings.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1 bg-blue-100 px-3 py-1 rounded-full">
                        <Briefcase size={14} />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1 bg-orange-100 px-3 py-1 rounded-full">
                        <DollarSign size={14} />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition whitespace-nowrap">
                    Apply Now
                  </button>
                </div>

                <p className="text-gray-700 mb-6">{job.description}</p>

                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl text-black font-bold text-center mb-12">How to Apply</h2>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              {
                step: '1',
                title: 'Submit Application',
                desc: 'Click "Apply Now" and fill out the online application form with your information.'
              },
              {
                step: '2',
                title: 'Phone Interview',
                desc: 'We\'ll call to learn more about you and discuss the position details.'
              },
              {
                step: '3',
                title: 'In-Person Interview',
                desc: 'Meet with our team for a more in-depth discussion and to see our operations.'
              },
              {
                step: '4',
                title: 'Job Offer',
                desc: 'If selected, we\'ll extend an offer and get you started on your new career.'
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg text-black font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-600 text-center">
            <p className="text-gray-700 text-lg">
              <strong>Questions about a position?</strong> Contact our HR team at <strong>careers@productclean.com</strong> or call <strong>(555) 123-4567</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Internship Program */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl text-black font-bold text-center mb-12">Internship Program</h2>

          <div className="bg-white rounded-lg shadow-lg p-12">
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              We're proud to offer an internship program for students interested in learning about the duct cleaning and maintenance industry. Interns gain valuable hands-on experience while working alongside our experienced professionals.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Program Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Hands-on training
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Professional mentoring
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Competitive stipend
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    College credit available
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Flexible scheduling
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Internship Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Currently enrolled in college/university
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Strong work ethic
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Valid driver's license
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Physical capability
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Background check required
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center pt-4 border-t-2">
              <p className="text-gray-700 mb-4">
                Interested in our internship program? Email us today!
              </p>
              <a
                href="mailto:careers@productclean.com"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition inline-block"
              >
                Apply for Internship
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Join */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Career?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Take the next step and apply for one of our exciting opportunities today!
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition">
            View All Jobs
          </button>
        </div>
      </section>
    </div>
  );
}
