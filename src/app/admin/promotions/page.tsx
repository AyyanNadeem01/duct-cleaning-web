'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { Trash2, Edit, Plus } from 'lucide-react';

interface Promotion {
  _id: string;
  title: string;
  summary: string;
  startsAt?: string;
  endsAt?: string;
  active: boolean;
}

export default function PromotionsPage() {
  const { token } = useAuth();
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: '',
    summary: '',
    startsAt: '',
    endsAt: '',
    active: true,
  });

  const fetchPromotions = async () => {
    try {
      const res = await fetch('/api/promotions');
      const data = await res.json();
      setPromotions(data.data || []);
    } catch (err) {
      setError('Failed to load promotions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPromotions();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;

    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `/api/promotions/${editingId}` : '/api/promotions';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...form,
          startsAt: form.startsAt ? new Date(form.startsAt).toISOString() : undefined,
          endsAt: form.endsAt ? new Date(form.endsAt).toISOString() : undefined,
        }),
      });

      if (!res.ok) throw new Error('Failed to save');
      await fetchPromotions();
      setForm({ title: '', summary: '', startsAt: '', endsAt: '', active: true });
      setEditingId(null);
      setShowForm(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error saving promotion');
    }
  };

  const handleEdit = (promo: Promotion) => {
    setForm({
      title: promo.title,
      summary: promo.summary,
      startsAt: promo.startsAt ? new Date(promo.startsAt).toISOString().split('T')[0] : '',
      endsAt: promo.endsAt ? new Date(promo.endsAt).toISOString().split('T')[0] : '',
      active: promo.active,
    });
    setEditingId(promo._id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!token || !confirm('Delete this promotion?')) return;

    try {
      const res = await fetch(`/api/promotions/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to delete');
      await fetchPromotions();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error deleting promotion');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Promotions</h1>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingId(null);
            setForm({ title: '', summary: '', startsAt: '', endsAt: '', active: true });
          }}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          <Plus size={20} />
          Add Promotion
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
            {editingId ? 'Edit Promotion' : 'New Promotion'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Promotion Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
              required
            />
            <textarea
              placeholder="Summary"
              value={form.summary}
              onChange={(e) => setForm({ ...form, summary: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
              rows={2}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  value={form.startsAt}
                  onChange={(e) => setForm({ ...form, startsAt: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  value={form.endsAt}
                  onChange={(e) => setForm({ ...form, endsAt: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                />
              </div>
            </div>
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                checked={form.active}
                onChange={(e) => setForm({ ...form, active: e.target.checked })}
                className="w-4 h-4"
              />
              Active
            </label>
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
                  setForm({ title: '', summary: '', startsAt: '', endsAt: '', active: true });
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
          {promotions.map((promo) => (
            <div key={promo._id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{promo.title}</h3>
                  <p className="text-gray-700 text-sm mb-2">{promo.summary}</p>
                  <div className="flex gap-4 text-xs text-gray-500">
                    {promo.startsAt && (
                      <span>Starts: {new Date(promo.startsAt).toLocaleDateString()}</span>
                    )}
                    {promo.endsAt && (
                      <span>Ends: {new Date(promo.endsAt).toLocaleDateString()}</span>
                    )}
                  </div>
                  <span
                    className={`mt-2 inline-block px-2 py-1 text-xs rounded ${
                      promo.active
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {promo.active ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(promo)}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded"
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(promo._id)}
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
