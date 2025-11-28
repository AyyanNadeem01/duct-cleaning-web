'use client';

import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-4">
            <Shield size={48} />
            <h1 className="text-5xl font-bold heading-reveal">Privacy Policy</h1>
          </div>
          <p className="text-xl text-blue-100">
            Your privacy is important to us
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                ProDuct Clean ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>

            {/* Section 1 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">1. Information We Collect</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div>
                  <h4 className="font-bold mb-2">Personal Information</h4>
                  <p>
                    We may collect personal information you provide directly to us, such as:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Address and zip code</li>
                    <li>Service history and preferences</li>
                    <li>Payment information</li>
                    <li>Messages and communications with our team</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Automatically Collected Information</h4>
                  <p>
                    When you visit our website, we automatically collect certain information:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                    <li>Log data (IP address, browser type, pages visited)</li>
                    <li>Device information (type, operating system)</li>
                    <li>Cookies and similar technologies</li>
                    <li>Website usage patterns</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">2. How We Use Your Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>To provide, maintain, and improve our services</li>
                <li>To process payments and transactions</li>
                <li>To respond to your inquiries and requests</li>
                <li>To send promotional materials and updates (with your consent)</li>
                <li>To detect and prevent fraud</li>
                <li>To comply with legal obligations</li>
                <li>To analyze usage patterns and improve user experience</li>
                <li>To schedule appointments and send service confirmations</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">3. How We Share Your Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information. We may share information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Service Providers:</strong> With contractors who assist us in operating our website and conducting business</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
                <li><strong>Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">4. Data Security</h3>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures designed to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 5 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">5. Your Privacy Rights</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Access:</strong> You can request access to your personal information</li>
                <li><strong>Correction:</strong> You can request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> You can request deletion of your data</li>
                <li><strong>Opt-Out:</strong> You can opt-out of marketing communications</li>
                <li><strong>Portability:</strong> You can request a copy of your data</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at privacy@productclean.com.
              </p>
            </div>

            {/* Section 6 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">6. Cookies and Tracking</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website uses cookies and similar technologies to enhance your experience. Cookies are small files stored on your device. You can control cookie settings through your browser preferences. Disabling cookies may affect some website functionality.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We may also use web analytics tools to track website usage and improve our services.
              </p>
            </div>

            {/* Section 7 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">7. Third-Party Links</h3>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party websites before providing your personal information.
              </p>
            </div>

            {/* Section 8 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">8. Children's Privacy</h3>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete such information promptly.
              </p>
            </div>

            {/* Section 9 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">9. Changes to This Privacy Policy</h3>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a new effective date.
              </p>
            </div>

            {/* Section 10 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">10. Contact Us</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg space-y-2 text-gray-700">
                <p><strong>ProDuct Clean</strong></p>
                <p>Email: <a href="mailto:privacy@productclean.com" className="text-blue-600 hover:underline">privacy@productclean.com</a></p>
                <p>Phone: <a href="tel:(555)123-4567" className="text-blue-600 hover:underline">(555) 123-4567</a></p>
                <p>Address: Available upon request</p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="bg-gray-100 p-6 rounded-lg text-center text-gray-600">
              <p className="text-sm">Last Updated: November 2024</p>
              <p className="text-sm">Effective Date: November 2024</p>
            </div>
          </div>

          {/* Important Notice */}
          <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Important Legal Notice</h3>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy is part of our Terms of Service. By using our website and services, you agree to the collection and use of information as outlined in this policy. If you do not agree with our practices, please do not use our services. We reserve the right to modify this policy at any time, and your continued use of our services following modifications constitutes your acceptance of the updated policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
