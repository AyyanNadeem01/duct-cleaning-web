'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { Save, Loader } from 'lucide-react';

interface CompanyData {
  companyName: string;
  tagline?: string;
  description?: string;
  phone: string;
  email: string;
  emergencyPhone?: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  serviceArea?: string[];
  businessHours?: Record<string, { open: string; close: string }>;
  socialLinks?: Record<string, string>;
  established?: number;
  taxId?: string;
  licenseNumber?: string;
  insuranceProvider?: string;
}

export default function AdminCompanyInfo() {
  const { token, isAuthenticated } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [company, setCompany] = useState<CompanyData>({
    companyName: '',
    tagline: '',
    description: '',
    phone: '',
    email: '',
    emergencyPhone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    serviceArea: [],
    businessHours: {
      monday: { open: '9:00 AM', close: '5:00 PM' },
      tuesday: { open: '9:00 AM', close: '5:00 PM' },
      wednesday: { open: '9:00 AM', close: '5:00 PM' },
      thursday: { open: '9:00 AM', close: '5:00 PM' },
      friday: { open: '9:00 AM', close: '5:00 PM' },
      saturday: { open: '10:00 AM', close: '3:00 PM' },
      sunday: { open: 'Closed', close: 'Closed' },
    },
    socialLinks: {
      facebook: '',
      instagram: '',
      twitter: '',
      linkedin: '',
    },
  });

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin-login');
      return;
    }

    const fetchCompany = async () => {
      try {
        const res = await fetch('/api/company');
        if (res.ok) {
          const data = await res.json();
          setCompany(data.data);
        }
      } catch (err) {
        console.error('Failed to fetch company info:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, [isAuthenticated, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCompany((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBusinessHourChange = (
    day: string,
    field: 'open' | 'close',
    value: string
  ) => {
    setCompany((prev) => ({
      ...prev,
      businessHours: {
        ...prev.businessHours,
        [day]: {
          open: prev.businessHours?.[day]?.open || '',
          close: prev.businessHours?.[day]?.close || '',
          [field]: value,
        },
      },
    } as CompanyData));
  };

  const handleSocialLinkChange = (platform: string, value: string) => {
    setCompany((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/company', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(company),
      });

      if (!res.ok) throw new Error('Failed to save company info');

      setSuccess('Company information updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error saving company info');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="animate-spin" size={48} />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-black">Company Information</h1>

      {success && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
          {success}
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-black">Basic Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Company Name *</label>
              <input
                type="text"
                name="companyName"
                value={company.companyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Tagline</label>
              <input
                type="text"
                name="tagline"
                value={company.tagline || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">Description</label>
              <textarea
                name="description"
                value={company.description || ''}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black resize-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Established Year</label>
              <input
                type="number"
                name="established"
                value={company.established || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-black">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={company.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={company.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Emergency Phone</label>
              <input
                type="tel"
                name="emergencyPhone"
                value={company.emergencyPhone || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-black">Address</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">Street Address *</label>
              <input
                type="text"
                name="address"
                value={company.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">City *</label>
              <input
                type="text"
                name="city"
                value={company.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">State *</label>
              <input
                type="text"
                name="state"
                value={company.state}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Zip Code *</label>
              <input
                type="text"
                name="zipCode"
                value={company.zipCode}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
              />
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-black">Business Hours</h2>
          <div className="space-y-4">
            {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(
              (day) => (
                <div key={day} className="grid md:grid-cols-3 gap-4 items-center">
                  <label className="text-gray-700 font-semibold capitalize">{day}</label>
                  <input
                    type="text"
                    value={company.businessHours?.[day as keyof typeof company.businessHours]?.open || ''}
                    onChange={(e) =>
                      handleBusinessHourChange(
                        day as keyof CompanyData['businessHours'],
                        'open',
                        e.target.value
                      )
                    }
                    placeholder="Opening time"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
                  />
                  <input
                    type="text"
                    value={company.businessHours?.[day as keyof typeof company.businessHours]?.close || ''}
                    onChange={(e) =>
                      handleBusinessHourChange(
                        day as keyof CompanyData['businessHours'],
                        'close',
                        e.target.value
                      )
                    }
                    placeholder="Closing time"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-black">Social Media</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {['facebook', 'instagram', 'twitter', 'linkedin'].map((platform) => (
              <div key={platform}>
                <label className="block text-gray-700 font-semibold mb-2 capitalize">{platform}</label>
                <input
                  type="url"
                  value={company.socialLinks?.[platform as keyof typeof company.socialLinks] || ''}
                  onChange={(e) => handleSocialLinkChange(platform, e.target.value)}
                  placeholder={`https://${platform}.com/yourpage`}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
                />
              </div>
            ))}
          </div>
        </div>

        {/* License & Tax Info */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-black">License & Tax Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">License Number</label>
              <input
                type="text"
                name="licenseNumber"
                value={company.licenseNumber || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Tax ID</label>
              <input
                type="text"
                name="taxId"
                value={company.taxId || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Insurance Provider</label>
              <input
                type="text"
                name="insuranceProvider"
                value={company.insuranceProvider || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-black"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={saving}
          className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save size={20} />
          {saving ? 'Saving...' : 'Save Company Information'}
        </button>
      </form>
    </div>
  );
}
