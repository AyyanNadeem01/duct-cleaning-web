'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { Trash2, Edit, Plus } from 'lucide-react';

interface Career {
  _id: string;
  title: string;
  location?: string;
  description?: string;
  requirements?: string;
  applyEmail?: string;
}

export default function CareersPage() {
  const { token } = useAuth();
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: '',
    location: '',
    description: '',
    requirements: '',
    applyEmail: '',
  });

  const fetchCareers = async () => {
    try {
      const res = await fetch('/api/careers');
      const data = await res.json();
      setCareers(data.data || []);
    } catch (err) {
      setError('Failed to load careers');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;

    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `/api/careers/${editingId}` : '/api/careers';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to save');
      await fetchCareers();
      setForm({ title: '', location: '', description: '', requirements: '', applyEmail: '' });
      setEditingId(null);
      setShowForm(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error saving career');
    }
  };

  const handleEdit = (career: Career) => {
    setForm({
      title: career.title,
      location: career.location || '',
      description: career.description || '',
      requirements: career.requirements || '',
      applyEmail: career.applyEmail || '',
    });
    setEditingId(career._id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!token || !confirm('Delete this career opening?')) return;

    try {
      const res = await fetch(`/api/careers/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to delete');
      await fetchCareers();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error deleting career');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Careers</h1>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingId(null);
            setForm({ title: '', location: '', description: '', requirements: '', applyEmail: '' });
          }}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          <Plus size={20} />
          Add Opening
        </button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {showForm && (
        <div className="mb-6 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">
            {editingId ? 'Edit Career Opening' : 'New Career Opening'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Job Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
              required
            />
            <input
              type="text"
              placeholder="Location"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
            />
            <input
              type="email"
              placeholder="Apply Email"
              value={form.applyEmail}
              onChange={(e) => setForm({ ...form, applyEmail: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
            />
            <textarea
              placeholder="Job Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
              rows={3}
            />
            <textarea
              placeholder="Requirements"
              value={form.requirements}
              onChange={(e) => setForm({ ...form, requirements: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
              rows={3}
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  setForm({ title: '', location: '', description: '', requirements: '', applyEmail: '' });
                }}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : (
        <div className="grid gap-4">
          {careers.map((career) => (
            <div key={career._id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{career.title}</h3>
                  {career.location && (
                    <p className="text-sm text-gray-500 mb-2">📍 {career.location}</p>
                  )}
                  {career.description && (
                    <p className="text-gray-700 text-sm mb-2">{career.description}</p>
                  )}
                  {career.applyEmail && (
                    <p className="text-xs text-blue-600">Apply: {career.applyEmail}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(career)}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded"
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(career._id)}
                    className="p-2 text-red-600 hover:bg-red-100 rounded"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
