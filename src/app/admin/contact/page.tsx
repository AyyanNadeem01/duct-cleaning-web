'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { Trash2, Mail } from 'lucide-react';

interface ContactSubmission {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: string;
}

export default function ContactPage() {
  const { token } = useAuth();
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchSubmissions = async () => {
    try {
      const res = await fetch('/api/contact-submissions', {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      if (!res.ok) {
        // Fallback if endpoint doesn't exist yet
        setSubmissions([]);
        return;
      }
      const data = await res.json();
      setSubmissions(data.data || []);
    } catch (err) {
      console.error('Failed to load submissions:', err);
      setSubmissions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, [token]);

  const handleDelete = async (id: string) => {
    if (!token || !confirm('Delete this submission?')) return;

    try {
      const res = await fetch(`/api/contact-submissions/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to delete');
      await fetchSubmissions();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error deleting submission');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Submissions</h1>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : submissions.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <p className="text-gray-600">No contact submissions yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {submissions.map((sub) => (
            <div key={sub._id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{sub.name}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(sub.createdAt).toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`mailto:${sub.email}`}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded"
                    title="Send email"
                  >
                    <Mail size={20} />
                  </a>
                  <button
                    onClick={() => handleDelete(sub._id)}
                    className="p-2 text-red-600 hover:bg-red-100 rounded"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Email:</span> {sub.email}
                </p>
                {sub.phone && (
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">Phone:</span> {sub.phone}
                  </p>
                )}
              </div>

              <div className="bg-gray-100 p-4 rounded">
                <p className="text-sm font-semibold text-gray-700 mb-2">Message:</p>
                <p className="text-gray-700 whitespace-pre-wrap">{sub.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
