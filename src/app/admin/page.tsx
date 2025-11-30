'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';

interface Stats {
  services: number;
  promotions: number;
  coverage: number;
  careers: number;
  contacts: number;
}

export default function AdminDashboard() {
  const { token } = useAuth();
  const [stats, setStats] = useState<Stats>({
    services: 0,
    promotions: 0,
    coverage: 0,
    careers: 0,
    contacts: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    const fetchStats = async () => {
      try {
        const [services, promotions, coverage, careers, contacts] = await Promise.all([
          fetch('/api/services').then((r) => r.json()),
          fetch('/api/promotions').then((r) => r.json()),
          fetch('/api/coverage').then((r) => r.json()),
          fetch('/api/careers').then((r) => r.json()),
          fetch('/api/contact-submissions').then((r) => r.json()),
        ]);

        setStats({
          services: services.data?.length || 0,
          promotions: promotions.data?.length || 0,
          coverage: coverage.data?.length || 0,
          careers: careers.data?.length || 0,
          contacts: contacts.data?.length || 0,
        });
      } catch (err) {
        console.error('Failed to fetch stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [token]);

  const statCards = [
    { label: 'Services', value: stats.services, icon: '🔧', color: 'blue' },
    { label: 'Promotions', value: stats.promotions, icon: '🎯', color: 'purple' },
    { label: 'Coverage Areas', value: stats.coverage, icon: '📍', color: 'green' },
    { label: 'Careers', value: stats.careers, icon: '💼', color: 'orange' },
    { label: 'Contact Submissions', value: stats.contacts, icon: '📧', color: 'red' },
  ];

  const colorMap: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-700',
    purple: 'bg-purple-100 text-purple-700',
    green: 'bg-green-100 text-green-700',
    orange: 'bg-orange-100 text-orange-700',
    red: 'bg-red-100 text-red-700',
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {statCards.map((card) => (
            <div
              key={card.label}
              className={`${colorMap[card.color]} p-6 rounded-lg shadow-md`}
            >
              <div className="text-3xl mb-2">{card.icon}</div>
              <div className="text-2xl font-bold">{card.value}</div>
              <div className="text-sm opacity-75">{card.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Welcome to the Admin Dashboard</h2>
        <p className="text-gray-600 mb-4">
          Use the sidebar to navigate to different sections and manage your ProDuct Clean business
          data. You can create, edit, and delete content from here.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <p className="text-sm text-blue-700">
            💡 <strong>Tip:</strong> Start by updating the About section with your company
            information, then add services, promotions, and career opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
