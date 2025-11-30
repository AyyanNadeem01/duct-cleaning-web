'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';

interface About {
  _id?: string;
  title: string;
  body: string;
}

export default function AboutPage() {
  const { token } = useAuth();
  const [about, setAbout] = useState<About | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ title: '', body: '' });
  const [saving, setSaving] = useState(false);

  const fetchAbout = async () => {
    try {
      const res = await fetch('/api/about');
      const data = await res.json();
      const item = data.data || { title: '', body: '' };
      setAbout(item as About);
      setForm({ title: item.title || '', body: item.body || '' });
    } catch (err) {
      setError('Failed to load about info');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;

    setSaving(true);
    try {
      const res = await fetch('/api/about', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to save');
      await fetchAbout();
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error saving');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : (
        <div className="bg-white rounded-lg shadow p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Title
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                placeholder="ProDuct Clean"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                About Description
              </label>
              <textarea
                value={form.body}
                onChange={(e) => setForm({ ...form, body: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                placeholder="Write your company's about section here..."
                rows={8}
              />
              <p className="text-xs text-gray-500 mt-1">
                Use this area to describe your company, mission, values, and what makes you unique.
              </p>
            </div>

            <button
              type="submit"
              disabled={saving}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
